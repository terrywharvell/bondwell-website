import { getAdminWaitlistData } from "@/lib/adminWaitlist";

type AdminHomePageProps = {
  searchParams?: Promise<{
    q?: string | string[];
  }>;
};

function formatSignupTime(value?: string | null) {
  if (!value) {
    return "Time not available";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Time not available";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function getSearchValue(value?: string | string[]) {
  if (Array.isArray(value)) {
    return value[0] || "";
  }

  return value || "";
}

function getResultsLabel(filteredCount: number, shownCount: number, searchQuery: string) {
  if (searchQuery) {
    if (filteredCount > shownCount) {
      return `Showing the first ${shownCount} matches for “${searchQuery}”`;
    }

    return `Showing ${filteredCount} match${filteredCount === 1 ? "" : "es"} for “${searchQuery}”`;
  }

  if (filteredCount > shownCount) {
    return `Showing the latest ${shownCount} of ${filteredCount} signups`;
  }

  return `Showing all ${filteredCount} signup${filteredCount === 1 ? "" : "s"}`;
}

export default async function AdminHomePage({ searchParams }: AdminHomePageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const rawSearchQuery = getSearchValue(resolvedSearchParams.q);
  const { totalCount, filteredCount, entries, error, searchQuery } =
    await getAdminWaitlistData(rawSearchQuery);

  return (
    <main className="min-h-screen bg-[#FCFAF7] px-6 py-10 text-[#2F2A26]">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-[#E9DED2] bg-white p-8 shadow-[0_16px_50px_rgba(47,42,38,0.08)] md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#8A7460]">
              Oleni Admin
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#2F2A26]">
              Waitlist overview
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5A514A]">
              A simple first admin view for the Oleni updates list. This shows
              the total count and the newest signups first, without touching the
              public website flow.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/api/admin/export"
              className="rounded-full border border-[#DCCFC1] px-5 py-2.5 text-sm font-medium text-[#2F2A26] transition hover:bg-[#FAF7F2]"
            >
              Export CSV
            </a>
            <form action="/api/admin/logout" method="POST">
              <button
                type="submit"
                className="rounded-full border border-[#DCCFC1] px-5 py-2.5 text-sm font-medium text-[#2F2A26] transition hover:bg-[#FAF7F2]"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[220px_1fr]">
          <section className="rounded-[2rem] border border-[#E9DED2] bg-white p-7 shadow-[0_16px_50px_rgba(47,42,38,0.06)]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#8A7460]">
              Total signups
            </p>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-[#2F2A26]">
              {totalCount}
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5A514A]">
              Live total from the updates table.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[#E9DED2] bg-white p-7 shadow-[0_16px_50px_rgba(47,42,38,0.06)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#8A7460]">
                  Waitlist search
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#2F2A26]">
                  Find emails quickly
                </h2>
              </div>
              <form action="/admin" method="GET" className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  name="q"
                  defaultValue={searchQuery}
                  placeholder="Search by email"
                  className="min-w-0 flex-1 rounded-full border border-[#DCCFC1] bg-[#FFFCF8] px-4 py-2.5 text-sm text-[#2F2A26] outline-none transition placeholder:text-[#9B8773] focus:border-[#CBB7A2]"
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="rounded-full border border-[#DCCFC1] px-5 py-2.5 text-sm font-medium text-[#2F2A26] transition hover:bg-[#FAF7F2]"
                  >
                    Search
                  </button>
                  {searchQuery ? (
                    <a
                      href="/admin"
                      className="rounded-full border border-[#E7D6C7] px-5 py-2.5 text-sm font-medium text-[#5A514A] transition hover:bg-[#FFFCF8]"
                    >
                      Clear
                    </a>
                  ) : null}
                </div>
              </form>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#8A7460]">
                  Latest emails
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#2F2A26]">
                  Newest signups first
                </h3>
              </div>
              <p className="text-sm text-[#8A7460]">
                {getResultsLabel(filteredCount, entries.length, searchQuery)}
              </p>
            </div>

            {error ? (
              <div className="mt-6 rounded-[1.5rem] border border-[#E7D6C7] bg-[#FFF8F2] px-5 py-4 text-sm leading-6 text-[#7A4E30]">
                {error}
              </div>
            ) : entries.length === 0 ? (
              <div className="mt-6 rounded-[1.5rem] border border-dashed border-[#E4D8CA] bg-[#FFFCF8] px-5 py-8 text-sm leading-6 text-[#5A514A]">
                {searchQuery
                  ? `No updates emails matched “${searchQuery}”.`
                  : "No updates emails found yet."}
              </div>
            ) : (
              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#EEE5DB]">
                <div className="grid grid-cols-[minmax(0,1fr)_180px] gap-4 bg-[#FAF7F2] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#8A7460]">
                  <span>Email</span>
                  <span>Joined</span>
                </div>
                <div className="divide-y divide-[#F0E7DD] bg-white">
                  {entries.map((entry) => (
                    <div
                      key={`${entry.id}-${entry.email}`}
                      className="grid grid-cols-[minmax(0,1fr)_180px] gap-4 px-5 py-4 text-sm text-[#2F2A26]"
                    >
                      <span className="break-all font-medium">{entry.email}</span>
                      <span className="text-[#5A514A]">
                        {formatSignupTime(entry.created_at || entry.time)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
