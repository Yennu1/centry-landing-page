"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, X } from "lucide-react";

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
    <section id="faq" className="relative w-full" style={{ background: "#F5F6F8", padding: "128px 24px" }}>
      <div style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]" style={{ gap: "48px" }}>
          {/* Left — giant bold FAQs label */}
          <div className="lg:sticky lg:top-32 self-start">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="leading-[0.9] text-[#0D1120]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(4rem, 9vw, 8.5rem)",
                letterSpacing: "-0.04em",
              }}
            >
              FAQs
            </motion.h2>
            <p
              className="text-[#5A6178]"
              style={{ fontSize: "0.95rem", lineHeight: 1.7, marginTop: "20px", maxWidth: "320px" }}
            >
              Everything you need to know about running your church on Centry.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col" style={{ gap: "14px" }}>
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="transition-shadow duration-300"
                  style={{
                    borderRadius: "16px",
                    background: "#FFFFFF",
                    boxShadow: isOpen
                      ? "0 12px 40px -12px rgba(13,17,32,0.12)"
                      : "0 1px 3px rgba(13,17,32,0.05)",
                    border: isOpen ? "1px solid rgba(79,107,237,0.15)" : "1px solid rgba(13,17,32,0.05)",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between text-left"
                    style={{ gap: "16px", padding: "22px 24px" }}
                  >
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1rem",
                        fontWeight: isOpen ? 600 : 500,
                        color: isOpen ? "#0D1120" : "#4A5169",
                      }}
                    >
                      {item.q}
                    </span>
                    <span className="shrink-0 flex items-center justify-center" style={{ width: "20px", height: "20px" }}>
                      {isOpen ? (
                        <X className="size-[18px] text-[#4F6BED]" strokeWidth={2.2} />
                      ) : (
                        <Plus className="size-[18px] text-[#9AA1B8]" strokeWidth={2} />
                      )}
                    </span>
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
                        <p
                          style={{
                            padding: "0 24px 24px",
                            fontSize: "0.9rem",
                            lineHeight: 1.75,
                            color: "#5A6178",
                          }}
                        >
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
      </div>
    </section>
  );
}
