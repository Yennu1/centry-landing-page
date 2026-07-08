"use client";

import { motion } from "motion/react";

const STEPS = [
  {
    numeral: "I",
    title: "Sign up / Log in",
    description: "Create your church's secure workspace in under two minutes.",
  },
  {
    numeral: "II",
    title: "Create & manage members",
    description: "Add members one by one or import your whole register at once.",
  },
  {
    numeral: "III",
    title: "Enter offerings",
    description: "Record both personalised giving and collective offerings in seconds.",
  },
  {
    numeral: "IV",
    title: "Export as PDF or Excel",
    description: "Generate clean statements and reports your board can trust.",
  },
  {
    numeral: "V",
    title: "Analyse reports",
    description: "Watch trends in giving, attendance, and growth — all visualised.",
  },
];

/* ---------- Tile illustrations ---------- */

function TileSignup() {
  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: "28px", gap: "12px" }}>
      <div style={{ height: "9px", width: "72%", borderRadius: "999px", background: "rgba(148,158,190,0.22)" }} />
      <div style={{ height: "9px", width: "54%", borderRadius: "999px", background: "rgba(148,158,190,0.22)" }} />
      <div
        style={{
          height: "16px",
          width: "44%",
          borderRadius: "999px",
          background: "linear-gradient(90deg, #4F6BED, #7B93F5)",
          boxShadow: "0 0 22px rgba(79,107,237,0.75)",
          marginTop: "4px",
        }}
      />
    </div>
  );
}

function TileMembers() {
  return (
    <div className="w-full h-full flex flex-col justify-center" style={{ padding: "28px", gap: "14px" }}>
      {["74%", "62%", "68%"].map((w, i) => (
        <div key={i} className="flex items-center" style={{ gap: "12px" }}>
          <div style={{ width: "9px", height: "9px", borderRadius: "999px", background: "rgba(123,147,245,0.75)" }} />
          <div style={{ height: "8px", width: w, borderRadius: "999px", background: "rgba(148,158,190,0.22)" }} />
        </div>
      ))}
    </div>
  );
}

function TileOfferings() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center" style={{ gap: "8px" }}>
      <span
        className="font-semibold text-[#7B93F5]"
        style={{ fontSize: "0.68rem", letterSpacing: "0.28em" }}
      >
        GH&#8373;
      </span>
      <span
        className="text-[#EEF0FF]"
        style={{ fontFamily: "'Instrument Serif', serif", fontSize: "2.1rem", lineHeight: 1 }}
      >
        1,250
      </span>
    </div>
  );
}

function TileExport() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ gap: "14px" }}>
      {["PDF", "XLSX"].map((label) => (
        <div
          key={label}
          className="flex flex-col items-center justify-between"
          style={{
            width: "58px",
            height: "68px",
            borderRadius: "10px",
            border: "1px solid rgba(148,158,190,0.25)",
            background: "rgba(13,18,38,0.85)",
            padding: "10px 10px 8px",
          }}
        >
          <div className="w-full flex flex-col" style={{ gap: "4px" }}>
            <div style={{ height: "3px", width: "100%", borderRadius: "999px", background: "rgba(148,158,190,0.3)" }} />
            <div style={{ height: "3px", width: "72%", borderRadius: "999px", background: "rgba(148,158,190,0.3)" }} />
            <div style={{ height: "3px", width: "85%", borderRadius: "999px", background: "rgba(148,158,190,0.3)" }} />
          </div>
          <span className="font-semibold text-[#AAB2CF]" style={{ fontSize: "0.58rem", letterSpacing: "0.08em" }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function TileReports() {
  const heights = [18, 26, 22, 34, 42, 52, 64];
  return (
    <div className="w-full h-full flex items-end justify-center" style={{ gap: "7px", paddingBottom: "38px" }}>
      {heights.map((h, i) => (
        <div
          key={i}
          style={{
            width: "11px",
            height: `${h}px`,
            borderRadius: "4px 4px 2px 2px",
            background: "linear-gradient(180deg, #7B93F5, #3B55D9)",
            boxShadow: i === heights.length - 1 ? "0 0 18px rgba(79,107,237,0.55)" : "none",
          }}
        />
      ))}
    </div>
  );
}

const TILES = [TileSignup, TileMembers, TileOfferings, TileExport, TileReports];

/* ---------- Section ---------- */

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
          background: "radial-gradient(circle, rgba(27,35,82,0.5), transparent 68%)",
        }}
      />

      <div className="relative" style={{ maxWidth: "1240px", marginLeft: "auto", marginRight: "auto" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: "110px" }}
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
            From first login to full insight — five steps, one clean line from setup to signal.
          </p>
        </motion.div>

        {/* Flow row */}
        <div className="relative">
          {/* Connecting line through the tile row (desktop only) */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block absolute pointer-events-none"
            style={{
              left: 0,
              right: 0,
              top: "85px",
              height: "1px",
              transformOrigin: "left center",
              background:
                "linear-gradient(90deg, rgba(79,107,237,0.55), rgba(79,107,237,0.22) 30%, rgba(79,107,237,0.22) 70%, rgba(79,107,237,0.08))",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5" style={{ gap: "24px" }}>
            {STEPS.map((step, i) => {
              const Tile = TILES[i];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex flex-col"
                >
                  {/* Illustrated tile */}
                  <div
                    className="group relative"
                    style={{
                      height: "170px",
                      borderRadius: "22px",
                      border: "1px solid rgba(79,107,237,0.20)",
                      background: "linear-gradient(180deg, rgba(13,17,32,0.9), rgba(8,11,20,0.7))",
                      overflow: "hidden",
                      transition:
                        "transform 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease",
                      willChange: "transform",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(-5px) scale(1.02)";
                      el.style.borderColor = "rgba(123,147,245,0.55)";
                      el.style.boxShadow = "0 18px 48px -18px rgba(79,107,237,0.45)";
                      el.style.background = "linear-gradient(180deg, rgba(16,21,40,0.95), rgba(10,14,26,0.85))";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(0) scale(1)";
                      el.style.borderColor = "rgba(79,107,237,0.20)";
                      el.style.boxShadow = "none";
                      el.style.background = "linear-gradient(180deg, rgba(13,17,32,0.9), rgba(8,11,20,0.7))";
                    }}
                  >
                    <Tile />
                  </div>

                  {/* Copy */}
                  <div className="text-center" style={{ marginTop: "44px" }}>
                    <p
                      className="font-semibold text-[#4F6BED]"
                      style={{ fontSize: "0.68rem", letterSpacing: "0.3em" }}
                    >
                      STEP {step.numeral}
                    </p>
                    <h3
                      className="font-semibold text-[#EEF0FF]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.08rem", marginTop: "12px" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#8B92B0]"
                      style={{ fontSize: "0.84rem", lineHeight: 1.7, maxWidth: "230px", margin: "10px auto 0" }}
                    >
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
