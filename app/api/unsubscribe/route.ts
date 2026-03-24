import { NextResponse } from "next/server";

import { markWaitlistEntryUnsubscribed } from "@/lib/waitlistUnsubscribe";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const token = formData.get("token");

    if (!token || typeof token !== "string") {
      return NextResponse.redirect(new URL("/unsubscribe?status=invalid", req.url));
    }

    const result = await markWaitlistEntryUnsubscribed(token);
    const redirectUrl = new URL("/unsubscribe", req.url);

    redirectUrl.searchParams.set("status", result.status);
    redirectUrl.searchParams.set("token", token);

    if (result.email) {
      redirectUrl.searchParams.set("email", result.email);
    }

    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error("Unsubscribe route error", error);
    return NextResponse.redirect(new URL("/unsubscribe?status=error", req.url));
  }
}
