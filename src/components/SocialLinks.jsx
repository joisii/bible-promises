"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialLinks() {
  const socialLinks = [
    {
      href: "https://www.whatsapp.com/channel/0029VaAMNQFBfxoFENoGeZ1q",
      icon: <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      color: "from-green-400 to-green-600",
      glow: "shadow-green-400/60",
      label: "Join WhatsApp",
    },
    {
      href: "https://youtube.com/@biblepromises-4k?si=2066NY3YMEXx_37D",
      icon: <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      color: "from-red-500 to-red-700",
      glow: "shadow-red-400/60",
      label: "Subscribe on YouTube",
    },
    {
      href: "https://www.instagram.com/invites/contact/?i=xu4pr0czdhhl&utm_content=2nwpf61",
      icon: <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      color: "from-pink-500 via-purple-500 to-yellow-400",
      glow: "shadow-pink-400/60",
      label: "Follow on Instagram",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 py-3 sm:py-4 md:py-5">
      {socialLinks.map((link, i) => (
        <motion.a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={link.label}
          className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${link.color} text-white rounded-full shadow-md ${link.glow} overflow-hidden transition-all duration-300`}
          whileHover={{ scale: 1.2, rotate: 10, boxShadow: "0 0 25px rgba(255,255,255,0.4)" }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="absolute inset-0 rounded-full bg-white/10 blur-md" />
          <span className="absolute inset-[2px] rounded-full bg-gradient-to-tr from-white/20 to-transparent blur-sm" />
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}
