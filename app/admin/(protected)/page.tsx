import { getAdminWaitlistData } from "@/lib/adminWaitlist";

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

export default async function AdminHomePage() {
  const { totalCount, entries, error } = await getAdminWaitlistData();

  return (
    <main className="min-h-screen bg-[#FCFAF7] px-6 py-10 text-[#2F2A26]">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-[#E9DED2] bg-white p-8 shadow-[0_16px_50px_rgba(47,42,38,0.08)] md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#8A7460]">
              BondWell Admin
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#2F2A26]">
              Waitlist overview
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5A514A]">
              A simple first admin view for the BondWell launch list. This shows
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
              Live total from the waitlist table.
            </p>
          </section>

          <section className="rounded-[2rem] border border-[#E9DED2] bg-white p-7 shadow-[0_16px_50px_rgba(47,42,38,0.06)]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#8A7460]">
                  Latest emails
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#2F2A26]">
                  Newest signups first
                </h2>
              </div>
              <p className="text-sm text-[#8A7460]">
                Showing up to the latest {entries.length} signups
              </p>
            </div>

            {error ? (
              <div className="mt-6 rounded-[1.5rem] border border-[#E7D6C7] bg-[#FFF8F2] px-5 py-4 text-sm leading-6 text-[#7A4E30]">
                {error}
              </div>
            ) : entries.length === 0 ? (
              <div className="mt-6 rounded-[1.5rem] border border-dashed border-[#E4D8CA] bg-[#FFFCF8] px-5 py-8 text-sm leading-6 text-[#5A514A]">
                No waitlist emails found yet.
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
