"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroBloom from "./HeroBloom";
import HeroHeadline from "./HeroHeadline";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.2 + i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative px-2">
      <div className="hero-bg relative isolate w-full rounded-b-[1.5rem] overflow-hidden h-[36rem] md:h-[44rem]">
        {/* ── Layer 0: Dot grid (via .hero-bg::before) + Bloom ── */}
        <HeroBloom />

        {/* ── Layer 1: Hero copy ── */}
        <div className="relative z-[2] h-full w-full flex flex-col items-center justify-center px-4 pt-16">
          <HeroHeadline />

          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[0.92rem] md:text-[1.05rem] leading-relaxed max-w-[21rem] md:max-w-[30rem] text-center mt-5 md:mt-6 text-[#9CA3C4]"
          >
            The all-in-one platform to manage members, attendance, finances,
            groups, and events — built for the modern church.
          </motion.p>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 mt-14"
          >
            <Link href="#contact" className="btn-primary text-sm px-8 py-3">
              Get Started
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
