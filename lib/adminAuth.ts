import "server-only";

import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "bondwell_admin_session";
const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 12;
const ADMIN_SESSION_PAYLOAD = "bondwell-admin-authenticated";

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "";
}

function getAdminSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || "";
}

function signValue(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function isAdminEnvConfigured() {
  return Boolean(getAdminPassword() && getAdminSessionSecret());
}

export function verifyAdminPassword(password: string) {
  const expectedPassword = getAdminPassword();

  if (!expectedPassword) {
    return false;
  }

  return password === expectedPassword;
}

export function createAdminSessionToken() {
  const secret = getAdminSessionSecret();

  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not configured.");
  }

  const issuedAt = Date.now().toString();
  const payload = `${ADMIN_SESSION_PAYLOAD}.${issuedAt}`;
  const signature = signValue(payload, secret);

  return `${payload}.${signature}`;
}

export function isValidAdminSessionToken(token: string) {
  const secret = getAdminSessionSecret();

  if (!secret || !token) {
    return false;
  }

  const parts = token.split(".");

  if (parts.length !== 3) {
    return false;
  }

  const [payloadPrefix, issuedAt, providedSignature] = parts;

  if (payloadPrefix !== ADMIN_SESSION_PAYLOAD || !issuedAt || !providedSignature) {
    return false;
  }

  const unsignedValue = `${payloadPrefix}.${issuedAt}`;
  const expectedSignature = signValue(unsignedValue, secret);

  try {
    return timingSafeEqual(
      Buffer.from(providedSignature, "utf8"),
      Buffer.from(expectedSignature, "utf8")
    );
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value || "";

  return isValidAdminSessionToken(token);
}

export function getAdminCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ADMIN_COOKIE_MAX_AGE,
  };
}
