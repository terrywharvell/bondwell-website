export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2F2A26]">

<header className="sticky top-0 z-20 border-b border-black/5 bg-[#FAF7F2]/95 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

<div className="text-xl font-semibold tracking-tight">
BondWell
</div>

<nav className="hidden gap-6 text-sm md:flex">
<a href="#how-it-works">How it works</a>
<a href="#screens">Screens</a>
<a href="#pricing">Pricing</a>
<a href="#privacy">Privacy</a>
<a href="#faq">FAQs</a>
<a href="#contact">Contact</a>
</nav>

<a
href="#launch"
className="rounded-full bg-[#C8A96B] px-4 py-2 text-sm text-white"
>
Join launch list
</a>

</div>
</header>

<section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">

<div>

<p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#8A7460]">
Calm support, shared gently
</p>

<h1 className="text-4xl md:text-6xl font-semibold leading-tight">
BondWell helps support feel calmer — for both of you.
</h1>

<p className="mt-6 text-lg leading-8 text-[#5A514A]">
A gentle routine app for people living with epilepsy and the person
who supports them. Reminders, check-ins, and a clear support
requested flow — always consent-based.
</p>

<div className="mt-8 flex flex-col gap-4 sm:flex-row">

<a
href="#launch"
className="rounded-full bg-[#2F2A26] px-6 py-3 text-sm text-white"
>
Join the launch list
</a>

<a
href="#how-it-works"
className="rounded-full border border-[#D8CEC2] px-6 py-3 text-sm"
>
See how it works
</a>

</div>

</div>

<div className="rounded-[2rem] border border-[#E7DED4] bg-white p-8 shadow-sm">

<div className="space-y-4">

<div className="rounded-2xl bg-[#F6F1EA] p-4">
<p className="text-sm text-[#8A7460]">Gentle reminder</p>
<p className="mt-2 text-base">Medication due soon</p>
</div>

<div className="rounded-2xl bg-[#FAF7F2] p-4">
<p className="text-sm text-[#8A7460]">Quick check-in</p>
<p className="mt-2 text-base">A simple way to say how you’re doing</p>
</div>

<div className="rounded-2xl bg-[#F6F1EA] p-4">
<p className="text-sm text-[#8A7460]">Support requested</p>
<p className="mt-2 text-base">
Clear calm communication when extra support is needed
</p>
</div>

</div>
</div>

