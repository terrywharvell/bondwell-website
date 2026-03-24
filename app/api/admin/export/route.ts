import { NextResponse } from "next/server";

import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getAdminWaitlistExportEntries } from "@/lib/adminWaitlist";

function escapeCsvValue(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

function buildCsv(rows: Array<{ email: string; created_at?: string | null; time?: string | null }>) {
  const lines = ["email,joined_at"];

  for (const row of rows) {
    const joinedAt = row.created_at || row.time || "";
    lines.push(`${escapeCsvValue(row.email)},${escapeCsvValue(joinedAt)}`);
  }

  return lines.join("\n");
}

function buildFilename() {
  const stamp = new Date().toISOString().slice(0, 10);
  return `bondwell-waitlist-${stamp}.csv`;
}

export async function GET(request: Request) {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  try {
    const entries = await getAdminWaitlistExportEntries();
    const csv = buildCsv(entries);

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${buildFilename()}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Admin waitlist export error", error);

    return new NextResponse("Could not export the waitlist right now.", {
      status: 500,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }
}
