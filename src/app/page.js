// src/app/page.js

"use client";

import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 text-gray-800">
      <HeroSection />

      <Footer />
    </main>
  );
}