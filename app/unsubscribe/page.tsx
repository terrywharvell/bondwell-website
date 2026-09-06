import { findWaitlistEntryByToken } from "@/lib/waitlistUnsubscribe";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email preferences",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: null,
  },
};

type SearchParams = Promise<{
  token?: string;
  status?: string;
  email?: string;
}>;

function getMessage(status: string | undefined, email?: string) {
  switch (status) {
    case "success":
      return {
        title: "You’ve been unsubscribed",
        body: email
          ? `${email} will no longer receive Oleni updates.`
          : "You will no longer receive Oleni updates.",
      };
    case "already":
      return {
        title: "You’re already unsubscribed",
        body: email
          ? `${email} is already unsubscribed from Oleni updates.`
          : "This email is already unsubscribed from Oleni updates.",
      };
    case "invalid":
      return {
        title: "This unsubscribe link isn’t valid",
        body: "The link may be incomplete or out of date. You can email hello@oleni.app if you need help.",
      };
    case "error":
      return {
        title: "We couldn’t process that just now",
        body: "Please try again in a moment, or email hello@oleni.app and we’ll sort it for you.",
      };
    default:
      return null;
  }
}

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const token = params.token?.trim();
  const status = params.status?.trim();
  const resultMessage = getMessage(status, params.email?.trim());

  let entry: Awaited<ReturnType<typeof findWaitlistEntryByToken>> | null = null;

  if (token && !status) {
    try {
      entry = await findWaitlistEntryByToken(token);
    } catch (error) {
      console.error("Unsubscribe page lookup error", error);
    }
  }

  const canConfirm = Boolean(token && entry?.state === "active" && !status);
  const alreadyUnsubscribed = Boolean(
    token && entry?.state === "suppressed" && !status
  );

  return (
    <main className="min-h-screen bg-[#FCFAF7] px-6 py-12 text-[#2F2A26]">
      <div className="mx-auto max-w-2xl">
        <section className="rounded-[2rem] border border-[#E9DED2] bg-white p-8 shadow-[0_16px_50px_rgba(47,42,38,0.08)] sm:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-[#8A7460]">
            Oleni
          </p>

          {resultMessage ? (
            <>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#2F2A26]">
                {resultMessage.title}
              </h1>
              <p className="mt-4 text-base leading-7 text-[#5A514A]">
                {resultMessage.body}
              </p>
            </>
          ) : canConfirm ? (
            <>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#2F2A26]">
                Unsubscribe from Oleni updates?
              </h1>
              <p className="mt-4 text-base leading-7 text-[#5A514A]">
                {entry?.email} will stop receiving Oleni updates.
              </p>
              <form action="/api/unsubscribe" method="POST" className="mt-8">
                <input type="hidden" name="token" value={token} />
                <button
                  type="submit"
                  className="rounded-full bg-[#2F2A26] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Confirm unsubscribe
                </button>
              </form>
              <p className="mt-4 text-sm leading-6 text-[#8A7460]">
                If you change your mind later, just join the Oleni updates list again.
              </p>
            </>
          ) : alreadyUnsubscribed ? (
            <>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#2F2A26]">
                You’re already unsubscribed
              </h1>
              <p className="mt-4 text-base leading-7 text-[#5A514A]">
                {entry?.email || "This email"} is already unsubscribed from Oleni updates.
              </p>
            </>
          ) : (
            <>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#2F2A26]">
                Unsubscribe from Oleni updates
              </h1>
              <p className="mt-4 text-base leading-7 text-[#5A514A]">
                This link may be incomplete or missing. Please use the unsubscribe link from your email, or contact hello@oleni.app.
              </p>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
