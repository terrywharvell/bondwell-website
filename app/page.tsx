export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[#FAF7F2] text-[#2F2A26] bg-[radial-gradient(circle_at_top,_rgba(200,169,107,0.10),_transparent_35%)]"
    >
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#FAF7F2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
  href="#top"
  className="flex items-center gap-3 text-xl font-semibold tracking-tight transition hover:opacity-80"
>
  <img
    src="/bondwell-icon.png"
    alt="BondWell logo"
    className="h-9 w-9 object-contain"
  />
  <span>BondWell</span>
</a>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#how-it-works" className="hover:opacity-70">
              How it works
            </a>
            <a href="#screens" className="hover:opacity-70">
              Screens
            </a>
            <a href="#pricing" className="hover:opacity-70">
              Pricing
            </a>
            <a href="#privacy" className="hover:opacity-70">
              Privacy
            </a>
            <a href="#faq" className="hover:opacity-70">
              FAQs
            </a>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
          </nav>

          <a
            href="#launch"
            className="rounded-full bg-[#C8A96B] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Join launch list
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
            Calm support, shared gently
          </p>

          <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
            BondWell helps support feel calmer — for both of you.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5A514A]">
            A gentle routine app for people living with epilepsy and the person
            who supports them. Reminders, check-ins, and a clear support
            requested flow — always consent-based.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#launch"
              className="rounded-full bg-[#2F2A26] px-6 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
            >
              Join the launch list
            </a>

            <a
              href="#how-it-works"
              className="rounded-full border border-[#D8CEC2] px-6 py-3 text-center text-sm font-medium transition hover:bg-white/60"
            >
              See how it works
            </a>
          </div>

          <p className="mt-6 text-sm text-[#7A6F66]">
            Not a medical device. Not emergency support. For medical questions,
            speak with a qualified healthcare professional.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#F6F1EA] p-4">
              <p className="text-sm font-medium text-[#8A7460]">
                Gentle reminder
              </p>
              <p className="mt-2 text-base">Medication due soon</p>
              <p className="mt-1 text-sm text-[#6C635C]">
                Taking it gently today 💛
              </p>
            </div>

            <div className="rounded-2xl bg-[#FAF7F2] p-4">
              <p className="text-sm font-medium text-[#8A7460]">
                Quick check-in
              </p>
              <p className="mt-2 text-base">
                A simple way to say how you’re doing
              </p>
            </div>

            <div className="rounded-2xl bg-[#F6F1EA] p-4">
              <p className="text-sm font-medium text-[#8A7460]">
                Support requested
              </p>
              <p className="mt-2 text-base">
                Clear, calm communication when extra support is needed
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="screens" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
            See BondWell in action
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Calm support, shown simply
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#5A514A]">
            BondWell is designed to feel clear, gentle, and easy to follow —
            for the person using it and for the partner or carer supporting
            them.
          </p>
        </div>

        <div className="flex flex-col items-center gap-16 md:flex-row md:justify-center md:gap-12">
          <div className="text-center md:translate-y-10">
            <div className="mx-auto w-[250px] animate-[float_6s_ease-in-out_infinite] rounded-[2.6rem] bg-[#1F1A17] p-[10px] shadow-[0_20px_60px_rgba(47,42,38,0.18)]">
              <div className="relative overflow-hidden rounded-[2.1rem] bg-black">
                <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
                <img
                  src="/screens/user-home.jpg"
                  alt="BondWell daily overview screen"
                  className="block w-full"
                />
              </div>
            </div>

            <p className="mt-6 text-base font-semibold">Daily overview</p>

            <p className="mx-auto mt-2 max-w-[250px] text-sm leading-7 text-[#5A514A]">
              A calm home screen with the day’s support, reminders, and status
              in one place.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-[320px] animate-[float_7s_ease-in-out_infinite] rounded-[3rem] bg-[#1F1A17] p-[10px] shadow-[0_40px_120px_rgba(47,42,38,0.28)]">
              <div className="relative overflow-hidden rounded-[2.4rem] bg-black">
                <div className="absolute left-1/2 top-3 z-10 h-7 w-32 -translate-x-1/2 rounded-full bg-black" />
                <img
                  src="/screens/user-ask-for-support.jpg"
                  alt="BondWell ask for support screen"
                  className="block w-full"
                />
              </div>
            </div>

            <p className="mt-6 text-base font-semibold">Ask for support</p>

            <p className="mx-auto mt-2 max-w-[300px] text-sm leading-7 text-[#5A514A]">
              A simple, low-pressure way to say support is needed without adding
              extra stress.
            </p>
          </div>

          <div className="text-center md:translate-y-10">
            <div className="mx-auto w-[250px] animate-[float_6.5s_ease-in-out_infinite] rounded-[2.6rem] bg-[#1F1A17] p-[10px] shadow-[0_20px_60px_rgba(47,42,38,0.18)]">
              <div className="relative overflow-hidden rounded-[2.1rem] bg-black">
                <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
                <img
                  src="/screens/partner-support-requested.jpg"
                  alt="BondWell partner support requested screen"
                  className="block w-full"
                />
              </div>
            </div>

            <p className="mt-6 text-base font-semibold">Partner view</p>

            <p className="mx-auto mt-2 max-w-[250px] text-sm leading-7 text-[#5A514A]">
              A view-only screen that helps partners or carers stay in sync,
              gently and clearly.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">
              For people living with epilepsy
            </h2>
            <p className="mt-4 leading-8 text-[#5A514A]">
              Build steady routines around medication, hydration, meals, and
              gentle check-ins — without pressure. BondWell is designed to help
              everyday support feel clearer and calmer.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">For partners and carers</h2>
            <p className="mt-4 leading-8 text-[#5A514A]">
              Stay better in sync through consent-based sharing and a view-only
              partner experience. BondWell supports connection without taking
              control away from the person using it.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Small supports that make daily life feel easier
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
            <div className="text-sm font-medium text-[#8A7460]">01</div>
            <h3 className="mt-3 text-xl font-semibold">
              Set your gentle routine
            </h3>
            <p className="mt-4 leading-8 text-[#5A514A]">
              Add the reminders you want for medication, hydration, meals, and
              simple check-ins.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
            <div className="text-sm font-medium text-[#8A7460]">02</div>
            <h3 className="mt-3 text-xl font-semibold">
              Choose what you share
            </h3>
            <p className="mt-4 leading-8 text-[#5A514A]">
              BondWell is consent-based. Sharing is optional, clear, and led by
              the person using the app.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
            <div className="text-sm font-medium text-[#8A7460]">03</div>
            <h3 className="mt-3 text-xl font-semibold">
              Ask for support calmly
            </h3>
            <p className="mt-4 leading-8 text-[#5A514A]">
              When support is needed, BondWell helps reduce guesswork and makes
              communication simpler.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Simple pricing, with core support kept accessible
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Free</h3>
            <ul className="mt-6 space-y-3 text-[#5A514A]">
              <li>Medication reminders</li>
              <li>Hydration reminders</li>
              <li>Meal reminders</li>
              <li>Gentle check-ins</li>
              <li>Support requested flow</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[#D9C29A] bg-[#FFF9F0] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Premium</h3>
            <ul className="mt-6 space-y-3 text-[#5A514A]">
              <li>Everything in Free</li>
              <li>Linking across separate phones</li>
              <li>Partner/carer connection features</li>
              <li>Future device linking</li>
            </ul>
            <p className="mt-6 text-sm text-[#7A6F66]">
              Premium is planned for optional linking features only.
            </p>
          </div>
        </div>
      </section>

      <section id="privacy" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
            Privacy & consent
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Built around consent, clarity, and calmer communication
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-[#FAF7F2] p-5">
              You choose what is shared
            </div>
            <div className="rounded-2xl bg-[#FAF7F2] p-5">
              Partner mode is view-only
            </div>
            <div className="rounded-2xl bg-[#FAF7F2] p-5">
              Not a medical device
            </div>
            <div className="rounded-2xl bg-[#FAF7F2] p-5">
              Not emergency support
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
            FAQs
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            A few clear answers
          </h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-[#E7DED4] bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Is BondWell a medical device?</h3>
            <p className="mt-2 text-[#5A514A]">
              No. BondWell supports routines and communication. For medical
              advice, speak with a qualified healthcare professional.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DED4] bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Is BondWell emergency support?</h3>
            <p className="mt-2 text-[#5A514A]">
              No. If urgent help is needed, contact emergency services.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DED4] bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Can a partner control the app?</h3>
            <p className="mt-2 text-[#5A514A]">
              No. Partner features are designed to be view-only and
              consent-based.
            </p>
          </div>
        </div>
      </section>

      <section id="launch" className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-[2rem] border border-[#D9C29A] bg-[#FFF9F0] p-8 text-center shadow-sm md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
            Launch updates
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Join the BondWell launch list
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#5A514A]">
            Be the first to hear about testing, launch updates, and what’s
            coming next for BondWell.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-full border border-[#D8CEC2] bg-white px-5 py-3 outline-none"
            />
            <button className="rounded-full bg-[#2F2A26] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
              Join list
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 leading-8 text-[#5A514A]">
            Questions, feedback, or partnership ideas? Get in touch at{" "}
            <a href="mailto:hello@bondwell.co.uk" className="underline">
              hello@bondwell.co.uk
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}