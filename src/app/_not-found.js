"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 px-6">
      <div className="max-w-2xl text-center">

        {/* Error Code */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-yellow-700 drop-shadow-md">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
          Don't worry—God's promises are always within reach.
        </p>

        {/* Bible Verse */}
        <div className="mt-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-yellow-300">
          <p className="italic text-yellow-800 text-lg leading-relaxed">
            "Your word is a lamp to my feet and a light to my path."
          </p>

          <p className="mt-2 font-semibold text-yellow-700">
            Psalm 119:105
          </p>
        </div>

        {/* Home Button */}
        <Link
          href="/"
          className="inline-flex items-center mt-8 bg-yellow-700 hover:bg-yellow-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        >
          ← Return to Home
        </Link>

        {/* Footer Text */}
        <p className="mt-8 text-sm text-gray-600 italic">
          May God's Word continue to guide and encourage you every day.
        </p>

      </div>
    </main>
  );
}