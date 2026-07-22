import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.oleni.app";
const siteUrl = rawSiteUrl.startsWith("http") ? rawSiteUrl : `https://${rawSiteUrl}`;
const siteMetadataBase = new URL(siteUrl);
const ogImageUrl = new URL("/og-image-oleni.png", siteMetadataBase).toString();

export const metadata: Metadata = {
  metadataBase: siteMetadataBase,
  title: {
    default: "Oleni: Epilepsy Support App | Reminders & Linked Support",
    template: "%s | Oleni",
  },
  description:
    "Oleni is a calm epilepsy support app with medication, hydration and meal reminders, energy and rest check-ins, and optional view-only linked support.",
  applicationName: "Oleni",
  authors: [{ name: "Oleni" }],
  creator: "Oleni",
  publisher: "Oleni",
  category: "Health & Wellness",
  keywords: [
    "epilepsy support app",
    "epilepsy medication reminder app",
    "epilepsy app",
    "medication reminders",
    "epilepsy daily support",
    "hydration reminders",
    "meal reminders",
    "energy check-ins",
    "rest support",
    "linked support app",
    "support person app",
    "epilepsy support for families",
    "epilepsy carer app",
    "epilepsy caregiver app",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Oleni: Epilepsy Support App | Reminders & Linked Support",
    description:
      "Oleni is a calm epilepsy support app with medication, hydration and meal reminders, energy and rest check-ins, and optional view-only linked support.",
    url: siteUrl,
    siteName: "Oleni",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Oleni epilepsy support app with reminders, energy check-ins and optional view-only linked support.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oleni: Epilepsy Support App | Reminders & Linked Support",
    description:
      "Oleni is a calm epilepsy support app with medication, hydration and meal reminders, energy and rest check-ins, and optional view-only linked support.",
    images: [
      {
        url: ogImageUrl,
        alt: "Oleni epilepsy support app with reminders, energy check-ins and optional view-only linked support.",
      },
    ],
  },
  icons: {
    icon: [{ url: "/oleni-app-icon.png", type: "image/png" }],
    apple: [{ url: "/oleni-app-icon.png", type: "image/png" }],
    shortcut: ["/oleni-app-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
