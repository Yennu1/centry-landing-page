"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const FEATURES = [
  {
    id: "members",
    label: "Member Management",
    tag: "PEOPLE",
    title: "Every member, perfectly organised",
    description:
      "A complete, searchable directory of every person in your congregation. Track personal details, contact information, membership status, and church history — all in one place. Member profiles auto-generate a unique ID the moment a person is added.",
    screenshot: "/images/screenshots/feature-members.png",
    accent: "#4F6BED",
  },
  {
    id: "transactions",
    label: "Transaction Records & Receipts",
    tag: "FINANCE",
    title: "Every giving, recorded and receipted",
    description:
      "Every donation generates a detailed transaction record with a printable giving receipt. Finance officers can review, edit, and export transaction history to CSV or Excel — and the live receipt preview updates as you type.",
    screenshot: "/images/screenshots/feature-transactions.png",
    accent: "#4F6BED",
  },
  {
    id: "donations",
    label: "Donations & Giving",
    tag: "GIVING",
    title: "Record giving the way your church works",
    description:
      "Record tithes, offerings, building fund contributions, and more in seconds. Support for Cash, Mobile Money (MTN, Vodafone, AirtelTigo), bank transfers, and cheques — built for how Ghanaian churches actually operate.",
    screenshot: "/images/screenshots/feature-donations.png",
    accent: "#4F6BED",
  },
  {
    id: "pledges",
    label: "Pledge Tracking",
    tag: "COMMITMENTS",
    title: "Track commitments, celebrate milestones",
    description:
      "Let members commit to giving goals over time. Pledges display a real-time progress bar showing how much has been fulfilled, helping your finance team follow up confidently and celebrate milestones as they're reached.",
    screenshot: "/images/screenshots/feature-pledges.png",
    accent: "#4F6BED",
  },
  {
    id: "events",
    label: "Events & Services",
    tag: "SCHEDULING",
    title: "Your full calendar, built automatically",
    description:
      "Schedule every service and event your church runs — Sunday services, midweek meetings, prayer nights, outreaches, and more. Set recurring events once and let the system generate the full calendar automatically for the season ahead.",
    screenshot: "/images/screenshots/feature-events.png",
    accent: "#4F6BED",
  },
  {
    id: "multitenant",
    label: "Secure Multi-Tenant Foundation",
    tag: "SECURITY",
    title: "Your data stays yours, always",
    description:
      "Every church organisation runs in its own secure environment with Role Level Security enforced on all 18 database tables. Admins, pastors, finance officers, and group leaders each see only what their role permits — your data never bleeds across organisations.",
    screenshot: "/images/screenshots/feature-multitenant.png",
    accent: "#4F6BED",
  },
] as const;

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    featureRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i);
          }
        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: 0,
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="features" className="relative w-full bg-[#080B14] py-24 md:py-32">
      {/* Section header */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 mb-20 md:mb-24">
        <p className="text-[0.72rem] font-semibold tracking-[0.4em] text-[#4F6BED] uppercase mb-4">
          Everything you need
        </p>
        <h2
          className="text-[2rem] md:text-[2.75rem] leading-[1.1] text-[#EEF0FF]"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
        >
          Built for every role in your church
        </h2>
      </div>

      {/* Two-column sticky layout */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 flex gap-10 md:gap-16 items-start">

        {/* LEFT — scrolling feature blocks */}
        <div className="flex-1 flex flex-col gap-0">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.id}
              ref={(el) => { featureRefs.current[i] = el; }}
              className="py-16 md:py-20 border-b border-white/[0.06] last:border-0"
            >
              {/* Tag */}
              <p className="text-[0.68rem] font-semibold tracking-[0.35em] text-[#4F6BED] uppercase mb-4">
                {feature.tag}
              </p>

              {/* Title */}
              <motion.h3
                animate={{ opacity: activeIndex === i ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                className="text-[1.35rem] md:text-[1.6rem] font-semibold text-[#EEF0FF] leading-snug mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {feature.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                animate={{ opacity: activeIndex === i ? 0.8 : 0.25 }}
                transition={{ duration: 0.4 }}
                className="text-[0.9rem] leading-[1.75] text-[#9CA3C4] max-w-[420px]"
              >
                {feature.description}
              </motion.p>
            </div>
          ))}
        </div>

        {/* RIGHT — sticky screenshot panel */}
        <div className="hidden md:block w-[420px] lg:w-[460px] shrink-0 sticky top-28">
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#0D1120] border border-white/[0.07] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            style={{ aspectRatio: "4/3" }}>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 p-3"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={FEATURES[activeIndex].screenshot}
                    alt={FEATURES[activeIndex].label}
                    fill
                    sizes="460px"
                    className="object-cover object-top"
                    priority={activeIndex === 0}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Subtle dot indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {FEATURES.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    width: activeIndex === i ? "1.5rem" : "0.375rem",
                    opacity: activeIndex === i ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-1 rounded-full bg-[#4F6BED]"
                />
              ))}
            </div>
          </div>

          {/* Feature name below the card */}
          <div className="mt-4 px-1">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-[0.75rem] font-medium text-[#6B7499] tracking-wide"
              >
                {FEATURES[activeIndex].label}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile — stacked cards (no sticky) */}
      <div className="md:hidden max-w-[1100px] mx-auto px-6 mt-10 flex flex-col gap-10">
        {FEATURES.map((feature) => (
          <div key={feature.id} className="flex flex-col gap-4">
            <div className="relative w-full rounded-xl overflow-hidden bg-[#0D1120] border border-white/[0.07]"
              style={{ aspectRatio: "4/3" }}>
              <Image
                src={feature.screenshot}
                alt={feature.label}
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
            <p className="text-[0.68rem] font-semibold tracking-[0.35em] text-[#4F6BED] uppercase">
              {feature.tag}
            </p>
            <h3 className="text-[1.2rem] font-semibold text-[#EEF0FF] leading-snug"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {feature.title}
            </h3>
            <p className="text-[0.88rem] leading-[1.75] text-[#9CA3C4]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
