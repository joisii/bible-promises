// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
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
  title: "BIBLE PR㊉MISES",
  description: "Daily Bible Promises and Encouragement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* 🧠 Add Vercel Analytics tracking */}
        <Analytics />
      </body>
    </html>
  );
}
