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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bondwell.co.uk"),
  title: {
    default: "Oleni | Calm epilepsy support app for people and carers",
    template: "%s | Oleni",
  },
  description:
    "Oleni is a calm epilepsy support app with gentle reminders, daily routines, reassurance, and consent-based linked support for people living with epilepsy and the people who care for them.",
  applicationName: "Oleni",
  authors: [{ name: "Oleni" }],
  creator: "Oleni",
  publisher: "Oleni",
  category: "Health & Wellness",
  keywords: [
    "Oleni",
    "calm epilepsy support app",
    "epilepsy support app",
    "epilepsy support app UK",
    "epilepsy reminder app",
    "epilepsy medication reminder app",
    "epilepsy hydration reminders",
    "daily routine app for epilepsy",
    "epilepsy app for carers",
    "epilepsy partner support app",
    "partner and carer support app",
    "consent-based linked support",
    "linked support across two phones",
    "carer support app UK",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Oleni | Calm epilepsy support app for people and carers",
    description:
      "A calm epilepsy support app with gentle reminders, daily routines, reassurance, and consent-based linked support for people and carers.",
    url: "https://www.bondwell.co.uk",
    siteName: "Oleni",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.bondwell.co.uk/og-image-oleni.png",
        width: 1200,
        height: 630,
        alt: "Oleni homepage preview showing calm epilepsy support for people and carers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oleni | Calm epilepsy support app for people and carers",
    description:
      "A calm epilepsy support app with gentle reminders, daily routines, reassurance, and consent-based linked support for people and carers.",
    images: ["https://www.bondwell.co.uk/og-image-oleni.png"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
