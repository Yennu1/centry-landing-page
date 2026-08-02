"use client";

import FeatureRow from "@/components/ui/FeatureRow";

const features = [
  {
    eyebrow: "Core",
    title: "Member Management",
    description:
      "A complete, searchable directory of every person in your congregation. Track personal details, contact information, membership status, and church history — all in one place. Member profiles auto-generate a unique ID the moment a person is added.",
    image: "/images/screenshots/feature-members.png",
    alt: "Member Management",
    width: 960,
    height: 781,
  },
  {
    eyebrow: "Finance",
    title: "Transaction Records & Receipts",
    description:
      "Every donation generates a detailed transaction record with a printable giving receipt. Finance officers can review, edit, and export transaction history to CSV or Excel — and the live receipt preview updates as you type.",
    image: "/images/screenshots/feature-transactions.png",
    alt: "Transaction Records",
    width: 1188,
    height: 790,
  },
  {
    eyebrow: "Finance",
    title: "Donations & Giving",
    description:
      "Record tithes, offerings, building fund contributions, and more in seconds. Support for Cash, Mobile Money (MTN, Vodafone, AirtelTigo), bank transfers, and cheques — built for how Ghanaian churches actually operate.",
    image: "/images/screenshots/feature-donations.png",
    alt: "Donations and Giving",
    width: 1146,
    height: 721,
  },
  {
    eyebrow: "Finance",
    title: "Pledge Tracking",
    description:
      "Let members commit to giving goals over time. Pledges display a real-time progress bar showing how much has been fulfilled, helping your finance team follow up confidently and celebrate milestones as they're reached.",
    image: "/images/screenshots/feature-pledges.png",
    alt: "Pledge Tracking",
    width: 1149,
    height: 718,
  },
  {
    eyebrow: "Operations",
    title: "Events & Services",
    description:
      "Schedule every service and event your church runs — Sunday services, midweek meetings, prayer nights, outreaches, and more. Set recurring events once and let the system generate the full calendar automatically for the season ahead.",
    image: "/images/screenshots/feature-events.png",
    alt: "Events and Services",
    width: 1140,
    height: 754,
  },
  {
    eyebrow: "Security",
    title: "Secure Multi-Tenant Foundation",
    description:
      "Every church organisation runs in its own secure environment with Role Level Security enforced on all 18 database tables. Admins, pastors, finance officers, and group leaders each see only what their role permits — your data never bleeds across organisations.",
    image: "/images/screenshots/feature-multitenant.png",
    alt: "Secure Multi-Tenant",
    width: 1168,
    height: 799,
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-[#080B14] relative z-10">
      <div
        className="flex flex-col items-center text-center px-6"
        style={{ paddingTop: "100px", marginTop: "-200px", paddingBottom: "100px" }}
      >
        <p className="text-[0.7rem] font-semibold tracking-[0.42em] text-[#4F6BED] uppercase mb-4">
          Features
        </p>
        <h2
          className="text-[2rem] md:text-[2.75rem] leading-[1.1] text-[#EEF0FF] max-w-lg"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
        >
          What's inside Centry?
        </h2>
        <p className="text-[0.9rem] text-[#6B7499] mt-4 max-w-md leading-relaxed">
          Powerful modules, built to run every part of your church from a single platform.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-24 md:gap-36">
        {features.map((feature, i) => (
          <FeatureRow key={feature.title} {...feature} reverse={i % 2 === 1} />
        ))}
      </div>

      <div style={{ paddingBottom: "160px" }} />
    </section>
  );
}
