import type { CategoryContent } from "../types"

export const portfolio: CategoryContent = {
  slug: "portfolio",
  name: "Portfolio",
  description:
    "Personal portfolio pages for designers, developers and creatives, with selected work, services and contact.",
  iconName: "UserRound",
  visual: "visual",
  navSecondary: "Resume",
  navLinks: ["Work", "About", "Services", "Writing", "Contact"],
  copy: {
    featuresEyebrow: "What I do",
    featuresTitle: "Design and code from first sketch to shipped product",
    featuresBody:
      "I help founders and teams turn fuzzy ideas into products people enjoy using, handling everything from research to production code.",
    showcaseTitle: "Selected projects",
    showcaseBody:
      "A handful of recent projects I am proud of. Full case studies are available on request.",
    stepsTitle: "How a project with me runs",
    testimonialsTitle: "Kind words from collaborators",
    pricingTitle: "Ways to work together",
    pricingBody:
      "Fixed-scope packages for common needs, or a monthly retainer if you need an ongoing design partner.",
    faqTitle: "Good to know",
    logosLabel: "Previously worked with",
  },
  features: [
    {
      icon: "PenTool",
      title: "Product design",
      description:
        "User flows, wireframes and polished interfaces for web and mobile, validated with real users.",
    },
    {
      icon: "Code",
      title: "Front-end development",
      description:
        "Production-ready React and TypeScript, with accessible components and smooth interactions.",
    },
    {
      icon: "Shapes",
      title: "Brand identity",
      description:
        "Logos, typography and colour systems for early-stage companies finding their voice.",
    },
    {
      icon: "LayoutTemplate",
      title: "Design systems",
      description:
        "Reusable component libraries in Figma and code that keep products consistent as they grow.",
    },
    {
      icon: "Search",
      title: "User research",
      description:
        "Interviews, usability tests and analytics reviews that ground design decisions in evidence.",
    },
    {
      icon: "Wand",
      title: "Prototyping",
      description:
        "Interactive prototypes that let you test ideas with customers and investors before building.",
    },
    {
      icon: "Presentation",
      title: "Workshops",
      description:
        "Facilitated sessions to align teams on vision, priorities and the problems worth solving.",
    },
    {
      icon: "Gauge",
      title: "Performance audits",
      description:
        "Reviews of speed, accessibility and SEO with a prioritised list of fixes you can ship this week.",
    },
  ],
  stats: [
    { value: "9", label: "Years of experience" },
    { value: "60+", label: "Products shipped" },
    { value: "12", label: "Startups helped to launch" },
    { value: "4", label: "Design awards" },
    { value: "100%", label: "Projects delivered on time" },
    { value: "2M+", label: "People using my work" },
  ],
  logos: [
    "Fable Health",
    "Orchard",
    "Waypoint",
    "Kindred",
    "Lumen Bank",
    "Studio Kiln",
    "Parcel",
    "Moonrise",
  ],
  testimonials: [
    {
      quote:
        "Working with them felt like adding a senior designer and engineer at once. Our activation rate jumped by a third after the redesign.",
      name: "Laura Chen",
      role: "Founder, Kindred",
    },
    {
      quote:
        "Clear communication, thoughtful questions and pixel-perfect delivery. I would hire them again tomorrow.",
      name: "James O'Neill",
      role: "Product Lead, Waypoint",
    },
    {
      quote:
        "They took our messy MVP and turned it into something investors immediately understood. We closed our seed round a month later.",
      name: "Aisha Bello",
      role: "CEO, Fable Health",
    },
    {
      quote:
        "The design system they built is still the backbone of our app two years later. Every new hire loves it.",
      name: "Pedro Alves",
      role: "Engineering Manager, Parcel",
    },
    {
      quote:
        "Rare to find someone with this much taste who also writes clean, well-tested code.",
      name: "Hana Sato",
      role: "CTO, Orchard",
    },
    {
      quote:
        "They ran a workshop that finally got our founders aligned. The roadmap we left with is still the one we follow.",
      name: "Michael Duarte",
      role: "COO, Moonrise",
    },
  ],
  steps: [
    {
      title: "Intro call",
      description:
        "A free 30-minute call to understand your goals, timeline and whether we are a good fit.",
    },
    {
      title: "Proposal",
      description:
        "A short written proposal with scope, milestones and a fixed price, usually within three days.",
    },
    {
      title: "Design and build",
      description:
        "Weekly check-ins and shared progress in Figma and a staging link, so there are no surprises.",
    },
    {
      title: "Handover",
      description:
        "Clean files, documentation and a recorded walkthrough so your team can take it from there.",
    },
  ],
  showcase: [
    { name: "Kindred", meta: "Mobile app for family caregivers", tag: "Product", price: "2025" },
    { name: "Lumen Bank", meta: "Onboarding redesign for a neobank", tag: "UX", price: "2025" },
    { name: "Studio Kiln", meta: "Identity and site for a ceramics studio", tag: "Brand", price: "2024" },
    { name: "Parcel", meta: "Design system for a logistics platform", tag: "System", price: "2024" },
    { name: "Waypoint", meta: "Trip planning web app", tag: "Web", price: "2023" },
    { name: "Moonrise", meta: "Sleep tracking dashboard", tag: "Data", price: "2023" },
  ],
  tiers: [
    {
      name: "Audit",
      price: "$1,800",
      period: "one-time",
      description: "A deep review of your existing product.",
      features: ["UX and accessibility review", "Performance check", "Prioritised fix list", "60-minute walkthrough"],
      cta: "Book an audit",
    },
    {
      name: "Launch",
      price: "$9,500",
      period: "per project",
      description: "Design and build a marketing site or MVP.",
      features: [
        "Discovery and strategy",
        "Full visual design",
        "Production front-end code",
        "Two rounds of revisions",
        "30 days of support",
      ],
      cta: "Start a project",
    },
    {
      name: "Retainer",
      price: "$6,000",
      period: "/month",
      description: "An ongoing design partner for your team.",
      features: ["Two days per week", "Design and code", "Slack access", "Pause or cancel any time"],
      cta: "Check availability",
    },
  ],
  faqs: [
    {
      q: "Are you available for full-time roles?",
      a: "Not at the moment. I work independently with a small number of clients so I can give each project my full attention.",
    },
    {
      q: "How far in advance should I book?",
      a: "I usually book three to four weeks ahead. Audits can often start within a week.",
    },
    {
      q: "Do you work with agencies?",
      a: "Yes, I regularly collaborate with agencies as a white-label designer or front-end developer.",
    },
    {
      q: "Which tools do you use?",
      a: "Figma for design, React, Next.js and Tailwind CSS for code, and Linear or Notion to keep projects organised.",
    },
    {
      q: "Can you work in my time zone?",
      a: "I am based in Lisbon and overlap comfortably with both European and US East Coast working hours.",
    },
    {
      q: "How do payments work?",
      a: "Projects are split into 50% upfront and 50% on delivery. Retainers are billed monthly in advance.",
    },
  ],
  footer: [
    { title: "Sitemap", links: ["Work", "About", "Services", "Writing"] },
    { title: "Elsewhere", links: ["Dribbble", "GitHub", "LinkedIn", "Read.cv"] },
    { title: "Contact", links: ["Email me", "Book a call", "Newsletter", "Resume"] },
  ],
  pages: [
    {
      brand: "Ava Lindgren",
      description: "A portfolio page for a product designer with editorial typography and selected projects.",
      eyebrow: "Product designer in Lisbon",
      headline: "I design calm software for busy people",
      highlight: "calm software",
      subheadline:
        "I am Ava, an independent product designer helping startups turn complex workflows into simple, friendly interfaces.",
      primaryCta: "Work with me",
      secondaryCta: "See projects",
      announcement: "Available for new projects from next month",
      tagline: "Independent product designer.",
      ctaHeadline: "Have a product that needs some calm?",
      ctaBody: "Send me a note about what you are building. I reply to every message within a day.",
    },
    {
      brand: "Noah Park",
      description: "A portfolio page for a creative front-end developer with code-forward split hero.",
      eyebrow: "Creative developer",
      headline: "I build interfaces that feel alive",
      highlight: "feel alive",
      subheadline:
        "I am Noah, a front-end developer specialising in motion, WebGL and design systems for brands that care about craft.",
      primaryCta: "Hire me",
      secondaryCta: "View GitHub",
      announcement: "My open-source motion library just passed 5k stars",
      tagline: "Creative front-end development.",
      ctaHeadline: "Let us build something people talk about",
      ctaBody: "I take on three projects per quarter. Tell me about yours.",
    },
    {
      brand: "Studio Mira",
      description: "A portfolio page for a freelance brand and packaging designer with gradient hero.",
      eyebrow: "Brand and packaging design",
      headline: "Identities with warmth and a point of view",
      highlight: "warmth",
      subheadline:
        "Studio Mira is the one-woman practice of Mira Haddad, designing brands and packaging for independent food, drink and lifestyle makers.",
      primaryCta: "Start a brand",
      secondaryCta: "Browse the archive",
      announcement: "Booking brand projects for spring",
      tagline: "Brands for independent makers.",
      ctaHeadline: "Ready to give your product a face?",
      ctaBody: "Tell me about your business and I will send a short questionnaire to get us started.",
    },
    {
      brand: "Leo Martins",
      description: "A portfolio page for a UX researcher and strategist with bento hero and services.",
      eyebrow: "UX research and strategy",
      headline: "Evidence for every product decision",
      highlight: "every product decision",
      subheadline:
        "I am Leo, a UX researcher who helps product teams understand their users and prioritise what to build next.",
      primaryCta: "Book an intro call",
      secondaryCta: "Read case studies",
      announcement: "New: research sprints for seed-stage startups",
      tagline: "Research that changes roadmaps.",
      ctaHeadline: "Stop guessing what your users want",
      ctaBody: "A two-week research sprint is often all it takes. Let us find out together.",
    },
    {
      brand: "Kai Okoro",
      description: "A portfolio page for a 3D artist and motion designer with dark inverted hero.",
      eyebrow: "3D and motion design",
      headline: "Visuals that stop the scroll",
      highlight: "stop the scroll",
      subheadline:
        "I am Kai, a 3D artist creating product renders, looping animations and launch visuals for tech and fashion brands.",
      primaryCta: "Commission work",
      secondaryCta: "Watch the reel",
      announcement: "Featured in this year's Motion Design Annual",
      tagline: "3D, motion and visual design.",
      ctaHeadline: "Need a launch visual nobody will forget?",
      ctaBody: "Share your product and deadline and I will send a concept within a week.",
    },
    {
      brand: "Elena Ruiz",
      description: "A portfolio page for a documentary and editorial photographer with framed hero and selected stories.",
      eyebrow: "Documentary photographer",
      headline: "Honest pictures of people at work",
      highlight: "people at work",
      subheadline:
        "I am Elena, a photographer documenting craftspeople, farmers and small businesses for magazines, NGOs and brand campaigns.",
      primaryCta: "Commission a shoot",
      secondaryCta: "View stories",
      announcement: "Shortlisted for this year's Sony World Photography Awards",
      tagline: "Photographs with patience.",
      ctaHeadline: "Have a story that deserves to be seen?",
      ctaBody: "Tell me about the people and the place. I will reply with ideas and a day rate within 48 hours.",
    },
    {
      brand: "Tomas Brandt",
      description: "A portfolio page for a children's book illustrator with spotlight hero and picture book highlights.",
      eyebrow: "Illustrator and picture book artist",
      headline: "Drawings that make bedtime last longer",
      highlight: "bedtime last longer",
      subheadline:
        "I am Tomas, an illustrator creating picture books, editorial spots and museum murals in watercolour and pencil.",
      primaryCta: "Request a quote",
      secondaryCta: "Browse the sketchbook",
      announcement: "My new picture book is out with Little Harbour Press",
      tagline: "Illustration with a sense of wonder.",
      ctaHeadline: "Need a world drawn from scratch?",
      ctaBody: "Send me your manuscript or brief and I will sketch a first character within a week.",
    },
    {
      brand: "Priya Nair",
      description: "A portfolio page for a freelance conversion copywriter with split hero and email capture newsletter.",
      eyebrow: "Conversion copywriter",
      headline: "Words that turn visitors into customers",
      highlight: "into customers",
      subheadline:
        "I am Priya, a copywriter writing landing pages, onboarding emails and product copy for SaaS and ecommerce brands.",
      primaryCta: "Get a copy review",
      secondaryCta: "Read my newsletter",
      announcement: "Join 6,000 marketers reading my Friday copy teardown",
      tagline: "Clear copy, measurable results.",
      ctaHeadline: "Is your homepage leaking signups?",
      ctaBody: "Subscribe for weekly teardowns or book a 30-minute copy review of your top page.",
    },
    {
      brand: "Hugo Laine",
      description: "A portfolio page for an interior architect with bento hero and residential projects.",
      eyebrow: "Interior architecture",
      headline: "Rooms shaped around the way you live",
      highlight: "the way you live",
      subheadline:
        "I am Hugo, an interior architect designing apartments, boutique hotels and small offices with natural materials and plenty of daylight.",
      primaryCta: "Start a project",
      secondaryCta: "See the interiors",
      announcement: "Now taking residential commissions for next autumn",
      tagline: "Interiors with quiet confidence.",
      ctaHeadline: "Planning a renovation this year?",
      ctaBody: "Share your floor plan and a few photos. I will send back first thoughts and a fee proposal.",
    },
    {
      brand: "Sana Ito",
      description: "A portfolio page for an independent type designer with minimal editorial layout and font releases.",
      eyebrow: "Type design and lettering",
      headline: "Typefaces drawn for long reading",
      highlight: "long reading",
      subheadline:
        "I am Sana, a type designer drawing retail fonts and custom typefaces for publishers, apps and cultural institutions.",
      primaryCta: "License a font",
      secondaryCta: "See type specimens",
      announcement: "New release: Halden Text, now with 14 weights",
      tagline: "Letters, carefully drawn.",
      ctaHeadline: "Need a typeface nobody else has?",
      ctaBody: "Custom type projects start with a short call about your voice, languages and where the letters will live.",
    },
  ],
}
