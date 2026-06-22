"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { HERO_PHRASES } from "@/lib/constants";

export default function HeroHeadline() {
  const text = useTypewriter({
    phrases: HERO_PHRASES,
    typeSpeed: 55,
    deleteSpeed: 30,
    pauseDuration: 2200,
  });

  return (
    <h1 className="flex flex-col items-center text-center">
      {/* Static line — Instrument Serif, regular */}
      <span
        className="text-[2.6rem] md:text-[4.25rem] leading-[1.05] text-[#EEF0FF]"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontStyle: "normal",
          fontWeight: 400,
          letterSpacing: "-0.01em",
        }}
      >
        Manage Your Church,
      </span>

      {/* Rotating line — Instrument Serif italic, accent color */}
      <span className="block min-h-[3rem] md:min-h-[4.75rem] mt-1 md:-mt-1">
        <span
          className="text-[2.6rem] md:text-[4.25rem] leading-[1.1] text-[#4F6BED]"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          {text}
        </span>
        <span className="cursor-blink" aria-hidden />
      </span>
    </h1>
  );
}
