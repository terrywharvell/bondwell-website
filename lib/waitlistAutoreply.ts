const FROM_EMAIL =
  process.env.WAITLIST_FROM_EMAIL || "BondWell <hello@bondwell.co.uk>";
const REPLY_TO_EMAIL =
  process.env.WAITLIST_REPLY_TO || "hello@bondwell.co.uk";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildWaitlistAutoreplyHtml(unsubscribeUrl: string) {
  return `
    <div style="margin:0;padding:0;background:#f7f3ee;font-family:Arial,Helvetica,sans-serif;color:#2f2a26;">
      <div style="max-width:640px;margin:0 auto;padding:32px 20px;">
        <div style="background:#ffffff;border:1px solid #e9dfd4;border-radius:24px;overflow:hidden;box-shadow:0 10px 30px rgba(47,42,38,0.06);">
          <div style="padding:32px 32px 20px;">
            <p style="margin:0 0 18px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8a7460;">BondWell</p>
            <h1 style="margin:0 0 18px;font-size:30px;line-height:1.15;font-weight:600;color:#2f2a26;">You’re on the BondWell waitlist</h1>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.75;color:#5a514a;">Hello,</p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.75;color:#5a514a;">Thank you for joining the BondWell waitlist.</p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.75;color:#5a514a;">BondWell is being built to support people living with epilepsy and the partners and carers who support them — with a calm, thoughtful approach to daily routines, reminders, and reducing stress together.</p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.75;color:#5a514a;">We’ll keep you updated as we move closer to launch.</p>
            <p style="margin:0;font-size:16px;line-height:1.75;color:#5a514a;">Warmly,<br />Terry<br />BondWell</p>
          </div>
          <div style="padding:20px 32px;border-top:1px solid #efe7dc;background:#fcfaf7;">
            <p style="margin:0 0 10px;font-size:13px;line-height:1.7;color:#8a7460;">Questions? Just reply to this email or contact <a href="mailto:${escapeHtml(
              REPLY_TO_EMAIL
            )}" style="color:#6b5a4b;text-decoration:none;">${escapeHtml(
    REPLY_TO_EMAIL
  )}</a>.</p>
            <p style="margin:0;font-size:13px;line-height:1.7;color:#8a7460;">Don't want future BondWell waitlist updates? <a href="${escapeHtml(unsubscribeUrl)}" style="color:#6b5a4b;text-decoration:none;">Unsubscribe here</a>.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildWaitlistAutoreplyText(unsubscribeUrl: string) {
  return [
    "You’re on the BondWell waitlist",
    "",
    "Hello,",
    "",
    "Thank you for joining the BondWell waitlist.",
    "",
    "BondWell is being built to support people living with epilepsy and the partners and carers who support them — with a calm, thoughtful approach to daily routines, reminders, and reducing stress together.",
    "",
    "We’ll keep you updated as we move closer to launch.",
    "",
    "Warmly,",
    "Terry",
    "BondWell",
    REPLY_TO_EMAIL,
    "",
    `Unsubscribe from future BondWell waitlist updates: ${unsubscribeUrl}`,
  ].join("\n");
}

export async function sendWaitlistAutoreply(toEmail: string, unsubscribeUrl: string) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.warn("Waitlist auto-reply skipped: RESEND_API_KEY is not configured.");
    return { skipped: true as const, reason: "missing_resend_api_key" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [toEmail],
      reply_to: REPLY_TO_EMAIL,
      subject: "You’re on the BondWell waitlist",
      html: buildWaitlistAutoreplyHtml(unsubscribeUrl),
      text: buildWaitlistAutoreplyText(unsubscribeUrl),
      tags: [
        { name: "flow", value: "waitlist" },
        { name: "type", value: "autoresponse" },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend error: ${response.status} ${errorText}`);
  }

  return { skipped: false as const };
}