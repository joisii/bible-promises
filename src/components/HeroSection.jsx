"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  const [verses, setVerses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const verseRef = useRef(null);
  const glowRef = useRef(null);
  const descRef = useRef(null);

  // Load verses
  useEffect(() => {
    fetch("/promises.json")
      .then((res) => res.json())
      .then((data) => setVerses(data))
      .catch((err) => console.error(err));
  }, []);

  // Animate verses
  useEffect(() => {
    if (verses.length === 0 || !verseRef.current) return;

    const showVerse = () => {
      gsap.fromTo(
        verseRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
      );

      gsap.to(glowRef.current, {
        backgroundPosition: "200% 0",
        duration: 8,
        ease: "linear",
        repeat: -1,
      });
    };

    showVerse();

    const interval = setInterval(() => {
      gsap.to(verseRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % verses.length);
          showVerse();
        },
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [verses, currentIndex]);

  // Description animation
  useEffect(() => {
    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 2, ease: "power2.out", repeat: -1, yoyo: true }
      );
    }
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-yellow-50 to-yellow-100 overflow-hidden"
    >
      {/* Verse Section */}
      {verses.length > 0 && (
        <div
          ref={verseRef}
          key={currentIndex}
          className="absolute top-16 sm:top-20 md:top-24 lg:top-28 max-w-full px-4 text-center"
        >
          <p
            ref={glowRef}
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
      <div className="flex flex-col items-center justify-center absolute inset-0 z-10 px-4 sm:px-6">
        <img
          src="/logo.png"
          alt="Bible Promises Logo"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full shadow-md mb-4"
          loading="lazy"
        />

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-800 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] mb-5"
          style={{ WebkitTextStroke: "1px #b45309" }}
        >
          BIBLE PR
          <span
            className="inline-block text-yellow-800"
            style={{ fontSize: "inherit", fontWeight: "inherit", WebkitTextStroke: "1px #b45309", display: "inline-block", position: "relative", top: "0.05em" }}
          >
            ㊉
          </span>
          MISES
        </h1>

        {/* WhatsApp + Social Links */}
        <div className="flex flex-col items-center gap-4 mt-2">
          <a
            href="https://whatsapp.com/channel/0029VaAMNQFBfxoFENoGeZ1q"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-700 text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md hover:bg-yellow-800 active:scale-95 transition-all duration-300 text-sm sm:text-base"
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

        {/* Description - responsive */}
        <div
          ref={descRef}
          className="mt-10 max-w-xl px-4 sm:px-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-500 text-sm sm:text-base md:text-lg font-medium italic leading-relaxed drop-shadow-md origin-top"
        >
          Dive into daily verses, uplifting reflections, and meaningful conversations. 
          Strengthen your faith, connect with believers, and be inspired every day.
        </div>
      </div>

      {/* Bottom Inspirational Text */}
      <p className="absolute bottom-14 sm:bottom-16 md:bottom-20 text-gray-700 text-sm sm:text-base md:text-lg italic max-w-xs sm:max-w-sm text-center px-4">
        “Let each promise remind you, you’re never walking alone.”
      </p>
    </section>
  );
}
