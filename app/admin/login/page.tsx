import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { isAdminAuthenticated, isAdminEnvConfigured } from "@/lib/adminAuth";

export const metadata: Metadata = {
  title: "Admin login",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: null,
  },
};

type LoginPageProps = {
  searchParams?: Promise<{
    error?: string;
  }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const authenticated = await isAdminAuthenticated();

  if (authenticated) {
    redirect("/admin");
  }

  const params = searchParams ? await searchParams : undefined;
  const error = params?.error;
  const envConfigured = isAdminEnvConfigured();

  const helperMessage = !envConfigured
    ? "Admin login is not configured yet. Add ADMIN_PASSWORD and ADMIN_SESSION_SECRET in Vercel before using this page."
    : error === "invalid"
      ? "That password did not match. Please try again."
      : error === "config"
        ? "Admin login is not configured yet. Add the admin environment variables and try again."
        : "Enter the admin password to access the updates area.";

  return (
    <main className="min-h-screen bg-[#FCFAF7] px-6 py-10 text-[#2F2A26]">
      <div className="mx-auto max-w-md rounded-[2rem] border border-[#E9DED2] bg-white p-8 shadow-[0_16px_50px_rgba(47,42,38,0.08)]">
        <p className="text-xs uppercase tracking-[0.22em] text-[#8A7460]">
          Oleni Admin
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#2F2A26]">
          Sign in
        </h1>
        <p className="mt-4 text-sm leading-7 text-[#5A514A]">{helperMessage}</p>

        <form action="/api/admin/login" method="POST" className="mt-8 space-y-4">
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#2F2A26]">
              Admin password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full rounded-2xl border border-[#DCCFC1] bg-[#FCFAF7] px-4 py-3 text-base text-[#2F2A26] outline-none transition focus:border-[#8A7460]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#2F2A26] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}
