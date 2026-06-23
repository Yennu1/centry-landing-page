"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CentryLogo from "@/components/ui/CentryLogo";
import StaggeredMenu, { StaggeredMenuItem } from "@/components/ui/StaggeredMenu";
import { NAV_LINKS } from "@/lib/constants";

const STAGGERED_ITEMS: StaggeredMenuItem[] = NAV_LINKS.map((l) => ({
  label: l.label,
  ariaLabel: `Go to ${l.label}`,
  link: l.href,
}));

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <>
      {/* ─────────── DESKTOP NAVBAR (floating glass bar) ─────────── */}
      <header className="fixed top-5 left-0 right-0 z-50 hidden md:flex justify-center px-6">
        <motion.nav
          className="w-full max-w-[920px] flex items-center justify-between rounded-2xl pl-5 pr-2.5 py-2.5 bg-white/[0.04] backdrop-blur-2xl border border-white/[0.09] shadow-[0_8px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Logo */}
          <Link href="/" aria-label="Centry home" className="shrink-0">
            <CentryLogo size="md" />
          </Link>

          {/* Nav links — centered with generous spacing */}
          <ul
            className="flex items-center gap-3 lg:gap-4"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  className="relative px-3.5 py-2 text-sm font-medium text-[#9CA3C4] hover:text-[#EEF0FF] transition-colors duration-200"
                >
                  {link.label}
                  <AnimatePresence>
                    {hoveredLink === link.href && (
                      <motion.span
                        layoutId="nav-hover-underline"
                        className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-[#4F6BED]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                          opacity: { duration: 0.15 },
                        }}
                        style={{ boxShadow: "0 0 10px rgba(79,107,237,0.7)" }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex items-center gap-2 shrink-0">
            <Link href="#contact" className="btn-secondary text-[0.8rem] px-3.5 py-1.5">
              Sign In
            </Link>
            <Link href="#contact" className="btn-primary text-[0.8rem] px-3.5 py-1.5">
              Get Started
            </Link>
          </div>
        </motion.nav>
      </header>

      {/* ─────────── MOBILE NAVBAR (StaggeredMenu) ─────────── */}
      <div className="md:hidden">
        <StaggeredMenu
          position="right"
          isFixed
          items={STAGGERED_ITEMS}
          displaySocials={false}
          displayItemNumbering
          colors={["#1B2352", "#4F6BED"]}
          accentColor="#4F6BED"
          menuButtonColor="#EEF0FF"
          openMenuButtonColor="#EEF0FF"
          changeMenuColorOnOpen
          logoUrl="/images/centry-logo-mark.png"
        />
      </div>
    </>
  );
}
