"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const heroCards = [
    {
      title: "Built from real life",
      text: "Shaped through lived experience, not just a concept.",
    },
    {
      title: "Calm by design",
      text: "Support that feels gentle, clear, and emotionally safe.",
    },
    {
      title: "For both sides",
      text: "Helping the person and the partner stay better in sync.",
    },
  ];

  const trustPillars = [
    {
      title: "Lived experience",
      text: "Built from everyday reality, not just theory.",
    },
    {
      title: "Daily reassurance",
      text: "Designed around the moments in between, not only the obvious ones.",
    },
    {
      title: "Consent-based",
      text: "Sharing is optional, clear, and led by the person using the app.",
    },
    {
      title: "Human-first",
      text: "Supportive technology that reduces pressure, not adds to it.",
    },
  ];

  const audienceCards = [
    {
      title: "People living with epilepsy",
      text: "BondWell is designed to make daily support feel calmer, clearer, and less repetitive.",
    },
    {
      title: "Partners, carers, and loved ones",
      text: "A view-only, consent-led experience helps support feel connected rather than controlling.",
    },
    {
      title: "Daily life beyond one condition",
      text: "Built around epilepsy first, with a calm routine-led approach that may also feel helpful for other long-term conditions and care needs.",
    },
  ];

  const promiseCards = [
    {
      title: "Calm-first support",
      text: "BondWell is being built to feel supportive and steady, never loud or overwhelming.",
    },
    {
      title: "Consent-led connection",
      text: "Sharing and partner support are designed to feel respectful, clear, and person-led.",
    },
    {
      title: "For both people",
      text: "Built to support the person living with epilepsy and the loved one beside them.",
    },
  ];

  const trustSignals = [
    "Designed around lived experience",
    "Focused on reassurance as well as routine",
    "Made for both the person and the partner",
    "Built to feel calm rather than clinical",
  ];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorText =
          typeof data?.error === "string" ? data.error.toLowerCase() : "";

        if (
          errorText.includes("duplicate") ||
          errorText.includes("already on the list")
        ) {
          setStatus("error");
          setMessage("You're already on the BondWell launch list 🙂");
          return;
        }

        throw new Error(data.error || "Could not save your email right now.");
      }

      setStatus("success");
      setMessage(
        "✓ You're on the BondWell launch list. We'll let you know when testing opens."
      );
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Could not save your email right now."
      );
    }
  }

  return (
    <main id="top" className="min-h-screen bg-white text-[#2F2A26]">
      <header className="sticky top-0 z-40 border-b border-[#EDE5DB] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="flex items-center gap-3 text-xl font-semibold tracking-tight hover:opacity-90"
          >
            <img
              src="/bondwell-icon.png"
              alt="BondWell logo"
              className="h-14 w-auto md:h-16"
            />
            <div className="leading-tight">
              <div className="text-xl font-semibold text-[#2F2A26]">BondWell</div>
              <div className="text-xs font-normal uppercase tracking-[0.18em] text-[#8A7460]">
                Calm support, shared gently
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[#5A514A] lg:flex">
            <a href="#story" className="transition hover:text-[#2F2A26]">
              Story
            </a>
            <a href="#perspective" className="transition hover:text-[#2F2A26]">
              Perspective
            </a>
            <a href="#screens" className="transition hover:text-[#2F2A26]">
              Screens
            </a>
            <a href="#how-it-works" className="transition hover:text-[#2F2A26]">
              How it works
            </a>
            <a href="#privacy" className="transition hover:text-[#2F2A26]">
              Privacy
            </a>
            <a href="#faq" className="transition hover:text-[#2F2A26]">
              FAQs
            </a>
            <a href="#contact" className="transition hover:text-[#2F2A26]">
              Contact
            </a>
          </nav>

          <a
            href="#launch"
            className="rounded-full bg-[#2F2A26] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Join launch list
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-150px] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#F6EFE5] blur-3xl" />
          <div className="absolute right-[-60px] top-[80px] h-[260px] w-[260px] rounded-full bg-[#F2F7FF] blur-3xl" />
          <div className="absolute left-[-80px] top-[300px] h-[220px] w-[220px] rounded-full bg-[#EEF7F4] blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-14 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-20 lg:pb-24 lg:pt-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8DED1] bg-[#FCFAF7] px-4 py-2 text-sm text-[#8A7460]">
              <span className="h-2 w-2 rounded-full bg-[#C8A96B]" />
              Calm support, shared gently
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-[#2F2A26] md:text-6xl">
              BondWell helps support feel calmer — for both of you.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5A514A] md:text-xl">
              A gentle daily routine app for people living with epilepsy and the
              partner, carer, or loved one supporting them.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#launch"
                className="rounded-full bg-[#2F2A26] px-7 py-3.5 text-center text-sm font-medium text-white transition hover:opacity-90"
              >
                Join the launch list
              </a>

              <a
                href="#story"
                className="rounded-full border border-[#DCCFC1] px-7 py-3.5 text-center text-sm font-medium text-[#2F2A26] transition hover:bg-[#FAF7F2]"
              >
                Why BondWell exists
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {heroCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.6rem] border border-[#EEE4D8] bg-[#FCFAF7] p-5"
                >
                  <p className="text-sm font-semibold text-[#2F2A26]">
                    {card.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#5A514A]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-[1.6rem] border border-[#EEE4D8] bg-white p-5 shadow-[0_12px_36px_rgba(47,42,38,0.05)]">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8A7460]">
                Built around epilepsy first
              </p>
              <p className="mt-3 text-sm leading-7 text-[#5A514A]">
                BondWell is being shaped around epilepsy and everyday caring, while
                the calm routine-led approach may also feel helpful for other long-term
                conditions and care needs where reassurance, routine, and shared
                support matter.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[470px] w-full max-w-[680px] sm:h-[560px] lg:h-[640px]">
              <div className="absolute left-1/2 top-8 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[#F7F1E8] blur-3xl sm:h-[360px] sm:w-[360px]" />
              <div className="absolute right-10 top-24 h-[180px] w-[180px] rounded-full bg-[#EEF4FF] blur-3xl" />
              <div className="absolute left-12 bottom-20 h-[170px] w-[170px] rounded-full bg-[#EEF7F4] blur-3xl" />

              <div className="absolute left-4 top-36 z-10 hidden w-[150px] -rotate-[9deg] opacity-95 md:block lg:left-8 lg:top-40 lg:w-[160px]">
                <div className="rounded-[2rem] bg-[#1F1A17] p-[8px] shadow-[0_22px_60px_rgba(47,42,38,0.16)] transition duration-500 hover:-translate-y-2 hover:-rotate-[7deg]">
                  <div className="relative overflow-hidden rounded-[1.6rem] bg-black">
                    <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
                    <img
                      src="/screens/user-ask-for-support.jpg"
                      alt="BondWell ask for support screen"
                      className="block w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 top-2 z-20 w-[250px] -translate-x-1/2 rotate-[1.5deg] sm:w-[285px] lg:top-3 lg:w-[320px]">
                <div className="rounded-[3rem] bg-[#1F1A17] p-[10px] shadow-[0_40px_120px_rgba(47,42,38,0.22)] transition duration-500 hover:-translate-y-2">
                  <div className="relative overflow-hidden rounded-[2.4rem] bg-black">
                    <div className="absolute left-1/2 top-3 z-10 h-7 w-32 -translate-x-1/2 rounded-full bg-black" />
                    <img
                      src="/screens/user-home.jpg"
                      alt="BondWell user home screen"
                      className="block w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute right-2 top-28 z-10 hidden w-[150px] rotate-[9deg] opacity-95 md:block lg:right-8 lg:top-36 lg:w-[160px]">
                <div className="rounded-[2rem] bg-[#1F1A17] p-[8px] shadow-[0_22px_60px_rgba(47,42,38,0.16)] transition duration-500 hover:-translate-y-2 hover:rotate-[7deg]">
                  <div className="relative overflow-hidden rounded-[1.6rem] bg-black">
                    <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
                    <img
                      src="/screens/partner-support-requested.jpg"
                      alt="BondWell partner support requested screen"
                      className="block w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 rounded-full border border-[#E8DED1] bg-white px-5 py-3 text-sm text-[#5A514A] shadow-[0_14px_34px_rgba(47,42,38,0.12)] md:flex">
                Designed to feel calm, simple, and supportive
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#F0E8DE] bg-[#FCFAF7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-9 md:grid-cols-4">
          {trustPillars.map((item) => (
            <div key={item.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8A7460]">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#5A514A]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-[#FCFAF7] p-8 shadow-sm md:p-10">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.22em] text-[#8A7460]">
                Who BondWell is for
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2F2A26] md:text-4xl">
                Built for real support in everyday life.
              </h2>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {audienceCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.6rem] border border-[#E7DED4] bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-[#2F2A26]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5A514A]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#8A7460]">
              Why BondWell exists
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#2F2A26]">
              Built from real life experience
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-9 text-[#5A514A]">
            <p>
              After caring for Jaz for the last nine years we realised epilepsy
              support is not just about seizures. The hardest part can often be
              the daily moments in between.
            </p>

            <p>
              Conversations like “Have you taken your tablets?”, “Have you had
              enough water today?”, “Have you eaten?” start to repeat day after
              day. For the person living with epilepsy it can feel frustrating
              and stressful. For the partner or carer it can create constant
              anxiety not knowing if the basics have been done.
            </p>

            <p>
              Medication, hydration, rest and routine can all affect seizure
              risk — yet memory issues can make these simple things difficult to
              track. BondWell was built to remove that pressure.
            </p>

            <p>
              Instead of constant questions, the app quietly keeps both people
              in sync. Medication reminders, hydration prompts and gentle
              check-ins help reduce the stress on both sides. Because living
              with epilepsy — or caring for someone who does — should bring
              people closer together, not create more anxiety.
            </p>

            <p className="font-medium text-[#2F2A26]">This is the BondWell way.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#FCFAF7]">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm md:p-10">
              <p className="text-sm uppercase tracking-[0.22em] text-[#8A7460]">
                How BondWell was made
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#2F2A26]">
                Built around the reality of everyday support.
              </h3>
              <p className="mt-5 text-base leading-8 text-[#5A514A]">
                BondWell was not imagined from the outside looking in. It has
                been shaped by real routines, repeated conversations, emotional
                weight, and the need to make support feel steadier for both
                people.
              </p>
              <p className="mt-4 text-base leading-8 text-[#5A514A]">
                The goal has always been simple: create something calm, useful,
                respectful, and genuinely supportive — not clinical, not loud,
                and not overwhelming.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#D9C29A] bg-[#FFF9F0] p-8 shadow-sm md:p-10">
              <p className="text-sm uppercase tracking-[0.22em] text-[#8A7460]">
                Founder note
              </p>
              <p className="mt-5 text-xl leading-9 text-[#2F2A26]">
                “BondWell is being built to reduce pressure, bring more calm to
                daily life, and help support feel like connection instead of
                constant worry.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCFAF7]">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-2">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#2F2A26]">
                For people living with epilepsy
              </h2>
              <p className="mt-4 leading-8 text-[#5A514A]">
                Build steady routines around medication, hydration, meals, and
                gentle check-ins without pressure. BondWell is designed to help
                everyday support feel clearer and calmer.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#2F2A26]">
                For partners and carers
              </h2>
              <p className="mt-4 leading-8 text-[#5A514A]">
                Stay better in sync through consent-based sharing and a view-only
                partner experience. BondWell supports connection without taking
                control away from the person using it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            {promiseCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.8rem] border border-[#E7DED4] bg-[#FCFAF7] p-7"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[#8A7460]">
                  BondWell promise
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#2F2A26]">
                  {card.title}
                </h3>
                <p className="mt-3 leading-7 text-[#5A514A]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="perspective" className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-[#FCFAF7] p-8 shadow-sm md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#8A7460]">
              A lived perspective
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#2F2A26]">
              Living with epilepsy affects far more than what people see.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-9 text-[#5A514A]">
              <p>
                It can shape confidence, independence, routine, memory, and the
                feel of each day in ways that are often invisible to everyone
                else.
              </p>

              <p>
                BondWell is being built with that understanding at its core —
                not as a cold tracking tool, but as something calmer, more
                human, and more respectful of what everyday life can really feel
                like.
              </p>

              <p>
                The aim is support without overwhelm, reassurance without
                pressure, and a product that feels like it belongs in a person’s
                life with dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="screens" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
              See BondWell in action
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#2F2A26] md:text-4xl">
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
              <div className="mx-auto w-[250px] rounded-[2.6rem] bg-[#1F1A17] p-[10px] shadow-[0_20px_60px_rgba(47,42,38,0.18)]">
                <div className="relative overflow-hidden rounded-[2.1rem] bg-black">
                  <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
                  <img
                    src="/screens/user-home.jpg"
                    alt="BondWell daily overview screen"
                    className="block w-full"
                  />
                </div>
              </div>

              <p className="mt-6 text-base font-semibold text-[#2F2A26]">
                Daily overview
              </p>

              <p className="mx-auto mt-2 max-w-[250px] text-sm leading-7 text-[#5A514A]">
                A calm home screen with the day’s support, reminders, and status
                in one place.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-[320px] rounded-[3rem] bg-[#1F1A17] p-[10px] shadow-[0_40px_120px_rgba(47,42,38,0.28)]">
                <div className="relative overflow-hidden rounded-[2.4rem] bg-black">
                  <div className="absolute left-1/2 top-3 z-10 h-7 w-32 -translate-x-1/2 rounded-full bg-black" />
                  <img
                    src="/screens/user-ask-for-support.jpg"
                    alt="BondWell ask for support screen"
                    className="block w-full"
                  />
                </div>
              </div>

              <p className="mt-6 text-base font-semibold text-[#2F2A26]">
                Ask for support
              </p>

              <p className="mx-auto mt-2 max-w-[300px] text-sm leading-7 text-[#5A514A]">
                A simple, low-pressure way to say support is needed without
                adding extra stress.
              </p>
            </div>

            <div className="text-center md:translate-y-10">
              <div className="mx-auto w-[250px] rounded-[2.6rem] bg-[#1F1A17] p-[10px] shadow-[0_20px_60px_rgba(47,42,38,0.18)]">
                <div className="relative overflow-hidden rounded-[2.1rem] bg-black">
                  <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
                  <img
                    src="/screens/partner-support-requested.jpg"
                    alt="BondWell partner support requested screen"
                    className="block w-full"
                  />
                </div>
              </div>

              <p className="mt-6 text-base font-semibold text-[#2F2A26]">
                Partner view
              </p>

              <p className="mx-auto mt-2 max-w-[250px] text-sm leading-7 text-[#5A514A]">
                A view-only screen that helps partners or carers stay in sync,
                gently and clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#FCFAF7]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2F2A26] md:text-4xl">
              Small supports that make daily life feel easier
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
              <div className="text-sm font-medium text-[#8A7460]">01</div>
              <h3 className="mt-3 text-xl font-semibold text-[#2F2A26]">
                Set your gentle routine
              </h3>
              <p className="mt-4 leading-8 text-[#5A514A]">
                Add the reminders you want for medication, hydration, meals, and
                simple check-ins.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
              <div className="text-sm font-medium text-[#8A7460]">02</div>
              <h3 className="mt-3 text-xl font-semibold text-[#2F2A26]">
                Choose what you share
              </h3>
              <p className="mt-4 leading-8 text-[#5A514A]">
                BondWell is consent-based. Sharing is optional, clear, and led by
                the person using the app.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
              <div className="text-sm font-medium text-[#8A7460]">03</div>
              <h3 className="mt-3 text-xl font-semibold text-[#2F2A26]">
                Ask for support calmly
              </h3>
              <p className="mt-4 leading-8 text-[#5A514A]">
                When support is needed, BondWell helps reduce guesswork and
                makes communication simpler.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-[#FCFAF7] p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[#8A7460]">
                  Trust signals
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#2F2A26]">
                  Built with care, clarity, and purpose.
                </h3>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {trustSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-[1.4rem] border border-[#E7DED4] bg-white p-5 text-[#5A514A]"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2F2A26] md:text-4xl">
              Simple pricing, with core support kept accessible
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-[#E7DED4] bg-[#FCFAF7] p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#2F2A26]">Free</h3>
              <ul className="mt-6 space-y-3 text-[#5A514A]">
                <li>Medication reminders</li>
                <li>Hydration reminders</li>
                <li>Meal reminders</li>
                <li>Gentle check-ins</li>
                <li>Support requested flow</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#D9C29A] bg-[#FFF9F0] p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#2F2A26]">Premium</h3>
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
        </div>
      </section>

      <section id="privacy" className="bg-[#FCFAF7]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
              Privacy & consent
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2F2A26] md:text-4xl">
              Built around consent, clarity, and calmer communication
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-[#FAF7F2] p-5 text-[#2F2A26]">
                You choose what is shared
              </div>
              <div className="rounded-2xl bg-[#FAF7F2] p-5 text-[#2F2A26]">
                Partner mode is view-only
              </div>
              <div className="rounded-2xl bg-[#FAF7F2] p-5 text-[#2F2A26]">
                Not a medical device
              </div>
              <div className="rounded-2xl bg-[#FAF7F2] p-5 text-[#2F2A26]">
                Not emergency support
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2F2A26] md:text-4xl">
              A few clear answers
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-[#E7DED4] bg-[#FCFAF7] p-6 shadow-sm">
              <h3 className="font-semibold text-[#2F2A26]">
                Is BondWell a medical device?
              </h3>
              <p className="mt-2 text-[#5A514A]">
                No. BondWell supports routines and communication. For medical
                advice, speak with a qualified healthcare professional.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7DED4] bg-[#FCFAF7] p-6 shadow-sm">
              <h3 className="font-semibold text-[#2F2A26]">
                Is BondWell emergency support?
              </h3>
              <p className="mt-2 text-[#5A514A]">
                No. If urgent help is needed, contact emergency services.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7DED4] bg-[#FCFAF7] p-6 shadow-sm">
              <h3 className="font-semibold text-[#2F2A26]">
                Can a partner control the app?
              </h3>
              <p className="mt-2 text-[#5A514A]">
                No. Partner features are designed to be view-only and
                consent-based.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="launch" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 rounded-[2.2rem] border border-[#D9C29A] bg-[#FFF9F0] p-8 shadow-sm md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
                Launch updates
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2F2A26] md:text-4xl">
                Join the BondWell launch list
              </h2>
              <p className="mt-4 max-w-xl leading-8 text-[#5A514A]">
                Be the first to hear about testing, launch updates, and what’s
                coming next for BondWell.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#5A514A]">
                <span className="rounded-full border border-[#E6D7C4] bg-white px-4 py-2">
                  Early access updates
                </span>
                <span className="rounded-full border border-[#E6D7C4] bg-white px-4 py-2">
                  Built from lived experience
                </span>
                <span className="rounded-full border border-[#E6D7C4] bg-white px-4 py-2">
                  Calm support, shared gently
                </span>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-[#E8D8C4] bg-white p-5 shadow-[0_18px_48px_rgba(47,42,38,0.06)] md:p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
                Join the journey
              </p>
              <p className="mt-3 text-sm leading-7 text-[#5A514A]">
                We’ll only use your email for BondWell launch updates and news.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-5 flex flex-col gap-3"
              >
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-full border border-[#D8CEC2] bg-[#FCFAF7] px-5 py-3 outline-none transition focus:border-[#2F2A26]"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full bg-[#2F2A26] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
                >
                  {status === "loading" ? "Joining..." : "Join launch list"}
                </button>
              </form>

              {message ? (
                <p
                  className={`mt-4 text-sm ${
                    status === "success" ? "text-[#557A46]" : "text-[#A14B4B]"
                  }`}
                >
                  {message}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-[#FCFAF7] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#2F2A26]">Contact</h2>
            <p className="mt-4 leading-8 text-[#5A514A]">
              Questions, feedback, or partnership ideas? Get in touch at{" "}
              <a href="mailto:hello@bondwell.co.uk" className="underline">
                hello@bondwell.co.uk
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#F0E8DE] bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#6C635C] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} BondWell. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            <a href="#privacy" className="hover:opacity-70">
              Privacy
            </a>
            <a href="#faq" className="hover:opacity-70">
              FAQs
            </a>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
