import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "BondWell Terms of Use covering access to the service, linked-support features, acceptable use, subscriptions, and important medical and emergency disclaimers.",
  alternates: {
    canonical: "/terms",
  },
};

const sectionTitle = "text-2xl font-semibold tracking-tight text-[#2F2A26]";
const bodyText = "mt-4 text-base leading-8 text-[#5A514A]";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-[#2F2A26]">
      <div className="border-b border-[#F0E8DE] bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="text-sm font-medium text-[#5A514A] hover:text-[#2F2A26]">
            ← Back to BondWell
          </a>
          <span className="text-xs uppercase tracking-[0.2em] text-[#8A7460]">Terms of Use</span>
        </div>
      </div>

      <section className="bg-[#FCFAF7]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
              BondWell legal
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2F2A26] md:text-5xl">
              Terms of Use
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5A514A]">
              These Terms explain how BondWell may be used, what the service is designed for, and the important boundaries around medical advice, emergency support, linked support, and optional premium features.
            </p>
            <p className="mt-4 text-sm text-[#7A6F66]">Last updated: March 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl space-y-12 px-6 py-14 md:py-16">
          <section>
            <h2 className={sectionTitle}>1. Using BondWell</h2>
            <p className={bodyText}>
              BondWell is a daily support app designed to help people living with epilepsy and the partners, carers, or loved ones supporting them stay gently in step. By using BondWell, you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>2. Important medical and emergency boundaries</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-[#5A514A]">
              <p>BondWell is not a medical device.</p>
              <p>BondWell does not provide diagnosis, treatment, or professional healthcare advice.</p>
              <p>BondWell is not seizure detection, seizure tracking, or emergency monitoring.</p>
              <p>If urgent help is needed, contact emergency services or a qualified healthcare professional.</p>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>3. Accounts and access</h2>
            <p className={bodyText}>
              Some BondWell features may require a secure account. You are responsible for keeping your account access details safe and for using BondWell only on devices you are authorised to use.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>4. Linked support</h2>
            <p className={bodyText}>
              BondWell linked support is designed to help a partner or carer stay informed in a calm, consent-based, view-only way. The person using BondWell remains in control of linking and unlinking the other phone for support.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>5. Acceptable use</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-[#5A514A]">
              <p>You agree not to misuse BondWell, interfere with the service, attempt unauthorised access, or use BondWell in any way that could harm other users or the service itself.</p>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>6. Premium features and subscriptions</h2>
            <p className={bodyText}>
              BondWell may offer optional premium features, including linked support across separate phones. Pricing, subscription details, and feature availability may change as BondWell develops.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>7. Availability and updates</h2>
            <p className={bodyText}>
              We may change, improve, pause, or remove parts of BondWell from time to time. We do not guarantee that the service will always be available without interruption.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>8. Intellectual property</h2>
            <p className={bodyText}>
              BondWell, its branding, and its content remain the property of BondWell unless stated otherwise. You may use the service only as permitted under these Terms.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>9. Liability</h2>
            <p className={bodyText}>
              To the fullest extent permitted by law, BondWell is provided on an “as available” basis. We work to make the service helpful, calm, and reliable, but we cannot guarantee uninterrupted availability or that BondWell will prevent harm, missed reminders, or medical events.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>10. Changes to these Terms</h2>
            <p className={bodyText}>
              We may update these Terms as BondWell develops. When we do, we will update the date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className={sectionTitle}>11. Contact</h2>
            <p className={bodyText}>
              If you have questions about these Terms, email <a href="mailto:hello@bondwell.co.uk" className="underline">hello@bondwell.co.uk</a>.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
