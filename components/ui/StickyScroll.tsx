"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
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
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);

  // target: ref means PAGE scroll drives transitions — no internal scrollbar
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Centry palette — cycling dark backgrounds
  const backgroundColors = [
    "#080B14",
    "#0B0F1E",
    "#080D18",
    "#0A0C1A",
    "#080B14",
    "#0B0F1E",
  ];

  return (
    // Tall scroll container — each feature gets 100vh of scroll real estate
    <div ref={ref} className="relative" style={{ height: `${content.length * 100}vh` }}>

      {/* Sticky rectangle — stays on screen while user scrolls */}
      <div className="sticky top-0 flex items-center justify-center w-full" style={{ height: "100vh" }}>
        <motion.div
          animate={{ backgroundColor: backgroundColors[activeCard] }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative w-full max-w-[1000px] mx-6 rounded-3xl border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden"
          style={{ height: "560px" }}
        >
          {/* Inner layout — left: text, right: image */}
          <div className="flex h-full">

            {/* LEFT — feature text */}
            <div className="flex flex-col justify-center px-12 md:px-16 w-[44%] shrink-0 border-r border-white/[0.06]">
              {/* Step indicator */}
              <div className="flex gap-1.5 mb-8">
                {content.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      width: activeCard === i ? "1.75rem" : "0.375rem",
                      opacity: activeCard === i ? 1 : 0.25,
                      backgroundColor: activeCard === i ? "#4F6BED" : "#4F6BED",
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-[3px] rounded-full"
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Feature count */}
                  <p className="text-[0.68rem] font-semibold tracking-[0.35em] text-[#4F6BED] uppercase mb-4">
                    {String(activeCard + 1).padStart(2, "0")} / {String(content.length).padStart(2, "0")}
                  </p>

                  {/* Title */}
                  <h3
                    className="text-[1.5rem] md:text-[1.75rem] font-semibold text-[#EEF0FF] leading-[1.2] mb-5"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {content[activeCard].title}
                  </h3>

                  {/* Description */}
                  <p className="text-[0.875rem] leading-[1.8] text-[#8B92B0]">
                    {content[activeCard].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT — screenshot */}
            <div className="flex-1 relative overflow-hidden flex items-center justify-center p-6">
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

          {/* Bottom progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-[#4F6BED]"
            animate={{ width: `${((activeCard + 1) / content.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};
