import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete your Oleni account",
  description:
    "How to delete your Oleni account and associated app data, including the in-app account deletion path and support contact details.",
  alternates: {
    canonical: "/delete-account",
  },
};

const sectionTitle = "text-2xl font-semibold tracking-tight text-[#2F2A26]";
const bodyText = "mt-4 text-base leading-8 text-[#5A514A]";
const focusVisibleClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b77a8] focus-visible:ring-offset-2";

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-white text-[#2F2A26]">
      <div className="border-b border-[#F0E8DE] bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className={`text-sm font-medium text-[#5A514A] hover:text-[#2F2A26] ${focusVisibleClass}`}
          >
            ← Back to Oleni
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] text-[#8A7460]">
            Account deletion
          </span>
        </div>
      </div>

      <section className="bg-[#FCFAF7]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
              Oleni account
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2F2A26] md:text-5xl">
              Delete your Oleni account
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5A514A]">
              You can delete your Oleni account and associated app data from inside the app. This page explains where to find the deletion option and how to contact us if you need help.
            </p>
            <p className="mt-4 text-sm text-[#7A6F66]">Last updated: April 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl space-y-12 px-6 py-14 md:py-16">
          <section>
            <h2 className={sectionTitle}>How to delete your account in the Oleni app</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-[#5A514A]">
              <p>Open Oleni and go to:</p>
              <ol className="list-decimal space-y-2 pl-6 font-medium text-[#2F2A26]">
                <li>Settings</li>
                <li>Account</li>
                <li>Delete Oleni account</li>
              </ol>
              <p>
                Follow the on-screen confirmation steps to delete your Oleni account from the app.
              </p>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>What is deleted</h2>
            <p className={bodyText}>
              Deleting your Oleni account deletes your Oleni account and associated app data connected to that account, including linked support data used by Oleni to provide the app experience.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>What may be retained</h2>
            <p className={bodyText}>
              Some limited records may be retained only where required for security, legal, fraud-prevention, payment, or operational reasons. Google Play subscription records are managed by Google Play and may be handled separately from Oleni account deletion.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Subscriptions</h2>
            <p className={bodyText}>
              If you have Oleni Premium through Google Play, deleting your Oleni account does not automatically cancel your Google Play subscription. To manage or cancel a subscription, open Google Play subscriptions from your Google Play account or use the Manage subscription option inside Oleni Settings.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>Need help?</h2>
            <p className={bodyText}>
              If you need help deleting your account or have questions about your information, email <a href="mailto:hello@oleni.app" className={`underline ${focusVisibleClass}`}>hello@oleni.app</a>.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
