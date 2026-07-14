"use client";

import { motion } from "motion/react";

type Testimonial = {
  initials: string;
  name: string;
  role: string;
  quote: string;
  gradient: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    initials: "KA",
    name: "Pastor Kwame Asante",
    role: "Lead Pastor · Grace Chapel International, Accra",
    quote:
      "Before Centry, our monthly reports took the finance team a full week to compile. Now I open my dashboard on Monday morning and everything is already there — attendance, giving, growth.",
    gradient: "linear-gradient(135deg, #4F6BED, #1B2352)",
  },
  {
    initials: "AO",
    name: "Abena Owusu",
    role: "Financial Secretary · Lighthouse Baptist, Kumasi",
    quote:
      "The Mobile Money support won me over instantly. Most of our members give through MoMo, and Centry records it as naturally as cash. Our auditor said our books have never been this clean.",
    gradient: "linear-gradient(135deg, #7B93F5, #4F6BED)",
  },
  {
    initials: "ST",
    name: "Samuel Tetteh",
    role: "Church Administrator · Victory Assemblies, Takoradi",
    quote:
      "We run three branches and I used to drive between them with a flash drive every Friday. With Centry, each branch enters its own records and I see everything from one screen.",
    gradient: "linear-gradient(135deg, #1B2352, #4F6BED)",
  },
  {
    initials: "EM",
    name: "Esther Mensah",
    role: "Ministry Leader · City of Light Chapel, Tema",
    quote:
      "Scheduling our midweek services and tracking who actually shows up used to live in my head. Now it lives in Centry, and my team can see it too. It has taken so much weight off me.",
    gradient: "linear-gradient(135deg, #4F6BED, #7B93F5)",
  },
  {
    initials: "DB",
    name: "Rev. Daniel Boateng",
    role: "General Overseer · Rock of Ages, Cape Coast",
    quote:
      "As we planted new branches, I feared losing sight of the numbers. Centry grew with us. One login shows me every branch's health at a glance — I lead with clarity now, not guesswork.",
    gradient: "linear-gradient(135deg, #1B2352, #7B93F5)",
  },
  {
    initials: "GN",
    name: "Grace Nyarko",
    role: "Administrator · Faith Harvest Temple, Sunyani",
    quote:
      "Importing our whole member register took minutes, not weeks. Everyone's details, giving history and attendance sit in one tidy place. Onboarding a new usher is now genuinely effortless.",
    gradient: "linear-gradient(135deg, #7B93F5, #1B2352)",
  },
];

function Card({ t }: { t: Testimonial }) {
  return (
    <figure
      className="shrink-0 flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl"
      style={{ width: "380px", padding: "28px" }}
    >
      {/* Person — top row */}
      <figcaption className="flex items-center" style={{ gap: "12px", marginBottom: "20px" }}>
        <div
          className="flex shrink-0 items-center justify-center rounded-full font-bold text-white"
          style={{ width: "44px", height: "44px", fontSize: "0.74rem", background: t.gradient }}
        >
          {t.initials}
        </div>
        <div className="min-w-0">
          <p
            className="font-semibold text-[#EEF0FF] leading-tight truncate"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.86rem" }}
          >
            {t.name}
          </p>
          <p className="text-[#6B7499] truncate" style={{ fontSize: "0.72rem", marginTop: "3px" }}>
            {t.role}
          </p>
        </div>
      </figcaption>

      {/* Quote */}
      <blockquote>
        <p className="text-[#9CA3C4]" style={{ fontSize: "0.85rem", lineHeight: 1.75 }}>
          {t.quote}
        </p>
      </blockquote>
    </figure>
  );
}

function Row({ items, direction }: { items: Testimonial[]; direction: "ltr" | "rtl" }) {
  // Duplicate the set so the -50% translate loops seamlessly
  const doubled = [...items, ...items];
  return (
    <div className="tm-row">
      <div className={`tm-track ${direction === "ltr" ? "tm-track--ltr" : "tm-track--rtl"}`}>
        {doubled.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const topRow = TESTIMONIALS.slice(0, 3);
  const bottomRow = TESTIMONIALS.slice(3, 6);

  return (
    <section id="testimonials" className="relative w-full bg-[#080B14] overflow-hidden" style={{ padding: "64px 0 140px" }}>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center"
        style={{ marginBottom: "72px", paddingLeft: "24px", paddingRight: "24px" }}
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

      {/* Two opposing marquee rows */}
      <div className="tm-viewport">
        <Row items={topRow} direction="ltr" />
        <div style={{ height: "28px" }} />
        <Row items={bottomRow} direction="rtl" />
      </div>
    </section>
  );
}
