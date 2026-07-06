"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative w-full bg-[#080B14]" style={{ padding: "100px 24px 140px" }}>
      <div className="max-w-[900px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.03] backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_32px_80px_rgba(0,0,0,0.55)]"
          style={{ padding: "88px 40px" }}
        >
          {/* Gloom at the base — slowly brightening */}
          <motion.div
            aria-hidden
            animate={{ opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-28 left-1/2 h-[20rem] w-[85%] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse 55% 60% at 50% 100%, rgba(120,150,255,0.5), rgba(79,107,237,0.28) 40%, transparent 72%)",
            }}
          />

          <div className="relative flex flex-col items-center text-center">
            <h2
              className="max-w-[560px] text-[1.9rem] md:text-[2.6rem] leading-[1.15] text-[#EEF0FF]"
              style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
            >
              Change the administration game with{" "}
              <span className="italic text-[#7B93F5]">Centry</span>
            </h2>

            {/* Link below the card copy — scrolls up to pricing */}
            <Link
              href="#pricing"
              className="group mt-9 inline-flex items-center gap-2 text-[0.9rem] font-medium text-[#9CA3C4] transition-colors duration-200 hover:text-[#EEF0FF]"
            >
              <span className="border-b border-[#4F6BED]/50 pb-0.5 transition-colors duration-200 group-hover:border-[#7B93F5]">
                Choose your plan
              </span>
              <ArrowUpRight className="size-4 text-[#7B93F5] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
