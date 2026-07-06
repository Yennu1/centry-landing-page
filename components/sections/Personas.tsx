"use client";

import { motion } from "framer-motion";
import { Church, Calculator, ClipboardList, Users } from "lucide-react";

const PERSONAS = [
  {
    icon: Church,
    role: "Pastors & General Overseers",
    description:
      "See the health of your entire church at a glance — attendance, giving, and growth — without chasing anyone for reports. Lead with clarity, not guesswork.",
  },
  {
    icon: Calculator,
    role: "Financial Secretaries",
    description:
      "Record every cedi in seconds, print receipts instantly, and export clean statements for audits. No more reconciling notebooks at midnight.",
  },
  {
    icon: ClipboardList,
    role: "Administrators",
    description:
      "Manage members, branches, events, and categories from one dashboard. Everything your office runs on paper today, organised and searchable forever.",
  },
  {
    icon: Users,
    role: "Ministry Leaders",
    description:
      "Track your group's attendance, plan meetings, and keep your members connected — with access scoped to exactly what your ministry needs.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Personas() {
  return (
    <section className="relative w-full bg-[#080B14] overflow-hidden" style={{ padding: "140px 24px" }}>
      {/* Ambient drifting bloom */}
      <motion.div
        aria-hidden
        animate={{ x: ["-10%", "6%", "-10%"], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(79,107,237,0.14), transparent 70%)",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[0.7rem] font-semibold tracking-[0.42em] text-[#4F6BED] uppercase mb-4">
            Made for you
          </p>
          <h2
            className="text-[2rem] md:text-[2.75rem] leading-[1.12] text-[#EEF0FF]"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
          >
            Who Centry was made for?
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PERSONAS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.role}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_48px_rgba(0,0,0,0.45)] transition-colors duration-300 hover:border-[#4F6BED]/40"
              >
                <div className="mb-6 inline-flex size-11 items-center justify-center rounded-xl bg-[#4F6BED]/12 border border-[#4F6BED]/25">
                  <Icon className="size-5 text-[#7B93F5]" strokeWidth={1.75} />
                </div>
                <h3
                  className="text-[1.05rem] font-semibold text-[#EEF0FF] leading-snug mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {p.role}
                </h3>
                <p className="text-[0.82rem] leading-[1.75] text-[#8B92B0]">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
