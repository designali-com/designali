import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe,
  LayoutDashboard,
  Plus,
  ShieldCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Product", "Solutions", "Pricing", "Customers", "Docs"]

const logos = [
  "Vantage",
  "Halcyon",
  "Northwind",
  "Lumen Labs",
  "Arcadia",
  "Brightline",
  "Kestrel",
  "Oakridge",
]

const features = [
  {
    icon: Zap,
    title: "Fast by default",
    description:
      "Every interaction responds in under 100ms, even on workspaces with a million records.",
  },
  {
    icon: Globe,
    title: "Works everywhere",
    description:
      "Native apps for macOS, Windows, iOS and Android, with full offline support and instant sync.",
  },
  {
    icon: LayoutDashboard,
    title: "Live dashboards",
    description:
      "Build views for every stakeholder in minutes, with widgets that update the moment work changes.",
  },
  {
    icon: Workflow,
    title: "No-code automations",
    description:
      "Route requests, assign owners and nudge reviewers with rules anyone on the team can set up.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    description:
      "SOC 2 Type II, SSO with SAML, audit logs and data residency in the US, EU or APAC.",
  },
  {
    icon: Users,
    title: "Built for collaboration",
    description:
      "Comments, mentions and approvals live next to the work, so decisions never get lost in chat.",
  },
]

const stats = [
  { value: "12,400+", label: "Teams onboarded" },
  { value: "38%", label: "Faster delivery cycles" },
  { value: "99.99%", label: "Uptime over 24 months" },
  { value: "4.8/5", label: "Average G2 rating" },
]

const steps = [
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
]

const showcase = [
  {
    name: "Slack",
    meta: "Notifications and slash commands",
    tag: "Popular",
    price: "Free",
  },
  {
    name: "GitHub",
    meta: "Link pull requests to tasks",
    tag: "Two-way",
    price: "Free",
  },
  {
    name: "Salesforce",
    meta: "Sync accounts and opportunities",
    tag: "Business",
    price: "Pro",
  },
  {
    name: "Google Drive",
    meta: "Attach and preview files",
    tag: "Popular",
    price: "Free",
  },
  {
    name: "Figma",
    meta: "Embed live design frames",
    tag: "New",
    price: "Free",
  },
  {
    name: "Snowflake",
    meta: "Stream data to your warehouse",
    tag: "Enterprise",
    price: "Scale",
  },
]

const testimonials = [
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
]

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "For small teams getting organised.",
    features: [
      "Up to 10 members",
      "Unlimited projects",
      "Basic automations",
      "7-day history",
    ],
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
]

const faqs = [
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
]

