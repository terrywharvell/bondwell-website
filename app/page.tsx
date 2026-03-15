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
      className="min-h-screen bg-[#FAF7F2] text-[#2F2A26]"
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

<section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">

  <div>

    <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#8A7460]">
      Calm support, shared gently
    </p>

    <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
      BondWell helps support feel calmer — for both of you.
    </h1>

    <p className="mt-6 text-lg leading-8 text-[#5A514A]">
      A gentle routine app for people living with epilepsy and the partner
      supporting them.
    </p>

    <div className="mt-8 flex gap-4">

      <a
        href="#launch"
        className="rounded-full bg-[#2F2A26] px-6 py-3 text-white"
      >
        Join the launch list
      </a>

      <a
        href="#how-it-works"
        className="rounded-full border border-[#D8CEC2] px-6 py-3"
      >
        See how it works
      </a>

    </div>

  </div>

  <div className="flex justify-center">

    <div className="w-[320px] rounded-[3rem] bg-[#1F1A17] p-[10px] shadow-xl">

      <div className="overflow-hidden rounded-[2.4rem] bg-black">

        <img
          src="/screens/user-home.jpg"
          alt="BondWell screen"
          className="block w-full"
        />

      </div>

    </div>

  </div>

</section>


{/* WHY BONDWELL EXISTS */}

<section className="mx-auto max-w-5xl px-6 py-20 text-center">

  <p className="text-sm uppercase tracking-[0.25em] text-[#8A7460]">
    Why BondWell exists
  </p>

  <h2 className="mt-4 text-4xl font-semibold">
    Built from real life experience
  </h2>

  <p className="mt-8 text-lg leading-9 text-[#5A514A]">

After caring for Jaz for the last nine years we realised epilepsy support is not just about seizures.

The hardest part can often be the daily moments in between.

Conversations like  
“Have you taken your tablets?”  
“Have you had enough water today?”  
“Have you eaten?”  

start to repeat day after day.

For the person living with epilepsy it can feel frustrating and stressful.  
For the partner or carer it can create constant anxiety not knowing if the basics have been done.

Medication, hydration, rest and routine can all affect seizure risk — yet memory issues can make these simple things difficult to track.

BondWell was built to remove that pressure.

Instead of constant questions, the app quietly keeps both people in sync.

Medication reminders, hydration prompts and gentle check-ins help reduce the stress on both sides.

Because living with epilepsy — or caring for someone who does — should bring people closer together, not create more anxiety.

This is the BondWell way.

  </p>

</section>

    </main>
  );
}
