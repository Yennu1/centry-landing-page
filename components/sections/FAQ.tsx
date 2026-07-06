"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Is my church's data secure?",
    a: "Yes. Every organisation runs in its own isolated environment with Role Level Security enforced on all 18 database tables. Your data is never visible to any other church, and each user only sees what their role permits.",
  },
  {
    q: "Can we record Mobile Money donations?",
    a: "Absolutely. Centry supports Cash, Mobile Money (MTN, Vodafone, AirtelTigo), bank transfers, and cheques — because that's how Ghanaian churches actually receive giving.",
  },
  {
    q: "Can multiple branches use one Centry account?",
    a: "Yes. On the Pro plan and above, you can manage multiple branches under a single organisation. Each branch records its own members, giving, and events, while leadership sees everything from one dashboard.",
  },
  {
    q: "What happens when we outgrow the free plan?",
    a: "Nothing breaks. Your data stays exactly where it is — you simply upgrade to unlock higher member limits and additional features. Upgrading takes less than a minute and no data migration is needed.",
  },
  {
    q: "Do I need technical skills to use Centry?",
    a: "No. Centry is designed for church workers, not IT departments. If you can use WhatsApp, you can use Centry. Most churches are fully set up within their first afternoon.",
  },
  {
    q: "Can we export our data at any time?",
    a: "Yes — your data is yours. Members, transactions, and reports can be exported to CSV or Excel whenever you need them, on every paid plan.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full bg-[#080B14]" style={{ padding: "140px 24px" }}>
      <div className="max-w-[760px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[0.7rem] font-semibold tracking-[0.42em] text-[#4F6BED] uppercase mb-4">
            FAQ
          </p>
          <h2
            className="text-[2rem] md:text-[2.75rem] leading-[1.12] text-[#EEF0FF]"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
          >
            Questions, answered
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`rounded-xl border backdrop-blur-xl transition-colors duration-300 ${
                  isOpen
                    ? "border-[#4F6BED]/35 bg-[#4F6BED]/[0.05]"
                    : "border-white/[0.07] bg-white/[0.025] hover:border-white/[0.14]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className="text-[0.92rem] font-medium text-[#EEF0FF]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <Plus className="size-4 text-[#7B93F5]" strokeWidth={2} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[0.84rem] leading-[1.8] text-[#8B92B0]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
