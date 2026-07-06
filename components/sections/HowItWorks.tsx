"use client";

import { motion } from "framer-motion";
import { LogIn, UserPlus, Coins, FileDown, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: LogIn,
    title: "Sign up / Log in",
    description: "Create your church's secure workspace in under two minutes.",
  },
  {
    icon: UserPlus,
    title: "Create & manage members",
    description: "Add members one by one or import your whole register at once.",
  },
  {
    icon: Coins,
    title: "Enter offerings",
    description: "Record both personalised giving and collective offerings in seconds.",
  },
  {
    icon: FileDown,
    title: "Export as PDF or Excel",
    description: "Generate clean statements and reports your board can trust.",
  },
  {
    icon: TrendingUp,
    title: "Analyse reports",
    description: "Watch trends in giving, attendance, and growth — all visualised.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-[#080B14] overflow-hidden" style={{ padding: "140px 24px" }}>
      {/* Ambient bloom */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/3 -right-56 h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(27,35,82,0.5), transparent 68%)",
        }}
      />

      <div className="relative max-w-[820px] mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[0.7rem] font-semibold tracking-[0.42em] text-[#4F6BED] uppercase mb-4">
            The flow
          </p>
          <h2
            className="text-[2rem] md:text-[2.75rem] leading-[1.12] text-[#EEF0FF]"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
          >
            How Centry works
          </h2>
          <p className="text-[0.9rem] text-[#6B7499] mt-4 max-w-md mx-auto leading-relaxed">
            From first login to full insight — five simple steps.
          </p>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Spine */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-white/[0.07]" aria-hidden />

          <div className="flex flex-col" style={{ gap: "56px" }}>
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative flex items-start gap-6"
                >
                  {/* Node */}
                  <div className="relative z-10 shrink-0 flex size-[55px] items-center justify-center rounded-2xl border border-[#4F6BED]/30 bg-[#0D1120] shadow-[0_0_24px_rgba(79,107,237,0.18)]">
                    <Icon className="size-5 text-[#7B93F5]" strokeWidth={1.75} />
                  </div>

                  {/* Copy */}
                  <div className="pt-1">
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <span className="text-[0.68rem] font-semibold tracking-[0.3em] text-[#4F6BED]">
                        STEP {i + 1}
                      </span>
                    </div>
                    <h3
                      className="text-[1.1rem] font-semibold text-[#EEF0FF] mb-1.5"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[0.85rem] leading-[1.7] text-[#8B92B0] max-w-[420px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
