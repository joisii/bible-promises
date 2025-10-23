"use client";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 border-t border-yellow-600 shadow-md mt-0 overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-yellow-300 opacity-10 blur-2xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col justify-center items-center gap-2 sm:gap-3">

        {/* Bottom Inspirational Text - part of footer */}
        <p className="text-yellow-900 text-sm sm:text-base md:text-lg italic max-w-xs sm:max-w-sm text-center mb-1">
          “Let each promise remind you, you’re never walking alone.”
        </p>

        {/* Contact & Footer Info */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-2 sm:gap-3">

          {/* Contact Section */}
          <div className="flex flex-col items-center sm:items-start text-gray-800 w-full sm:w-auto">
            <h3 className="font-bold text-lg sm:text-xl mb-1 text-center sm:text-left">Contact Us</h3>

            {/* Phone button */}
            <a
              href="tel:+919496678956"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-4 py-1.5 rounded-full shadow-sm transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base mt-1"
            >
              📞 +91 94966 78956
            </a>

            {/* Owner & tagline */}
            <p className="mt-1 text-gray-900 italic text-center sm:text-left text-xs sm:text-sm">
              Owner: Manoj V Munnar
            </p>
          </div>

          {/* Inspirational Section */}
          <div className="text-gray-900 text-center sm:text-right text-sm sm:text-base w-full sm:w-auto mt-1 sm:mt-0">
            “Explore BIBLE PR㊉MISES daily and stay inspired.”
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-900 text-xs sm:text-sm py-1.5 border-t border-yellow-600 mt-2">
          © {new Date().getFullYear()} Bible Promises. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
