import "server-only";
import { randomBytes } from "crypto";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bondwell.co.uk";

type WaitlistSupabaseConfig = {
  supabaseUrl: string;
  serviceRoleKey: string;
};

type ActiveWaitlistEntry = {
  id: number | string;
  email: string;
  unsubscribe_token: string | null;
};

type SuppressedWaitlistEntry = {
  id: number | string;
  email: string;
  unsubscribe_token: string;
  unsubscribed_at: string | null;
};

export function createUnsubscribeToken() {
  return randomBytes(24).toString("hex");
}

export function buildUnsubscribeUrl(token: string) {
  const url = new URL("/unsubscribe", SITE_URL);
  url.searchParams.set("token", token);
  return url.toString();
}

export function getWaitlistSupabaseConfig(): WaitlistSupabaseConfig | null {
  const supabaseUrl =
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return {
    supabaseUrl,
    serviceRoleKey,
  };
}

export function getWaitlistSupabaseHeaders(
  serviceRoleKey: string,
  prefer?: string
) {
  return {
    "Content-Type": "application/json",
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    ...(prefer ? { Prefer: prefer } : {}),
  };
}

async function readJsonResponse<T>(response: Response, label: string): Promise<T> {
  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(`${label}: ${response.status} ${responseText}`);
  }

  return (await response.json()) as T;
}

export async function findActiveWaitlistEntryByEmail(email: string) {
  const config = getWaitlistSupabaseConfig();

  if (!config) {
    throw new Error("Server is missing Supabase environment variables.");
  }

  const { supabaseUrl, serviceRoleKey } = config;
  const params = new URLSearchParams({
    select: "id,email,unsubscribe_token",
    email: `eq.${email}`,
    limit: "1",
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/waitlist?${params.toString()}`, {
    headers: getWaitlistSupabaseHeaders(serviceRoleKey),
    cache: "no-store",
  });

  const rows = await readJsonResponse<ActiveWaitlistEntry[]>(
    response,
    "Could not load active waitlist entry"
  );

  return rows[0] || null;
}

export async function removeWaitlistSuppressionByEmail(email: string) {
  const config = getWaitlistSupabaseConfig();

  if (!config) {
    throw new Error("Server is missing Supabase environment variables.");
  }

  const { supabaseUrl, serviceRoleKey } = config;
  const response = await fetch(
    `${supabaseUrl}/rest/v1/waitlist_suppression?email=eq.${encodeURIComponent(email)}`,
    {
      method: "DELETE",
      headers: getWaitlistSupabaseHeaders(serviceRoleKey),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(
      `Could not clear waitlist suppression: ${response.status} ${responseText}`
    );
  }
}

export async function findActiveWaitlistEntryByToken(token: string) {
  const config = getWaitlistSupabaseConfig();

  if (!config) {
    throw new Error("Server is missing Supabase environment variables.");
  }

  const { supabaseUrl, serviceRoleKey } = config;
  const params = new URLSearchParams({
    select: "id,email,unsubscribe_token",
    unsubscribe_token: `eq.${token}`,
    limit: "1",
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/waitlist?${params.toString()}`, {
    headers: getWaitlistSupabaseHeaders(serviceRoleKey),
    cache: "no-store",
  });

  const rows = await readJsonResponse<ActiveWaitlistEntry[]>(
    response,
    "Could not load waitlist unsubscribe record"
  );

  return rows[0] || null;
}

export async function findSuppressedWaitlistEntryByToken(token: string) {
  const config = getWaitlistSupabaseConfig();

  if (!config) {
    throw new Error("Server is missing Supabase environment variables.");
  }

  const { supabaseUrl, serviceRoleKey } = config;
  const params = new URLSearchParams({
    select: "id,email,unsubscribe_token,unsubscribed_at",
    unsubscribe_token: `eq.${token}`,
    limit: "1",
  });

  const response = await fetch(
    `${supabaseUrl}/rest/v1/waitlist_suppression?${params.toString()}`,
    {
      headers: getWaitlistSupabaseHeaders(serviceRoleKey),
      cache: "no-store",
    }
  );

  const rows = await readJsonResponse<SuppressedWaitlistEntry[]>(
    response,
    "Could not load suppressed waitlist record"
  );

  return rows[0] || null;
}

export async function findWaitlistEntryByToken(token: string) {
  const activeEntry = await findActiveWaitlistEntryByToken(token);

  if (activeEntry) {
    return {
      state: "active" as const,
      email: activeEntry.email,
      unsubscribe_token: activeEntry.unsubscribe_token,
      unsubscribed_at: null,
    };
  }

  const suppressedEntry = await findSuppressedWaitlistEntryByToken(token);

  if (suppressedEntry) {
    return {
      state: "suppressed" as const,
      email: suppressedEntry.email,
      unsubscribe_token: suppressedEntry.unsubscribe_token,
      unsubscribed_at: suppressedEntry.unsubscribed_at,
    };
  }

  return null;
}

async function upsertWaitlistSuppression(email: string, token: string) {
  const config = getWaitlistSupabaseConfig();

  if (!config) {
    throw new Error("Server is missing Supabase environment variables.");
  }

  const { supabaseUrl, serviceRoleKey } = config;
  const response = await fetch(
    `${supabaseUrl}/rest/v1/waitlist_suppression?on_conflict=email`,
    {
      method: "POST",
      headers: {
        ...getWaitlistSupabaseHeaders(
          serviceRoleKey,
          "resolution=merge-duplicates,return=representation"
        ),
      },
      body: JSON.stringify([
        {
          email,
          unsubscribe_token: token,
          unsubscribed_at: new Date().toISOString(),
        },
      ]),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(
      `Could not save waitlist suppression: ${response.status} ${responseText}`
    );
  }
}

async function deleteActiveWaitlistEntryByToken(token: string) {
  const config = getWaitlistSupabaseConfig();

  if (!config) {
    throw new Error("Server is missing Supabase environment variables.");
  }

  const { supabaseUrl, serviceRoleKey } = config;
  const response = await fetch(
    `${supabaseUrl}/rest/v1/waitlist?unsubscribe_token=eq.${token}`,
    {
      method: "DELETE",
      headers: getWaitlistSupabaseHeaders(serviceRoleKey),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(
      `Could not remove waitlist entry after unsubscribe: ${response.status} ${responseText}`
    );
  }
}

export async function markWaitlistEntryUnsubscribed(token: string) {
  const activeEntry = await findActiveWaitlistEntryByToken(token);

  if (!activeEntry) {
    const suppressedEntry = await findSuppressedWaitlistEntryByToken(token);

    if (suppressedEntry) {
      return { status: "already" as const, email: suppressedEntry.email };
    }

    return { status: "invalid" as const, email: null };
  }

  await upsertWaitlistSuppression(activeEntry.email, token);
  await deleteActiveWaitlistEntryByToken(token);

  return { status: "success" as const, email: activeEntry.email };
}
