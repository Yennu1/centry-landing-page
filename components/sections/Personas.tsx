"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const PERSONAS = [
  {
    numeral: "I",
    role: "Pastors & General Overseers",
    description:
      "See the health of your entire church at a glance — attendance, giving, and growth — without chasing anyone for reports. Lead with clarity, not guesswork.",
  },
  {
    numeral: "II",
    role: "Financial Secretaries",
    description:
      "Record every cedi in seconds, print receipts instantly, and export clean statements for audits. No more reconciling notebooks at midnight.",
  },
  {
    numeral: "III",
    role: "Administrators",
    description:
      "Manage members, branches, events, and categories from one dashboard. Everything your office runs on paper today, organised and searchable forever.",
  },
  {
    numeral: "IV",
    role: "Ministry Leaders",
    description:
      "Track your group's attendance, plan meetings, and keep your members connected — with access scoped to exactly what your ministry needs.",
  },
];

export default function Personas() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = -rect.top;
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, sectionTop / scrollable));
      const maxTranslate = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(-${progress * maxTranslate}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#080B14]"
      style={{ height: "300vh" }}
    >
      {/* Sticky container — pins to viewport while cards scroll horizontally */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

        {/* Section header */}
        <div className="text-center px-6 mb-12">
          <p className="text-[0.7rem] font-semibold tracking-[0.42em] text-[#4F6BED] uppercase mb-4">
            Made for you
          </p>
          <h2
            className="text-[2rem] md:text-[2.75rem] leading-[1.12] text-[#EEF0FF]"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
          >
            Who Centry was made for
          </h2>
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-[#080B14] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-[#080B14] to-transparent" />

        {/* Horizontal scrolling track */}
        <div className="w-full overflow-visible">
          <div
            ref={trackRef}
            className="flex gap-6 md:gap-8 will-change-transform px-8 md:px-16"
            style={{ width: "max-content" }}
          >
            {PERSONAS.map((p, i) => (
              <div
                key={p.role}
                className="relative isolate shrink-0 w-[18rem] md:w-[24rem] h-[14rem] md:h-[15rem] rounded-[1.25rem] p-5 md:p-7 border border-[#4F6BED]/20 bg-[#4F6BED]/[0.04] overflow-hidden"
              >
                {/* Card content — above gradient */}
                <div className="relative z-10 h-full w-full flex flex-col justify-between">
                  {/* Persona tag at top */}
                  <div className="w-fit flex items-center gap-2 px-4 py-2 rounded-full text-[0.82rem] bg-[#4F6BED]/[0.08] border border-[#4F6BED]/25">
                    <span className="text-[#7B93F5] font-medium">{p.role}</span>
                  </div>

                  {/* Description at bottom */}
                  <p className="text-[0.88rem] md:text-[0.92rem] leading-[1.45] text-[#C0C7E0]">
                    {p.description}
                  </p>
                </div>

                {/* Large faded roman numeral — behind content */}
                <div className="absolute -top-4 md:-top-5 right-3 md:right-4 -z-[2]">
                  <span
                    className="block text-[12rem] md:text-[14rem] font-bold leading-none text-[#EEF0FF]/[0.04] select-none"
                    style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "-0.04em" }}
                  >
                    {p.numeral}
                  </span>
                </div>

                {/* Gradient fade from bottom — covers lower part of numeral */}
                <div className="absolute inset-0 -z-[1] bg-gradient-to-t from-[#080B14] from-[25%] to-transparent to-[100%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
