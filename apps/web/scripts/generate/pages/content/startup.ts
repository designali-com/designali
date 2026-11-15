import type { CategoryContent } from "../types"

export const startup: CategoryContent = {
  slug: "startup",
  name: "Startup",
  description:
    "Launch pages for early-stage startups, with waitlists, traction stats and founder-friendly pricing.",
  iconName: "Rocket",
  visual: "product",
  navSecondary: "Log in",
  navLinks: ["Product", "How it works", "Pricing", "Changelog", "Blog"],
  copy: {
    featuresEyebrow: "Why us",
    featuresTitle: "Small team, big leverage",
    featuresBody:
      "We built the tool we wished we had at our last startup. Opinionated defaults, no setup tax and room to grow.",
    showcaseTitle: "What shipped recently",
    showcaseBody:
      "We release something new almost every week. Here is a look at the latest improvements from the changelog.",
    stepsTitle: "How it works",
    testimonialsTitle: "Early users are saying",
    pricingTitle: "Founder-friendly pricing",
    pricingBody:
      "Free while you are small, fair when you grow. Lock in early-adopter pricing for life when you join today.",
    faqTitle: "Things people ask us",
    logosLabel: "Backed by and built with",
  },
  features: [
    {
      icon: "Rocket",
      title: "Live in minutes",
      description:
        "Sign up, connect one account and see value on day one. No onboarding call required.",
    },
    {
      icon: "Sparkles",
      title: "Smart defaults",
      description:
        "Sensible settings out of the box, informed by hundreds of conversations with early users.",
    },
    {
      icon: "MessageCircle",
      title: "Talk to the founders",
      description:
        "Every user gets a direct line to the team. We read every message and reply within a day.",
    },
    {
      icon: "RefreshCw",
      title: "Weekly releases",
      description:
        "New features and fixes every week, shaped directly by the feedback our users send us.",
    },
    {
      icon: "Smartphone",
      title: "Mobile first",
      description:
        "Everything works beautifully on your phone, because that is where most of your day happens.",
    },
    {
      icon: "Shield",
      title: "Secure from day one",
      description:
        "Encryption at rest and in transit, two-factor auth and regular third-party penetration tests.",
    },
    {
      icon: "Puzzle",
      title: "Plays well with others",
      description:
        "Native integrations with the tools startups actually use, plus Zapier for everything else.",
    },
    {
      icon: "TrendingUp",
      title: "Grows with you",
      description:
        "From solo founder to Series B, the same workspace scales without migrations or rewrites.",
    },
  ],
  stats: [
    { value: "18k", label: "People on the waitlist" },
    { value: "$4.5M", label: "Seed round raised" },
    { value: "72", label: "NPS from beta users" },
    { value: "3x", label: "Month-over-month growth" },
    { value: "26", label: "Countries with active teams" },
    { value: "4h", label: "Median support reply time" },
  ],
  logos: [
    "Forge Ventures",
    "Lattice Capital",
    "Northstar Fund",
    "Seedline",
    "Product Hunt",
    "Basecamp Angels",
    "Orbit Labs",
    "Tidewater VC",
  ],
  testimonials: [
    {
      quote:
        "I signed up on a Tuesday and had my whole team using it by Thursday. The founders fixed a bug I reported within hours.",
      name: "Jess Moreno",
      role: "Founder, Pebble Studio",
    },
    {
      quote:
        "It feels like the product was designed by people who have actually run a startup. Every default is the right one.",
      name: "Arjun Mehta",
      role: "CEO, Loopwise",
    },
    {
      quote:
        "We replaced a clunky enterprise tool with this and cut our monthly bill by eighty percent.",
      name: "Claire Dubois",
      role: "COO, Fieldnote",
    },
    {
      quote:
        "The weekly changelog is my favourite email. Half the features I asked for shipped within a month.",
      name: "Ben Hartley",
      role: "Head of Growth, Quill",
    },
    {
      quote:
        "Finally a tool that respects my time. No sales call, no seat minimums, just a product that works.",
      name: "Nadia Petrova",
      role: "Solo founder, Draftboard",
    },
    {
      quote:
        "We went from five people to forty on the same workspace without a single migration headache.",
      name: "Omar Haddad",
      role: "CTO, Brightpath",
    },
  ],
  steps: [
    {
      title: "Join the waitlist",
      description:
        "Reserve your spot with an email. We are letting in new teams every week in the order they signed up.",
    },
    {
      title: "Get your invite",
      description:
        "You will receive a personal invite and a short welcome video from one of the founders.",
    },
    {
      title: "Set up in minutes",
      description:
        "Connect your existing tools and import your data with a guided setup that takes under ten minutes.",
    },
    {
      title: "Shape the roadmap",
      description:
        "Vote on features, join monthly user calls and help decide what we build next.",
    },
  ],
  showcase: [
    { name: "Shared workspaces", meta: "Invite collaborators with a link", tag: "Shipped", price: "v1.8" },
    { name: "Offline mode", meta: "Keep working on flights and trains", tag: "Shipped", price: "v1.7" },
    { name: "Dark theme", meta: "Easy on the eyes after midnight", tag: "Shipped", price: "v1.6" },
    { name: "Public API", meta: "Build on top of your own data", tag: "Beta", price: "v1.9" },
    { name: "Templates gallery", meta: "Start from community best practices", tag: "New", price: "v1.9" },
    { name: "Android app", meta: "Native app with widgets", tag: "Next up", price: "Q3" },
  ],
  tiers: [
    {
      name: "Solo",
      price: "Free",
      period: "",
      description: "For founders and side projects.",
      features: ["1 workspace", "Core features", "Community support", "Up to 3 collaborators"],
      cta: "Join the waitlist",
    },
    {
      name: "Startup",
      price: "$9",
      period: "/user/month",
      description: "For small teams moving fast.",
      features: [
        "Unlimited workspaces",
        "All integrations",
        "Priority support from founders",
        "Admin controls",
        "Early-adopter price locked for life",
      ],
      cta: "Get early access",
    },
    {
      name: "Scale",
      price: "$19",
      period: "/user/month",
      description: "For funded teams growing quickly.",
      features: ["SSO and audit logs", "Advanced permissions", "Usage analytics", "Onboarding session", "Uptime SLA"],
      cta: "Contact us",
    },
  ],
  faqs: [
    {
      q: "When will I get access?",
      a: "We invite new teams every week in the order they joined the waitlist. Most people get access within two to three weeks.",
    },
    {
      q: "Is it free during the beta?",
      a: "Yes. Everything is free during the beta, and beta users keep a 50% discount on paid plans for life.",
    },
    {
      q: "Who is behind the product?",
      a: "A team of seven engineers and designers who previously built products used by millions, backed by experienced seed investors.",
    },
    {
      q: "What happens to my data if you shut down?",
      a: "You can export everything at any time in open formats, and we have committed to a 12-month notice period in our terms.",
    },
    {
      q: "Do you have a referral programme?",
      a: "Every person you refer moves you up the waitlist, and each referral who upgrades gives you a free month.",
    },
    {
      q: "Can I request a feature?",
      a: "Please do. Our public roadmap lets you vote on ideas, and the founders personally review every request.",
    },
  ],
  footer: [
    { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Press kit"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
  ],
  pages: [
    {
      brand: "Launchpad",
      description: "A startup launch page for a no-code app builder with product mockup and waitlist.",
      eyebrow: "Now in public beta",
      headline: "Turn your idea into a working app this weekend",
      highlight: "this weekend",
      subheadline:
        "Launchpad lets founders build, test and launch real apps without writing code, then export clean code when you are ready to hire.",
      primaryCta: "Join the beta",
      secondaryCta: "Watch the demo",
      announcement: "We just raised a $4.5M seed round",
      tagline: "From idea to app, fast.",
      ctaHeadline: "Your first version is closer than you think",
      ctaBody: "Join 18,000 founders already building. Free during the beta.",
    },
    {
      brand: "Hatch",
      description: "A startup landing page for a founder banking and equity tool with editorial hero.",
      eyebrow: "For first-time founders",
      headline: "Incorporate, bank and raise in one place",
      highlight: "in one place",
      subheadline:
        "Hatch handles incorporation, cap tables and your first funding round, so you can stop filling in forms and start building.",
      primaryCta: "Start your company",
      secondaryCta: "Talk to a founder",
      announcement: "SAFE templates now included for free",
      tagline: "The founder's operating system.",
      ctaHeadline: "Start your company before lunch",
      ctaBody: "Incorporate in Delaware in under 15 minutes for a flat fee.",
    },
    {
      brand: "Relay",
      description: "A startup landing page for an async video messaging tool with email capture hero.",
      eyebrow: "Fewer meetings, more momentum",
      headline: "Replace your next meeting with a two-minute video",
      highlight: "two-minute video",
      subheadline:
        "Relay lets remote teams record quick updates, get timestamped feedback and make decisions without another calendar invite.",
      primaryCta: "Get early access",
      secondaryCta: "See it in action",
      announcement: "Relay is #1 Product of the Day on Product Hunt",
      tagline: "Async video for remote teams.",
      ctaHeadline: "Take back your calendar",
      ctaBody: "Join the waitlist and get a free year of Startup when we launch.",
    },
    {
      brand: "Greenline",
      description: "A startup landing page for a climate tech carbon tracking tool with bento hero.",
      eyebrow: "Climate tech for small business",
      headline: "Measure your carbon footprint in ten minutes",
      highlight: "ten minutes",
      subheadline:
        "Greenline connects to your accounting software and estimates emissions automatically, then shows you the cheapest ways to cut them.",
      primaryCta: "Measure for free",
      secondaryCta: "Read our method",
      announcement: "Greenline now supports UK SECR reporting",
      tagline: "Carbon accounting made simple.",
      ctaHeadline: "Know your number. Then shrink it.",
      ctaBody: "Get your first carbon report free, no consultant required.",
    },
    {
      brand: "Tandem",
      description: "A startup landing page for a co-founder matching platform with inverted hero.",
      eyebrow: "Find your co-founder",
      headline: "Meet the co-founder you have been looking for",
      highlight: "co-founder",
      subheadline:
        "Tandem matches founders by skills, commitment and working style, then helps you test the partnership with a structured trial project.",
      primaryCta: "Create your profile",
      secondaryCta: "How matching works",
      announcement: "Over 2,000 founding teams formed on Tandem",
      tagline: "Great companies start with two.",
      ctaHeadline: "Your next co-founder is already here",
      ctaBody: "Create a profile in five minutes and get your first matches tomorrow.",
    },
    {
      brand: "Leashly",
      description: "A startup landing page for an on-demand dog walking app with framed hero and city launch details.",
      eyebrow: "Now live in Austin and Denver",
      headline: "Trusted dog walkers, booked in two taps",
      highlight: "booked in two taps",
      subheadline:
        "Leashly connects busy owners with background-checked walkers nearby, with GPS walk tracking and photo updates after every stroll.",
      primaryCta: "Download the app",
      secondaryCta: "Become a walker",
      announcement: "Leashly is expanding to Portland next month",
      tagline: "Happy dogs, happy owners.",
      ctaHeadline: "Your dog deserves a midday walk",
      ctaBody: "Book your first walk free this week. No subscription required.",
    },
    {
      brand: "Stackwise",
      description: "A startup landing page for an AI coding interview platform with spotlight hero and early customers.",
      eyebrow: "Backed by top seed investors",
      headline: "Hire engineers on real work, not puzzles",
      highlight: "not puzzles",
      subheadline:
        "Stackwise runs realistic, paid take-home projects with AI-assisted review, so you hire faster and candidates actually enjoy the process.",
      primaryCta: "Request access",
      secondaryCta: "See a sample report",
      announcement: "We just closed a $6M seed round",
      tagline: "Hiring that respects engineers.",
      ctaHeadline: "Your next senior engineer is applying today",
      ctaBody: "Request access and run your first three assessments free.",
    },
    {
      brand: "Sproutly",
      description: "A startup landing page for a kids financial literacy app with split hero and email capture waitlist.",
      eyebrow: "Launching this spring",
      headline: "Teach kids money skills that last a lifetime",
      highlight: "last a lifetime",
      subheadline:
        "Sproutly gives children a prepaid card and fun weekly lessons, while parents set allowances, chores and savings goals from one app.",
      primaryCta: "Join the waitlist",
      secondaryCta: "Read our curriculum",
      announcement: "The first 5,000 families get a year free",
      tagline: "Money skills for growing minds.",
      ctaHeadline: "Raise a confident saver",
      ctaBody: "Join the waitlist with your email and be first in line when we launch.",
    },
    {
      brand: "Votewell",
      description: "A startup landing page for a community governance and voting tool with bento hero and feature highlights.",
      eyebrow: "Decisions your members trust",
      headline: "Run fair votes for any community",
      highlight: "fair votes",
      subheadline:
        "Votewell helps clubs, co-ops and DAOs run proposals, secret ballots and budget votes with results everyone can verify.",
      primaryCta: "Start a community",
      secondaryCta: "Explore features",
      announcement: "Votewell is free for communities under 100 members",
      tagline: "Better decisions, together.",
      ctaHeadline: "Bring your members into every decision",
      ctaBody: "Set up your first vote in under ten minutes, no technical skills needed.",
    },
    {
      brand: "Scribewell",
      description: "A startup landing page for an AI meeting notes tool for doctors with minimal editorial layout.",
      eyebrow: "Built with clinicians",
      headline: "Spend less time typing and more with patients",
      highlight: "more with patients",
      subheadline:
        "Scribewell listens to consultations and drafts structured clinical notes in seconds, saving physicians up to two hours every day.",
      primaryCta: "Try it in your clinic",
      secondaryCta: "Read the pilot results",
      announcement: "HIPAA compliant and live in 40 clinics",
      tagline: "Notes that write themselves.",
      ctaHeadline: "Get your evenings back",
      ctaBody: "Start a free 30-day pilot with your practice. Setup takes one afternoon.",
    },
  ],
}
