import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

async function getWaitlistCount() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Change "waitlist" to your actual table name if needed
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Waitlist count error:", error.message);
      return 0;
    }

    return count ?? 0;
  } catch (error) {
    console.error("Supabase connection error:", error);
    return 0;
  }
}

export default async function Home() {
  const waitlistCount = await getWaitlistCount();

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="absolute inset-0 -z-10 opacity-70">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-100 blur-3xl" />
          <div className="absolute right-0 top-40 h-[320px] w-[320px] rounded-full bg-indigo-100 blur-3xl" />
          <div className="absolute left-0 top-56 h-[280px] w-[280px] rounded-full bg-emerald-100 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              Built for people living with epilepsy and the people who care for them
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Calm daily support for life with epilepsy.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              BondWell helps people with epilepsy and their carers stay connected,
              reassured, and supported through routines, reminders, and gentle daily check-ins.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-base font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Join the waitlist
              </a>

              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400"
              >
                Why BondWell exists
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-2xl font-semibold text-slate-950">{waitlistCount}+</p>
                <p className="mt-1 text-sm text-slate-600">people already interested</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-2xl font-semibold text-slate-950">Built with care</p>
                <p className="mt-1 text-sm text-slate-600">designed from real lived experience</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-2xl font-semibold text-slate-950">Calm-first</p>
                <p className="mt-1 text-sm text-slate-600">supportive, not overwhelming</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/60">
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">BondWell</p>
                    <p className="text-xl font-semibold">A calmer way to stay connected</p>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                    Preview
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-sm text-slate-300">Today’s support</p>
                    <p className="mt-1 text-lg font-medium">Medication reminder sent</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Gentle prompts that help daily routines feel lighter.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-sm text-slate-300">Partner reassurance</p>
                    <p className="mt-1 text-lg font-medium">Check-in received</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Helping carers feel informed without adding pressure.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <p className="text-sm text-slate-300">Designed for real life</p>
                    <p className="mt-1 text-lg font-medium">Simple, supportive, calm</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Built for everyday use, not just crisis moments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-lg md:block">
              <p className="text-sm font-medium text-slate-900">Made for both sides</p>
              <p className="mt-1 text-sm text-slate-600">
                Support for the person living with epilepsy and the person caring beside them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:px-8 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Calm by design
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Built to reduce overwhelm and encourage reassurance.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Lived experience
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Shaped around the realities of epilepsy and caring.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Daily support
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Focused on routines, reminders, and emotional steadiness.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Human-first
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Technology that supports connection, not noise.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Why BondWell exists
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Born from real life, not just an idea.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              BondWell was created from lived experience of supporting someone through
              epilepsy day after day — the routines, the uncertainty, the emotional load,
              and the need for simple reassurance.
            </p>
            <p>
              Most tools focus on isolated features. BondWell is being built around the
              full picture: reminders, support, communication, and helping both people
              feel a little steadier in everyday life.
            </p>
            <p>
              The goal is not to make life feel more clinical. The goal is to make it feel
              more supported, more connected, and less heavy.
            </p>
          </div>
        </div>
      </section>

      {/* JAZ SECTION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
              A lived perspective
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Jaz’s perspective
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Living with epilepsy can affect far more than the moments people see.
                It can shape routines, independence, confidence, and the way each day is planned.
              </p>

              <p>
                BondWell is being built with that understanding at its core — not as a cold
                tracking tool, but as something that feels calm, supportive, and respectful.
              </p>

              <p>
                It is about helping someone feel supported without feeling defined by their condition,
                and helping carers feel connected without adding more stress to daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES / VALUE */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              What BondWell helps with
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Support designed for everyday life.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-950">Gentle reminders</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Medication, hydration, meals, and routines supported in a calmer way.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-950">Shared reassurance</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Helping carers feel connected without constant checking or added pressure.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-950">Calm communication</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Encouraging supportive contact when it matters most.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-950">Human-first design</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Built to feel trustworthy, simple, and emotionally safe to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Early access
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Join the BondWell waitlist
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Be among the first to hear when BondWell launches and follow the journey as we build
              a calmer support platform for people living with epilepsy and their carers.
            </p>

            <div className="mt-8 inline-flex rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
              <div>
                <p className="text-2xl font-semibold text-white">{waitlistCount}+</p>
                <p className="text-sm text-slate-300">people already on the journey</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <form action="/api/waitlist" method="POST" className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Join the waitlist
              </button>

              <p className="text-xs leading-6 text-slate-400">
                We’ll only use your email for BondWell updates and launch news.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            BondWell is being built to make daily life feel a little lighter.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            For the person living with epilepsy. For the partner, carer, or loved one beside them.
            For the moments that need calm support, not more pressure.
          </p>
          <div className="mt-8">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}