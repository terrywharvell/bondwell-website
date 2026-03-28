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
    "BondWell is a calm epilepsy support app for people living with epilepsy and the partners, carers, and loved ones supporting them. Built around gentle reminders, routines, reassurance, and consent-based linked support.",
  applicationName: "BondWell",
  authors: [{ name: "BondWell" }],
  creator: "BondWell",
  publisher: "BondWell",
  category: "Health & Wellness",
  keywords: [
    "BondWell",
    "epilepsy support app",
    "epilepsy support app UK",
    "epilepsy reminders",
    "epilepsy carer app",
    "epilepsy partner support",
    "medication reminders epilepsy",
    "hydration reminders epilepsy",
    "epilepsy daily routine",
    "carer support app",
    "partner support app",
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
      "A calm epilepsy support app for people living with epilepsy and the people who care for them.",
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
      "A calm epilepsy support app for people living with epilepsy and the people who care for them.",
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
