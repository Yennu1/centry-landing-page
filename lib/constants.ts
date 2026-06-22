// ─────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing",  href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Docs",     href: "#docs" },
  { label: "Contact",  href: "#contact" },
] as const;

// ─────────────────────────────────────────
// HERO TYPEWRITER PHRASES
// ─────────────────────────────────────────
export const HERO_PHRASES = [
  "not your spreadsheets.",
  "at your fingertips.",
  "the modern way.",
  "the convenient way.",
  "the smarter way.",
  "from anywhere.",
  "like a pro.",
  "where faith meets tech.",
] as const;

// ─────────────────────────────────────────
// FEATURES — WHO CENTRY EMPOWERS
// ─────────────────────────────────────────
export const EMPOWER_CARDS = [
  {
    id: 1,
    label: "Pastors & Leadership",
    description:
      "Get a real-time overview of your congregation — member growth, attendance trends, and financial health, all at a glance.",
  },
  {
    id: 2,
    label: "Church Administrators",
    description:
      "Eliminate manual record-keeping. Centry centralizes every member record, event, and ministry roster in one organized platform.",
  },
  {
    id: 3,
    label: "Finance Teams",
    description:
      "Track tithes, offerings, and donations with precision. Generate financial reports and monitor giving trends effortlessly.",
  },
  {
    id: 4,
    label: "Ministry Leaders",
    description:
      "Manage your group roster, log attendance for every meeting, and keep your ministry operations running without friction.",
  },
] as const;

// ─────────────────────────────────────────
// FEATURES — WHY CENTRY
// ─────────────────────────────────────────
export const FEATURES = [
  {
    key: "members",
    title: "Member Management",
    description:
      "Maintain complete, centralized member profiles with photos, contact details, categories, and full history. Import in bulk via CSV.",
  },
  {
    key: "attendance",
    title: "Attendance Tracking",
    description:
      "Record attendance for services, group meetings, and church activities. Monitor participation trends across your congregation.",
  },
  {
    key: "finance",
    title: "Donations & Tithes",
    description:
      "Record every offering, tithe, and donation in one place. View giving trends through intuitive dashboards and exportable reports.",
  },
  {
    key: "groups",
    title: "Groups & Ministries",
    description:
      "Create and manage church groups, assign members, track ministry rosters, and log group meeting attendance with ease.",
  },
  {
    key: "events",
    title: "Event Management",
    description:
      "Organize church events, schedule activities, and keep records of everything happening across your congregation.",
  },
  {
    key: "analytics",
    title: "Dashboard & Analytics",
    description:
      "An interactive command center for your church operations — visual stats, growth metrics, and actionable insights in one view.",
  },
] as const;

// ─────────────────────────────────────────
// HOW IT WORKS — STEPS
// ─────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Set Up Your Church",
    description:
      "Create your church profile, configure your ministry structure, and import your existing member records in minutes.",
  },
  {
    step: "02",
    title: "Manage Everything in One Place",
    description:
      "Track attendance, record donations, organize groups, and manage events — all from a single, unified dashboard.",
  },
  {
    step: "03",
    title: "Make Data-Driven Decisions",
    description:
      "Generate reports, analyze trends, and gain the insights you need to lead your congregation with clarity and confidence.",
  },
] as const;

// ─────────────────────────────────────────
// PRICING
// ─────────────────────────────────────────
export const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: "Free",
    priceNote: "forever",
    description: "For small churches getting started.",
    features: [
      "Up to 100 members",
      "Basic attendance tracking",
      "Member profiles & photos",
      "1 admin account",
    ],
    cta: "Get Started Free",
    ctaHref: "#contact",
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: "$19",
    priceNote: "per month",
    description: "For growing churches ready to scale.",
    features: [
      "Unlimited members",
      "Full attendance & group tracking",
      "Donations & tithes management",
      "Financial dashboards & reports",
      "Event management",
      "Up to 5 admin accounts",
      "CSV bulk import",
    ],
    cta: "Start Free Trial",
    ctaHref: "#contact",
    featured: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$49",
    priceNote: "per month",
    description: "For large ministries and multi-branch churches.",
    features: [
      "Everything in Growth",
      "Unlimited admin accounts",
      "Multi-branch support",
      "Advanced analytics & reporting",
      "Priority support",
      "Custom onboarding",
    ],
    cta: "Contact Sales",
    ctaHref: "#contact",
    featured: false,
  },
] as const;

// ─────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      "Centry transformed how we run our church administration. What used to take hours of spreadsheet work now takes minutes. Our pastors finally have visibility into everything.",
    name: "Pastor Emmanuel Osei",
    role: "Senior Pastor, Grace Assembly",
    initials: "EO",
  },
  {
    quote:
      "The financial tracking alone is worth every penny. We can now see exactly where our tithes and offerings are going, generate clean reports, and present them to leadership with confidence.",
    name: "Adaeze Nwosu",
    role: "Church Administrator, Covenant Chapel",
    initials: "AN",
  },
  {
    quote:
      "Managing 600+ members used to be a nightmare. With Centry, attendance tracking, group rosters, and event records are all in one place. I can't imagine going back.",
    name: "Kwame Asante",
    role: "Director of Operations, Life Church",
    initials: "KA",
  },
] as const;

// ─────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────
export const FAQS = [
  {
    question: "What is Centry?",
    answer:
      "Centry is a comprehensive church management system that helps churches manage members, track attendance, record donations, organize groups and events, and gain insights through dashboards and reports — all from a single platform.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most churches are fully set up within a day. You can import your existing member records via CSV, and our onboarding flow guides you through configuring your church profile, groups, and ministries.",
  },
  {
    question: "Can I import our existing member data?",
    answer:
      "Yes. Centry supports bulk import via CSV and Excel files. Your existing records can be mapped and imported directly into the platform without manual re-entry.",
  },
  {
    question: "Is my church's data secure?",
    answer:
      "Absolutely. Centry uses industry-standard encryption for all data at rest and in transit. Your congregation's information is private, secure, and never shared with third parties.",
  },
  {
    question: "Can multiple staff members access the system?",
    answer:
      "Yes. Depending on your plan, you can create multiple admin accounts with different access levels — so pastors, finance teams, and ministry leaders each see what they need.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes. All plans include access to our documentation and community support. Growth and Enterprise plans include email support, with Enterprise receiving priority response times.",
  },
] as const;

// ─────────────────────────────────────────
// FOOTER LINKS
// ─────────────────────────────────────────
export const FOOTER_LINKS = {
  product: [
    { label: "Features",    href: "#features" },
    { label: "Pricing",     href: "#pricing" },
    { label: "Docs",        href: "#docs" },
    { label: "Changelog",   href: "#" },
  ],
  company: [
    { label: "About",       href: "#" },
    { label: "Blog",        href: "#" },
    { label: "Contact",     href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
} as const;

// ─────────────────────────────────────────
// PRODUCT PREVIEW — SCROLLING SCREENSHOTS
// ─────────────────────────────────────────
export const PRODUCT_SCREENSHOTS = [
  { src: "/images/screenshots/members-list.png",  alt: "Centry member management dashboard" },
  { src: "/images/screenshots/donations.png",     alt: "Centry donations overview with giving analytics" },
  { src: "/images/screenshots/reports.png",       alt: "Centry reports and giving analytics" },
  { src: "/images/screenshots/record-giving.png", alt: "Centry record giving contribution form" },
  { src: "/images/screenshots/settings.png",      alt: "Centry transaction categories settings" },
  { src: "/images/screenshots/members-grid.png",  alt: "Centry members list with branches and ministries" },
] as const;
