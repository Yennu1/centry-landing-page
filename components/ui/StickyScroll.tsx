"use client";
import React, { useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);

  // Page scroll drives the transitions across the whole tall section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll progress (0..1) to the active card index
    const index = Math.min(
      cardLength - 1,
      Math.floor(latest * cardLength)
    );
    setActiveCard(index < 0 ? 0 : index);
  });

  const backgroundColors = [
    "#080B14",
    "#0B0F1E",
    "#080D18",
    "#0A0C1A",
    "#090C17",
    "#0B0F1E",
  ];

  return (
    // Tall outer container — gives the sticky rectangle a long scroll runway
    <div ref={ref} className="relative" style={{ height: `${content.length * 100}vh` }}>

      {/* The rectangle pins to the viewport center and HOLDS while you scroll
          through all features, only releasing at the end of the tall container. */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.div
          animate={{ backgroundColor: backgroundColors[activeCard] }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative w-full max-w-[1000px] mx-6 rounded-3xl border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden"
          style={{ height: "560px" }}
        >
          <div className="flex h-full">

            {/* LEFT — feature text, with 32px inner breathing space */}
            <div
              className="flex flex-col justify-center w-[44%] shrink-0 border-r border-white/[0.06]"
              style={{ padding: "48px 56px", paddingRight: "32px" }}
            >
              {/* Step indicator dots (no 01/06 text) */}
              <div className="flex gap-1.5 mb-7">
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
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <h3
                    className="text-[1.5rem] md:text-[1.75rem] font-semibold text-[#EEF0FF] leading-[1.2] mb-5"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {content[activeCard].title}
                  </h3>
                  <p className="text-[0.875rem] leading-[1.8] text-[#8B92B0]">
                    {content[activeCard].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT — screenshot, fully contained */}
            <div className="flex-1 relative overflow-hidden flex items-center justify-center" style={{ padding: "24px" }}>
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
