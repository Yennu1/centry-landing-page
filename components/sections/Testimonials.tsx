"use client";

import { motion } from "motion/react";

const TESTIMONIALS = [
  {
    initials: "KA",
    name: "Pastor Kwame Asante",
    role: "Lead Pastor · Grace Chapel International, Accra",
    quote:
      "Before Centry, our monthly reports took the finance team a full week to compile. Now I open my dashboard on Monday morning and everything is already there — attendance, giving, growth. It has changed how we make decisions as a leadership team.",
    gradient: "linear-gradient(135deg, #4F6BED, #1B2352)",
  },
  {
    initials: "AO",
    name: "Abena Owusu",
    role: "Financial Secretary · Lighthouse Baptist Church, Kumasi",
    quote:
      "The Mobile Money support won me over instantly. Most of our members give through MoMo, and Centry records it as naturally as cash. Receipts print in one click and our auditor said our books have never been this clean.",
    gradient: "linear-gradient(135deg, #7B93F5, #4F6BED)",
  },
  {
    initials: "ST",
    name: "Samuel Tetteh",
    role: "Church Administrator · Victory Assemblies, Takoradi",
    quote:
      "We run three branches and I used to drive between them with a flash drive every Friday. With Centry, each branch enters its own records and I see everything from one screen. The role permissions mean everyone sees exactly what they should — nothing more.",
    gradient: "linear-gradient(135deg, #1B2352, #4F6BED)",
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

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full bg-[#080B14] overflow-hidden" style={{ padding: "140px 24px" }}>
      <div className="relative max-w-[1100px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[0.7rem] font-semibold tracking-[0.42em] text-[#4F6BED] uppercase mb-4">
            Testimonials
          </p>
          <h2
            className="text-[2rem] md:text-[2.75rem] leading-[1.12] text-[#EEF0FF]"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
          >
            Loved by churches across Ghana
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_48px_rgba(0,0,0,0.45)]"
            >
              {/* Quote */}
              <blockquote className="flex-1">
                <span
                  className="block text-[2.4rem] leading-none text-[#4F6BED]/60 mb-2 select-none"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="text-[0.85rem] leading-[1.8] text-[#9CA3C4]">
                  {t.quote}
                </p>
              </blockquote>

              {/* Person */}
              <figcaption className="mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-full text-[0.72rem] font-bold text-white"
                  style={{ background: t.gradient }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="text-[0.85rem] font-semibold text-[#EEF0FF] leading-tight"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[0.7rem] text-[#6B7499] mt-0.5">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
