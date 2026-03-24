import "server-only";

export type AdminWaitlistEntry = {
  id: number | string;
  email: string;
  created_at?: string | null;
  time?: string | null;
};

export type AdminWaitlistData = {
  totalCount: number;
  entries: AdminWaitlistEntry[];
  error: string | null;
};

function getSupabaseConfig() {
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

function getHeaders(serviceRoleKey: string, prefer?: string) {
  return {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    ...(prefer ? { Prefer: prefer } : {}),
  };
}

function parseContentRangeCount(contentRange: string | null) {
  if (!contentRange) {
    return 0;
  }

  const total = contentRange.split("/")[1];

  if (!total) {
    return 0;
  }

  const parsed = Number(total);
  return Number.isFinite(parsed) ? parsed : 0;
}

export async function getAdminWaitlistData(): Promise<AdminWaitlistData> {
  const config = getSupabaseConfig();

  if (!config) {
    return {
      totalCount: 0,
      entries: [],
      error: "Supabase environment variables are missing for admin waitlist access.",
    };
  }

  const { supabaseUrl, serviceRoleKey } = config;
  const baseUrl = `${supabaseUrl}/rest/v1/waitlist`;

  try {
    const [countResponse, entriesResponse] = await Promise.all([
      fetch(`${baseUrl}?select=id`, {
        method: "HEAD",
        headers: getHeaders(serviceRoleKey, "count=exact"),
        cache: "no-store",
      }),
      fetch(
        `${baseUrl}?select=id,email,created_at,time&order=created_at.desc&limit=250`,
        {
          headers: getHeaders(serviceRoleKey),
          cache: "no-store",
        }
      ),
    ]);

    if (!countResponse.ok) {
      const countError = await countResponse.text();
      throw new Error(
        `Could not load waitlist count: ${countResponse.status} ${countError}`
      );
    }

    if (!entriesResponse.ok) {
      const entriesError = await entriesResponse.text();
      throw new Error(
        `Could not load waitlist entries: ${entriesResponse.status} ${entriesError}`
      );
    }

    const totalCount = parseContentRangeCount(
      countResponse.headers.get("content-range")
    );

    const entries = (await entriesResponse.json()) as AdminWaitlistEntry[];

    return {
      totalCount,
      entries,
      error: null,
    };
  } catch (error) {
    console.error("Admin waitlist load error", error);

    return {
      totalCount: 0,
      entries: [],
      error: error instanceof Error ? error.message : "Could not load waitlist.",
    };
  }
}
