"use client";

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

// Pewbeam-style stagger reveal — smooth, seamless
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function Personas() {
  return (
    <section
      className="relative w-full bg-[#080B14]"
      style={{ marginTop: "-120px", padding: "80px 24px 140px" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: "96px" }}
        >
          <p className="text-[0.7rem] font-semibold tracking-[0.42em] text-[#4F6BED] uppercase mb-4">
            Made for you
          </p>
          <h2
            className="text-[2rem] md:text-[2.75rem] leading-[1.12] text-[#EEF0FF]"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
          >
            Who Centry was made for
          </h2>
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {PERSONAS.map((p, i) => (
            <motion.div
              key={p.role}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative isolate w-full h-[15rem] md:h-[16rem] rounded-[1.25rem] p-6 md:p-7 border border-[#4F6BED]/20 bg-[#4F6BED]/[0.04] overflow-hidden"
            >
              {/* Content — above gradient */}
              <div className="relative z-10 h-full w-full flex flex-col justify-between">
                {/* Tag at top-left */}
                <div className="w-fit flex items-center gap-2 px-4 py-2 rounded-full text-[0.82rem] bg-[#4F6BED]/[0.08] border border-[#4F6BED]/25">
                  <span className="text-[#7B93F5] font-medium">{p.role}</span>
                </div>

                {/* Description at bottom */}
                <p className="text-[0.92rem] md:text-[0.98rem] leading-[1.5] text-[#C0C7E0] max-w-[26rem]">
                  {p.description}
                </p>
              </div>

              {/* Bold roman numeral — top-right, more visible */}
              <div className="absolute -top-4 md:-top-6 right-2 md:right-4 -z-[2]">
                <span
                  className="block text-[10rem] md:text-[13rem] font-bold leading-none text-[#EEF0FF]/[0.10] select-none"
                  style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "-0.04em" }}
                >
                  {p.numeral}
                </span>
              </div>

              {/* Gradient fade from bottom — dissolves lower part of numeral into card */}
              <div className="absolute inset-0 -z-[1] bg-gradient-to-t from-[#080B14] from-[30%] to-transparent to-[100%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
