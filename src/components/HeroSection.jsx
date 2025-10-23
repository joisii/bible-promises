"use client";

import { useEffect, useState, useRef } from "react";
import SocialLinks from "./SocialLinks";
import { gsap } from "gsap";

export default function HeroSection() {
  const [verses, setVerses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const verseRef = useRef(null);

  // Load verses
  useEffect(() => {
    fetch("/promises.json")
      .then((res) => res.json())
      .then((data) => setVerses(data))
      .catch((err) => console.error(err));
  }, []);

  // Animate verses (fade left → right)
  useEffect(() => {
    if (verses.length === 0 || !verseRef.current) return;

    const animateVerse = () => {
      gsap.fromTo(
        verseRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
      );
    };

    animateVerse();

    const interval = setInterval(() => {
      gsap.to(verseRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % verses.length);
          animateVerse();
        },
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [verses, currentIndex]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-yellow-50 to-yellow-100 overflow-hidden">

      {/* Verse Section - Top */}
      {verses.length > 0 && (
        <div
          ref={verseRef}
          className="fixed top-0 left-0 w-full text-center py-2 sm:py-3 bg-gradient-to-b from-yellow-100/80 to-transparent backdrop-blur-md z-50"
        >
          <p
            className="font-serif italic mb-1 leading-relaxed inline-block bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 bg-clip-text text-transparent break-words mx-auto"
            style={{ backgroundSize: "200% auto", fontSize: "clamp(1rem, 4vw, 2rem)" }}
          >
            “{verses[currentIndex].quote}”
          </p>
          <p className="text-xs sm:text-sm md:text-base text-amber-800 font-semibold">
            {verses[currentIndex].reference}
          </p>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center relative z-10 px-4 sm:px-6">

        {/* Logo with breathing effect */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-4 animate-pulse-zoom">
          <img
            src="/logo.png"
            alt="Bible Promises Logo"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

{/* Title */}
<h1 className="group text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-800 tracking-[-0.02em] mb-1 leading-tight">
  BIBLE PR
  <span className="relative inline-block align-baseline mx-[1px] leading-none">
    <span className="relative inline-block text-[1.02em] font-inherit">O</span>
    <span
      className="absolute inset-0 flex items-center justify-center text-amber-700 pulse-glow"
      style={{
        fontSize: "clamp(10px, 0.45em, 22px)", // min 10px, scales slightly, max 22px
      }}
    >
      ♱
    </span>
  </span>
  MISES
</h1>


        {/* Description */}
        <div className="mt-1 max-w-xl sm:max-w-2xl px-4 sm:px-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-sm sm:text-base md:text-lg font-semibold italic leading-snug drop-shadow-md">
          Dive into daily verses, uplifting reflections, and meaningful conversations. 
          Strengthen your faith, connect with believers, and be inspired every day.
        </div>

        {/* WhatsApp + Social Links */}
        <div className="flex flex-col items-center gap-4 mt-6 sm:mt-8">
          <a
            href="https://whatsapp.com/channel/0029VaAMNQFBfxoFENoGeZ1q"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-700 text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md transition-all duration-300 text-sm sm:text-base hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-900 active:scale-95"
          >
            Join Our WhatsApp Channel
          </a>

          <div className="h-[1px] w-20 sm:w-24 bg-yellow-400 opacity-50 my-1"></div>

          <div className="flex flex-col items-center justify-center gap-2 text-gray-700">
            <span className="text-xs sm:text-sm md:text-base font-medium italic text-amber-800">
              Join our official social channels
            </span>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
