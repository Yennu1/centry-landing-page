"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Bar appears once the user leaves the hero; disappears when they return to top.
    // Polled via rAF so it works with native scroll, Lenis smooth scroll, and
    // programmatic scrolling alike (a plain 'scroll' listener can miss Lenis).
    const THRESHOLD = 80;
    let raf = 0;
    let last = false;
    const tick = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const next = y > THRESHOLD;
      if (next !== last) {
        last = next;
        setScrolled(next);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* ─────────── DESKTOP NAVBAR ─────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <div className="relative">
          {/* Solid deep-navy bar that slides in on scroll */}
          <motion.div
            aria-hidden
            className="absolute inset-0 border-b border-white/[0.06]"
            style={{ background: "#0B0F1C", transformOrigin: "top" }}
            initial={false}
            animate={{
              opacity: scrolled ? 1 : 0,
              y: scrolled ? 0 : -12,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Nav contents — always visible, sitting above the bar */}
          <nav
            className="relative flex items-center"
            style={{ maxWidth: "1240px", marginLeft: "auto", marginRight: "auto", height: "72px", paddingLeft: "32px", paddingRight: "32px" }}
          >
            {/* Logo — left */}
            <Link href="/" aria-label="Centry home" className="shrink-0">
              <CentryLogo size="md" />
            </Link>

            {/* Nav links — centered across the middle */}
            <ul
              className="absolute left-1/2 -translate-x-1/2 flex items-center"
              style={{ gap: "4px" }}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    className="relative text-[#9CA3C4] hover:text-[#EEF0FF] transition-colors duration-200"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.86rem", fontWeight: 500, padding: "8px 14px" }}
                  >
                    {link.label}
                    <AnimatePresence>
                      {hoveredLink === link.href && (
                        <motion.span
                          layoutId="nav-hover-underline"
                          className="absolute left-3 right-3 rounded-full bg-[#4F6BED]"
                          style={{ bottom: "1px", height: "2px", boxShadow: "0 0 10px rgba(79,107,237,0.7)" }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 32, opacity: { duration: 0.15 } }}
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTAs — right, compact */}
            <div className="flex items-center shrink-0" style={{ gap: "8px", marginLeft: "auto" }}>
              <Link
                href="https://app.centrycms.com"
                className="text-[#C7CCE8] hover:text-[#EEF0FF] transition-colors duration-200"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.8rem", fontWeight: 500, padding: "6px 12px" }}
              >
                Sign In
              </Link>
              <Link
                href="https://app.centrycms.com"
                className="text-white transition-colors duration-200"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  padding: "7px 16px",
                  borderRadius: "9px",
                  background: "#4F6BED",
                }}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
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
