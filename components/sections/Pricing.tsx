"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import ElectricBorder from "@/components/ui/ElectricBorder";

const TIERS = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    tagline: "For small congregations getting organised.",
    features: [
      "Up to 50 members",
      "1 branch",
      "Member directory & profiles",
      "Basic giving records",
      "Community support",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Growth",
    price: "$25",
    period: "per month",
    tagline: "For growing churches that need the full toolkit.",
    features: [
      "Up to 500 members",
      "Everything in Starter",
      "Pledge tracking",
      "Events & services calendar",
      "CSV & Excel exports",
      "Printable giving receipts",
      "Email support",
    ],
    cta: "Get Growth",
    featured: true,
  },
  {
    name: "Pro",
    price: "$45",
    period: "per month",
    tagline: "For multi-branch churches that run on data.",
    features: [
      "Unlimited members",
      "Everything in Growth",
      "Multi-branch management",
      "Reports & analytics dashboard",
      "Role-based access control",
      "Priority support",
    ],
    cta: "Get Pro",
    featured: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual billing",
    tagline: "For denominations and large organisations.",
    features: [
      "Everything in Pro",
      "Dedicated onboarding",
      "Custom roles & permissions",
      "Service level agreement",
      "Dedicated account manager",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-[#080B14] overflow-hidden" style={{ padding: "140px 24px" }}>
      {/* Ambient bloom */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-64 left-1/2 h-[40rem] w-[70rem] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(79,107,237,0.16), transparent 70%)",
        }}
      />

      <div className="relative" style={{ maxWidth: "1160px", marginLeft: "auto", marginRight: "auto", paddingLeft: "24px", paddingRight: "24px" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: "112px" }}
        >
          <p className="text-[0.7rem] font-semibold tracking-[0.42em] text-[#4F6BED] uppercase mb-4">
            Pricing
          </p>
          <h2
            className="text-[2rem] md:text-[2.75rem] leading-[1.12] text-[#EEF0FF]"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
          >
            Simple plans that grow with your church
          </h2>
        </motion.div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {TIERS.map((tier, i) => {
            const cardInner = (
              <div
                className={`relative flex flex-col h-full rounded-2xl backdrop-blur-xl transition-colors duration-300 ${
                  tier.featured
                    ? "border border-[#4F6BED]/50 bg-[#4F6BED]/[0.07] shadow-[0_0_60px_rgba(79,107,237,0.22),inset_0_1px_0_rgba(255,255,255,0.06)]"
                    : "border border-white/[0.08] bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_48px_rgba(0,0,0,0.45)] hover:border-white/[0.16]"
                }`}
                style={{ padding: "28px" }}
              >
                {/* Header: name + price + tagline pinned to fixed heights so all cards align */}
                <div style={{ height: "44px" }}>
                  <h3
                    className="text-[0.95rem] font-semibold text-[#EEF0FF]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tier.name}
                  </h3>
                </div>

                <div className="flex items-baseline gap-2" style={{ height: "48px" }}>
                  <span
                    className="text-[2.1rem] leading-none text-[#EEF0FF]"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {tier.price}
                  </span>
                  <span className="text-[0.72rem] text-[#6B7499]">{tier.period}</span>
                </div>

                <p
                  className="text-[0.78rem] leading-[1.55] text-[#8B92B0]"
                  style={{ height: "56px", marginTop: "6px", marginBottom: "24px" }}
                >
                  {tier.tagline}
                </p>

                {/* Feature list flex-grows to fill space so button pins to bottom */}
                <ul className="flex flex-col flex-1" style={{ gap: "12px", marginBottom: "24px" }}>
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="mt-[2px] size-3.5 shrink-0 text-[#7B93F5]" strokeWidth={2.5} />
                      <span className="text-[0.8rem] leading-snug text-[#9CA3C4]">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://app.centrycms.com"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-[0.82rem] font-semibold transition-colors duration-200 ${
                    tier.featured
                      ? "bg-[#4F6BED] text-white hover:bg-[#4059c9]"
                      : "border border-white/[0.1] text-[#EEF0FF] hover:border-[#4F6BED]/50 hover:text-white"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="size-3.5" strokeWidth={2} />
                </Link>
              </div>
            );

            return (
              <motion.div
                key={tier.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="relative flex"
              >
                {tier.featured ? (
                  <ElectricBorder
                    color="#7B93F5"
                    speed={0.35}
                    chaos={0.08}
                    borderRadius={16}
                    className="w-full"
                    style={{ display: "flex" }}
                  >
                    {cardInner}
                  </ElectricBorder>
                ) : (
                  <div className="w-full flex">{cardInner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
