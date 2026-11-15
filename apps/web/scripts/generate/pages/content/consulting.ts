import type { CategoryContent } from "../types"

export const consulting: CategoryContent = {
  slug: "consulting",
  name: "Consulting",
  description:
    "Landing pages for strategy, management and operations consultancies, with case studies, methodology and engagement models.",
  iconName: "Briefcase",
  visual: "product",
  navSecondary: "Client login",
  navLinks: ["Services", "Industries", "Case studies", "Insights", "About"],
  copy: {
    featuresEyebrow: "Capabilities",
    featuresTitle: "Strategy that turns into results",
    featuresBody:
      "We work alongside your leadership team from diagnosis to delivery, and we measure success by outcomes, not slide count.",
    showcaseTitle: "Selected case studies",
    showcaseBody:
      "A few of the engagements where our clients moved the numbers that matter.",
    stepsTitle: "Our engagement model",
    testimonialsTitle: "What leaders say about working with us",
    pricingTitle: "Ways to engage",
    pricingBody:
      "From a focused diagnostic to a long-term transformation partnership, every engagement has clear scope and outcomes.",
    faqTitle: "Working with us",
    logosLabel: "Trusted by leadership teams at",
  },
  features: [
    {
      icon: "Target",
      title: "Growth strategy",
      description:
        "Market sizing, positioning and portfolio choices grounded in customer evidence, not assumptions.",
    },
    {
      icon: "Cog",
      title: "Operational excellence",
      description:
        "Redesign processes, cut cost-to-serve and build the operating rhythm to sustain the gains.",
    },
    {
      icon: "ChartNoAxesCombined",
      title: "Data and analytics",
      description:
        "Turn scattered data into decision-ready dashboards and models your teams actually use.",
    },
    {
      icon: "Users",
      title: "Organisation design",
      description:
        "Clarify roles, spans and decision rights so teams move faster with fewer handoffs.",
    },
    {
      icon: "Handshake",
      title: "M&A and integration",
      description:
        "Commercial due diligence, synergy planning and day-one integration for buyers and investors.",
    },
    {
      icon: "Cpu",
      title: "Digital transformation",
      description:
        "Prioritise technology investments, select vendors and run programmes that land on time.",
    },
    {
      icon: "Leaf",
      title: "Sustainability",
      description:
        "Decarbonisation roadmaps and ESG reporting that hold up to investor and regulator scrutiny.",
    },
    {
      icon: "GraduationCap",
      title: "Capability building",
      description:
        "We train your people as we go, so the change sticks long after we leave.",
    },
  ],
  stats: [
    { value: "$2.4B", label: "Value delivered for clients" },
    { value: "320+", label: "Engagements completed" },
    { value: "18%", label: "Average margin uplift" },
    { value: "91%", label: "Clients who return" },
    { value: "14", label: "Industries served" },
    { value: "6 wks", label: "Typical diagnostic" },
  ],
  logos: ["Corvex", "Stratus Group", "Pinnacle Health", "Atlas Retail", "Ferro Industries", "Bluewave", "Ironclad", "Summit Bank"],
  testimonials: [
    {
      quote:
        "They challenged our assumptions in the first week and were right. The new pricing model added 11 points of margin in a year.",
      name: "Catherine Doyle",
      role: "CFO, Atlas Retail",
    },
    {
      quote:
        "Unlike other firms, their team stayed through implementation. Our plants are running 22% more efficiently.",
      name: "Hiroshi Nakamura",
      role: "COO, Ferro Industries",
    },
    {
      quote:
        "Clear thinking, no fluff and a team our people genuinely liked working with.",
      name: "Rachel Adeyemi",
      role: "CEO, Pinnacle Health",
    },
    {
      quote:
        "Their due diligence saved us from overpaying by a wide margin. We now bring them in on every deal.",
      name: "Martin Sørensen",
      role: "Partner, private equity fund",
    },
    {
      quote:
        "The org redesign was handled with care. We reduced management layers without losing a single key person.",
      name: "Ana Petrova",
      role: "Chief People Officer, Bluewave",
    },
    {
      quote:
        "They built the analytics capability in-house rather than making us dependent on them. That is rare.",
      name: "David Kim",
      role: "Chief Data Officer, Summit Bank",
    },
  ],
  steps: [
    {
      title: "Diagnose",
      description: "A focused six-week diagnostic to quantify the opportunity and agree priorities with leadership.",
    },
    {
      title: "Design",
      description: "Co-create the strategy, operating model and business case with your team, not for them.",
    },
    {
      title: "Deliver",
      description: "Mobilise pilots, track value weekly and scale what works across the organisation.",
    },
    {
      title: "Sustain",
      description: "Hand over tools, governance and trained owners so results keep compounding.",
    },
  ],
  showcase: [
    { name: "Retail pricing reset", meta: "National retailer · 1,200 stores", tag: "Strategy", price: "+11 pts margin" },
    { name: "Plant network redesign", meta: "Industrial manufacturer · 9 plants", tag: "Operations", price: "-22% cost" },
    { name: "Patient flow programme", meta: "Regional health system", tag: "Healthcare", price: "-34% wait time" },
    { name: "Post-merger integration", meta: "Two regional banks", tag: "M&A", price: "$180M synergies" },
    { name: "Data platform roadmap", meta: "Insurance group", tag: "Digital", price: "4x faster reporting" },
    { name: "Net zero roadmap", meta: "Logistics operator", tag: "Sustainability", price: "-40% emissions" },
  ],
  tiers: [
    {
      name: "Diagnostic",
      price: "$85K",
      period: "/6 weeks",
      description: "Size the prize and set priorities.",
      features: ["Leadership interviews", "Data deep-dive", "Opportunity sizing", "Prioritised roadmap"],
      cta: "Scope a diagnostic",
    },
    {
      name: "Transformation",
      price: "From $450K",
      period: "/quarter",
      description: "Design and deliver change at scale.",
      features: [
        "Dedicated senior team",
        "Weekly value tracking",
        "Pilot to scale delivery",
        "Change management",
        "Executive steering",
      ],
      cta: "Discuss a programme",
    },
    {
      name: "Advisory retainer",
      price: "Custom",
      period: "",
      description: "On-call counsel for the C-suite.",
      features: [
        "Partner access",
        "Board preparation",
        "Deal and market reviews",
        "Quarterly strategy sessions",
        "Flexible scope",
      ],
      cta: "Talk to a partner",
    },
  ],
  faqs: [
    {
      q: "What size of companies do you work with?",
      a: "Mostly mid-market and enterprise organisations with 200 to 20,000 employees, plus private equity funds and their portfolio companies.",
    },
    {
      q: "How are engagements priced?",
      a: "We price by scope and outcome. Many engagements include a fee at risk tied to the results we agree at the start.",
    },
    {
      q: "Who will be on our team?",
      a: "A partner leads every engagement personally, supported by a small senior team. We do not staff projects with junior analysts alone.",
    },
    {
      q: "How quickly can you start?",
      a: "We can usually mobilise a diagnostic team within two to three weeks of agreeing the scope.",
    },
    {
      q: "Do you help with implementation?",
      a: "Yes. Most of our work is implementation. We stay until the results are visible in your numbers.",
    },
    {
      q: "Do you sign NDAs?",
      a: "Always. Confidentiality is standard, and we never work for direct competitors on the same issue.",
    },
  ],
  footer: [
    { title: "Services", links: ["Strategy", "Operations", "Digital", "M&A"] },
    { title: "Firm", links: ["About", "Our people", "Careers", "Alumni"] },
    { title: "Insights", links: ["Articles", "Reports", "Events", "Newsletter"] },
  ],
  pages: [
    {
      brand: "Meridian Partners",
      description: "A consulting landing page for a strategy consultancy with dashboard visual and case studies.",
      eyebrow: "Strategy and transformation",
      headline: "Clear strategy. Measurable results.",
      highlight: "Measurable results.",
      subheadline:
        "Meridian Partners helps leadership teams make the big calls on growth, cost and capability, then stays to make them real.",
      primaryCta: "Start a conversation",
      secondaryCta: "Read case studies",
      announcement: "New report: the state of mid-market margins 2026",
      tagline: "From insight to impact.",
      ctaHeadline: "Let's talk about your next big decision",
      ctaBody: "Book a call with a partner. We will tell you honestly whether we can help.",
    },
    {
      brand: "Leanforge",
      description: "A consulting landing page for an operations and lean manufacturing consultancy with editorial hero.",
      eyebrow: "Operations consulting",
      headline: "Run leaner operations without cutting corners",
      highlight: "without cutting corners",
      subheadline:
        "Leanforge works on the shop floor with your teams to remove waste, lift throughput and build a culture of continuous improvement.",
      primaryCta: "Book a site assessment",
      secondaryCta: "Our approach",
      announcement: "Free operations benchmark for manufacturers",
      tagline: "Better operations, built together.",
      ctaHeadline: "Find the hidden capacity in your plants",
      ctaBody: "Start with a two-day site assessment and a quantified improvement plan.",
    },
    {
      brand: "Northstar Advisory",
      description: "A consulting landing page for a private equity value-creation advisory with stats and engagement tiers.",
      eyebrow: "Private equity value creation",
      headline: "Diligence and value creation for investors",
      highlight: "value creation",
      subheadline:
        "Northstar supports private equity funds from commercial due diligence to the first 100 days and exit readiness.",
      primaryCta: "Discuss a deal",
      secondaryCta: "See our track record",
      announcement: "120 deals supported in the last three years",
      tagline: "Conviction for every deal.",
      ctaHeadline: "Bring us in on your next deal",
      ctaBody: "Commercial diligence in as little as three weeks.",
    },
    {
      brand: "Kinetic People",
      description: "A consulting landing page for an organisation design and HR consultancy with split hero.",
      eyebrow: "Organisation and culture",
      headline: "Design an organisation people want to work in",
      highlight: "want to work in",
      subheadline:
        "Kinetic People helps scaling companies redesign structures, leadership and ways of working so teams move faster with less friction.",
      primaryCta: "Book a discovery call",
      secondaryCta: "Download our playbook",
      announcement: "Our org design playbook is now free",
      tagline: "Organisations, redesigned.",
      ctaHeadline: "Build the organisation for your next stage",
      ctaBody: "Start with a free 45-minute discovery call with a principal.",
    },
    {
      brand: "Datum Strategy",
      description: "A consulting landing page for a data and digital transformation consultancy with dark inverted hero.",
      eyebrow: "Data and digital strategy",
      headline: "Turn your data into a competitive edge",
      highlight: "competitive edge",
      subheadline:
        "Datum Strategy designs data platforms, analytics operating models and AI roadmaps that deliver value in quarters, not years.",
      primaryCta: "Get a data maturity review",
      secondaryCta: "Explore services",
      announcement: "AI readiness assessments now available",
      tagline: "Data-driven, decision-ready.",
      ctaHeadline: "See where your data can take you",
      ctaBody: "A two-week maturity review shows the highest-value opportunities.",
    },
    {
      brand: "Ledger Path",
      description: "A consulting landing page for a finance transformation and CFO advisory firm with framed hero and services.",
      eyebrow: "Finance transformation",
      headline: "A faster close and a sharper forecast",
      highlight: "sharper forecast",
      subheadline:
        "Ledger Path helps finance teams redesign close processes, implement planning tools and give the CFO numbers the board can trust.",
      primaryCta: "Book a finance review",
      secondaryCta: "See our services",
      announcement: "Month-end close benchmark report 2026 is out",
      tagline: "Finance that leads.",
      ctaHeadline: "Close your books in days, not weeks",
      ctaBody: "Start with a free two-hour finance process review with a senior advisor.",
    },
    {
      brand: "Greenline Advisory",
      description: "A consulting landing page for a sustainability and ESG consultancy with spotlight hero and stats.",
      eyebrow: "Sustainability strategy",
      headline: "Net zero plans that survive the boardroom",
      highlight: "survive the boardroom",
      subheadline:
        "Greenline Advisory measures emissions, sets credible targets and builds reporting that meets CSRD and investor expectations.",
      primaryCta: "Get a carbon baseline",
      secondaryCta: "Read our approach",
      announcement: "New CSRD readiness assessment for mid-size firms",
      tagline: "Sustainability, made credible.",
      ctaHeadline: "Turn climate targets into a real plan",
      ctaBody: "Get a scoped carbon baseline proposal within one week.",
    },
    {
      brand: "Brightside Growth",
      description: "A consulting landing page for a go-to-market and sales strategy consultancy with split hero and email capture.",
      eyebrow: "Go-to-market strategy",
      headline: "Build a pipeline you can actually predict",
      highlight: "actually predict",
      subheadline:
        "Brightside Growth redesigns sales processes, pricing and territory plans for B2B companies scaling from first revenue to their first hundred million.",
      primaryCta: "Get the GTM playbook",
      secondaryCta: "Book a call",
      announcement: "Free download: the B2B pipeline health scorecard",
      tagline: "Growth you can plan for.",
      ctaHeadline: "Get our free pipeline health scorecard",
      ctaBody: "Enter your email and score your sales pipeline against 40 benchmarks in ten minutes.",
    },
    {
      brand: "Sentinel Risk",
      description: "A consulting landing page for a cybersecurity and risk advisory with bento hero and engagement tiers.",
      eyebrow: "Cyber risk advisory",
      headline: "Know your risks before attackers do",
      highlight: "before attackers do",
      subheadline:
        "Sentinel Risk runs security assessments, tabletop exercises and compliance programmes for regulated companies that cannot afford a breach.",
      primaryCta: "Request an assessment",
      secondaryCta: "See our services",
      announcement: "ISO 27001 fast-track programme now available",
      tagline: "Risk, understood and managed.",
      ctaHeadline: "Find your weakest link first",
      ctaBody: "Start with a two-week risk assessment and a prioritised remediation roadmap.",
    },
    {
      brand: "Waypoint Counsel",
      description: "A consulting landing page for a family business succession advisory with minimal editorial layout.",
      eyebrow: "Family business advisory",
      headline: "Pass on the business, keep the family",
      highlight: "keep the family",
      subheadline:
        "Waypoint Counsel guides owners through succession, governance and ownership transitions with patience, discretion and clear plans.",
      primaryCta: "Arrange a private meeting",
      secondaryCta: "Our approach",
      announcement: "Advising family businesses for three generations",
      tagline: "Continuity, carefully planned.",
      ctaHeadline: "Ready to plan the next generation?",
      ctaBody: "Every engagement starts with a confidential conversation with a senior partner.",
    },
  ],
}
