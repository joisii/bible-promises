"use client";

import { FaPhoneAlt, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-yellow-300 bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-200">

      {/* Background Glow */}
      <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-yellow-300/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10">

        {/* Inspirational Quote */}
        <div className="mb-8 flex justify-center">
          <div className="max-w-2xl rounded-2xl border border-yellow-200 bg-white/60 px-6 py-5 text-center shadow-lg backdrop-blur-md">
            <p className="text-base italic leading-relaxed text-yellow-900 sm:text-lg">
              “Let each promise remind you that you're never walking alone.”
            </p>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">

            <h3 className="mb-4 text-2xl font-bold text-yellow-800">
              Contact Us
            </h3>

            <a
              href="tel:+919496678956"
              aria-label="Call Bible Promises"
              className="group inline-flex items-center gap-3 rounded-full bg-yellow-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-700 hover:shadow-xl active:scale-95"
            >
              <FaPhoneAlt className="transition-transform duration-300 group-hover:rotate-12" />

              <span>+91 94966 78956</span>
            </a>

            <p className="mt-4 text-center text-sm italic text-gray-700 md:text-left">
              Managed with faith by
            </p>

            <p className="font-semibold text-yellow-900">
              Manoj V Munnar
            </p>

          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center justify-center md:items-end">

            <p className="max-w-md text-center text-base leading-relaxed text-gray-700 md:text-right">
              Explore
              <span className="font-bold text-yellow-800">
                {" "}BIBLE PR㊉MISES{" "}
              </span>
              every day and strengthen your faith through God's Word,
              encouragement, and hope.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-yellow-800">
              <FaHeart className="text-red-500" />
              <span>Made with faith for God's glory.</span>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-2 text-center text-sm text-gray-700 md:flex-row">

          <p>
            © {new Date().getFullYear()} Bible Promises. All rights reserved.
          </p>

          <p className="italic text-yellow-800">
            May God's peace be with you always.
          </p>

        </div>

      </div>
    </footer>
  );
}