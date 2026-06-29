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
          className="object-cover object-top"
          sizes="384px"
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
          className="object-cover object-top"
          sizes="384px"
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
          className="object-cover object-top"
          sizes="384px"
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
          className="object-cover object-top"
          sizes="384px"
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
          className="object-cover object-top"
          sizes="384px"
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
          className="object-cover object-top"
          sizes="384px"
        />
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-[#080B14] py-24 md:py-32 px-4 md:px-10">
      {/* Section header */}
      <div className="max-w-[1100px] mx-auto mb-16">
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

      {/* Sticky scroll */}
      <div className="max-w-[1100px] mx-auto">
        <StickyScroll content={featureContent} />
      </div>
    </section>
  );
}
