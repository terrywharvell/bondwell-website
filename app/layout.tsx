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
  metadataBase: new URL("https://bondwell.co.uk"),
  title: {
    default: "BondWell | Calm epilepsy support app for people and carers",
    template: "%s | BondWell",
  },
  description:
    "BondWell is a calm epilepsy support app with gentle reminders, daily routines, reassurance, and consent-based linked support for people living with epilepsy and the people who care for them.",
  applicationName: "BondWell",
  authors: [{ name: "BondWell" }],
  creator: "BondWell",
  publisher: "BondWell",
  category: "Health & Wellness",
  keywords: [
    "BondWell",
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
    title: "BondWell | Calm epilepsy support app for people and carers",
    description:
      "A calm epilepsy support app with gentle reminders, daily routines, reassurance, and consent-based linked support for people and carers.",
    url: "https://bondwell.co.uk",
    siteName: "BondWell",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://bondwell.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BondWell homepage preview showing calm epilepsy support for people and carers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BondWell | Calm epilepsy support app for people and carers",
    description:
      "A calm epilepsy support app with gentle reminders, daily routines, reassurance, and consent-based linked support for people and carers.",
    images: ["https://bondwell.co.uk/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/bondwell-icon.png", type: "image/png" }],
    apple: [{ url: "/bondwell-icon.png", type: "image/png" }],
    shortcut: ["/bondwell-icon.png"],
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
