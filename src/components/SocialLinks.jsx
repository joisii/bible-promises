"use client";

import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function SocialLinks() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/share/1EXCCpZzGR/",
      icon: FaFacebookF,
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      label: "Follow on Facebook",
    },
    {
      href: "https://www.whatsapp.com/channel/0029VaAMNQFBfxoFENoGeZ1q",
      icon: FaWhatsapp,
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      label: "Join WhatsApp",
    },
    {
      href: "https://www.instagram.com/invites/contact/?i=xu4pr0czdhhl&utm_content=2nwpf61",
      icon: FaInstagram,
      bgColor: "bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400",
      hoverColor: "hover:brightness-110",
      label: "Follow on Instagram",
    },
    {
      href: "https://youtube.com/@biblepromises-4k?si=2066NY3YMEXx_37D",
      icon: FaYoutube,
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
      label: "Subscribe on YouTube",
    },
    {
      href: "https://x.com/Manojvmnr6",
      icon: FaXTwitter,
      bgColor: "bg-black",
      hoverColor: "hover:bg-neutral-800",
      label: "Follow on X",
    },
  ];

  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-3
        sm:gap-4
        md:gap-5
        lg:gap-6
        py-3
      "
    >
      {socialLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={link.label}
            title={link.label}
            className={`
              group
              ${link.bgColor}
              ${link.hoverColor}

              relative
              flex
              h-12
              w-12
              sm:h-14
              sm:w-14
              md:h-16
              md:w-16

              items-center
              justify-center

              rounded-full
              text-white

              shadow-lg

              transition-all
              duration-300
              ease-out

              hover:-translate-y-1
              hover:scale-110
              hover:rotate-6
              hover:shadow-yellow-300/60
              hover:shadow-2xl

              active:scale-95

              focus:outline-none
              focus:ring-4
              focus:ring-yellow-300
            `}
          >
            {/* Glow */}
            <span
              className="
                absolute
                inset-0
                rounded-full
                bg-white/10
                opacity-0
                blur-md
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            {/* Icon */}
            <Icon
              className="
                relative
                z-10
                h-5
                w-5
                sm:h-6
                sm:w-6
                md:h-7
                md:w-7
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </a>
        );
      })}
    </div>
  );
}