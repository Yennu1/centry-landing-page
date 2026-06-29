"use client";

import Image from "next/image";
import { StickyScroll } from "@/components/ui/StickyScroll";

const featureContent = [
  {
    title: "Member Management",
    description:
      "A complete, searchable directory of every person in your congregation. Track personal details, contact information, membership status, and church history — all in one place. Member profiles auto-generate a unique ID the moment a person is added.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/images/screenshots/feature-members.png"
          alt="Member Management"
          fill
          className="object-cover object-top rounded-xl"
          sizes="560px"
        />
      </div>
    ),
  },
  {
    title: "Transaction Records & Receipts",
    description:
      "Every donation generates a detailed transaction record with a printable giving receipt. Finance officers can review, edit, and export transaction history to CSV or Excel — and the live receipt preview updates as you type.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/images/screenshots/feature-transactions.png"
          alt="Transaction Records"
          fill
          className="object-cover object-top rounded-xl"
          sizes="560px"
        />
      </div>
    ),
  },
  {
    title: "Donations & Giving",
    description:
      "Record tithes, offerings, building fund contributions, and more in seconds. Support for Cash, Mobile Money (MTN, Vodafone, AirtelTigo), bank transfers, and cheques — built for how Ghanaian churches actually operate.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/images/screenshots/feature-donations.png"
          alt="Donations and Giving"
          fill
          className="object-cover object-top rounded-xl"
          sizes="560px"
        />
      </div>
    ),
  },
  {
    title: "Pledge Tracking",
    description:
      "Let members commit to giving goals over time. Pledges display a real-time progress bar showing how much has been fulfilled, helping your finance team follow up confidently and celebrate milestones as they're reached.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/images/screenshots/feature-pledges.png"
          alt="Pledge Tracking"
          fill
          className="object-cover object-top rounded-xl"
          sizes="560px"
        />
      </div>
    ),
  },
  {
    title: "Events & Services",
    description:
      "Schedule every service and event your church runs — Sunday services, midweek meetings, prayer nights, outreaches, and more. Set recurring events once and let the system generate the full calendar automatically for the season ahead.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/images/screenshots/feature-events.png"
          alt="Events and Services"
          fill
          className="object-cover object-top rounded-xl"
          sizes="560px"
        />
      </div>
    ),
  },
  {
    title: "Secure Multi-Tenant Foundation",
    description:
      "Every church organisation runs in its own secure environment with Role Level Security enforced on all 18 database tables. Admins, pastors, finance officers, and group leaders each see only what their role permits — your data never bleeds across organisations.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/images/screenshots/feature-multitenant.png"
          alt="Secure Multi-Tenant"
          fill
          className="object-cover object-top rounded-xl"
          sizes="560px"
        />
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-[#080B14]">
      {/* 250px space above + heading */}
      <div
        className="flex flex-col items-center text-center px-6"
        style={{ paddingTop: "80px", paddingBottom: "64px" }}
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
          Six powerful modules, built to run every part of your church from a single platform.
        </p>
      </div>

      {/* Sticky scroll — takes up 6 × 100vh of scroll space */}
      <StickyScroll content={featureContent} />

      {/* Breathing room below */}
      <div style={{ paddingBottom: "120px" }} />
    </section>
  );
}
