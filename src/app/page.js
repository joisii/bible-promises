// src/app/page.js
"use client"; // <-- make this a client component

import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 text-gray-800">
      <HeroSection />
    </main>
  );
}
