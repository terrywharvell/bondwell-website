"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (!res.ok) {
        const errorText =
          typeof data?.error === "string" ? data.error.toLowerCase() : "";

        if (
          errorText.includes("duplicate") ||
          errorText.includes("already on the list") ||
          errorText.includes("already")
        ) {
          setStatus("error");
          setMessage("You’re already on the BondWell waitlist.");
          return;
        }

        setStatus("error");
        setMessage("Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You’re on the list. We’ll keep you updated.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-sm">
              B
            </div>
            <div>
              <p className="text-base font-semibold tracking-tight text-slate-950">BondWell</p>
              <p className="text-xs text-slate-500">Built with lived experience</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#story" className="text-sm text-slate-600 transition hover:text-slate-950">
              Story
            </a>
            <a href="#perspective" className="text-sm text-slate-600 transition hover:text-slate-950">
              Perspective
            </a>
            <a href="#features" className="text-sm text-slate-600 transition hover:text-slate-950">
              Features
            </a>
            <a href="#waitlist" className="text-sm text-slate-600 transition hover:text-slate-950">
              Waitlist
            </a>
          </nav>

          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Join waitlist
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-160px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-100/70 blur-3xl" />
          <div className="absolute right-[-80px] top-[120px] h-[240px] w-[240px] rounded-full bg-indigo-100/60 blur-3xl" />
          <div className="absolute left-[-60px] top-[260px] h-[220px] w-[220px] rounded-full bg-emerald-100/50 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Calm daily support for epilepsy and caring
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              A calmer, more supportive way to live with epilepsy together.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              BondWell is being built to support people living with epilepsy and the carers,
              partners, and loved ones beside them — through routines, reassurance, and
              thoughtful daily connection.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3.5 text-base font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Join the waitlist
              </a>

              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-base font-medium text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400"
              >
                Why BondWell exists
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">Built from real life</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Created from lived experience, not just an idea.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">Calm by design</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Supportive, clear, and never overwhelming.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">For both sides</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Helping the person and the carer feel more connected.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.18)]">
              <div className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-4">
                <div className="rounded-[1.4rem] bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">BondWell preview</p>
                      <p className="text-lg font-semibold text-slate-950">Designed to feel reassuring</p>
                    </div>
                    <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-500">
                      Early build
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm text-slate-500">Daily routine</p>
                          <p className="mt-1 text-base font-semibold text-slate-950">
                            Medication reminder gently delivered
                          </p>
                        </div>
                        <span className="mt-1 h-3 w-3 rounded-full bg-emerald-500" />
                      </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm text-slate-500">Shared support</p>
                          <p className="mt-1 text-base font-semibold text-slate-950">
                            Partner can feel informed without needing to chase
                          </p>
                        </div>
                        <span className="mt-1 h-3 w-3 rounded-full bg-sky-500" />
                      </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm text-slate-500">Calm communication</p>
                          <p className="mt-1 text-base font-semibold text-slate-950">
                            Built for reassurance, not more pressure
                          </p>
                        </div>
                        <span className="mt-1 h-3 w-3 rounded-full bg-indigo-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-lg md:block">
              <p className="text-sm font-semibold text-slate-950">Human-first</p>
              <p className="mt-1 max-w-[220px] text-sm leading-6 text-slate-600">
                BondWell is being shaped around how life actually feels, day to day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:px-8 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Premium feel
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Clean, calm design that feels reassuring from the first visit.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Real purpose
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Built around daily life, not just crisis moments.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Trustworthy tone
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Gentle language for people living with epilepsy and carers.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Early access
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Join the waitlist to follow the journey from the beginning.
            </p>
          </div>
        </div>
      </section>

      <section id="story" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Why BondWell exists
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              This did not start as a business idea. It started from real life.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              BondWell grew from lived experience of epilepsy, caring, daily routines, and
              the emotional weight that can sit quietly behind everyday life.
            </p>
            <p>
              It comes from seeing how much support is needed in the small moments — keeping
              on top of routines, staying connected, reducing stress, and helping both people
              feel a little steadier.
            </p>
            <p>
              The aim is simple: create something that feels calm, modern, thoughtful, and
              genuinely useful for the person living with epilepsy and the person supporting
              them beside the scenes.
            </p>
          </div>
        </div>
      </section>

      <section id="perspective" className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
              Jaz’s perspective
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Living with epilepsy affects far more than what people see.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                It can shape confidence, routine, independence, and the rhythm of each day in
                ways that are often invisible from the outside.
              </p>
              <p>
                BondWell is being built with that understanding at its core — not as a cold
                tracking tool, but as something calmer, more human, and more respectful of
                what everyday life can really feel like.
              </p>
              <p>
                The goal is support without overwhelm, connection without pressure, and a
                product that feels like it belongs in a person’s life with dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              What BondWell is being built to support
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Thoughtful support for everyday life.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 h-10 w-10 rounded-2xl bg-sky-100" />
              <h3 className="text-lg font-semibold text-slate-950">Gentle reminders</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Medication, hydration, meals, and routines supported in a calm, easy-to-follow way.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 h-10 w-10 rounded-2xl bg-emerald-100" />
              <h3 className="text-lg font-semibold text-slate-950">Shared reassurance</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Helping carers and partners feel more informed without constant checking.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 h-10 w-10 rounded-2xl bg-indigo-100" />
              <h3 className="text-lg font-semibold text-slate-950">Supportive connection</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Built to strengthen communication in the moments that matter most.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 h-10 w-10 rounded-2xl bg-amber-100" />
              <h3 className="text-lg font-semibold text-slate-950">Human-first design</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Made to feel clear, modern, respectful, and emotionally safe to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Trust signals
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                Built with care, clarity, and purpose.
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Designed around lived experience",
                  "Focused on emotional reassurance as well as routine",
                  "Made for both the person and the carer",
                  "Built to feel calm rather than clinical",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-950" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                BondWell promise
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Technology should make life feel lighter, not louder.
              </h3>
              <p className="mt-6 text-base leading-8 text-slate-300">
                BondWell is being shaped to support routine, communication, reassurance, and
                daily steadiness — with a calmer tone from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Early access
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Join the BondWell waitlist
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Be first to hear when BondWell launches and follow the journey as we build a
              calmer support platform for people living with epilepsy and the people who care for them.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-5 py-3.5 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Joining..." : "Join the waitlist"}
              </button>

              <p className="text-xs leading-6 text-slate-500">
                We’ll only use your email for BondWell updates and launch news.
              </p>

              {message ? (
                <div
                  aria-live="polite"
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    status === "success"
                      ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border border-rose-200 bg-rose-50 text-rose-700"
                  }`}
                >
                  {message}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-8">
          <p>BondWell — calm support for people living with epilepsy and carers.</p>
          <a href="#waitlist" className="font-medium text-slate-700 transition hover:text-slate-950">
            Join the waitlist
          </a>
        </div>
      </footer>
    </main>
  );
}