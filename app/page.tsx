"use client";

import { useState } from "react";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.terrywharvell.bondwellmvp";

const featureIconPaths = {
  medication: (
    <>
      <path
        d="M7.8 20.9 18.9 9.8a4.7 4.7 0 0 1 6.6 6.6L14.4 27.5a4.7 4.7 0 1 1-6.6-6.6Z"
        fill="currentColor"
        fillOpacity={0.06}
      />
      <path d="m12.3 16.4 6.3 6.3" />
      <circle
        cx="24.2"
        cy="24.1"
        r="4.1"
        fill="white"
        fillOpacity={0.88}
      />
      <path d="m22.4 24.1 1.2 1.3 2.4-2.8" />
    </>
  ),
  hydration: (
    <>
      <path
        d="M16 4.8c-2.8 4.8-7.3 9.3-7.3 14a7.3 7.3 0 0 0 14.6 0c0-4.7-4.5-9.2-7.3-14Z"
        fill="currentColor"
        fillOpacity={0.06}
      />
      <path d="M19.5 18.1a4.7 4.7 0 0 1-4.3 4.7" />
      <circle
        cx="24.8"
        cy="24.6"
        r="1"
        fill="currentColor"
        stroke="none"
        opacity={0.52}
      />
    </>
  ),
  meals: (
    <>
      <path
        d="M7.3 17.2h13.4c-.3 4.6-3.1 7.2-6.7 7.2s-6.4-2.6-6.7-7.2Z"
        fill="currentColor"
        fillOpacity={0.06}
      />
      <path d="M10 25.5h8" />
      <path d="M10.7 12.8c-1.8-1.3-3-2.5-3-4.2a2.7 2.7 0 0 1 4.8-1.7A2.7 2.7 0 0 1 17.3 8.6c0 1.7-1.2 2.9-3 4.2l-1.8 1.3-1.8-1.3Z" />
      <path d="M24 8.2v17.2M22.4 8.2v4.2M25.6 8.2v4.2M22.4 12.4h3.2" />
    </>
  ),
  rest: (
    <>
      <path
        d="M20.6 5.9A9.4 9.4 0 1 0 26 22.4a10.5 10.5 0 0 1-5.4-16.5Z"
        fill="currentColor"
        fillOpacity={0.06}
      />
      <path
        d="m24.3 8.1.7 1.7 1.7.7-1.7.7-.7 1.7-.7-1.7-1.7-.7 1.7-.7.7-1.7Z"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="m26 15 .45 1.1 1.1.45-1.1.45-.45 1.1-.45-1.1-1.1-.45 1.1-.45.45-1.1Z"
        fill="currentColor"
        stroke="none"
        opacity={0.72}
      />
      <path d="M7.2 26.1c4.4-1.7 8.7-1.7 13.1 0" />
    </>
  ),
  support: (
    <>
      <path
        d="M7.4 7.4h17.2a3.3 3.3 0 0 1 3.3 3.3v9.5a3.3 3.3 0 0 1-3.3 3.3H14.3L8 27.8v-4.3h-.6a3.3 3.3 0 0 1-3.3-3.3v-9.5a3.3 3.3 0 0 1 3.3-3.3Z"
        fill="currentColor"
        fillOpacity={0.05}
      />
      <path d="M10.4 14.3c0-2 2.6-2.9 4.1-.9 1.5-2 4.1-1.1 4.1.9 0 2-2.1 3.4-4.1 4.9-2-1.5-4.1-2.9-4.1-4.9Z" />
      <circle
        cx="21.4"
        cy="16.5"
        r="0.75"
        fill="currentColor"
        stroke="none"
      />
      <circle
        cx="23.8"
        cy="16.5"
        r="0.75"
        fill="currentColor"
        stroke="none"
      />
      <circle
        cx="26.2"
        cy="16.5"
        r="0.75"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
  linked: (
    <>
      <circle
        cx="11.2"
        cy="20.5"
        r="6.3"
        fill="currentColor"
        fillOpacity={0.045}
      />
      <circle
        cx="20.8"
        cy="20.5"
        r="6.3"
        fill="currentColor"
        fillOpacity={0.045}
      />
      <circle
        cx="10.5"
        cy="8.1"
        r="2.2"
        fill="currentColor"
        fillOpacity={0.08}
      />
      <circle
        cx="21.5"
        cy="8.1"
        r="2.2"
        fill="currentColor"
        fillOpacity={0.08}
      />
      <path d="M15.8 15.2c1.2-.8 2.7-1.1 4.1-.7" />
    </>
  ),
} as const;

type FeatureIconName = keyof typeof featureIconPaths;

type HeroFeature = {
  title: string;
  text: string;
  icon: FeatureIconName;
  cardClassName: string;
  iconBadgeClassName: string;
  iconColourClassName: string;
  highlightClassName: string;
};

function FeatureIcon({ name }: { name: FeatureIconName }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 32 32"
      className="relative z-10 h-10 w-10 sm:h-14 sm:w-14"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {featureIconPaths[name]}
    </svg>
  );
}

