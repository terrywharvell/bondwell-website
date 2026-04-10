import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help & setup",
  description:
    "Oleni help and setup guidance for linked support, Android device reliability, notifications, battery settings, and calm troubleshooting.",
  alternates: {
    canonical: "/help",
  },
};

const sectionTitle = "text-2xl font-semibold tracking-tight text-[#2F2A26]";
const bodyText = "mt-4 text-base leading-8 text-[#5A514A]";
const bulletList = "mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-[#5A514A]";

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-white text-[#2F2A26]">
      <div className="border-b border-[#F0E8DE] bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-medium text-[#5A514A] hover:text-[#2F2A26]">
            ← Back to Oleni
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] text-[#8A7460]">Help & setup</span>
        </div>
      </div>

      <section className="bg-[#FCFAF7]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
              Oleni help
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#2F2A26] md:text-5xl">
              Calm setup help for Oleni
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5A514A]">
              A few simple checks can make Oleni feel much more reliable day to day.
              This page is here to help both phones stay gently in step.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl space-y-12 px-6 py-14 md:py-16">
          <section>
            <h2 className={sectionTitle}>1. Keep Oleni reliable on Android</h2>
            <p className={bodyText}>
              If reminders are going to feel calm and dependable, your phone needs to let Oleni do its job in the background.
            </p>
            <ul className={bulletList}>
              <li>Turn notifications on for Oleni.</li>
              <li>Set battery usage to unrestricted or allow Oleni to run without battery limits.</li>
              <li>Allow exact alarms if your phone asks for them.</li>
              <li>Make sure the app is not muted or put into deep sleep.</li>
              <li>After setup, run a real reminder test and check sound, lock-screen behaviour, and timing.</li>
            </ul>
          </section>

          <section>
            <h2 className={sectionTitle}>2. Set up linked support</h2>
            <p className={bodyText}>
              Oleni Premium is the linked two-phone experience. One phone is the main Oleni account, and the other joins using an Oleni linking code.
            </p>
            <ul className={bulletList}>
              <li>Secure the main Oleni phone with the correct account email.</li>
              <li>Make sure Premium is active on the main Oleni account.</li>
              <li>Open linked support and create or refresh the Oleni linking code.</li>
              <li>Join the second phone using that code.</li>
              <li>To stop sharing, unlink the phone from linked support.</li>
            </ul>
          </section>

          <section>
            <h2 className={sectionTitle}>3. Quick checks after setup</h2>
            <ul className={bulletList}>
              <li>Check medication reminders arrive at the expected time.</li>
              <li>Check support requests show clearly on the linked phone.</li>
              <li>Close and reopen both phones to confirm the link stays in place.</li>
              <li>Check saved routine times still look correct in Settings.</li>
              <li>Make sure the Oleni sound is being used, not just the default phone tone.</li>
            </ul>
          </section>

          <section>
            <h2 className={sectionTitle}>4. Calm troubleshooting</h2>
            <div className="mt-4 space-y-5 text-base leading-8 text-[#5A514A]">
              <div>
                <p className="font-semibold text-[#2F2A26]">Reminders show but make no sound</p>
                <p>Check battery settings, notification permissions, sound settings, and whether your phone has replaced Oleni’s channel sound with a default tone.</p>
              </div>
              <div>
                <p className="font-semibold text-[#2F2A26]">The linked phone is not updating</p>
                <p>Open the app on both phones, check the internet connection, and confirm the phones are still linked in Oleni.</p>
              </div>
              <div>
                <p className="font-semibold text-[#2F2A26]">The code has expired</p>
                <p>Open linked support again on the main phone and generate or refresh the code before trying again.</p>
              </div>
              <div>
                <p className="font-semibold text-[#2F2A26]">You want to stop sharing</p>
                <p>Use the unlink option in Oleni linked support. That is the clear stop-sharing route for the two-phone experience.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className={sectionTitle}>5. Need more help?</h2>
            <p className={bodyText}>
              If something still does not feel right, email{" "}
              <a href="mailto:hello@bondwell.co.uk" className="underline underline-offset-2">
                hello@bondwell.co.uk
              </a>{" "}
              and we will help you work through it.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
