"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  const [verses, setVerses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const verseRef = useRef(null);
  const glowRef = useRef(null);
  const rotateRef = useRef(null); // Ref for the rotating symbol
  const descRef = useRef(null); // Ref for the description animation

  // Load verses
  useEffect(() => {
    fetch("/promises.json")
      .then((res) => res.json())
      .then((data) => setVerses(data))
      .catch((err) => console.error(err));
  }, []);

  // Function to dynamically adjust verse font size
  const getFontSize = (text) => {
    if (!text) return "text-base sm:text-lg md:text-xl lg:text-2xl";
    if (text.length > 250) return "text-sm sm:text-base md:text-lg lg:text-xl";
    if (text.length > 150) return "text-base sm:text-lg md:text-xl lg:text-2xl";
    return "text-lg sm:text-xl md:text-2xl lg:text-3xl";
  };

  // Animate verses with fade + shimmer
  useEffect(() => {
    if (verses.length === 0 || !verseRef.current) return;

    const showVerse = () => {
      gsap.fromTo(
        verseRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 2, ease: "power2.out" }
      );

      gsap.to(glowRef.current, {
        backgroundPosition: "200% 0",
        duration: 8,
        ease: "linear",
        repeat: -1,
      });

      // Adjust description scale slightly based on verse length
      if (descRef.current) {
        const newSize = verses[currentIndex].quote.length > 200 ? 0.95 : 1;
        gsap.to(descRef.current, {
          scale: newSize,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    };

    showVerse();

    const interval = setInterval(() => {
      gsap.to(verseRef.current, {
        opacity: 0,
        y: -10,
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % verses.length);
          showVerse();
        },
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [verses, currentIndex]);

  // Infinite rotation for the sacred symbol
  useEffect(() => {
    if (rotateRef.current) {
      gsap.to(rotateRef.current, {
        rotation: 360,
        duration: 8,
        ease: "linear",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    }
  }, []);

  // Animate description on first load and add subtle breathe animation
  useEffect(() => {
    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power2.out" }
      );

      // Breathing animation
      gsap.to(descRef.current, {
        scale: 1.02,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center 
                 text-center px-4 sm:px-6 lg:px-12 
                 bg-gradient-to-b from-yellow-50 to-yellow-100 overflow-hidden"
    >
      {/* Verse Section slightly moved downward */}
      {verses.length > 0 && (
        <div
          ref={verseRef}
          key={currentIndex}
          className="absolute top-16 sm:top-20 md:top-24 lg:top-28 max-w-2xl px-4 text-center"
        >
          <p
            ref={glowRef}
            className={`${getFontSize(verses[currentIndex].quote)} 
                       font-serif italic mb-1 leading-relaxed inline-block 
                       bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600
                       bg-clip-text text-transparent break-words 
                       max-w-[90vw] sm:max-w-xl md:max-w-2xl mx-auto`}
            style={{ backgroundSize: "200% auto" }}
          >
            “{verses[currentIndex].quote}”
          </p>
          <p className="text-xs sm:text-sm md:text-base text-amber-800 font-semibold">
            — {verses[currentIndex].reference}
          </p>
        </div>
      )}

      {/* Main Content Centered */}
      <div className="flex flex-col items-center justify-center absolute inset-0 z-10">
        <img
          src="/logo.jpg"
          alt="Bible Promises Logo"
          className="w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 
                     rounded-full shadow-md border-2 border-yellow-500 mb-4"
          loading="lazy"
        />

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                     font-extrabold text-yellow-800 
                     tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] 
                     mb-5 flex items-center gap-2"
        >
          BIBLE PR
          <span ref={rotateRef} className="inline-block text-yellow-600">
            ㊉
          </span>
          MISES
        </h1>

        {/* WhatsApp + Social Links Group */}
        <div className="flex flex-col items-center gap-4 mt-2">
          <a
            href="https://whatsapp.com/channel/0029VaAMNQFBfxoFENoGeZ1q"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-700 text-white font-medium 
                       px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md 
                       hover:bg-yellow-800 active:scale-95 
                       transition-all duration-300 text-sm sm:text-base"
          >
            Join Our WhatsApp Channel
          </a>

          {/* Optional subtle divider */}
          <div className="h-[1px] w-24 bg-yellow-400 opacity-50 my-1"></div>

          {/* Social label + icons stacked neatly */}
          <div className="flex flex-col items-center justify-center gap-2 text-gray-700">
            <span className="text-xs sm:text-sm md:text-base font-medium italic text-amber-800">
              Join our official social channels
            </span>
            <SocialLinks />
          </div>
        </div>

        {/* Description about the Bible Promises group */}
        <div
          ref={descRef}
          className="mt-6 max-w-2xl px-4 text-center 
                     bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-500
                     text-sm sm:text-base md:text-lg font-medium italic leading-relaxed drop-shadow-md origin-top"
        >
          Dive into daily verses, uplifting reflections, and meaningful conversations. 
          Strengthen your faith, connect with believers, and be inspired every day.
        </div>
      </div>

      {/* Bottom Inspirational Text */}
      <p
        className="absolute bottom-14 sm:bottom-16 md:bottom-20 
                   text-gray-700 text-sm sm:text-base md:text-lg italic 
                   max-w-xl text-center px-6"
      >
        “Let each promise remind you, you’re never walking alone.”
      </p>
    </section>
  );
}
