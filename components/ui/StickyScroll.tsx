"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = -rect.top; // how many px we've scrolled into the section
      const sectionHeight = rect.height; // total scroll runway
      const scrollable = sectionHeight - window.innerHeight;

      if (scrollable <= 0) return;

      // progress: 0 when section enters viewport, 1 when section ends
      const progress = Math.max(0, Math.min(1, sectionTop / scrollable));

      // Map progress to card index
      const index = Math.min(
        content.length - 1,
        Math.floor(progress * content.length)
      );

      setActiveCard(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [content.length]);

  const backgroundColors = [
    "#080B14",
    "#0B0F1E",
    "#080D18",
    "#0A0C1A",
    "#090C17",
    "#0B0F1E",
  ];

  return (
    // Tall section — each feature gets a full viewport of scroll runway
    <div
      ref={sectionRef}
      style={{ height: `${content.length * 100}vh` }}
      className="relative w-full"
    >
      {/* Sticky wrapper — fills the viewport and PINS until section ends */}
      <div className="sticky top-0 h-screen w-full flex items-start md:items-center justify-center pt-16 md:pt-0">
        <motion.div
          animate={{ backgroundColor: backgroundColors[activeCard] }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative w-full max-w-[1200px] mx-3 md:mx-6 rounded-3xl border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden h-auto md:h-[560px] max-h-[92vh] md:max-h-none overflow-y-auto md:overflow-y-visible"
        >
          <div className="flex flex-col md:flex-row md:h-full">

            {/* LEFT — text, 32px inner breathing space from divider */}
            <div
              className="flex flex-col justify-center w-full md:w-[38%] shrink-0 border-b md:border-b-0 md:border-r border-white/[0.06] p-6 md:pt-9 md:pr-6 md:pb-9 md:pl-10"
            >
              {/* Dot indicators — no 01/06 counter */}
              <div className="flex gap-1.5 mb-5 mt-1 md:mb-7 md:mt-5">
                {content.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      width: activeCard === i ? "1.75rem" : "0.375rem",
                      opacity: activeCard === i ? 1 : 0.25,
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-[3px] rounded-full bg-[#4F6BED]"
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <h3
                    className="text-[1.1rem] md:text-[1.25rem] font-semibold text-[#EEF0FF] leading-[1.2] mb-5 md:mb-10"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {content[activeCard].title}
                  </h3>
                  <p className="text-[0.78rem] leading-[1.7] text-[#8B92B0]">
                    {content[activeCard].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT — screenshot, fully clipped inside rounded panel */}
            <div
              className="w-full aspect-[4/3] md:aspect-auto md:flex-1 md:h-full overflow-hidden flex items-center justify-center p-3.5"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={cn(
                    "relative w-full h-full rounded-2xl overflow-hidden",
                    contentClassName
                  )}
                >
                  {content[activeCard].content}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};