<section id="screens" className="mx-auto max-w-6xl px-6 py-20">
  <div className="mb-10 max-w-2xl">
    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A7460]">
      See BondWell in action
    </p>
    <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
      Real screens, designed to feel calm and clear
    </h2>
    <p className="mt-4 leading-8 text-[#5A514A]">
      BondWell is built to reduce noise and make everyday support easier
      to understand. Gentle prompts, calmer wording, and a clear view of
      what matters right now.
    </p>
  </div>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-4 shadow-sm">
      <div className="mx-auto w-full max-w-[280px] rounded-[2.8rem] bg-[#1F1A17] p-[10px] shadow-[0_25px_80px_rgba(47,42,38,0.18)]">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-black">
          <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
          <img
            src="/screens/partner-support-requested.jpg"
            alt="BondWell partner screen showing support requested"
            className="block w-full"
          />
        </div>
      </div>
      <p className="mt-5 text-base font-semibold">Support requested</p>
      <p className="mt-2 text-sm leading-7 text-[#5A514A]">
        A calm, easy-to-read partner view that helps reduce guesswork.
      </p>
    </div>

    <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-4 shadow-sm">
      <div className="mx-auto w-full max-w-[280px] rounded-[2.8rem] bg-[#1F1A17] p-[10px] shadow-[0_25px_80px_rgba(47,42,38,0.18)]">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-black">
          <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
          <img
            src="/screens/support-acknowledged.jpg"
            alt="BondWell screen showing support acknowledged"
            className="block w-full"
          />
        </div>
      </div>
      <p className="mt-5 text-base font-semibold">Support acknowledged</p>
      <p className="mt-2 text-sm leading-7 text-[#5A514A]">
        Clear reassurance when support has been seen, with gentle next steps.
      </p>
    </div>

    <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-4 shadow-sm">
      <div className="mx-auto w-full max-w-[280px] rounded-[2.8rem] bg-[#1F1A17] p-[10px] shadow-[0_25px_80px_rgba(47,42,38,0.18)]">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-black">
          <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
          <img
            src="/screens/thinking-of-you.jpg"
            alt="BondWell screen showing a calm supportive message"
            className="block w-full"
          />
        </div>
      </div>
      <p className="mt-5 text-base font-semibold">Gentle connection</p>
      <p className="mt-2 text-sm leading-7 text-[#5A514A]">
        Small supportive moments that help both people feel more in sync.
      </p>
    </div>

    <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-4 shadow-sm">
      <div className="mx-auto w-full max-w-[280px] rounded-[2.8rem] bg-[#1F1A17] p-[10px] shadow-[0_25px_80px_rgba(47,42,38,0.18)]">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-black">
          <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
          <img
            src="/screens/resting.jpg"
            alt="BondWell screen showing resting status and need rest energy option"
            className="block w-full"
          />
        </div>
      </div>
      <p className="mt-5 text-base font-semibold">Energy and rest</p>
      <p className="mt-2 text-sm leading-7 text-[#5A514A]">
        Simple status sharing that helps communicate how the day feels.
      </p>
    </div>

    <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-4 shadow-sm">
      <div className="mx-auto w-full max-w-[280px] rounded-[2.8rem] bg-[#1F1A17] p-[10px] shadow-[0_25px_80px_rgba(47,42,38,0.18)]">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-black">
          <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
          <img
            src="/screens/user-ask-for-support.jpg"
            alt="BondWell user home screen with ask for support button"
            className="block w-full"
          />
        </div>
      </div>
      <p className="mt-5 text-base font-semibold">Ask for support</p>
      <p className="mt-2 text-sm leading-7 text-[#5A514A]">
        A clear, low-pressure way to ask for help when it’s needed.
      </p>
    </div>

    <div className="rounded-[2rem] border border-[#E7DED4] bg-white p-4 shadow-sm">
      <div className="mx-auto w-full max-w-[280px] rounded-[2.8rem] bg-[#1F1A17] p-[10px] shadow-[0_25px_80px_rgba(47,42,38,0.18)]">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-black">
          <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
          <img
            src="/screens/user-home.jpg"
            alt="BondWell home screen with daily support, energy and quick status"
            className="block w-full"
          />
        </div>
      </div>
      <p className="mt-5 text-base font-semibold">Daily overview</p>
      <p className="mt-2 text-sm leading-7 text-[#5A514A]">
        Key information at a glance, without overwhelming the screen.
      </p>
    </div>
  </div>
</section>

<section id="pricing" className="mx-auto max-w-6xl px-6 py-20">

<h2 className="text-3xl font-semibold mb-10">
Simple pricing
</h2>

<div className="grid md:grid-cols-2 gap-6">

<div className="border rounded-2xl p-8 bg-white">
<h3 className="text-xl font-semibold mb-4">Free</h3>

<ul className="space-y-2 text-[#5A514A]">
<li>Medication reminders</li>
<li>Hydration reminders</li>
<li>Meal reminders</li>
<li>Gentle check-ins</li>
<li>Support requested flow</li>
</ul>

</div>

<div className="border rounded-2xl p-8 bg-[#FFF9F0]">
<h3 className="text-xl font-semibold mb-4">Premium</h3>

<ul className="space-y-2 text-[#5A514A]">
<li>Everything in Free</li>
<li>Linking across phones</li>
<li>Partner connection</li>
<li>Future device linking</li>
</ul>

</div>

</div>

</section>

<section id="contact" className="mx-auto max-w-6xl px-6 pb-20">

<div className="border rounded-2xl bg-white p-8">

<h2 className="text-2xl font-semibold">
Contact
</h2>

<p className="mt-4 text-[#5A514A]">
Questions or feedback?
</p>

<p className="mt-2">
<a href="mailto:hello@bondwell.co.uk" className="underline">
hello@bondwell.co.uk
</a>
</p>

</div>

</section>

</main>
);
}