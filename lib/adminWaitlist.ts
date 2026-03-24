import "server-only";

export type AdminWaitlistEntry = {
  id: number | string;
  email: string;
  created_at?: string | null;
  time?: string | null;
};

export type AdminWaitlistData = {
  totalCount: number;
  filteredCount: number;
  entries: AdminWaitlistEntry[];
  error: string | null;
  searchQuery: string;
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

function normalizeSearchQuery(value?: string) {
  return (value || "").trim().slice(0, 120);
}

function buildWaitlistParams(options?: {
  select?: string;
  limit?: number;
  searchQuery?: string;
}) {
  const params = new URLSearchParams({
    select: options?.select || "id,email,created_at,time",
    order: "created_at.desc",
  });

  if (typeof options?.limit === "number") {
    params.set("limit", String(options.limit));
  }

  const searchQuery = normalizeSearchQuery(options?.searchQuery)
    .replace(/[*,]/g, "")
    .trim();

  if (searchQuery) {
    params.set("email", `ilike.*${searchQuery}*`);
  }

  return {
    params,
    searchQuery,
  };
}

async function fetchWaitlistEntries(options?: {
  limit?: number;
  searchQuery?: string;
}): Promise<AdminWaitlistEntry[]> {
  const config = getSupabaseConfig();

  if (!config) {
    throw new Error("Supabase environment variables are missing for admin waitlist access.");
  }

  const { supabaseUrl, serviceRoleKey } = config;
  const { params } = buildWaitlistParams({
    limit: options?.limit,
    searchQuery: options?.searchQuery,
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/waitlist?${params.toString()}`, {
    headers: getHeaders(serviceRoleKey),
    cache: "no-store",
  });

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(
      `Could not load waitlist entries: ${response.status} ${responseText}`
    );
  }

  return (await response.json()) as AdminWaitlistEntry[];
}

async function fetchWaitlistCount(searchQuery?: string) {
  const config = getSupabaseConfig();

  if (!config) {
    throw new Error("Supabase environment variables are missing for admin waitlist access.");
  }

  const { supabaseUrl, serviceRoleKey } = config;
  const { params } = buildWaitlistParams({
    select: "id",
    searchQuery,
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/waitlist?${params.toString()}`, {
    method: "HEAD",
    headers: getHeaders(serviceRoleKey, "count=exact"),
    cache: "no-store",
  });

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(
      `Could not load waitlist count: ${response.status} ${responseText}`
    );
  }

  return parseContentRangeCount(response.headers.get("content-range"));
}

export async function getAdminWaitlistData(searchQuery?: string): Promise<AdminWaitlistData> {
  const config = getSupabaseConfig();
  const normalizedSearchQuery = normalizeSearchQuery(searchQuery);

  if (!config) {
    return {
      totalCount: 0,
      filteredCount: 0,
      entries: [],
      error: "Supabase environment variables are missing for admin waitlist access.",
      searchQuery: normalizedSearchQuery,
    };
  }

  try {
    const [totalCount, filteredCount, entries] = await Promise.all([
      fetchWaitlistCount(),
      fetchWaitlistCount(normalizedSearchQuery),
      fetchWaitlistEntries({ limit: 250, searchQuery: normalizedSearchQuery }),
    ]);

    return {
      totalCount,
      filteredCount,
      entries,
      error: null,
      searchQuery: normalizedSearchQuery,
    };
  } catch (error) {
    console.error("Admin waitlist load error", error);

    return {
      totalCount: 0,
      filteredCount: 0,
      entries: [],
      error: error instanceof Error ? error.message : "Could not load waitlist.",
      searchQuery: normalizedSearchQuery,
    };
  }
}

export async function getAdminWaitlistExportEntries() {
  return fetchWaitlistEntries();
}
