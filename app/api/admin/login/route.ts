import { NextResponse } from "next/server";

import {
  ADMIN_COOKIE_NAME,
  createAdminSessionToken,
  getAdminCookieOptions,
  isAdminEnvConfigured,
  verifyAdminPassword,
} from "@/lib/adminAuth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get("password") || "").trim();

  if (!isAdminEnvConfigured()) {
    return NextResponse.redirect(new URL("/admin/login?error=config", request.url));
  }

  if (!verifyAdminPassword(password)) {
    return NextResponse.redirect(new URL("/admin/login?error=invalid", request.url));
  }

  const response = NextResponse.redirect(new URL("/admin", request.url));

  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: createAdminSessionToken(),
    ...getAdminCookieOptions(),
  });

  return response;
}
