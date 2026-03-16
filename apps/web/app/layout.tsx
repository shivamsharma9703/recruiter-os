import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recruiter OS — The Operating System for Recruiters",
  description:
    "Recruiter OS is the all-in-one platform for professional recruiters. Manage your pipeline, CRM, AI resume scoring, and revenue tracking in one place. Built for independent recruiters, agencies, and startup HR teams.",
  keywords: [
    "recruiter software",
    "ATS platform",
    "applicant tracking system",
    "recruiter CRM",
    "AI resume scoring",
    "recruitment pipeline",
    "agency revenue tracking",
    "recruitment software",
    "hiring platform",
    "talent management",
    "recruiter operating system",
  ],
  authors: [{ name: "Recruiter OS" }],
  creator: "Recruiter OS",
  publisher: "Recruiter OS",
  metadataBase: new URL("https://recruiteros.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://recruiteros.com",
    siteName: "Recruiter OS",
    title: "Recruiter OS — The Operating System for Recruiters",
    description:
      "Pipeline, CRM, AI scoring, and revenue tracking. Built for the way recruiters actually work.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Recruiter OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruiter OS — The Operating System for Recruiters",
    description:
      "Pipeline, CRM, AI scoring, and revenue tracking. Built for the way recruiters actually work.",
    images: ["/og-image.png"],
    creator: "@recruiteros",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://recruiteros.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}