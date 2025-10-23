"use client";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialLinks() {
  const socialLinks = [
    {
      href: "https://www.whatsapp.com/channel/0029VaAMNQFBfxoFENoGeZ1q",
      icon: <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      label: "Join WhatsApp",
    },
    {
      href: "https://youtube.com/@biblepromises-4k?si=2066NY3YMEXx_37D",
      icon: <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
      label: "Subscribe on YouTube",
    },
    {
      href: "https://www.instagram.com/invites/contact/?i=xu4pr0czdhhl&utm_content=2nwpf61",
      icon: <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      bgColor: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
      label: "Follow on Instagram",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-6 py-3">
      {socialLinks.map((link, i) => (
        <a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={link.label}
          className={`${link.bgColor} ${link.hoverColor} text-white w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                     flex items-center justify-center rounded-full shadow-lg transform transition-all duration-300 
                     hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400
                     ${link.floatClass}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
