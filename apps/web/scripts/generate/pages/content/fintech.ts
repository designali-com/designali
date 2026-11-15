import type { CategoryContent } from "../types"

export const fintech: CategoryContent = {
  slug: "fintech",
  name: "Fintech",
  description:
    "Landing pages for banking, payments and money apps, with account previews, trust signals and fee tables.",
  iconName: "Landmark",
  visual: "product",
  navSecondary: "Log in",
  navLinks: ["Personal", "Business", "Pricing", "Security", "Help"],
  copy: {
    featuresEyebrow: "Features",
    featuresTitle: "Money tools that work as hard as you do",
    featuresBody:
      "Accounts, cards and payments built on modern infrastructure, with fees you can understand at a glance.",
    showcaseTitle: "Plans and products",
    showcaseBody:
      "Everything you need to spend, save and move money, available in one app and one login.",
    stepsTitle: "Open an account in minutes",
    testimonialsTitle: "Trusted with millions every day",
    pricingTitle: "Transparent fees, no fine print",
    pricingBody:
      "Pick the plan that fits how you use money. Switch or cancel at any time with no penalty.",
    faqTitle: "Your questions, answered",
    logosLabel: "Regulated and partnered with",
  },
  features: [
    {
      icon: "CreditCard",
      title: "Instant virtual cards",
      description:
        "Create cards for every subscription or team member and freeze them with a single tap.",
    },
    {
      icon: "ArrowLeftRight",
      title: "Global transfers",
      description:
        "Send money to 70 countries at the real exchange rate with a small, upfront fee.",
    },
    {
      icon: "PiggyBank",
      title: "High-yield savings",
      description:
        "Earn up to 4.1% AER on savings with instant access and no minimum balance.",
    },
    {
      icon: "ShieldCheck",
      title: "Bank-grade security",
      description:
        "Biometric login, real-time fraud monitoring and deposits protected up to $250,000.",
    },
    {
      icon: "ChartPie",
      title: "Smart budgeting",
      description:
        "Automatic categories and spending insights help you see where every dollar goes.",
    },
    {
      icon: "Receipt",
      title: "Automatic receipts",
      description:
        "Snap receipts or forward emails and they match to transactions automatically.",
    },
    {
      icon: "Bell",
      title: "Real-time alerts",
      description:
        "Get notified the moment money moves, with merchant names you can actually recognise.",
    },
    {
      icon: "FileSpreadsheet",
      title: "Accounting sync",
      description:
        "Connect QuickBooks, Xero or NetSuite and keep your books reconciled without manual entry.",
    },
  ],
  stats: [
    { value: "$18B", label: "Processed annually" },
    { value: "3.4M", label: "Customers worldwide" },
    { value: "70", label: "Countries for transfers" },
    { value: "4.1%", label: "AER on savings" },
    { value: "1.2s", label: "Average card authorisation" },
    { value: "$0", label: "Monthly fee on Standard" },
  ],
  logos: [
    "Visa",
    "Mastercard",
    "Plaid",
    "Corvia",
    "FDIC member bank",
    "Apple Pay",
    "Google Pay",
    "SWIFT",
  ],
  testimonials: [
    {
      quote:
        "I moved my business account over in an afternoon. Virtual cards for every vendor have saved us from at least two fraud attempts.",
      name: "Olivia Hart",
      role: "Founder, Hart Interiors",
    },
    {
      quote:
        "Paying contractors in four countries used to cost me a fortune in fees. Now it costs a few dollars and arrives the same day.",
      name: "Diego Santos",
      role: "Agency owner",
    },
    {
      quote:
        "The savings rate is better than my old bank and I can move money out instantly. No reason to go back.",
      name: "Megan Price",
      role: "Personal customer",
    },
    {
      quote:
        "Our month-end close went from three days to half a day once transactions synced straight into Xero.",
      name: "Alex Novak",
      role: "Finance Lead, Brightfield",
    },
    {
      quote:
        "The budgeting insights finally made me realise how much I was spending on takeaway. Saved over $3,000 this year.",
      name: "Tariq Hussain",
      role: "Personal customer",
    },
    {
      quote:
        "Support actually picks up. A real person sorted a blocked payment in four minutes on a Sunday.",
      name: "Linda Johansson",
      role: "E-commerce founder",
    },
  ],
  steps: [
    {
      title: "Download the app",
      description:
        "Available on iOS and Android, or sign up on the web in a couple of minutes.",
    },
    {
      title: "Verify your identity",
      description:
        "Scan your ID and take a quick selfie. Most accounts are approved in under five minutes.",
    },
    {
      title: "Add money",
      description:
        "Top up by bank transfer, card or Apple Pay, or switch your salary with one form.",
    },
    {
      title: "Start spending",
      description:
        "Use your virtual card instantly while your physical card ships to you for free.",
    },
  ],
  showcase: [
    { name: "Current account", meta: "Spend and get paid with no monthly fee", tag: "Everyday", price: "$0/mo" },
    { name: "Savings vault", meta: "Instant access, interest paid daily", tag: "4.1% AER", price: "$0/mo" },
    { name: "Business account", meta: "Invoices, cards and accounting sync", tag: "Business", price: "$15/mo" },
    { name: "Metal card", meta: "Stainless steel with 1% cashback", tag: "Premium", price: "$12/mo" },
    { name: "Global transfers", meta: "Real exchange rate to 70 countries", tag: "Low fee", price: "From 0.4%" },
    { name: "Investing", meta: "Stocks and ETFs from $1", tag: "New", price: "No commission" },
  ],
  tiers: [
    {
      name: "Standard",
      price: "$0",
      period: "/month",
      description: "Everything you need for everyday banking.",
      features: ["Free current account", "Virtual and physical card", "Fee-free spending abroad", "Instant notifications"],
      cta: "Open free account",
    },
    {
      name: "Plus",
      price: "$7",
      period: "/month",
      description: "Earn more and pay less on every transaction.",
      features: [
        "4.1% AER on savings",
        "1% cashback on card spend",
        "Unlimited free transfers",
        "Priority 24/7 support",
        "Purchase protection",
      ],
      cta: "Get Plus",
    },
    {
      name: "Business",
      price: "$15",
      period: "/month",
      description: "For freelancers, founders and growing teams.",
      features: [
        "Unlimited team cards",
        "Invoicing and payment links",
        "Accounting integrations",
        "Spend controls and approvals",
        "Multi-currency accounts",
      ],
      cta: "Open business account",
    },
  ],
  faqs: [
    {
      q: "Is my money safe?",
      a: "Yes. Deposits are held with FDIC-insured partner banks and protected up to $250,000 per depositor.",
    },
    {
      q: "How long does it take to open an account?",
      a: "Most people are verified and ready to spend in under five minutes. Business accounts usually take one working day.",
    },
    {
      q: "Are there any hidden fees?",
      a: "No. Every fee is listed on our pricing page and shown in the app before you confirm a transaction.",
    },
    {
      q: "Can I use my card abroad?",
      a: "Yes. Card payments abroad are fee-free on all plans and use the real exchange rate.",
    },
    {
      q: "What happens if I lose my card?",
      a: "Freeze it instantly in the app, then order a replacement. Your virtual card keeps working in the meantime.",
    },
    {
      q: "Do you report to credit bureaus?",
      a: "Our credit-builder feature reports on-time payments to all three major bureaus to help improve your score.",
    },
  ],
  footer: [
    { title: "Products", links: ["Personal", "Business", "Savings", "Cards"] },
    { title: "Company", links: ["About", "Careers", "Press", "Blog"] },
    { title: "Legal", links: ["Privacy", "Terms", "Licences", "Complaints"] },
  ],
  pages: [
    {
      brand: "Monzi",
      description: "A fintech landing page for a mobile-first bank with account dashboard mockup.",
      eyebrow: "Banking without the branch",
      headline: "The bank account that works for you",
      highlight: "works for you",
      subheadline:
        "Monzi gives you a free account, instant card and smart budgeting tools, all in an app that takes five minutes to open.",
      primaryCta: "Open an account",
      secondaryCta: "Compare plans",
      announcement: "Earn 4.1% AER on savings with Monzi Plus",
      tagline: "Banking made human.",
      ctaHeadline: "Join 3.4 million people banking better",
      ctaBody: "Open a free account in five minutes. No paperwork, no branch visits.",
    },
    {
      brand: "Paywave",
      description: "A fintech landing page for a payments API for online businesses with editorial hero.",
      eyebrow: "Payments infrastructure",
      headline: "Accept payments anywhere in the world",
      highlight: "anywhere in the world",
      subheadline:
        "Paywave lets online businesses accept cards, wallets and local payment methods in 135 currencies with a single integration.",
      primaryCta: "Start integrating",
      secondaryCta: "Contact sales",
      announcement: "Paywave now supports instant payouts in Europe",
      tagline: "Payments for the internet.",
      ctaHeadline: "Go live with payments this week",
      ctaBody: "Create an account and process your first test payment in minutes.",
    },
    {
      brand: "Ledgerline",
      description: "A fintech landing page for a business spend management platform with split hero.",
      eyebrow: "Corporate cards and spend",
      headline: "Control company spend before it happens",
      highlight: "before it happens",
      subheadline:
        "Ledgerline issues smart corporate cards with built-in limits, approvals and receipt capture, so finance stays in control without slowing anyone down.",
      primaryCta: "Get started",
      secondaryCta: "Book a demo",
      announcement: "Save 3 hours per employee each month on expenses",
      tagline: "Spend management for modern finance teams.",
      ctaHeadline: "Never chase a receipt again",
      ctaBody: "Issue your first cards today and sync spend to your accounting software automatically.",
    },
    {
      brand: "Nestegg",
      description: "A fintech landing page for an automated investing and retirement app with bento hero.",
      eyebrow: "Automated investing",
      headline: "Grow your wealth on autopilot",
      highlight: "on autopilot",
      subheadline:
        "Nestegg builds a diversified portfolio around your goals, rebalances automatically and keeps fees under 0.25% a year.",
      primaryCta: "Start investing",
      secondaryCta: "See performance",
      announcement: "Retirement accounts now open with a $100 bonus",
      tagline: "Investing for the long run.",
      ctaHeadline: "The best time to start was yesterday",
      ctaBody: "Open an account with as little as $1 and set up automatic deposits in minutes.",
    },
    {
      brand: "Remitly Go",
      description: "A fintech landing page for an international money transfer app with dark inverted hero.",
      eyebrow: "Send money home",
      headline: "Send money to family in seconds, not days",
      highlight: "seconds, not days",
      subheadline:
        "Remitly Go delivers money to bank accounts, mobile wallets and cash pickup points in 70 countries at the real exchange rate.",
      primaryCta: "Send money now",
      secondaryCta: "Check rates",
      announcement: "Your first transfer is fee-free",
      tagline: "Fast, fair international transfers.",
      ctaHeadline: "Get more money to the people you love",
      ctaBody: "Download the app, add a recipient and send your first transfer with zero fees.",
    },
    {
      brand: "Taxly",
      description: "A fintech landing page for a freelancer tax filing app with framed hero and pricing tiers.",
      eyebrow: "Taxes for the self-employed",
      headline: "Freelance taxes, done in an evening",
      highlight: "done in an evening",
      subheadline:
        "Taxly tracks your income and expenses, estimates quarterly payments and files your return with an accountant checking every line.",
      primaryCta: "Start your return",
      secondaryCta: "See pricing",
      announcement: "Quarterly estimate reminders now included free",
      tagline: "Tax made simple for freelancers.",
      ctaHeadline: "Stop dreading tax season",
      ctaBody: "Connect your bank and see your estimated tax bill in five minutes.",
    },
    {
      brand: "Brightline Card",
      description: "A fintech landing page for a credit builder card with spotlight hero and score tracking.",
      eyebrow: "No credit check to apply",
      headline: "Build your credit with every purchase",
      highlight: "every purchase",
      subheadline:
        "Brightline Card reports on-time payments to all three bureaus, has no interest and no annual fee, and shows your score change every month.",
      primaryCta: "Apply in minutes",
      secondaryCta: "How it works",
      announcement: "Members raise their score by 42 points on average",
      tagline: "Credit, built the right way.",
      ctaHeadline: "Your credit score, finally moving up",
      ctaBody: "Apply in two minutes with no credit check and no impact on your score.",
    },
    {
      brand: "Billpost",
      description: "A fintech landing page for a small business invoicing tool with split hero and email capture.",
      eyebrow: "Invoicing for small business",
      headline: "Get paid twice as fast",
      highlight: "twice as fast",
      subheadline:
        "Billpost sends branded invoices, chases late payments automatically and lets clients pay by card or bank transfer in one click.",
      primaryCta: "Get early access",
      secondaryCta: "See an invoice",
      announcement: "Join 12,000 businesses on the waitlist",
      tagline: "Invoices that get paid.",
      ctaHeadline: "Stop chasing late payments",
      ctaBody: "Leave your email to get early access and three months free at launch.",
    },
    {
      brand: "Paydeck",
      description: "A fintech landing page for a global payroll platform with bento hero and compliance features.",
      eyebrow: "Payroll in 90 countries",
      headline: "Pay your global team in one run",
      highlight: "one run",
      subheadline:
        "Paydeck handles payroll, taxes and local compliance for employees and contractors worldwide, with payouts in their own currency.",
      primaryCta: "Book a demo",
      secondaryCta: "Pricing",
      announcement: "New: same-day contractor payouts in 40 currencies",
      tagline: "Global payroll, made simple.",
      ctaHeadline: "Hire anywhere, pay everyone on time",
      ctaBody: "See how Paydeck runs payroll for teams from 5 to 5,000 people.",
    },
    {
      brand: "Keyhold",
      description: "A fintech landing page for an online mortgage platform with minimal editorial layout and rate calculator.",
      eyebrow: "Mortgages, without the runaround",
      headline: "A home loan you can understand",
      highlight: "you can understand",
      subheadline:
        "Keyhold compares rates from 60 lenders, approves you online in minutes and keeps you updated at every step until you get the keys.",
      primaryCta: "Check your rate",
      secondaryCta: "Talk to an adviser",
      announcement: "Fixed rates from 5.1% for first-time buyers",
      tagline: "Home loans, made clear.",
      ctaHeadline: "Find out what you can borrow",
      ctaBody: "Check your rate in three minutes with no impact on your credit score.",
    },
  ],
}
