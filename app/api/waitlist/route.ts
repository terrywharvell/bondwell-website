import { NextResponse } from "next/server";
import { sendWaitlistAutoreply } from "@/lib/waitlistAutoreply";
import {
  buildUnsubscribeUrl,
  createUnsubscribeToken,
  findActiveWaitlistEntryByEmail,
  getWaitlistSupabaseConfig,
  getWaitlistSupabaseHeaders,
  removeWaitlistSuppressionByEmail,
} from "@/lib/waitlistUnsubscribe";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const config = getWaitlistSupabaseConfig();

    if (!config) {
      return NextResponse.json(
        { error: "Server is missing Supabase environment variables." },
        { status: 500 }
      );
    }

    const existingActiveEntry = await findActiveWaitlistEntryByEmail(cleanEmail);

    if (existingActiveEntry) {
      return NextResponse.json(
        { error: "That email is already on the list." },
        { status: 409 }
      );
    }

    await removeWaitlistSuppressionByEmail(cleanEmail);

    const { supabaseUrl, serviceRoleKey } = config;
    const unsubscribeToken = createUnsubscribeToken();

    const response = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
      method: "POST",
      headers: getWaitlistSupabaseHeaders(serviceRoleKey, "return=representation"),
      body: JSON.stringify([{ email: cleanEmail, unsubscribe_token: unsubscribeToken }]),
    });

    const text = await response.text();
    console.error("Supabase waitlist response", response.status, text);

    if (!response.ok) {
      if (text.toLowerCase().includes("duplicate key")) {
        return NextResponse.json(
          { error: "That email is already on the list." },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: `Supabase error: ${text}` },
        { status: 500 }
      );
    }

    let emailSent = false;
    let emailSkippedReason: string | null = null;

    try {
      const emailResult = await sendWaitlistAutoreply(
        cleanEmail,
        buildUnsubscribeUrl(unsubscribeToken)
      );
      emailSent = !emailResult.skipped;
      emailSkippedReason = emailResult.skipped ? emailResult.reason : null;
    } catch (emailError) {
      console.error("Waitlist auto-reply error", emailError);
    }

    return NextResponse.json({ ok: true, emailSent, emailSkippedReason });
  } catch (error) {
    console.error("Waitlist route error", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
