// src/app/page.js
"use client";

import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-yellow-50 to-yellow-100 text-gray-800">
      <HeroSection />
      <Footer />
    </main>
  );
}
