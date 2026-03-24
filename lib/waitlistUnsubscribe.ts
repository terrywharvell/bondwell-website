import "server-only";
import { randomBytes } from "crypto";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bondwell.co.uk";

export function createUnsubscribeToken() {
  return randomBytes(24).toString("hex");
}

export function buildUnsubscribeUrl(token: string) {
  const url = new URL("/unsubscribe", SITE_URL);
  url.searchParams.set("token", token);
  return url.toString();
}

export function getWaitlistSupabaseConfig() {
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

export function getWaitlistSupabaseHeaders(serviceRoleKey: string, prefer?: string) {
  return {
    "Content-Type": "application/json",
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    ...(prefer ? { Prefer: prefer } : {}),
  };
}

export async function findWaitlistEntryByToken(token: string) {
  const config = getWaitlistSupabaseConfig();

  if (!config) {
    throw new Error("Server is missing Supabase environment variables.");
  }

  const { supabaseUrl, serviceRoleKey } = config;
  const params = new URLSearchParams({
    select: "id,email,unsubscribed_at",
    unsubscribe_token: `eq.${token}`,
    limit: "1",
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/waitlist?${params.toString()}`, {
    headers: getWaitlistSupabaseHeaders(serviceRoleKey),
    cache: "no-store",
  });

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(
      `Could not load unsubscribe record: ${response.status} ${responseText}`
    );
  }

  const rows = (await response.json()) as Array<{
    id: number | string;
    email: string;
    unsubscribed_at?: string | null;
  }>;

  return rows[0] || null;
}

export async function markWaitlistEntryUnsubscribed(token: string) {
  const config = getWaitlistSupabaseConfig();

  if (!config) {
    throw new Error("Server is missing Supabase environment variables.");
  }

  const existing = await findWaitlistEntryByToken(token);

  if (!existing) {
    return { status: "invalid" as const, email: null };
  }

  if (existing.unsubscribed_at) {
    return { status: "already" as const, email: existing.email };
  }

  const { supabaseUrl, serviceRoleKey } = config;
  const response = await fetch(
    `${supabaseUrl}/rest/v1/waitlist?unsubscribe_token=eq.${token}`,
    {
      method: "PATCH",
      headers: getWaitlistSupabaseHeaders(serviceRoleKey, "return=representation"),
      body: JSON.stringify({ unsubscribed_at: new Date().toISOString() }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(
      `Could not unsubscribe waitlist entry: ${response.status} ${responseText}`
    );
  }

  return { status: "success" as const, email: existing.email };
}