const footer = [
  {
    title: "Product",
    links: ["Features", "Integrations", "Pricing", "Changelog"],
  },
  { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
  {
    title: "Resources",
    links: ["Docs", "API reference", "Status", "Security"],
  },
]

export default function LandingSaas07() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-violet-600 text-white text-sm">
              P
            </span>
            <span className="">Pipewell</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex"
              nativeButton={false}
              render={<a href="#" />}
            >
              Sign in
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Try Pipewell free
            </Button>
          </div>
        </div>
      </header>
      <section className="relative isolate overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-[ellipse_60%_50%_at_50%_0%] from-violet-500/25 via-fuchsia-500/10 to-transparent to-70%" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_50%_45%_at_50%_0%,#000_60%,transparent_100%)]" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border bg-background/70 py-1 pr-3 pl-1 text-xs backdrop-blur"
            >
              <span className="rounded-full bg-violet-600 px-2 py-0.5 font-medium text-white">
                New
              </span>
              <span className="text-muted-foreground">
                New: forecast accuracy scores for every rep
              </span>
            </a>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"A pipeline your reps "}
              <span className="text-violet-600 dark:text-violet-400">
                actually keep updated
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              Pipewell logs emails and calls automatically and nudges reps on
              stalled deals, so forecasts reflect reality instead of hope.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Try Pipewell free
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                See a sample pipeline
              </Button>
            </div>
          </div>
          <div className="relative mx-auto mt-20 max-w-5xl">
            <div className="absolute inset-x-10 -top-6 -z-10 h-24 rounded-full bg-violet-500/10 blur-2xl" />
            <HeroVisual />
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm text-muted-foreground">
            Trusted by operations teams at
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-center text-base font-semibold tracking-tight text-muted-foreground/70 "
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
              Platform
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Everything your team needs to ship on schedule
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              One workspace for planning, tracking and reporting, built to
              replace the five tools you are juggling today.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-violet-600 dark:text-violet-400" />
                <h3 className="mt-5 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4">
          {stats.slice(0, 4).map((stat, i) => (
            <div
              key={stat.label}
              className={`py-12 ${i > 0 ? "lg:border-l lg:pl-8" : ""} ${i % 2 === 1 ? "border-l pl-6 lg:pl-8" : ""} `}
            >
              <div className="text-4xl font-semibold tracking-tight md:text-5xl ">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Integrations that fit your stack
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Connect the tools you already pay for. Two-way sync keeps every
                system in step without a single CSV export.
              </p>
            </div>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="#" />}
            >
              View all
              <ArrowUpRight />
            </Button>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {showcase.map((item) => (
              <a
                key={item.name}
                href="#"
                className="group flex flex-col rounded-xl border p-6 transition-colors hover:bg-muted/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg border bg-muted/50 font-semibold ">
                    {item.name.charAt(0)}
                  </span>
                  <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-600 dark:text-violet-400">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-semibold ">{item.name}</h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">
                  {item.meta}
                </p>
                <div className="mt-6 flex items-center justify-between border-t pt-4 text-sm">
                  <span className="font-medium">{item.price}</span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Up and running in an afternoon
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Teams that switched never looked back
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border p-6"
              >
                <blockquote className="flex-1 leading-7">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t pt-6 text-sm">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                    {t.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </span>
                  <span>
                    <span className="block font-medium">{t.name}</span>
                    <span className="block text-muted-foreground">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Simple pricing that scales with you
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Start free, upgrade when your team grows. Every plan includes
              unlimited projects and guests.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-violet-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-violet-600 text-white px-3 py-1 text-xs font-medium">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-semibold">{tier.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {tier.period}
                    </span>
                  </div>
                  <ul className="mt-8 flex-1 space-y-3 text-sm">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check className="mt-0.5 size-4 shrink-0 text-violet-600 dark:text-violet-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-8 w-full"
                    variant={featured ? "default" : "outline"}
                    nativeButton={false}
                    render={<a href="#" />}
                  >
                    {tier.cta}
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Questions, answered
            </h2>
            <p className="mt-4 text-muted-foreground">
              Still curious?{" "}
              <a
                href="#"
                className="font-medium text-foreground underline underline-offset-4"
              >
                Get in touch
              </a>
              .
            </p>
          </div>
          <div className="divide-y border-y">
            {faqs.map((faq, i) => (
              <details key={faq.q} className="group py-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <Plus className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-3 pr-10 leading-7 text-muted-foreground">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-20 md:py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-violet-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-500/25 via-fuchsia-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Stop chasing reps for updates
            </h2>
            <p className="text-lg text-muted-foreground">
              Import your deals from a spreadsheet and get a live forecast in
              ten minutes.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Try Pipewell free
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                See a sample pipeline
              </Button>
            </div>
          </div>
        </div>
      </section>
      <footer className="">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center gap-2 font-semibold tracking-tight"
            >
              <span className="flex size-7 items-center justify-center rounded-md bg-violet-600 text-white text-sm">
                P
              </span>
              <span className="">Pipewell</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              The CRM reps do not hate.
            </p>
          </div>
          {footer.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium">{column.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t ">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
            <span>
              © {new Date().getFullYear()} Pipewell. All rights reserved.
            </span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground">
                Terms
              </a>
              <a href="#" className="hover:text-foreground">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function HeroVisual() {
  const bars = [38, 52, 44, 63, 58, 71, 66, 80, 74, 88, 83, 95]
  return (
    <div className="overflow-hidden rounded-xl border bg-card text-left text-card-foreground shadow-2xl/10">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 hidden rounded-md bg-muted px-3 py-0.5 text-[11px] text-muted-foreground sm:inline">
          app.pipewell.com
        </span>
      </div>
      <div className="grid md:grid-cols-[180px_1fr]">
        <aside className="hidden space-y-1 border-r p-3 text-sm md:block">
          {navLinks.map((link, i) => (
            <div
              key={link}
              className={`rounded-md px-3 py-1.5 ${i === 0 ? "bg-muted font-medium" : "text-muted-foreground"}`}
            >
              {link}
            </div>
          ))}
        </aside>
        <div className="space-y-4 p-4 md:p-6">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.slice(0, 4).map((stat) => (
              <div key={stat.label} className="rounded-lg border p-3">
                <div className="truncate text-[11px] text-muted-foreground">
                  {stat.label}
                </div>
                <div className="mt-1 text-lg font-semibold tracking-tight">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border p-4">
            <div className="mb-4 flex items-center justify-between text-xs">
              <span className="font-medium">Last 12 weeks</span>
              <span className="text-violet-600 dark:text-violet-400">
                +24.6%
              </span>
            </div>
            <div className="flex h-32 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === bars.length - 1 ? "bg-violet-600" : "bg-muted-foreground/20"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="hidden divide-y rounded-lg border sm:block">
            {showcase.slice(0, 3).map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-4 px-4 py-2.5 text-sm"
              >
                <div className="min-w-0">
                  <div className="truncate font-medium">{item.name}</div>
                  <div className="truncate text-xs text-muted-foreground">
                    {item.meta}
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-violet-500/10 px-2 py-0.5 text-[11px] font-medium text-violet-600 dark:text-violet-400">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
