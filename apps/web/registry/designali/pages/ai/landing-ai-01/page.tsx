import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Database,
  FlaskConical,
  Gauge,
  Layers,
  Lock,
  Plus,
  Sparkles,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Product", "Models", "Pricing", "Research", "Docs"]

const logos = [
  "Parallax",
  "Meridian",
  "Cobalt Health",
  "Fernway",
  "Quanta",
  "Silverpine",
  "Atlas Freight",
  "Nimbus",
]

const features = [
  {
    icon: Database,
    title: "Grounded in your data",
    description:
      "Connect docs, tickets and wikis. Every answer cites its sources so reviewers can verify in one click.",
  },
  {
    icon: Bot,
    title: "Custom agents",
    description:
      "Give agents tools, instructions and guardrails, then let them handle multi-step tasks end to end.",
  },
  {
    icon: Lock,
    title: "Private by design",
    description:
      "Your data is never used to train models. Zero data retention options and customer-managed keys.",
  },
  {
    icon: Gauge,
    title: "Low-latency inference",
    description:
      "Streaming responses start in under 300ms, served from regions close to your users.",
  },
  {
    icon: FlaskConical,
    title: "Built-in evaluations",
    description:
      "Test prompts against golden datasets and catch regressions before they reach customers.",
  },
  {
    icon: Layers,
    title: "Model routing",
    description:
      "Send each request to the best model for the job and cut inference costs by up to 60%.",
  },
]

const stats = [
  { value: "3.2B", label: "Tokens processed daily" },
  { value: "280ms", label: "Median time to first token" },
  { value: "61%", label: "Average cost reduction" },
  { value: "9,000+", label: "Companies building with us" },
]

const steps = [
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
]

const showcase = [
  {
    name: "Support Copilot",
    meta: "Drafts replies from your help center",
    tag: "Popular",
    price: "2 min setup",
  },
  {
    name: "Research Agent",
    meta: "Summarises accounts before sales calls",
    tag: "Sales",
    price: "5 min setup",
  },
  {
    name: "Contract Reviewer",
    meta: "Flags risky clauses against your playbook",
    tag: "Legal",
    price: "10 min setup",
  },
  {
    name: "Data Analyst",
    meta: "Answers questions in plain English with SQL",
    tag: "New",
    price: "8 min setup",
  },
  {
    name: "Meeting Notes",
    meta: "Action items and decisions after every call",
    tag: "Popular",
    price: "1 min setup",
  },
  {
    name: "Onboarding Guide",
    meta: "Answers new-hire questions from your wiki",
    tag: "HR",
    price: "3 min setup",
  },
]

const testimonials = [
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
]

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For individuals exploring what AI can do.",
    features: [
      "100 messages per day",
      "Standard models",
      "3 connected sources",
      "Community support",
    ],
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
]

const faqs = [
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
]

const footer = [
  { title: "Product", links: ["Assistants", "Agents", "API", "Pricing"] },
  { title: "Company", links: ["About", "Research", "Careers", "Contact"] },
  {
    title: "Trust",
    links: ["Security", "Privacy", "Responsible AI", "Status"],
  },
]

export default function LandingAi01() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b bg-muted/50 text-muted-foreground px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          Cortex is now SOC 2 Type II and HIPAA ready
          <ArrowRight className="size-3.5" />
        </a>
      </div>
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-sky-600 text-white text-sm">
              C
            </span>
            <span className="">Cortex</span>
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
              Log in
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Try Cortex free
            </Button>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-sky-500/25 to-transparent opacity-50" />
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-16 md:pt-28">
          <div className="mx-auto max-w-4xl space-y-7 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-sky-600 dark:text-sky-400" />
              Now with deep research mode
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-7xl ">
              {"The AI assistant that "}
              <span className="text-sky-600 dark:text-sky-400">
                knows your company
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              Cortex answers questions from your docs, tickets and wikis with
              citations, so every team gets trusted answers in seconds.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Try Cortex free
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Book a demo
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-6xl">
            <HeroVisual />
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm text-muted-foreground">
            Powering AI workflows at
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
            <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
              Capabilities
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              AI that works where your team already works
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Grounded in your own data, governed by your own policies, and fast
              enough to feel like part of the interface.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-sky-600 dark:text-sky-400" />
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
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Ready-made agents for every team
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Start from a tested template, connect your sources and deploy in
                minutes. Every agent can be customised and audited.
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
                  <span className="rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-600 dark:text-sky-400">
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
              From first prompt to production
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-sky-600 dark:text-sky-400">
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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Loved by teams putting AI to real work
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
              Pay for what you use
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Transparent per-seat and usage pricing. No minimums on self-serve
              plans and volume discounts as you grow.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-sky-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-sky-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-sky-600 dark:text-sky-400" />
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
              Frequently asked questions
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-sky-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-500/25 via-cyan-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Give every employee an expert on call
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect your first source and ask your first question in under
              five minutes.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Try Cortex free
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Book a demo
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
              <span className="flex size-7 items-center justify-center rounded-md bg-sky-600 text-white text-sm">
                C
              </span>
              <span className="">Cortex</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Company knowledge, instantly answered.
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
              © {new Date().getFullYear()} Cortex. All rights reserved.
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
          app.cortex.com
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
              <span className="text-sky-600 dark:text-sky-400">+24.6%</span>
            </div>
            <div className="flex h-32 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === bars.length - 1 ? "bg-sky-600" : "bg-muted-foreground/20"}`}
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
                <span className="shrink-0 rounded-full bg-sky-500/10 px-2 py-0.5 text-[11px] font-medium text-sky-600 dark:text-sky-400">
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
