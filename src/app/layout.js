// src/app/layout.js

import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://your-domain.com"), // Replace with your actual domain

  title: {
    default: "Bible Promises",
    template: "%s | Bible Promises",
  },

  description:
    "Discover daily Bible promises, uplifting scriptures, and inspiring Christian content. Join our community and grow in faith every day.",

  keywords: [
    "Bible",
    "Bible Promises",
    "Daily Bible Verse",
    "Jesus",
    "Christian",
    "Faith",
    "Prayer",
    "Hope",
    "Encouragement",
    "WhatsApp Bible",
  ],

  authors: [
    {
      name: "Manoj V Munnar",
    },
  ],

  creator: "Manoj V Munnar",

  publisher: "Bible Promises",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Bible Promises",
    description:
      "Daily Bible promises, scriptures, and encouragement to strengthen your faith.",
    url: "https://biblepromises.vercel.app/", // Replace later
    siteName: "Bible Promises",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Bible Promises Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bible Promises",
    description:
      "Daily Bible promises and uplifting Christian encouragement.",
    images: ["/logo.png"],
  },

  category: "Religion",
};

export const viewport = {
  themeColor: "#facc15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Analytics />
      </body>
    </html>
  );
}