import type { CategoryContent } from "../types"

export const agency: CategoryContent = {
  slug: "agency",
  name: "Agency",
  description:
    "Bold pages for creative, digital and branding agencies, with case studies, services and engagement models.",
  iconName: "PenTool",
  visual: "visual",
  navSecondary: "Contact",
  navLinks: ["Work", "Services", "Studio", "Journal", "Careers"],
  copy: {
    featuresEyebrow: "Services",
    featuresTitle: "Strategy, design and technology under one roof",
    featuresBody:
      "We partner with ambitious brands from the first workshop to launch day and beyond, with senior people on every project.",
    showcaseTitle: "Selected work",
    showcaseBody:
      "A few recent projects for clients who wanted to be remembered, not just noticed.",
    stepsTitle: "How we work together",
    testimonialsTitle: "What our clients say",
    pricingTitle: "Ways to work with us",
    pricingBody:
      "Clear engagement models with fixed scopes or dedicated teams. No surprise invoices, ever.",
    faqTitle: "Before you get in touch",
    logosLabel: "Brands we have partnered with",
  },
  features: [
    {
      icon: "Compass",
      title: "Brand strategy",
      description:
        "Positioning, naming and messaging grounded in research with your customers and your market.",
    },
    {
      icon: "Palette",
      title: "Identity design",
      description:
        "Logos, type, colour and motion systems built to flex from a favicon to a billboard.",
    },
    {
      icon: "MonitorSmartphone",
      title: "Websites and products",
      description:
        "Fast, accessible websites and digital products designed and engineered by the same team.",
    },
    {
      icon: "Clapperboard",
      title: "Film and motion",
      description:
        "Launch films, product animations and social content produced by our in-house studio.",
    },
    {
      icon: "Megaphone",
      title: "Campaigns",
      description:
        "Integrated campaigns across digital, out-of-home and social that move real numbers.",
    },
    {
      icon: "PenTool",
      title: "Design systems",
      description:
        "Component libraries and guidelines that keep your brand consistent as your team grows.",
    },
    {
      icon: "ChartNoAxesCombined",
      title: "Growth and analytics",
      description:
        "Experimentation, conversion optimisation and reporting tied to the metrics you care about.",
    },
    {
      icon: "Package",
      title: "Packaging",
      description:
        "Packaging and retail design that stands out on the shelf and in the unboxing video.",
    },
  ],
  stats: [
    { value: "14", label: "Years in business" },
    { value: "220+", label: "Projects launched" },
    { value: "38", label: "Industry awards" },
    { value: "92%", label: "Clients who return" },
    { value: "45", label: "Designers and engineers" },
    { value: "3", label: "Studios worldwide" },
  ],
  logos: [
    "Mercer & Co",
    "Atelier Nord",
    "Bloom Coffee",
    "Vela Motors",
    "Copperleaf",
    "Hollis Hotels",
    "Juniper Bank",
    "Strata Outdoor",
  ],
  testimonials: [
    {
      quote:
        "They challenged our brief in the best possible way. The rebrand gave our sales team something they are genuinely proud to show.",
      name: "Isabelle Grant",
      role: "CMO, Juniper Bank",
    },
    {
      quote:
        "Our new website doubled demo requests in the first quarter. The team felt like an extension of our own.",
      name: "Mateo Rossi",
      role: "Head of Marketing, Vela Motors",
    },
    {
      quote:
        "Senior people in every meeting, honest timelines and work that exceeded what we imagined. Rare combination.",
      name: "Freya Lindqvist",
      role: "Founder, Atelier Nord",
    },
    {
      quote:
        "The packaging redesign lifted shelf sales by thirty percent. We have since hired them for three more lines.",
      name: "Sam Achebe",
      role: "Brand Director, Bloom Coffee",
    },
    {
      quote:
        "They built us a design system our engineers actually use. Shipping new pages now takes days, not weeks.",
      name: "Chloe Bennett",
      role: "VP Product, Copperleaf",
    },
    {
      quote:
        "The launch film did more for awareness than our entire previous year of paid social. Phenomenal craft.",
      name: "Ravi Kapoor",
      role: "CEO, Strata Outdoor",
    },
  ],
  steps: [
    {
      title: "Discover",
      description:
        "Workshops, stakeholder interviews and audits to understand your business, audience and goals.",
    },
    {
      title: "Define",
      description:
        "A clear strategy, creative direction and roadmap that everyone signs off before design begins.",
    },
    {
      title: "Design and build",
      description:
        "Iterative sprints with weekly reviews, so you see progress and steer direction throughout.",
    },
    {
      title: "Launch and grow",
      description:
        "We launch together, measure results and keep optimising with an ongoing partnership.",
    },
  ],
  showcase: [
    { name: "Juniper Bank", meta: "Rebrand and digital banking app", tag: "Branding", price: "2025" },
    { name: "Vela Motors", meta: "Website and launch campaign", tag: "Web", price: "2025" },
    { name: "Bloom Coffee", meta: "Packaging for a national rollout", tag: "Packaging", price: "2024" },
    { name: "Hollis Hotels", meta: "Booking experience redesign", tag: "Product", price: "2024" },
    { name: "Strata Outdoor", meta: "Brand film and social content", tag: "Film", price: "2024" },
    { name: "Atelier Nord", meta: "Identity and e-commerce store", tag: "Commerce", price: "2023" },
  ],
  tiers: [
    {
      name: "Sprint",
      price: "$18k",
      period: "fixed",
      description: "A focused two-week engagement for a defined problem.",
      features: ["Discovery workshop", "One core deliverable", "Two review rounds", "Handover documentation"],
      cta: "Book a sprint",
    },
    {
      name: "Project",
      price: "From $60k",
      period: "per project",
      description: "End-to-end brand or product launches.",
      features: [
        "Strategy and creative direction",
        "Dedicated project lead",
        "Design and development",
        "Weekly reviews",
        "30 days of post-launch support",
      ],
      cta: "Start a project",
    },
    {
      name: "Partnership",
      price: "$25k",
      period: "/month",
      description: "An embedded team for ongoing work.",
      features: [
        "Dedicated multidisciplinary team",
        "Quarterly strategy sessions",
        "Unlimited requests in scope",
        "Monthly performance reports",
      ],
      cta: "Let us talk",
    },
  ],
  faqs: [
    {
      q: "What size of companies do you work with?",
      a: "Mostly growth-stage startups and established mid-market brands, though we take on a few founder-led early projects each year.",
    },
    {
      q: "How soon can you start?",
      a: "We typically book four to six weeks ahead. Sprints can sometimes start within two weeks.",
    },
    {
      q: "Do you work with in-house teams?",
      a: "Often. We are happy to lead, to collaborate or to coach your team so they can carry the work forward.",
    },
    {
      q: "Do you work remotely?",
      a: "Yes. We have studios in three cities and work with clients worldwide, meeting in person for key workshops.",
    },
    {
      q: "Who owns the work?",
      a: "You do. All intellectual property transfers to you on final payment, including source files and code.",
    },
    {
      q: "What does a typical project cost?",
      a: "Brand identity projects usually range from $60k to $150k, and websites from $80k to $250k depending on scope.",
    },
  ],
  footer: [
    { title: "Studio", links: ["About", "Team", "Careers", "Press"] },
    { title: "Services", links: ["Branding", "Digital", "Film", "Campaigns"] },
    { title: "Connect", links: ["Instagram", "LinkedIn", "Dribbble", "Newsletter"] },
  ],
  pages: [
    {
      brand: "Northform",
      description: "An agency landing page for a brand identity studio with editorial type and case studies.",
      eyebrow: "Independent brand studio",
      headline: "We build brands people remember",
      highlight: "remember",
      subheadline:
        "Northform is an independent studio crafting strategy, identity and digital experiences for companies ready for their next chapter.",
      primaryCta: "Start a project",
      secondaryCta: "View our work",
      announcement: "Northform named Studio of the Year 2025",
      tagline: "Brand strategy and identity.",
      ctaHeadline: "Have a brand that deserves better?",
      ctaBody: "Tell us about your project and we will reply within two working days.",
    },
    {
      brand: "Pixel & Pine",
      description: "An agency landing page for a web design and development shop with split hero.",
      eyebrow: "Web design and development",
      headline: "Websites that look good and convert better",
      highlight: "convert better",
      subheadline:
        "Pixel & Pine designs and builds fast, accessible marketing sites for SaaS and e-commerce brands, with launches in as little as six weeks.",
      primaryCta: "Get a proposal",
      secondaryCta: "See case studies",
      announcement: "Now booking projects for next quarter",
      tagline: "Design and code, done right.",
      ctaHeadline: "Ready for a website that works harder?",
      ctaBody: "Book a free 30-minute consultation and get a scoped proposal within a week.",
    },
    {
      brand: "Loudhouse",
      description: "An agency landing page for an integrated advertising and campaign agency with bold gradient hero.",
      eyebrow: "Creative advertising",
      headline: "Ideas loud enough to move markets",
      highlight: "move markets",
      subheadline:
        "Loudhouse creates integrated campaigns across film, social and out-of-home for challenger brands that refuse to blend in.",
      primaryCta: "Brief us",
      secondaryCta: "Watch the reel",
      announcement: "Three Cannes Lions shortlists this year",
      tagline: "Campaigns that get talked about.",
      ctaHeadline: "Got a brief that scares other agencies?",
      ctaBody: "Send it our way. We respond to every brief within 48 hours.",
    },
    {
      brand: "Motionlab",
      description: "An agency landing page for a motion design and animation studio with bento hero.",
      eyebrow: "Motion design studio",
      headline: "Motion that makes products click",
      highlight: "click",
      subheadline:
        "Motionlab produces product animations, explainer films and UI motion for tech companies that want their story told beautifully.",
      primaryCta: "Request a quote",
      secondaryCta: "Watch our reel",
      announcement: "New 3D and CGI department now open",
      tagline: "Animation for ambitious products.",
      ctaHeadline: "Let us animate your next launch",
      ctaBody: "Share your product and timeline and we will storyboard a concept for free.",
    },
    {
      brand: "Growthkit",
      description: "A landing page for a performance marketing and growth agency with inverted hero and stats.",
      eyebrow: "Performance marketing",
      headline: "Paid growth that pays for itself",
      highlight: "pays for itself",
      subheadline:
        "Growthkit runs paid search, social and lifecycle programmes for DTC and SaaS brands, with creative testing and reporting built in.",
      primaryCta: "Get a free audit",
      secondaryCta: "See results",
      announcement: "Average client ROAS up 2.4x in 90 days",
      tagline: "Growth, measured.",
      ctaHeadline: "Find out where your ad budget is leaking",
      ctaBody: "Get a free account audit with three quick wins within five days.",
    },
  ],
}
