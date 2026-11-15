import type { CategoryContent } from "../types"

export const ai: CategoryContent = {
  slug: "ai",
  name: "AI",
  description:
    "Landing pages for AI products, copilots and model platforms, with live product previews and usage-based pricing.",
  iconName: "Sparkles",
  visual: "product",
  navSecondary: "Log in",
  navLinks: ["Product", "Models", "Pricing", "Research", "Docs"],
  copy: {
    featuresEyebrow: "Capabilities",
    featuresTitle: "AI that works where your team already works",
    featuresBody:
      "Grounded in your own data, governed by your own policies, and fast enough to feel like part of the interface.",
    showcaseTitle: "Ready-made agents for every team",
    showcaseBody:
      "Start from a tested template, connect your sources and deploy in minutes. Every agent can be customised and audited.",
    stepsTitle: "From first prompt to production",
    testimonialsTitle: "Loved by teams putting AI to real work",
    pricingTitle: "Pay for what you use",
    pricingBody:
      "Transparent per-seat and usage pricing. No minimums on self-serve plans and volume discounts as you grow.",
    faqTitle: "Frequently asked questions",
    logosLabel: "Powering AI workflows at",
  },
  features: [
    {
      icon: "Database",
      title: "Grounded in your data",
      description:
        "Connect docs, tickets and wikis. Every answer cites its sources so reviewers can verify in one click.",
    },
    {
      icon: "Bot",
      title: "Custom agents",
      description:
        "Give agents tools, instructions and guardrails, then let them handle multi-step tasks end to end.",
    },
    {
      icon: "Lock",
      title: "Private by design",
      description:
        "Your data is never used to train models. Zero data retention options and customer-managed keys.",
    },
    {
      icon: "Gauge",
      title: "Low-latency inference",
      description:
        "Streaming responses start in under 300ms, served from regions close to your users.",
    },
    {
      icon: "FlaskConical",
      title: "Built-in evaluations",
      description:
        "Test prompts against golden datasets and catch regressions before they reach customers.",
    },
    {
      icon: "Layers",
      title: "Model routing",
      description:
        "Send each request to the best model for the job and cut inference costs by up to 60%.",
    },
    {
      icon: "ScrollText",
      title: "Full audit trail",
      description:
        "Every prompt, tool call and response is logged with user, timestamp and policy decision.",
    },
    {
      icon: "Languages",
      title: "Multilingual",
      description:
        "Understand and reply in more than 40 languages with consistent tone and terminology.",
    },
  ],
  stats: [
    { value: "3.2B", label: "Tokens processed daily" },
    { value: "280ms", label: "Median time to first token" },
    { value: "61%", label: "Average cost reduction" },
    { value: "9,000+", label: "Companies building with us" },
    { value: "40+", label: "Languages supported" },
    { value: "0", label: "Days of data retention by default" },
  ],
  logos: [
    "Parallax",
    "Meridian",
    "Cobalt Health",
    "Fernway",
    "Quanta",
    "Silverpine",
    "Atlas Freight",
    "Nimbus",
  ],
  testimonials: [
    {
      quote:
        "Our support agents resolve 40% of tickets with a single suggested reply. The citations are what won over our compliance team.",
      name: "Hannah Cole",
      role: "Head of Support, Fernway",
    },
    {
      quote:
        "We evaluated six vendors. This was the only one where evals, routing and logging were first-class instead of an afterthought.",
      name: "Rafael Ortiz",
      role: "ML Platform Lead, Quanta",
    },
    {
      quote:
        "Legal approved the rollout in a week because of zero retention and the audit trail. That is unheard of here.",
      name: "Grace Whitfield",
      role: "General Counsel, Cobalt Health",
    },
    {
      quote:
        "Model routing cut our monthly inference bill by more than half without any drop in answer quality.",
      name: "Kenji Watanabe",
      role: "CTO, Silverpine",
    },
    {
      quote:
        "Our sales team uses the research agent before every call. Prep time dropped from forty minutes to five.",
      name: "Amara Nwosu",
      role: "VP Sales, Meridian",
    },
    {
      quote:
        "The SDK is clean, the docs are honest and streaming just works. We shipped our assistant in two sprints.",
      name: "Lukas Brandt",
      role: "Senior Engineer, Parallax",
    },
  ],
  steps: [
    {
      title: "Connect your sources",
      description:
        "Sync Google Drive, Notion, Confluence, Zendesk and more with permission-aware connectors.",
    },
    {
      title: "Design the assistant",
      description:
        "Write instructions, choose tools and set guardrails in a visual builder or in code.",
    },
    {
      title: "Evaluate before launch",
      description:
        "Run test suites against real questions and compare models side by side on quality and cost.",
    },
    {
      title: "Deploy anywhere",
      description:
        "Ship to Slack, your help center, your app or the API, and monitor every conversation live.",
    },
  ],
  showcase: [
    { name: "Support Copilot", meta: "Drafts replies from your help center", tag: "Popular", price: "2 min setup" },
    { name: "Research Agent", meta: "Summarises accounts before sales calls", tag: "Sales", price: "5 min setup" },
    { name: "Contract Reviewer", meta: "Flags risky clauses against your playbook", tag: "Legal", price: "10 min setup" },
    { name: "Data Analyst", meta: "Answers questions in plain English with SQL", tag: "New", price: "8 min setup" },
    { name: "Meeting Notes", meta: "Action items and decisions after every call", tag: "Popular", price: "1 min setup" },
    { name: "Onboarding Guide", meta: "Answers new-hire questions from your wiki", tag: "HR", price: "3 min setup" },
  ],
  tiers: [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "For individuals exploring what AI can do.",
      features: ["100 messages per day", "Standard models", "3 connected sources", "Community support"],
      cta: "Start for free",
    },
    {
      name: "Team",
      price: "$25",
      period: "/user/month",
      description: "For teams deploying assistants to real workflows.",
      features: [
        "Unlimited messages",
        "Frontier models and routing",
        "Unlimited sources",
        "Custom agents",
        "Evaluations and analytics",
      ],
      cta: "Start 14-day trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organisations with strict governance needs.",
      features: [
        "Zero data retention",
        "Customer-managed keys",
        "SSO, SCIM and audit logs",
        "Private deployment options",
        "Dedicated solutions engineer",
      ],
      cta: "Contact sales",
    },
  ],
  faqs: [
    {
      q: "Do you train models on our data?",
      a: "Never. Your prompts, files and outputs are not used to train any model, and Enterprise customers can enable zero data retention.",
    },
    {
      q: "Which models do you support?",
      a: "We support leading frontier and open-weight models, and automatically route each request to the best fit for quality, latency and cost.",
    },
    {
      q: "How do you prevent hallucinations?",
      a: "Answers are grounded in your connected sources with inline citations, and evaluations let you measure accuracy before and after every change.",
    },
    {
      q: "Can we bring our own model?",
      a: "Yes. Enterprise plans can connect fine-tuned or self-hosted models through a standard OpenAI-compatible endpoint.",
    },
    {
      q: "How is usage billed?",
      a: "Team plans include generous usage per seat. Heavy API workloads are billed per million tokens with volume discounts.",
    },
    {
      q: "Is there an on-premise option?",
      a: "We offer single-tenant VPC deployments on AWS, Azure and GCP for customers with data residency or regulatory requirements.",
    },
  ],
  footer: [
    { title: "Product", links: ["Assistants", "Agents", "API", "Pricing"] },
    { title: "Company", links: ["About", "Research", "Careers", "Contact"] },
    { title: "Trust", links: ["Security", "Privacy", "Responsible AI", "Status"] },
  ],
  pages: [
    {
      brand: "Cortex",
      description: "An AI landing page for an enterprise knowledge assistant with product mockup and pricing.",
      eyebrow: "Now with deep research mode",
      headline: "The AI assistant that knows your company",
      highlight: "knows your company",
      subheadline:
        "Cortex answers questions from your docs, tickets and wikis with citations, so every team gets trusted answers in seconds.",
      primaryCta: "Try Cortex free",
      secondaryCta: "Book a demo",
      announcement: "Cortex is now SOC 2 Type II and HIPAA ready",
      tagline: "Company knowledge, instantly answered.",
      ctaHeadline: "Give every employee an expert on call",
      ctaBody: "Connect your first source and ask your first question in under five minutes.",
    },
    {
      brand: "Inferno",
      description: "An AI landing page for a model inference API with editorial typography and usage stats.",
      eyebrow: "Inference API",
      headline: "Run any model at the speed of thought",
      highlight: "speed of thought",
      subheadline:
        "Inferno serves open and frontier models on optimised GPUs with predictable latency, so you can ship AI features without managing clusters.",
      primaryCta: "Get an API key",
      secondaryCta: "Read the docs",
      announcement: "New regions in Frankfurt and Singapore",
      tagline: "Fast, affordable model inference.",
      ctaHeadline: "Ship your AI feature this week",
      ctaBody: "Get $10 in free credits and make your first request in one line of code.",
    },
    {
      brand: "Scribe AI",
      description: "An AI landing page for a writing copilot for marketing teams with split hero.",
      eyebrow: "Writing copilot for marketers",
      headline: "On-brand content in a fraction of the time",
      highlight: "fraction of the time",
      subheadline:
        "Scribe AI learns your voice from past campaigns and drafts blog posts, ads and emails your editors will actually approve.",
      primaryCta: "Start writing",
      secondaryCta: "See examples",
      announcement: "Brand voice training now takes ten minutes",
      tagline: "Your brand voice, at scale.",
      ctaHeadline: "Write your next campaign in an afternoon",
      ctaBody: "Upload three examples of your best work and get your first draft today.",
    },
    {
      brand: "Vigil",
      description: "An AI landing page for an LLM observability and evaluation platform with bento hero.",
      eyebrow: "LLM observability",
      headline: "See exactly what your AI is doing in production",
      highlight: "in production",
      subheadline:
        "Vigil traces every prompt, tool call and response, scores quality automatically and alerts you before users notice a regression.",
      primaryCta: "Start tracing",
      secondaryCta: "View a live trace",
      announcement: "Agent tracing for multi-step workflows is live",
      tagline: "Observability for AI applications.",
      ctaHeadline: "Stop guessing why your model got worse",
      ctaBody: "Add two lines to your code and see your first trace in minutes.",
    },
    {
      brand: "Talkpoint",
      description: "An AI landing page for a voice agent platform for call centres with dark inverted hero.",
      eyebrow: "AI voice agents",
      headline: "Answer every call on the first ring",
      highlight: "first ring",
      subheadline:
        "Talkpoint voice agents book appointments, answer questions and hand off to humans with full context, around the clock and in 30 languages.",
      primaryCta: "Hear a demo call",
      secondaryCta: "Talk to sales",
      announcement: "Sub-second voice latency now on every plan",
      tagline: "Voice agents that sound human.",
      ctaHeadline: "Never send a customer to voicemail again",
      ctaBody: "Launch your first voice agent on a real phone number in under an hour.",
    },
    {
      brand: "Clauseway",
      description: "An AI landing page for a contract review assistant with framed hero and pricing tiers.",
      eyebrow: "AI contract review",
      headline: "Review contracts in minutes, not days",
      highlight: "minutes, not days",
      subheadline:
        "Clauseway flags risky clauses, compares terms against your playbook and suggests redlines, so legal teams close deals faster.",
      primaryCta: "Review a contract free",
      secondaryCta: "See a sample redline",
      announcement: "Now supports MSAs, NDAs and DPAs in 12 languages",
      tagline: "Contract review, accelerated.",
      ctaHeadline: "Clear your contract backlog this week",
      ctaBody: "Upload your playbook and review your first ten contracts free.",
    },
    {
      brand: "Lumen Vision",
      description: "An AI landing page for a computer vision quality inspection platform with spotlight hero and stats.",
      eyebrow: "Visual quality inspection",
      headline: "Catch every defect before it ships",
      highlight: "every defect",
      subheadline:
        "Lumen Vision trains inspection models on a few hundred images of your parts and spots scratches, misalignments and missing components on the line.",
      primaryCta: "Book a pilot",
      secondaryCta: "Watch it inspect",
      announcement: "Edge deployment on NVIDIA Jetson now available",
      tagline: "Inspection that never blinks.",
      ctaHeadline: "Bring zero-defect lines within reach",
      ctaBody: "Start a four-week pilot on one production line with no upfront hardware cost.",
    },
    {
      brand: "Tutorly",
      description: "An AI landing page for a personalised AI tutor for students with split hero and email capture.",
      eyebrow: "AI tutor for students",
      headline: "A patient tutor for every homework question",
      highlight: "every homework question",
      subheadline:
        "Tutorly explains maths, science and essays step by step, adapting to how each student learns instead of just handing over the answer.",
      primaryCta: "Join the waitlist",
      secondaryCta: "See a sample lesson",
      announcement: "Early access opens for GCSE and A-level students",
      tagline: "Learning that meets you where you are.",
      ctaHeadline: "Get early access for your family",
      ctaBody: "Leave your email and we will send an invite as soon as your year group opens.",
    },
    {
      brand: "Pipeline Labs",
      description: "An AI landing page for a synthetic data generation platform with bento hero and use cases.",
      eyebrow: "Synthetic data platform",
      headline: "Train better models with privacy-safe data",
      highlight: "privacy-safe data",
      subheadline:
        "Pipeline Labs generates realistic tabular, text and image datasets that match your production statistics without exposing a single real customer record.",
      primaryCta: "Generate a dataset",
      secondaryCta: "Read the whitepaper",
      announcement: "New: synthetic time-series for fraud and IoT models",
      tagline: "Real patterns, no real people.",
      ctaHeadline: "Unblock your next model today",
      ctaBody: "Connect a sample table and get a synthetic copy with a fidelity report in an hour.",
    },
    {
      brand: "Margin Notes",
      description: "An AI landing page for a research paper summariser with minimal editorial layout.",
      eyebrow: "AI for researchers",
      headline: "Read a hundred papers in one afternoon",
      highlight: "one afternoon",
      subheadline:
        "Margin Notes summarises papers, extracts methods and results, and links related work, so researchers spend less time skimming and more time thinking.",
      primaryCta: "Try it on a paper",
      secondaryCta: "Browse examples",
      announcement: "Now indexes arXiv, PubMed and bioRxiv daily",
      tagline: "Literature review, reimagined.",
      ctaHeadline: "Catch up on your field this week",
      ctaBody: "Paste a DOI or upload a PDF and get a structured summary in seconds.",
    },
  ],
}
