"use client";

import { Users, TrendingUp, Calendar, CheckCircle2 } from "lucide-react";

// Placeholder Centry UI cards — these mimic dashboard/member panels.
// Real app screenshots will replace the card bodies later.
const CARDS = [
  {
    badge: "Members",
    title: "New member added",
    body: "Sarah Mensah · Joined Adult Choir",
    meta: "Profile #1,284",
    icon: Users,
  },
  {
    badge: "Donations",
    title: "Tithe recorded",
    body: "Monthly contribution logged for September.",
    meta: "$2,450.00",
    icon: TrendingUp,
  },
  {
    badge: "Attendance",
    title: "Sunday service",
    body: "412 present · 38 first-time visitors marked.",
    meta: "Sep 14, 2026",
    icon: CheckCircle2,
  },
  {
    badge: "Events",
    title: "Youth retreat",
    body: "Registration open · 86 spots remaining.",
    meta: "Oct 2–4",
    icon: Calendar,
  },
  {
    badge: "Members",
    title: "Bulk import complete",
    body: "248 records imported from CSV successfully.",
    meta: "Just now",
    icon: Users,
  },
  {
    badge: "Donations",
    title: "Offering summary",
    body: "Weekly giving up 12% from last month.",
    meta: "$8,920.00",
    icon: TrendingUp,
  },
  {
    badge: "Groups",
    title: "Ministry meeting",
    body: "Worship team attendance recorded.",
    meta: "18 / 22 present",
    icon: CheckCircle2,
  },
  {
    badge: "Events",
    title: "Baptism service",
    body: "12 candidates scheduled and confirmed.",
    meta: "Sep 28",
    icon: Calendar,
  },
];

export default function HeroCards() {
  const total = CARDS.length;
  const angleStep = 360 / total;
  const translateZ = 480;

  return (
    <div
      className="grid overflow-hidden w-full"
      style={{ perspective: "600px" }}
      aria-hidden
    >
      <div
        className="place-self-center grid mt-[20rem] md:mt-[32rem]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {CARDS.map((card, i) => {
          const Icon = card.icon;
          const rotateY = angleStep * i;
          return (
            <div
              key={i}
              className="col-start-1 row-start-1 w-[14rem] aspect-[7/10]"
              style={{
                backfaceVisibility: "hidden",
                transform: `rotateY(${rotateY}deg) translateZ(-${translateZ}px) rotateX(5deg)`,
              }}
            >
              <div className="w-full min-h-[17rem] rounded-2xl p-3.5 space-y-2.5 bg-white shadow-2xl">
                {/* Badge row */}
                <div className="flex items-center justify-between">
                  <div className="px-2 py-1 rounded-md bg-[#EEF1FF]">
                    <span className="text-[0.7rem] font-semibold text-[#4F6BED]">
                      {card.badge}
                    </span>
                  </div>
                  <div className="size-7 rounded-full bg-[#4F6BED] flex items-center justify-center">
                    <Icon className="size-3.5 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Title + body */}
                <div className="space-y-1.5 pt-1">
                  <p className="text-[0.85rem] font-bold text-[#0D1120] leading-tight">
                    {card.title}
                  </p>
                  <p className="text-[0.72rem] leading-[1rem] text-[#5A6178]">
                    {card.body}
                  </p>
                </div>

                {/* Meta value */}
                <div className="pt-0.5">
                  <span className="text-[0.78rem] font-bold text-[#1B2352]">
                    {card.meta}
                  </span>
                </div>

                {/* Skeleton lines */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <span className="w-full h-1.5 rounded-full bg-[#F1F2F6]" />
                  <span className="w-full h-1.5 rounded-full bg-[#F1F2F6]" />
                  <span className="w-[78%] h-1.5 rounded-full bg-[#F1F2F6]" />
                </div>

                {/* Footer progress chip */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex-1 h-1.5 rounded-full bg-[#EEF1FF] overflow-hidden">
                    <div className="h-full w-[64%] rounded-full bg-[#4F6BED]" />
                  </div>
                  <span className="text-[0.62rem] font-semibold text-[#4F6BED]">
                    64%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
