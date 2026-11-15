import type { CategoryContent } from "../types"

export const legal: CategoryContent = {
  slug: "legal",
  name: "Legal",
  description:
    "Landing pages for law firms and legal services, with practice areas, attorney credentials and consultation booking.",
  iconName: "Scale",
  visual: "visual",
  navSecondary: "Client portal",
  navLinks: ["Practice areas", "Attorneys", "Results", "Insights", "Contact"],
  copy: {
    featuresEyebrow: "Why clients choose us",
    featuresTitle: "Counsel that is clear, responsive and relentless",
    featuresBody:
      "We combine the depth of a large firm with the attention of a boutique, and we explain every option in plain language.",
    showcaseTitle: "Practice areas",
    showcaseBody:
      "Experienced attorneys focused on the matters that affect your business, your family and your future.",
    stepsTitle: "How we work with you",
    testimonialsTitle: "What our clients say",
    pricingTitle: "Transparent fees",
    pricingBody:
      "No surprise invoices. We agree the fee structure in writing before any work begins.",
    faqTitle: "Common questions",
    logosLabel: "Recognised by",
  },
  features: [
    {
      icon: "Gavel",
      title: "Trial-ready litigators",
      description:
        "Our attorneys prepare every case as if it will go to trial, which is why opponents settle on better terms.",
    },
    {
      icon: "MessageSquare",
      title: "Plain-language advice",
      description:
        "No jargon. You will understand your options, the risks and the likely costs at every stage.",
    },
    {
      icon: "Clock",
      title: "Same-day responses",
      description:
        "Every client has a named attorney who returns calls and emails within one business day.",
    },
    {
      icon: "Lock",
      title: "Strict confidentiality",
      description:
        "Encrypted client portal, secure document sharing and conflict checks on every new matter.",
    },
    {
      icon: "Award",
      title: "Recognised expertise",
      description:
        "Partners ranked by leading legal directories and peer-reviewed for ethics and ability.",
    },
    {
      icon: "Receipt",
      title: "Fixed-fee options",
      description:
        "Many matters are offered on a fixed fee, so you know the cost before we start.",
    },
    {
      icon: "Languages",
      title: "Multilingual team",
      description:
        "We advise in English, Spanish, Mandarin and Arabic, with certified translation when needed.",
    },
    {
      icon: "Building",
      title: "Offices in three cities",
      description:
        "Meet in person in New York, Chicago or Austin, or by video from anywhere.",
    },
  ],
  stats: [
    { value: "$410M+", label: "Recovered for clients" },
    { value: "35 yrs", label: "Of practice" },
    { value: "2,800", label: "Matters resolved" },
    { value: "42", label: "Attorneys" },
    { value: "96%", label: "Client satisfaction" },
    { value: "24 hr", label: "Response guarantee" },
  ],
  logos: [
    "Chambers USA",
    "Best Lawyers",
    "Super Lawyers",
    "Legal 500",
    "Martindale-Hubbell",
    "Law360",
    "The American Lawyer",
    "Benchmark Litigation",
  ],
  testimonials: [
    {
      quote:
        "They explained every step and never made me feel rushed. The settlement was more than double the first offer.",
      name: "Robert Chen",
      role: "Personal injury client",
    },
    {
      quote:
        "Our acquisition closed on schedule because the team anticipated every issue before the other side raised it.",
      name: "Sarah Whitfield",
      role: "CEO, manufacturing company",
    },
    {
      quote:
        "A difficult divorce handled with real compassion. I always knew where things stood and what came next.",
      name: "Maria Delgado",
      role: "Family law client",
    },
    {
      quote:
        "We have used them as outside counsel for eight years. Responsive, practical and commercially minded.",
      name: "James Holloway",
      role: "General Counsel, logistics group",
    },
    {
      quote:
        "They secured my green card after two other firms told me it was impossible.",
      name: "Wei Zhang",
      role: "Immigration client",
    },
    {
      quote:
        "The fixed fee for our estate plan meant no anxiety about the bill. Thorough and kind.",
      name: "Linda and Paul Archer",
      role: "Estate planning clients",
    },
  ],
  steps: [
    {
      title: "Free consultation",
      description: "Tell us about your situation in a confidential 30-minute call with an attorney.",
    },
    {
      title: "Clear plan and fee",
      description: "We outline your options, the strategy we recommend and the cost, in writing.",
    },
    {
      title: "We get to work",
      description: "Your named attorney leads the matter with regular updates through the client portal.",
    },
    {
      title: "Resolution",
      description: "We negotiate, litigate or close, and stay available for whatever comes next.",
    },
  ],
  showcase: [
    { name: "Corporate and M&A", meta: "Formation, financing, acquisitions", tag: "Business", price: "Fixed or hourly" },
    { name: "Commercial litigation", meta: "Contract, partnership and IP disputes", tag: "Disputes", price: "Hourly" },
    { name: "Employment law", meta: "Policies, terminations, discrimination", tag: "Employers", price: "From $450" },
    { name: "Family law", meta: "Divorce, custody, prenuptial agreements", tag: "Private clients", price: "Fixed fee" },
    { name: "Estate planning", meta: "Wills, trusts, probate", tag: "Private clients", price: "From $1,800" },
    { name: "Immigration", meta: "Visas, green cards, citizenship", tag: "Individuals", price: "Fixed fee" },
  ],
  tiers: [
    {
      name: "Consultation",
      price: "Free",
      period: "",
      description: "A confidential first conversation.",
      features: ["30 minutes with an attorney", "Case assessment", "Options explained", "No obligation"],
      cta: "Book a consultation",
    },
    {
      name: "Fixed fee",
      price: "From $1,800",
      period: "/matter",
      description: "Defined matters at a set price.",
      features: [
        "Wills and trusts",
        "Uncontested divorce",
        "Visa applications",
        "Company formation",
        "Price agreed up front",
      ],
      cta: "Get a fixed quote",
    },
    {
      name: "Retainer",
      price: "Custom",
      period: "",
      description: "Ongoing counsel for businesses.",
      features: [
        "Named outside counsel",
        "Monthly hours included",
        "Contract review",
        "Priority response",
        "Quarterly legal health check",
      ],
      cta: "Discuss a retainer",
    },
  ],
  faqs: [
    {
      q: "Is the first consultation really free?",
      a: "Yes. Your first 30-minute consultation is free and confidential, with no obligation to instruct us.",
    },
    {
      q: "How are your fees structured?",
      a: "Depending on the matter we offer fixed fees, hourly rates, contingency arrangements or monthly retainers. We agree it in writing first.",
    },
    {
      q: "Do you take cases on contingency?",
      a: "For personal injury and some employment claims we work on contingency, which means no fee unless we recover compensation.",
    },
    {
      q: "Who will handle my matter?",
      a: "You will have a named lead attorney supported by a small team. You will never be passed around.",
    },
    {
      q: "Can we meet by video?",
      a: "Yes. Most meetings can be held by secure video, and documents can be signed electronically.",
    },
    {
      q: "Is what I tell you confidential?",
      a: "Yes. Everything you share in a consultation is protected by attorney-client privilege, even if you do not hire us.",
    },
  ],
  footer: [
    { title: "Practice", links: ["Business", "Litigation", "Private clients", "Immigration"] },
    { title: "Firm", links: ["Attorneys", "Results", "Careers", "Pro bono"] },
    { title: "Contact", links: ["New York", "Chicago", "Austin", "Client portal"] },
  ],
  pages: [
    {
      brand: "Whitmore & Hale",
      description: "A legal landing page for a full-service law firm with serif editorial typography and practice areas.",
      eyebrow: "Full-service law firm since 1990",
      headline: "Serious counsel for decisions that matter",
      highlight: "decisions that matter",
      subheadline:
        "Whitmore & Hale advises businesses and families on transactions, disputes and planning, with partners who answer their own phones.",
      primaryCta: "Book a consultation",
      secondaryCta: "Our practice areas",
      announcement: "Ranked in Chambers USA for the 12th consecutive year",
      tagline: "Counsel you can count on.",
      ctaHeadline: "Talk to an attorney today",
      ctaBody: "Your first consultation is free and completely confidential.",
    },
    {
      brand: "Justright Injury Law",
      description: "A legal landing page for a personal injury firm with stats band and no-win-no-fee pricing.",
      eyebrow: "No fee unless we win",
      headline: "Injured? Get the compensation you deserve",
      highlight: "compensation you deserve",
      subheadline:
        "Justright represents people hurt in car crashes, workplace accidents and medical errors, and we have recovered over 410 million dollars for clients.",
      primaryCta: "Get a free case review",
      secondaryCta: "Our results",
      announcement: "Available 24/7 for new injury cases",
      tagline: "On your side, from day one.",
      ctaHeadline: "Find out what your case is worth",
      ctaBody: "Free, no-obligation review. You pay nothing unless we recover compensation.",
    },
    {
      brand: "Northgate Counsel",
      description: "A legal landing page for a startup and venture law boutique with bento hero and fixed fees.",
      eyebrow: "Startup and venture law",
      headline: "Legal for founders, priced for startups",
      highlight: "priced for startups",
      subheadline:
        "Northgate handles incorporation, fundraising, equity and commercial contracts for venture-backed companies, with fixed fees and fast turnaround.",
      primaryCta: "Get a fixed quote",
      secondaryCta: "See fee schedule",
      announcement: "SAFE and seed round packages from $3,500",
      tagline: "Build fast, stay protected.",
      ctaHeadline: "Raise your next round with confidence",
      ctaBody: "Book a call with a partner and get a fixed quote within 24 hours.",
    },
    {
      brand: "Haven Family Law",
      description: "A legal landing page for a family law practice with gentle split hero and FAQ.",
      eyebrow: "Family law with compassion",
      headline: "Guidance through life's hardest transitions",
      highlight: "hardest transitions",
      subheadline:
        "Haven helps families through divorce, custody and mediation with calm, practical advice that puts children and wellbeing first.",
      primaryCta: "Schedule a call",
      secondaryCta: "Explore mediation",
      announcement: "Evening and weekend appointments available",
      tagline: "Calm counsel for families.",
      ctaHeadline: "You do not have to do this alone",
      ctaBody: "Speak confidentially with a family law attorney this week.",
    },
    {
      brand: "Borderline Immigration",
      description: "A legal landing page for an immigration law service with timeline steps and fixed-fee plans.",
      eyebrow: "US immigration attorneys",
      headline: "Your path to a visa, green card or citizenship",
      highlight: "green card or citizenship",
      subheadline:
        "Borderline guides families, students and professionals through every step of US immigration, with fixed fees and updates in five languages.",
      primaryCta: "Start your case",
      secondaryCta: "Check eligibility",
      announcement: "H-1B registration support now open",
      tagline: "Your future, without borders.",
      ctaHeadline: "Take the first step today",
      ctaBody: "Book a consultation and get a clear plan for your application.",
    },
  ],
}
