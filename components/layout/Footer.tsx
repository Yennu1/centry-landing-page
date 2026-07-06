"use client";

import Link from "next/link";
import CentryLogo from "@/components/ui/CentryLogo";

const COLUMNS = [
  {
    heading: "Quick links",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "TikTok", href: "https://tiktok.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Facebook", href: "https://facebook.com" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full border-t border-white/[0.06] bg-[#080B14]">
      <div className="max-w-[1100px] mx-auto px-6" style={{ paddingTop: "72px", paddingBottom: "48px" }}>
        <div className="flex flex-col gap-14 md:flex-row md:justify-between">

          {/* Brand */}
          <div className="max-w-[280px]">
            <CentryLogo size="md" />
            <p className="mt-5 text-[0.8rem] leading-[1.7] text-[#6B7499]">
              The all-in-one platform to manage members, giving, and events —
              built for the modern church.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h4
                  className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#EEF0FF]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {col.heading}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[0.82rem] text-[#8B92B0] transition-colors duration-200 hover:text-[#EEF0FF]"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-7 sm:flex-row">
          <p className="text-[0.72rem] text-[#6B7499]">
            {new Date().getFullYear()} Centry. All rights reserved.
          </p>
          <p className="text-[0.72rem] text-[#6B7499]">Built for the modern church.</p>
        </div>
      </div>
    </footer>
  );
}
