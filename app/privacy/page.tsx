import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Oleni Privacy Policy covering what information we collect, how it is used, what may be shared with a linked partner or carer, and the choices available to the person using Oleni.",
  alternates: {
    canonical: "/privacy",
  },
};

const sectionTitle = "text-2xl font-semibold tracking-tight text-[#2F2A26]";
const bodyText = "mt-4 text-base leading-8 text-[#5A514A]";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-[#2F2A26]">
      <div className="border-b border-[#F0E8DE] bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-medium text-[#5A514A] hover:text-[#2F2A26]">
            ← Back to Oleni
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] text-[#8A7460]">Privacy Policy</span>
        </div>
      </div>

      <section className="bg-[#FCFAF7]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
              Oleni legal
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2F2A26] md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5A514A]">
              Oleni is built around calm support, consent, and clearer communication. This policy explains what information we collect, how we use it, and what may be shared when phones are linked for support.
            </p>
            <p className="mt-4 text-sm text-[#7A6F66]">Last updated: May 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl space-y-12 px-6 py-14 md:py-16">
          <section>
            <h2 className={sectionTitle}>1. Who we are</h2>
            <p className={bodyText}>
              Oleni is a daily support app designed to help people living with epilepsy and the partners, carers, or loved ones supporting them stay gently in step. If you have any privacy questions, you can contact us at hello@oleni.app.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>2. What Oleni does — and does not do</h2>
            <p className={bodyText}>
              Oleni supports routines, reassurance, and connection. It is not a medical device, it does not provide diagnosis or treatment, it is not emergency support, and it is not seizure detection or seizure monitoring.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>3. Information we may collect</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-[#5A514A]">
              <p>Depending on how you use Oleni, we may collect:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>account details such as email address when you secure your Oleni account</li>
                <li>routine timing information such as medication check-in times, meal reminders, hydration reminders, and gentle check-ins</li>
                <li>status information such as whether a check-in has been marked, whether support was requested, and whether rest mode is on</li>
                <li>linked support information needed to connect two phones for partner or carer support</li>
                <li>contact details you choose to save, such as an optional phone number used for support-related features, including contact flows inside the app</li>
                <li>updates list information if you join the Oleni updates list on our website</li>
                <li>basic technical and service information needed to keep the app working reliably and securely</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>4. What stays private</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-[#5A514A]">
              <p>Oleni is designed to keep boundaries clear.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Medication names are not part of the shared partner experience.</li>
                <li>Partner mode is designed to be view-only.</li>
                <li>Linked support is designed to feel clear, consent-based, and in your control.</li>
                <li>Oleni is designed to support communication, not surveillance.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>5. How we use information</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-[#5A514A]">
              <p>We use information to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>provide Oleni’s routine, reminder, and linked-support features</li>
                <li>help both phones reflect the same shared routine and support status when phones are linked for support</li>
                <li>send account, security, and launch-list communications</li>
                <li>improve reliability, safety, and product performance</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>6. What may be shared with a linked partner or carer</h2>
            <p className={bodyText}>
              When phones are linked for support, Oleni may share routine and support status information such as whether a reminder has been marked, whether support was requested, whether rest mode is on, and selected contact details such as an optional saved phone number where needed for the support features the user chooses to use. The linked phone is designed to help someone support the person using Oleni — not to take control of the account.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>7. Your control and choices</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-[#5A514A]">
              <ul className="list-disc space-y-2 pl-6">
                <li>You can unlink the other phone to stop linked support.</li>
                <li>You can change reminder timings and routine settings.</li>
                <li>You can delete your Oleni account inside the app from Settings &gt; Account &gt; Delete Oleni account.</li>
                <li>You can contact us if you want to ask about, access, correct, or delete your information.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>8. Service providers and website tools</h2>
            <p className={bodyText}>
              Oleni may use trusted service providers to support app hosting, data storage, account emails, notifications, and website updates forms. These providers only receive the information needed to perform those services for Oleni.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>9. Data retention and deletion</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-[#5A514A]">
              <p>
                Oleni keeps your account, routine, reminder, and linked-support information for as long as your Oleni account remains active, or for as long as needed to provide the app&apos;s features, keep the service secure, resolve support requests, and meet legal obligations.
              </p>
              <p>
                You can delete your Oleni account inside the app by going to Settings &gt; Account &gt; Delete Oleni account. This removes your Oleni account, saved routines, linked support data, and the connection to the linked phone.
              </p>
              <p>
                If you cannot access the app, you can request account and data deletion by emailing <a href="mailto:hello@oleni.app" className="underline">hello@oleni.app</a>. Please include the email address linked to your Oleni account, or your Support ID if you have it, so we can find the correct account.
              </p>
              <p>
                When an account deletion request is confirmed, we delete or anonymise the personal data linked to that account within 30 days, unless we need to keep limited information for legal, security, fraud prevention, tax, accounting, dispute, or compliance reasons.
              </p>
              <p>
                Website updates-list information is kept until you unsubscribe or ask us to delete it. Limited backup, security, and service logs may remain for a short period after deletion and are removed or anonymised through normal system retention cycles.
              </p>
              <p>
                Google Play subscription and payment records are managed by Google Play. Cancelling, pausing, or managing a subscription must be done through your Google Play account.
              </p>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>10. Updates to this policy</h2>
            <p className={bodyText}>
              We may update this Privacy Policy as Oleni develops. When we do, we will update the date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>11. Contact</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-[#5A514A]">
              <p>
                If you have questions about this Privacy Policy, how Oleni handles information, or if you want to request account or data deletion, email <a href="mailto:hello@oleni.app" className="underline">hello@oleni.app</a>.
              </p>
              <p>
                Developer: BondWell Support Ltd, trading as Oleni, United Kingdom.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
