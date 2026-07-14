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
      <div
        className="flex flex-col items-center text-center"
        style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "80px", paddingBottom: "48px" }}
      >
        {/* Brand — centered */}
        <div className="flex flex-col items-center">
          <CentryLogo size="md" />
          <p
            className="text-[#6B7499]"
            style={{ marginTop: "20px", maxWidth: "420px", fontSize: "0.85rem", lineHeight: 1.7 }}
          >
            The all-in-one platform to manage members, giving, and events — built for the modern church.
          </p>
        </div>

        {/* Link columns — centered row */}
        <div
          className="flex flex-wrap justify-center"
          style={{ marginTop: "48px", gap: "56px" }}
        >
          {COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col items-center">
              <h4
                className="font-semibold uppercase text-[#EEF0FF]"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.7rem", letterSpacing: "0.22em", marginBottom: "16px" }}
              >
                {col.heading}
              </h4>
              <ul className="flex flex-col items-center" style={{ gap: "10px" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#8B92B0] transition-colors duration-200 hover:text-[#EEF0FF]"
                      style={{ fontSize: "0.82rem" }}
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

        {/* Bottom bar — centered stack */}
        <div
          className="flex flex-col items-center border-t border-white/[0.05]"
          style={{ width: "100%", marginTop: "56px", paddingTop: "28px", gap: "8px" }}
        >
          <p className="text-[#6B7499]" style={{ fontSize: "0.72rem" }}>
            {new Date().getFullYear()} Centry. All rights reserved.
          </p>
          <p className="text-[#6B7499]" style={{ fontSize: "0.72rem" }}>
            Built for the modern church.
          </p>
        </div>
      </div>
    </footer>
  );
}