const heroFeatures: HeroFeature[] = [
  {
    title: "Medication reminders",
    text: "Gentle reminders and calm missed-check-in support",
    icon: "medication",
    cardClassName:
      "border-[#E5D6C8] bg-gradient-to-br from-[#FFFDF9] via-[#FBE9DD] to-[#F7F1EA] hover:border-[#D9C4B3]",
    iconBadgeClassName:
      "border-[#E4D1C1] bg-gradient-to-br from-white/85 via-[#F9E6D9]/75 to-[#F5D8C6]/65",
    iconColourClassName: "text-[#8D5F47]",
    highlightClassName:
      "bg-gradient-to-r from-transparent via-[#F2BFA3]/55 to-transparent",
  },
  {
    title: "Hydration support",
    text: "Simple hydration reminders throughout the day",
    icon: "hydration",
    cardClassName:
      "border-[#D6E5EA] bg-gradient-to-br from-[#FBFEFF] via-[#E6F3FA] to-[#F4FAFB] hover:border-[#C4D7DF]",
    iconBadgeClassName:
      "border-[#CFE1E9] bg-gradient-to-br from-white/85 via-[#E4F2F8]/75 to-[#D9ECF4]/65",
    iconColourClassName: "text-[#4F7890]",
    highlightClassName:
      "bg-gradient-to-r from-transparent via-[#A9D6E8]/55 to-transparent",
  },
  {
    title: "Meal reminders",
    text: "Calm breakfast, lunch and dinner check-ins",
    icon: "meals",
    cardClassName:
      "border-[#E7D5D2] bg-gradient-to-br from-[#FFFDF8] via-[#FBE6E2] to-[#FAF2EC] hover:border-[#DCC2BE]",
    iconBadgeClassName:
      "border-[#E4CFCA] bg-gradient-to-br from-white/85 via-[#F9E1DC]/75 to-[#F5D4CE]/65",
    iconColourClassName: "text-[#9A5A61]",
    highlightClassName:
      "bg-gradient-to-r from-transparent via-[#F0B8B0]/55 to-transparent",
  },
  {
    title: "Energy & rest",
    text: "Share energy levels or let someone know rest is needed",
    icon: "rest",
    cardClassName:
      "border-[#DDD5E9] bg-gradient-to-br from-[#FEFCFF] via-[#ECE7FA] to-[#F8F5FB] hover:border-[#CCC2DF]",
    iconBadgeClassName:
      "border-[#D8CFE7] bg-gradient-to-br from-white/85 via-[#EDE6F8]/75 to-[#E2D9F1]/65",
    iconColourClassName: "text-[#6F638E]",
    highlightClassName:
      "bg-gradient-to-r from-transparent via-[#C9B8EA]/55 to-transparent",
  },
  {
    title: "Ask for support",
    text: "Reach out without needing to find the right words",
    icon: "support",
    cardClassName:
      "border-[#D6E3D9] bg-gradient-to-br from-[#FCFEFB] via-[#E7F2EB] to-[#F7FAF6] hover:border-[#C4D6CA]",
    iconBadgeClassName:
      "border-[#CCDECF] bg-gradient-to-br from-white/85 via-[#E5F1E9]/75 to-[#D8E9DE]/65",
    iconColourClassName: "text-[#5F7A67]",
    highlightClassName:
      "bg-gradient-to-r from-transparent via-[#B7D9C1]/55 to-transparent",
  },
  {
    title: "Linked support",
    text: "Optional, consent-based and strictly view-only",
    icon: "linked",
    cardClassName:
      "border-[#DADAE8] bg-gradient-to-br from-[#FFFCF8] via-[#EFEAF8] to-[#EAF3F6] hover:border-[#C8C8DA]",
    iconBadgeClassName:
      "border-[#D4D1E5] bg-gradient-to-br from-white/85 via-[#ECE7F7]/75 to-[#DEEAF0]/65",
    iconColourClassName: "text-[#6D6688]",
    highlightClassName:
      "bg-gradient-to-r from-transparent via-[#C5C2EA]/55 to-transparent",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const trustPillars = [
    {
      title: "Lived experience",
      text: "Built from everyday reality, not just theory.",
    },
    {
      title: "Emotionally safe",
      text: "Designed to reduce pressure and help support feel softer.",
    },
    {
      title: "Consent-led",
      text: "Shared support is clear, respectful, and under your control.",
    },
    {
      title: "Human-first",
      text: "Technology that helps people feel cared for, not managed.",
    },
  ];

  const audienceCards = [
    {
      title: "People living with epilepsy",
      text: "Oleni is designed to make everyday support feel calmer, clearer, and less repetitive.",
    },
    {
      title: "Partners, carers, and loved ones",
      text: "A view-only, consent-led experience helps support feel connected rather than controlling.",
    },
    {
      title: "Both people, together",
      text: "Oleni is built around the relationship too — helping support feel more joined-up, reassuring, and kind on both sides.",
    },
  ];

  const promiseCards = [
    {
      title: "Support without pressure",
      text: "Oleni is being built to feel steady, reassuring, and never overwhelming.",
    },
    {
      title: "Connection without control",
      text: "Shared support is designed to feel respectful, clear, and safely in your hands.",
    },
    {
      title: "Care you can feel",
      text: "Built to support the person living with epilepsy and the loved one beside them.",
    },
  ];

  const trustSignals = [
    "Designed around lived experience",
    "Focused on reassurance as well as routine",
    "Made for both the person and the loved one beside them",
    "Built to feel caring rather than clinical",
  ];

  return (
    <main id="top" className="min-h-screen bg-white text-[#2F2A26]">
      <header className="sticky top-0 z-40 border-b border-[#EDE5DB] bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-w-0 items-center gap-3 text-xl font-semibold tracking-tight hover:opacity-90"
            >
              <img
                src="/oleni-emblem.png"
                alt="Oleni emblem"
                className="h-14 w-auto md:h-16"
              />
              <div className="min-w-0 leading-tight">
                <img
                  src="/02_oleni_wordmark_transparent.png"
                  alt="Oleni"
                  className="h-9 w-auto md:h-10"
                />
                <div className="mt-1 text-xs font-normal uppercase tracking-[0.18em] text-[#8A7460]">
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
              <a href="/help" className="transition hover:text-[#2F2A26]">
                Help
              </a>
              <a href="#contact" className="transition hover:text-[#2F2A26]">
                Contact
              </a>
            </nav>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-[#2F2A26] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 lg:inline-flex"
            >
              Get Oleni on Google Play
            </a>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#DCCFC1] bg-white text-[#2F2A26] transition hover:bg-[#FAF7F2] lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-current transition ${
                    mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[1.5px] w-5 rounded-full bg-current transition ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[1.5px] w-5 rounded-full bg-current transition ${
                    mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>

          {mobileMenuOpen ? (
            <div className="mt-4 rounded-[1.8rem] border border-[#E7DED4] bg-white p-4 shadow-[0_18px_48px_rgba(47,42,38,0.08)] lg:hidden">
              <nav className="flex flex-col text-sm text-[#5A514A]">
                <a
                  href="#story"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 transition hover:bg-[#FAF7F2] hover:text-[#2F2A26]"
                >
                  Story
                </a>
                <a
                  href="#perspective"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 transition hover:bg-[#FAF7F2] hover:text-[#2F2A26]"
                >
                  Perspective
                </a>
                <a
                  href="#screens"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 transition hover:bg-[#FAF7F2] hover:text-[#2F2A26]"
                >
                  Screens
                </a>
                <a
                  href="#how-it-works"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 transition hover:bg-[#FAF7F2] hover:text-[#2F2A26]"
                >
                  How it works
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 transition hover:bg-[#FAF7F2] hover:text-[#2F2A26]"
                >
                  Pricing
                </a>
                <a
                  href="#privacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 transition hover:bg-[#FAF7F2] hover:text-[#2F2A26]"
                >
                  Privacy
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 transition hover:bg-[#FAF7F2] hover:text-[#2F2A26]"
                >
                  FAQs
                </a>
                <a
                  href="/help"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 transition hover:bg-[#FAF7F2] hover:text-[#2F2A26]"
                >
                  Help
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 transition hover:bg-[#FAF7F2] hover:text-[#2F2A26]"
                >
                  Contact
                </a>
              </nav>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex w-full items-center justify-center rounded-full bg-[#2F2A26] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Get Oleni on Google Play
              </a>
            </div>
          ) : null}
        </div>
      </header>

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-150px] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#F6EFE5] blur-3xl" />
          <div className="absolute right-[-60px] top-[80px] h-[260px] w-[260px] rounded-full bg-[#F2F7FF] blur-3xl" />
          <div className="absolute left-[-80px] top-[300px] h-[220px] w-[220px] rounded-full bg-[#EEF7F4] blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-9 px-6 pb-14 pt-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start lg:gap-9 lg:pb-16 lg:pt-12 xl:gap-11">
          <div className="max-w-2xl lg:max-w-none">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8DED1] bg-[#FCFAF7] px-4 py-2 text-sm text-[#8A7460]">
              <span className="h-2 w-2 rounded-full bg-[#C8A96B]" />
              Calm epilepsy support, shared gently
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-[#2F2A26] md:text-6xl">
              Everyday epilepsy support without the constant pressure
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5A514A] md:text-xl">
              Oleni brings medication reminders, meals, hydration, energy
              check-ins, rest support and gentle communication into one calm app
              — with optional view-only linked support for someone you trust.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#2F2A26] px-7 py-3.5 text-center text-sm font-medium text-white transition hover:opacity-90"
              >
                Get Oleni on Google Play
              </a>

              <a
                href="#how-it-works"
                className="rounded-full border border-[#DCCFC1] px-7 py-3.5 text-center text-sm font-medium text-[#2F2A26] transition hover:bg-[#FAF7F2]"
              >
                See how Oleni works
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3.5 min-[380px]:grid-cols-2 min-[1180px]:grid-cols-3 lg:min-w-0 lg:pt-1">
            {heroFeatures.map((feature) => (
              <div
                key={feature.title}
                className={`group relative flex flex-col items-center overflow-hidden rounded-[1.85rem] border px-5 pb-7 pt-6 text-center shadow-[0_22px_64px_rgba(47,42,38,0.08)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_30px_76px_rgba(47,42,38,0.11)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-7 sm:pb-8 sm:pt-7 ${feature.cardClassName}`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.82),rgba(255,255,255,0.38)_38%,rgba(255,255,255,0)_72%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
                />
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-5 top-0 h-px ${feature.highlightClassName}`}
                />
                <div className="relative flex w-full flex-col items-center text-center">
                  <div
                    aria-hidden="true"
                    className={`relative mb-6 grid h-[92px] w-[92px] place-items-center rounded-full border bg-white/65 shadow-[0_18px_42px_rgba(31,41,55,0.12)] ring-1 ring-white/85 backdrop-blur-sm sm:mb-7 sm:h-[124px] sm:w-[124px] ${feature.iconBadgeClassName} ${feature.iconColourClassName}`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-3 h-7 w-20 rounded-full bg-current opacity-10 blur-xl sm:-bottom-4 sm:h-9 sm:w-24"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-[5px] rounded-full border border-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.88)] sm:inset-[7px]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-4 h-8 w-16 -translate-x-1/2 rounded-full bg-white/35 blur-md sm:top-5 sm:h-10 sm:w-20"
                    />
                    <FeatureIcon name={feature.icon} />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-[18px] right-[20px] h-2 w-2 rounded-full bg-current opacity-40 ring-2 ring-white/80 sm:bottom-7 sm:right-8 sm:h-2.5 sm:w-2.5"
                    />
                  </div>
                  <p className="text-base font-semibold leading-6 text-[#2F2A26] sm:text-lg">
                    {feature.title}
                  </p>
                  <p className="mt-3 max-w-[15rem] text-sm leading-6 text-[#5A514A] sm:text-[15px] sm:leading-7">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
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
                Who Oleni is for
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

      <section id="story" className="scroll-mt-28 md:scroll-mt-32 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#8A7460]">
              Why Oleni exists
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#2F2A26]">
              Built from lived experience
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-9 text-[#5A514A]">
            <p>
              After caring for Jaz for the last nine years, we realised epilepsy
              support is not only about seizures. Often, the hardest part is the
              weight of the everyday moments in between.
            </p>

            <p>
              Conversations like “Have you taken your tablets?”, “Have you had
              enough water today?”, and “Have you eaten?” can repeat day after
              day. For the person living with epilepsy, that can feel tiring,
              frustrating, and heavy. For the partner or carer, it can create
              constant background worry around whether the basics are okay.
            </p>

            <p>
              Medication, hydration, meals, rest, and routine can all shape how
              a day feels — yet memory issues can make even simple things harder
              to hold onto. Oleni was built to take some of that pressure out of
              the day.
            </p>

            <p>
              Instead of constant questions, Oleni quietly helps both people
              stay in step. Gentle reminders, calm check-ins, and consent-led
              shared support are there to reduce stress on both sides. Because
              living with epilepsy — or loving someone who does — should feel
              more supported, not more alone.
            </p>

            <p className="font-medium text-[#2F2A26]">This is the Oleni way.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#FCFAF7]">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm md:p-10">
              <p className="text-sm uppercase tracking-[0.22em] text-[#8A7460]">
                How Oleni was made
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#2F2A26]">
                Built around the reality of everyday support.
              </h3>
              <p className="mt-5 text-base leading-8 text-[#5A514A]">
                Oleni was not imagined from the outside looking in. It has
                been shaped by real routines, repeated conversations, emotional
                weight, and the need to make support feel steadier, softer, and
                more joined-up for both people.
              </p>
              <p className="mt-4 text-base leading-8 text-[#5A514A]">
                The goal has always been simple: create something calm, useful,
                respectful, and genuinely supportive — something that feels more
                like care than management.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#D9C29A] bg-[#FFF9F0] p-8 shadow-sm md:p-10">
              <p className="text-sm uppercase tracking-[0.22em] text-[#8A7460]">
                Founder note
              </p>
              <p className="mt-5 text-xl leading-9 text-[#2F2A26]">
                “Oleni is being built to feel like a little more breathing room
                in the day — calmer, kinder support for the person using it and
                for the one beside them.”
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
                gentle check-ins without pressure. Oleni is designed to help
                everyday support feel clearer, lighter, and calmer.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#2F2A26]">
                For partners and carers
              </h2>
              <p className="mt-4 leading-8 text-[#5A514A]">
                Stay better in sync through consent-based sharing and a view-only
                partner experience. Oleni supports connection without taking
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
                  Oleni promise
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

      <section id="perspective" className="scroll-mt-28 md:scroll-mt-32 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-[#FCFAF7] p-8 shadow-sm md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#8A7460]">
              A lived perspective
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#2F2A26]">
              Living with epilepsy can affect far more than what people see.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-9 text-[#5A514A]">
              <p>
                It can shape confidence, independence, routine, memory, and the
                feel of each day in ways that are often invisible to everyone
                else.
              </p>

              <p>
                Oleni is being built with that understanding at its core —
                not as a cold tracking tool, but as something calmer, more
                human, and more respectful of what everyday life can really feel
                like on the inside.
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

      <section id="screens" className="scroll-mt-28 md:scroll-mt-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
              See Oleni in action
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#2F2A26] md:text-4xl">
              Calm support, shown simply
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#5A514A]">
              Oleni is designed to feel clear, gentle, and easy to follow —
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
                    alt="Oleni daily overview screen"
                    className="block w-full"
                  />
                </div>
              </div>

              <p className="mt-6 text-base font-semibold text-[#2F2A26]">
                Daily overview
              </p>

              <p className="mx-auto mt-2 max-w-[250px] text-sm leading-7 text-[#5A514A]">
                A calm home screen with the day’s support, reminders, and gentle
                reassurance in one place.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-[320px] rounded-[3rem] bg-[#1F1A17] p-[10px] shadow-[0_40px_120px_rgba(47,42,38,0.28)]">
                <div className="relative overflow-hidden rounded-[2.4rem] bg-black">
                  <div className="absolute left-1/2 top-3 z-10 h-7 w-32 -translate-x-1/2 rounded-full bg-black" />
                  <img
                    src="/screens/user-ask-for-support.jpg"
                    alt="Oleni ask for support screen"
                    className="block w-full"
                  />
                </div>
              </div>

              <p className="mt-6 text-base font-semibold text-[#2F2A26]">
                Ask for support
              </p>

              <p className="mx-auto mt-2 max-w-[300px] text-sm leading-7 text-[#5A514A]">
                A simple, low-pressure way to say support is needed without
                adding extra emotional weight.
              </p>
            </div>

            <div className="text-center md:translate-y-10">
              <div className="mx-auto w-[250px] rounded-[2.6rem] bg-[#1F1A17] p-[10px] shadow-[0_20px_60px_rgba(47,42,38,0.18)]">
                <div className="relative overflow-hidden rounded-[2.1rem] bg-black">
                  <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
                  <img
                    src="/screens/partner-support-requested.jpg"
                    alt="Oleni partner support requested screen"
                    className="block w-full"
                  />
                </div>
              </div>

              <p className="mt-6 text-base font-semibold text-[#2F2A26]">
                Partner view
              </p>

              <p className="mx-auto mt-2 max-w-[250px] text-sm leading-7 text-[#5A514A]">
                A view-only screen that helps partners or carers stay in step,
                gently and clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-28 md:scroll-mt-32 bg-[#FCFAF7]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2F2A26] md:text-4xl">
              Small supports that help daily life feel softer
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
                simple check-ins, in a way that feels gentle rather than demanding.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
              <div className="text-sm font-medium text-[#8A7460]">02</div>
              <h3 className="mt-3 text-xl font-semibold text-[#2F2A26]">
                Stay connected clearly
              </h3>
              <p className="mt-4 leading-8 text-[#5A514A]">
                Oleni is designed to keep linked support clear, calm, and under
                your control, so both people feel more settled.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">
              <div className="text-sm font-medium text-[#8A7460]">03</div>
              <h3 className="mt-3 text-xl font-semibold text-[#2F2A26]">
                Ask for support calmly
              </h3>
              <p className="mt-4 leading-8 text-[#5A514A]">
                When support is needed, Oleni helps reduce guesswork and makes it
                easier to reach out without turning the moment into something heavier.
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

      <section id="pricing" className="scroll-mt-28 md:scroll-mt-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2F2A26] md:text-4xl">
              Start free on one phone, or unlock shared support across two for £5.99/month
            </h2>
            <p className="mt-4 leading-8 text-[#5A514A]">
              Oleni Free is for one person using Oleni on a single phone.
              Oleni Premium is for shared support across two linked phones, so a partner,
              carer, or loved one can stay gently in step through consent-based sharing.
            </p>
          </div>

          <div className="mb-6 rounded-[1.6rem] border border-[#E7DED4] bg-[#FCFAF7] p-5">
            <p className="text-sm leading-7 text-[#5A514A]">
              Oleni is live on Google Play for Android. Oleni Premium is managed
              through Google Play at £5.99/month.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-[#E7DED4] bg-[#FCFAF7] p-8 shadow-sm">
              <div className="inline-flex rounded-full border border-[#E2D7CA] bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#8A7460]">
                One phone
              </div>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-[#2F2A26]">Free</h3>
                  <p className="mt-1 text-sm text-[#7A6F66]">£0/month</p>
                </div>
              </div>

              <p className="mt-3 leading-7 text-[#5A514A]">
                For one person using Oleni on their own phone.
              </p>

              <ul className="mt-6 space-y-3 text-[#5A514A]">
                <li>Medication reminders</li>
                <li>Hydration reminders</li>
                <li>Meal reminders</li>
                <li>Gentle check-ins</li>
                <li>Support requested flow</li>
                <li>Calm daily routine support on one device</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#D9C29A] bg-[#FFF9F0] p-8 shadow-sm">
              <div className="inline-flex rounded-full border border-[#E3CFAB] bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#8A7460]">
                Two linked phones
              </div>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-[#2F2A26]">Premium</h3>
                  <p className="mt-1 text-sm font-medium text-[#7A6F66]">£5.99/month</p>
                </div>
              </div>

              <p className="mt-3 leading-7 text-[#5A514A]">
                Everything in Free, plus shared support between the person using
                Oleni and a partner, carer, or loved one on a separate phone.
              </p>

              <ul className="mt-6 space-y-3 text-[#5A514A]">
                <li>Everything in Free</li>
                <li>Shared support across two separate phones</li>
                <li>View-only partner/carer connection</li>
                <li>Consent-based shared support updates</li>
                <li>Premium linked support features as Oleni grows</li>
              </ul>

              <p className="mt-6 text-sm text-[#7A6F66]">
                Simple monthly pricing for shared support. More options can be added later as Oleni grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="privacy" className="scroll-mt-28 md:scroll-mt-32 bg-[#FCFAF7]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
              Privacy & consent
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2F2A26] md:text-4xl">
              Built around consent, clarity, and calmer communication
            </h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#5A514A]">
              Oleni is designed to reduce pressure, not create it. Shared support is
              clear, consent-based, and focused on calm day-to-day support rather than
              surveillance.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-[#FAF7F2] p-5">
                <p className="font-semibold text-[#2F2A26]">Linked support stays in your control</p>
                <p className="mt-2 text-sm leading-7 text-[#5A514A]">
                  Linked support is designed to feel clear, respectful, and easy to stop by unlinking the other phone.
                </p>
              </div>
              <div className="rounded-2xl bg-[#FAF7F2] p-5">
                <p className="font-semibold text-[#2F2A26]">Partner mode is view-only</p>
                <p className="mt-2 text-sm leading-7 text-[#5A514A]">
                  Partner or carer support is there to help someone stay in step, not to take
                  control away from them.
                </p>
              </div>
              <div className="rounded-2xl bg-[#FAF7F2] p-5">
                <p className="font-semibold text-[#2F2A26]">Medication names stay private</p>
                <p className="mt-2 text-sm leading-7 text-[#5A514A]">
                  Oleni is built around timing, routine, and reassurance rather than exposing
                  personal medical details.
                </p>
              </div>
              <div className="rounded-2xl bg-[#FAF7F2] p-5">
                <p className="font-semibold text-[#2F2A26]">Not a medical or emergency service</p>
                <p className="mt-2 text-sm leading-7 text-[#5A514A]">
                  Oleni supports everyday routines and communication. It is not seizure
                  tracking, diagnosis, emergency monitoring, or urgent support.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <a
                href="/privacy"
                className="rounded-full border border-[#DCCFC1] px-5 py-2.5 text-[#2F2A26] transition hover:bg-[#FAF7F2]"
              >
                Read Privacy Policy
              </a>
              <a
                href="/terms"
                className="rounded-full border border-[#DCCFC1] px-5 py-2.5 text-[#2F2A26] transition hover:bg-[#FAF7F2]"
              >
                Read Terms of Use
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-28 md:scroll-mt-32 bg-white">
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
                Is Oleni a medical device?
              </h3>
              <p className="mt-2 leading-7 text-[#5A514A]">
                No. Oleni supports routines, communication, and day-to-day reassurance. It does
                not provide diagnosis, treatment, or medical advice.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7DED4] bg-[#FCFAF7] p-6 shadow-sm">
              <h3 className="font-semibold text-[#2F2A26]">
                Is Oleni emergency support?
              </h3>
              <p className="mt-2 leading-7 text-[#5A514A]">
                No. Oleni is not an emergency service or urgent monitoring tool. If urgent help
                is needed, contact emergency services or the appropriate healthcare support.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7DED4] bg-[#FCFAF7] p-6 shadow-sm">
              <h3 className="font-semibold text-[#2F2A26]">
                What can a partner or carer see?
              </h3>
              <p className="mt-2 leading-7 text-[#5A514A]">
                Oleni is designed to share calm support information only, such as whether
                something has been marked, whether support has been requested, and shared routine
                timing. Medication names are not shown.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7DED4] bg-[#FCFAF7] p-6 shadow-sm">
              <h3 className="font-semibold text-[#2F2A26]">
                Can a partner control the app?
              </h3>
              <p className="mt-2 leading-7 text-[#5A514A]">
                No. Partner features are designed to be view-only and consent-based, so support can
                feel connected without becoming controlling.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7DED4] bg-[#FCFAF7] p-6 shadow-sm">
              <h3 className="font-semibold text-[#2F2A26]">
                What happens if a reminder is missed?
              </h3>
              <p className="mt-2 leading-7 text-[#5A514A]">
                Oleni is designed to encourage calm follow-through, not panic. Depending on the
                settings chosen, the app may show the reminder as still open and may gently involve
                a partner or carer when phones are linked for support.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7DED4] bg-[#FCFAF7] p-6 shadow-sm">
              <h3 className="font-semibold text-[#2F2A26]">
                Can linked support be stopped?
              </h3>
              <p className="mt-2 leading-7 text-[#5A514A]">
                Yes. Linked support can be stopped by unlinking the other phone in Oleni settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="launch" className="scroll-mt-28 md:scroll-mt-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 rounded-[2.2rem] border border-[#D9C29A] bg-[#FFF9F0] p-8 shadow-sm md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
                Android first
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#2F2A26] md:text-4xl">
                Oleni is ready for Google Play
              </h2>
              <p className="mt-4 max-w-xl leading-8 text-[#5A514A]">
                Start free on one phone, or unlock Oleni Premium for linked support
                across two phones at £5.99/month through Google Play.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#5A514A]">
                <span className="rounded-full border border-[#E6D7C4] bg-white px-4 py-2">
                  Free on one phone
                </span>
                <span className="rounded-full border border-[#E6D7C4] bg-white px-4 py-2">
                  Premium linked support
                </span>
                <span className="rounded-full border border-[#E6D7C4] bg-white px-4 py-2">
                  Calm support, shared gently
                </span>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-[#E8D8C4] bg-white p-5 shadow-[0_18px_48px_rgba(47,42,38,0.06)] md:p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
                Download
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#2F2A26]">
                Get Oleni for Android
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5A514A]">
                Oleni is available now on Google Play for Android. Download Oleni
                for calm everyday epilepsy support and optional, consent-based,
                strictly view-only linked support.
              </p>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#2F2A26] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Open Oleni on Google Play
              </a>
              <p className="mt-4 text-xs leading-6 text-[#7A6F66]">
                Subscriptions are managed securely through Google Play. Oleni does
                not provide medical advice, emergency monitoring, or seizure tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 md:scroll-mt-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-12">
          <div className="rounded-[2rem] border border-[#E7DED4] bg-[#FCFAF7] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#2F2A26]">Contact</h2>
            <p className="mt-4 leading-8 text-[#5A514A]">
              Questions, feedback, or partnership ideas? Get in touch at{" "}
              <a href="mailto:hello@oleni.app" className="underline">
                hello@oleni.app
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#F0E8DE] bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#6C635C] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Oleni. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            <a href="/privacy" className="hover:opacity-70">
              Privacy
            </a>
            <a href="/terms" className="hover:opacity-70">
              Terms
            </a>
            <a href="/help" className="hover:opacity-70">
              Help
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
