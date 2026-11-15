import type { CategoryContent } from "../types"

export const saas: CategoryContent = {
  slug: "saas",
  name: "SaaS",
  description:
    "Product-led landing pages for B2B software, with dashboards, pricing tables and trial sign-ups.",
  iconName: "Cloud",
  visual: "product",
  navSecondary: "Sign in",
  navLinks: ["Product", "Solutions", "Pricing", "Customers", "Docs"],
  copy: {
    featuresEyebrow: "Platform",
    featuresTitle: "Everything your team needs to ship on schedule",
    featuresBody:
      "One workspace for planning, tracking and reporting, built to replace the five tools you are juggling today.",
    showcaseTitle: "Integrations that fit your stack",
    showcaseBody:
      "Connect the tools you already pay for. Two-way sync keeps every system in step without a single CSV export.",
    stepsTitle: "Up and running in an afternoon",
    testimonialsTitle: "Teams that switched never looked back",
    pricingTitle: "Simple pricing that scales with you",
    pricingBody:
      "Start free, upgrade when your team grows. Every plan includes unlimited projects and guests.",
    faqTitle: "Questions, answered",
    logosLabel: "Trusted by operations teams at",
  },
  features: [
    {
      icon: "LayoutDashboard",
      title: "Live dashboards",
      description:
        "Build views for every stakeholder in minutes, with widgets that update the moment work changes.",
    },
    {
      icon: "Workflow",
      title: "No-code automations",
      description:
        "Route requests, assign owners and nudge reviewers with rules anyone on the team can set up.",
    },
    {
      icon: "ShieldCheck",
      title: "Enterprise-grade security",
      description:
        "SOC 2 Type II, SSO with SAML, audit logs and data residency in the US, EU or APAC.",
    },
    {
      icon: "Users",
      title: "Built for collaboration",
      description:
        "Comments, mentions and approvals live next to the work, so decisions never get lost in chat.",
    },
    {
      icon: "ChartLine",
      title: "Forecasting",
      description:
        "Predict delivery dates from historical velocity and spot slipping milestones weeks earlier.",
    },
    {
      icon: "Plug",
      title: "Open API",
      description:
        "A documented REST and GraphQL API, webhooks and SDKs for TypeScript, Python and Go.",
    },
    {
      icon: "Zap",
      title: "Fast by default",
      description:
        "Every interaction responds in under 100ms, even on workspaces with a million records.",
    },
    {
      icon: "Globe",
      title: "Works everywhere",
      description:
        "Native apps for macOS, Windows, iOS and Android, with full offline support and instant sync.",
    },
  ],
  stats: [
    { value: "12,400+", label: "Teams onboarded" },
    { value: "38%", label: "Faster delivery cycles" },
    { value: "99.99%", label: "Uptime over 24 months" },
    { value: "4.8/5", label: "Average G2 rating" },
    { value: "2.1M", label: "Automations run weekly" },
    { value: "140", label: "Native integrations" },
  ],
  logos: [
    "Northwind",
    "Lumen Labs",
    "Arcadia",
    "Brightline",
    "Kestrel",
    "Oakridge",
    "Vantage",
    "Halcyon",
  ],
  testimonials: [
    {
      quote:
        "We retired three tools and a pile of spreadsheets in the first month. Our weekly status meeting went from an hour to fifteen minutes.",
      name: "Priya Raman",
      role: "VP Operations, Brightline",
    },
    {
      quote:
        "Automations alone save my team about a day a week. The onboarding was so smooth that nobody needed training.",
      name: "Marcus Lee",
      role: "Head of Delivery, Kestrel",
    },
    {
      quote:
        "Security review took two days instead of two months. SSO, audit logs and residency were all there out of the box.",
      name: "Elena Fischer",
      role: "CISO, Oakridge",
    },
    {
      quote:
        "Forecasting finally gives leadership a delivery date they can trust. We hit our last three launches on time.",
      name: "Daniel Okafor",
      role: "Director of Product, Vantage",
    },
    {
      quote:
        "It is the first tool our engineers and our finance team both actually like using. That never happens.",
      name: "Sofia Marin",
      role: "COO, Halcyon",
    },
    {
      quote:
        "The API is a joy. We wired it into our internal portal in a weekend and it has not broken once.",
      name: "Tom Becker",
      role: "Staff Engineer, Lumen Labs",
    },
  ],
  steps: [
    {
      title: "Import your work",
      description:
        "Bring projects over from Jira, Asana or spreadsheets with a guided importer that maps every field.",
    },
    {
      title: "Invite your team",
      description:
        "Add teammates with SSO or a link. Roles and permissions are configured automatically.",
    },
    {
      title: "Automate the busywork",
      description:
        "Pick from 60+ templates for intake, approvals and reporting, or build your own rules.",
    },
    {
      title: "Report with confidence",
      description:
        "Share live dashboards with leadership instead of rebuilding slide decks every Friday.",
    },
  ],
  showcase: [
    { name: "Slack", meta: "Notifications and slash commands", tag: "Popular", price: "Free" },
    { name: "GitHub", meta: "Link pull requests to tasks", tag: "Two-way", price: "Free" },
    { name: "Salesforce", meta: "Sync accounts and opportunities", tag: "Business", price: "Pro" },
    { name: "Google Drive", meta: "Attach and preview files", tag: "Popular", price: "Free" },
    { name: "Figma", meta: "Embed live design frames", tag: "New", price: "Free" },
    { name: "Snowflake", meta: "Stream data to your warehouse", tag: "Enterprise", price: "Scale" },
  ],
  tiers: [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      description: "For small teams getting organised.",
      features: ["Up to 10 members", "Unlimited projects", "Basic automations", "7-day history"],
      cta: "Start for free",
    },
    {
      name: "Pro",
      price: "$12",
      period: "/user/month",
      description: "For growing teams that need more control.",
      features: [
        "Unlimited members",
        "Advanced automations",
        "Dashboards and forecasting",
        "Unlimited history",
        "Priority support",
      ],
      cta: "Start 14-day trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organisations with advanced security needs.",
      features: [
        "SAML SSO and SCIM",
        "Audit logs",
        "Data residency",
        "Dedicated success manager",
        "99.99% uptime SLA",
      ],
      cta: "Talk to sales",
    },
  ],
  faqs: [
    {
      q: "Is there a free plan?",
      a: "Yes. The Starter plan is free forever for up to 10 members, with unlimited projects and basic automations.",
    },
    {
      q: "How long does migration take?",
      a: "Most teams import their existing work in under an hour. Our importer supports Jira, Asana, Trello, Monday and CSV.",
    },
    {
      q: "Do you offer discounts for non-profits and startups?",
      a: "We offer 50% off Pro for registered non-profits and early-stage startups with under $5M in funding.",
    },
    {
      q: "Where is my data stored?",
      a: "You can choose US, EU or APAC hosting. All data is encrypted at rest with AES-256 and in transit with TLS 1.3.",
    },
    {
      q: "Can I cancel at any time?",
      a: "Yes. Monthly plans can be cancelled at any time and annual plans are refunded pro rata for unused months.",
    },
    {
      q: "Do you support SSO?",
      a: "SAML SSO and SCIM provisioning are included in Enterprise. Google and Microsoft sign-in are available on every plan.",
    },
  ],
  footer: [
    { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog"] },
    { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
    { title: "Resources", links: ["Docs", "API reference", "Status", "Security"] },
  ],
  pages: [
    {
      brand: "Taskline",
      description: "A SaaS landing page for a project management platform with dashboard mockup and pricing.",
      eyebrow: "New: AI status reports",
      headline: "Plan, track and ship work in one place",
      highlight: "one place",
      subheadline:
        "Taskline brings projects, docs and reporting together so your team spends less time updating tools and more time doing the work.",
      primaryCta: "Start free trial",
      secondaryCta: "Book a demo",
      announcement: "Taskline 4.0 is here with AI-written status reports",
      tagline: "Work management for teams that ship.",
      ctaHeadline: "Ready to bring your team together?",
      ctaBody: "Start free in under a minute. No credit card required.",
    },
    {
      brand: "Ledgerly",
      description: "A SaaS landing page for an accounting automation tool with editorial typography.",
      eyebrow: "Close the books in 3 days",
      headline: "Month-end close without the spreadsheets",
      highlight: "without the spreadsheets",
      subheadline:
        "Ledgerly reconciles transactions, matches invoices and flags anomalies automatically, so finance teams close faster and sleep better.",
      primaryCta: "Get started",
      secondaryCta: "See how it works",
      announcement: "Now integrated with NetSuite and Xero",
      tagline: "Finance operations on autopilot.",
      ctaHeadline: "Close your next month in days, not weeks",
      ctaBody: "Connect your ERP and see your first automated reconciliation today.",
    },
    {
      brand: "Helpdeck",
      description: "A SaaS landing page for a customer support platform with split hero and testimonials.",
      eyebrow: "Rated #1 on G2 for support",
      headline: "Customer support your team will actually enjoy",
      highlight: "actually enjoy",
      subheadline:
        "A shared inbox, live chat and a help center in one fast workspace. Resolve tickets 2x faster with smart routing and saved replies.",
      primaryCta: "Try Helpdeck free",
      secondaryCta: "Watch the tour",
      announcement: "Introducing AI triage for every inbox",
      tagline: "The support desk for modern teams.",
      ctaHeadline: "Give every customer a faster answer",
      ctaBody: "Set up your shared inbox in five minutes and import your history in one click.",
    },
    {
      brand: "Shiftwise",
      description: "A SaaS landing page for a workforce scheduling app with bento hero and comparison pricing.",
      eyebrow: "Scheduling for shift teams",
      headline: "Build next week's rota in five minutes",
      highlight: "five minutes",
      subheadline:
        "Shiftwise turns availability, skills and labour rules into fair schedules automatically, and lets staff swap shifts from their phones.",
      primaryCta: "Start scheduling",
      secondaryCta: "Talk to sales",
      announcement: "Payroll export for Gusto and ADP now live",
      tagline: "Fair schedules, happier teams.",
      ctaHeadline: "Stop rebuilding the rota every Sunday night",
      ctaBody: "Free for teams of up to 15 people. Setup takes less than an hour.",
    },
    {
      brand: "Metricly",
      description: "A SaaS landing page for a product analytics platform with dark inverted hero.",
      eyebrow: "Product analytics, simplified",
      headline: "Know exactly why users stay or churn",
      highlight: "stay or churn",
      subheadline:
        "Metricly tracks every event, funnel and cohort without a data team, so product managers get answers in seconds instead of sprints.",
      primaryCta: "Start for free",
      secondaryCta: "Explore the demo",
      announcement: "Session replay is now included on every plan",
      tagline: "Answers, not dashboards.",
      ctaHeadline: "Your next insight is one query away",
      ctaBody: "Install the SDK in five minutes and see live data before your coffee gets cold.",
    },
  ],
}
