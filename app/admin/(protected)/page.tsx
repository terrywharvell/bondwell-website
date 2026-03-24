export default function AdminHomePage() {
  return (
    <main className="min-h-screen bg-[#FCFAF7] px-6 py-10 text-[#2F2A26]">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-[#E9DED2] bg-white p-8 shadow-[0_16px_50px_rgba(47,42,38,0.08)] md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#8A7460]">
              BondWell Admin
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#2F2A26]">
              Admin area shell is ready
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5A514A]">
              This first step protects the admin area with a password-only login.
              Next we can wire in the waitlist count and newest emails first,
              without disturbing the public website.
            </p>
          </div>

          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="rounded-full border border-[#DCCFC1] px-5 py-2.5 text-sm font-medium text-[#2F2A26] transition hover:bg-[#FAF7F2]"
            >
              Sign out
            </button>
          </form>
        </div>

        <div className="mt-8 rounded-[2rem] border border-dashed border-[#E4D8CA] bg-[#FFFCF8] p-8">
          <h2 className="text-lg font-semibold text-[#2F2A26]">Next admin step</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5A514A]">
            Connect this page to Supabase and show the waitlist total and email
            list, newest signups first.
          </p>
        </div>
      </div>
    </main>
  );
}
