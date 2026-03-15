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
    <main
      id="top"
      className="min-h-screen bg-[#FAF7F2] text-[#2F2A26] bg-[radial-gradient(circle_at_top,_rgba(200,169,107,0.10),_transparent_35%)]"
    >

      {/* HEADER */}

      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#FAF7F2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <a
            href="#top"
            className="flex items-center gap-3 text-xl font-bold tracking-tight hover:opacity-80"
          >
            <img
              src="/bondwell-icon.png"
              alt="BondWell logo"
              className="h-20 w-auto"
            />
            <span>BondWell</span>
          </a>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#how-it-works" className="hover:opacity-70">How it works</a>
            <a href="#screens" className="hover:opacity-70">Screens</a>
            <a href="#pricing" className="hover:opacity-70">Pricing</a>
            <a href="#privacy" className="hover:opacity-70">Privacy</a>
            <a href="#faq" className="hover:opacity-70">FAQs</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>

          <a
            href="#launch"
            className="rounded-full bg-[#C8A96B] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Join launch list
          </a>

        </div>
      </header>

      {/* HERO */}

      <section className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">

        <div>

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#8A7460]">
            Built from real epilepsy support
          </p>

          <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
            Support that helps both people feel calmer.
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#5A514A]">
            BondWell is a gentle routine and support app designed for people
            living with epilepsy and the partner or carer supporting them.
            <br /><br />
            Built from real life experience caring for epilepsy for over nine
            years.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="#launch"
              className="rounded-full bg-[#2F2A26] px-6 py-3 text-sm text-white hover:opacity-90"
            >
              Join the launch list
            </a>

            <a
              href="#how-it-works"
              className="rounded-full border border-[#D8CEC2] px-6 py-3 text-sm hover:bg-white/60"
            >
              See how BondWell works
            </a>

          </div>

          <p className="mt-6 text-sm text-[#7A6F66]">
            Built with both a carer perspective and the lived experience of epilepsy.
          </p>

        </div>

        <div className="relative flex justify-center">

          <div className="absolute -top-10 h-[420px] w-[420px] rounded-full bg-[#C8A96B]/10 blur-3xl"></div>

          <div className="relative w-[320px] animate-[float_7s_ease-in-out_infinite] rounded-[3rem] bg-[#1F1A17] p-[10px] shadow-[0_40px_120px_rgba(47,42,38,0.28)]">

            <div className="relative overflow-hidden rounded-[2.4rem] bg-black">

              <div className="absolute left-1/2 top-3 h-7 w-32 -translate-x-1/2 rounded-full bg-black"></div>

              <img
                src="/screens/user-home.jpg"
                alt="BondWell daily overview"
                className="block w-full"
              />

            </div>

          </div>

        </div>

      </section>

      {/* TRUST STRIP */}

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid gap-4 md:grid-cols-3">

          <div className="rounded-[1.75rem] border border-[#E7DED4] bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.15em] text-[#8A7460]">
              Built from real life
            </p>
            <p className="mt-3 text-[#5A514A]">
              Created through real experience of caring for epilepsy and living with it day to day.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#E7DED4] bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.15em] text-[#8A7460]">
              Consent based
            </p>
            <p className="mt-3 text-[#5A514A]">
              BondWell supports connection without taking control away from the person using it.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[#E7DED4] bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.15em] text-[#8A7460]">
              Calm by design
            </p>
            <p className="mt-3 text-[#5A514A]">
              Gentle routines, clearer communication and less pressure for both people.
            </p>
          </div>

        </div>
      </section>

      {/* REST OF PAGE CONTINUES */}
