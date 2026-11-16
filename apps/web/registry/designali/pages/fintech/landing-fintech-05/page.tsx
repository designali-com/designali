import {
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  Bell,
  ChartPie,
  Check,
  CreditCard,
  FileSpreadsheet,
  Plus,
  Receipt,
  Sparkles,
} from "@designali/icons"

import { Logo } from "@/src/components/logo"
import { Button } from "@workspace/ui/components/button"

const navLinks = ["Work", "Studio", "Pricing", "Process", "Contact"]

const features = [
  {
    icon: ChartPie,
    title: "Design systems",
    description:
      "Tokens, components and docs so your product team ships new features without breaking consistency.",
  },
  {
    icon: Receipt,
    title: "Production-ready code",
    description:
      "Next.js, React and Tailwind CSS front ends, accessible and ready to connect to your APIs.",
  },
  {
    icon: Bell,
    title: "Marketing websites",
    description:
      "Fast, conversion-focused sites that explain your product clearly and turn visitors into sign-ups.",
  },
  {
    icon: FileSpreadsheet,
    title: "AI-assisted workflows",
    description:
      "AI helps explore layouts and draft content faster, while every final screen is hand-crafted by Ali Imam.",
  },
  {
    icon: CreditCard,
    title: "Banking app UI",
    description:
      "Card, account and transfer flows designed in Figma and built as real, typed components.",
  },
  {
    icon: ArrowLeftRight,
    title: "Payments dashboards",
    description:
      "Clear charts, tables and transaction views that make complex money data easy to scan.",
  },
]

const stats = [
  { value: "4000+", label: "Icons in @designali/icons" },
  { value: "1:1", label: "Work directly with Ali Imam" },
  { value: "25+", label: "Fintech screens designed" },
  { value: "460+", label: "Designali blocks" },
]

const steps = [
  {
    title: "Book a discovery call",
    description:
      "A 30-minute call with Ali Imam to understand your product, users and goals.",
  },
  {
    title: "Get a clear proposal",
    description:
      "Scope, timeline and a fixed price, delivered within 48 hours of the call.",
  },
  {
    title: "Design in Figma",
    description:
      "Weekly reviews of flows and screens, with a clickable prototype you can test with users.",
  },
  {
    title: "Ship to production",
    description:
      "The same designs built in Next.js and deployed on Vercel, ready for your engineers to extend.",
  },
]

const showcase = [
  {
    name: "Banking app redesign",
    meta: "UI/UX · Design system",
    tag: "Product",
    price: "10 weeks",
  },
  {
    name: "Savings app onboarding",
    meta: "Onboarding · Prototype",
    tag: "4 weeks",
    price: "10 weeks",
  },
  {
    name: "Payments dashboard",
    meta: "Dashboard UI · Next.js",
    tag: "Studio",
    price: "8 weeks",
  },
  {
    name: "Card and brand identity",
    meta: "Identity · Card design",
    tag: "Brand",
    price: "6 weeks",
  },
  {
    name: "Payments dashboards",
    meta: "Marketing site · Next.js",
    tag: "Web",
    price: "5 weeks",
  },
  {
    name: "Investing app UI",
    meta: "UI/UX · Motion",
    tag: "New",
    price: "7 weeks",
  },
]

const testimonials = [
  {
    quote:
      "The dashboard charts are so clear that our support tickets about transactions dropped noticeably.",
    name: "Tariq H.",
    role: "Product lead, Designali client",
  },
  {
    quote:
      "Ali actually picks up. Feedback on a Friday became updated screens by Monday morning.",
    name: "Linda J.",
    role: "Founder, Designali client",
  },
  {
    quote:
      "Designali redesigned our onboarding and our completion rate went up within the first month. The flows just make sense now.",
    name: "Olivia H.",
    role: "Founder, fintech startup",
  },
]

const tiers = [
  {
    name: "Sprint",
    price: "$2,400",
    period: "/month",
    description: "One focused page or flow redesign each month, designed and coded.",
    features: [
      "One page or flow",
      "Figma file and Next.js code",
      "Built from Designali blocks",
      "Pause or cancel any time",
    ],
    cta: "Start a sprint",
  },
  {
    name: "Product",
    price: "$6,000",
    period: "/month",
    description: "Full product UI and design system, billed monthly.",
    features: [
      "End-to-end UX and UI",
      "Design system and tokens",
      "Clickable prototype",
      "Weekly check-ins with Ali",
      "Production-ready front end",
    ],
    cta: "Start a product project",
  },
  {
    name: "Studio",
    price: "$4,500",
    period: "/month",
    description: "Ongoing design and development, billed monthly.",
    features: [
      "Unlimited design requests",
      "Next.js development included",
      "Brand and marketing design",
      "Flexible monthly scope",
      "Priority support",
    ],
    cta: "Work with Designali",
  },
]

const faqs = [
  {
    q: "Will I own the design and code?",
    a: "Yes. You get the Figma files and the full codebase, ready for your engineers to extend.",
  },
  {
    q: "Can you work with our existing design system?",
    a: "Yes. We can extend and document your current system, or migrate it to Tailwind CSS and shadcn-style components.",
  },
  {
    q: "Do you understand fintech compliance?",
    a: "We design within the requirements your compliance team sets, and make disclosures and consent flows clear for users. We do not give legal or financial advice.",
  },
  {
    q: "How long does a project take?",
    a: "A sprint takes about two weeks. A full product UI and design system usually takes eight to ten weeks.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. You get a fixed price before we start, and every plan is listed on designali.com/pricing.",
  },
]

const footer = [
  { title: "Studio", links: ["Work", "Studio", "Services", "Work"] },
  { title: "Resources", links: ["Templates", "Blocks", "Icons", "Blog"] },
  { title: "Follow", links: ["Instagram", "X", "LinkedIn", "21st.dev"] },
]

export default function LandingFintech05() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-background/10 bg-foreground text-background/80 px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          New: transfer flow templates on designali.com
          <ArrowRight className="size-3.5" />
        </a>
      </div>
      <header className="bg-foreground text-background sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <Logo className="h-5 w-auto" />
            <span className="">designali</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-background/70 hover:text-background transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#" />}
            >
              View work
            </Button>
            <Button
              size="sm"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Start a project
            </Button>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.04]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-28">
          <div className="max-w-4xl space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-background/20 text-background/80 px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 " />
              Designali for transfer apps
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-7xl ">
              {"Transfer flows that feel like "}
              <span className="text-background/60">seconds, not steps</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-background/65">
              Designali designs and builds international transfer flows, recipient management and status tracking screens that people can finish without help.
            </p>
            <div className="flex flex-wrap gap-3 ">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                nativeButton={false}
                render={<a href="#" />}
              >
                Start a project
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
                nativeButton={false}
                render={<a href="#" />}
              >
                See pricing
              </Button>
            </div>
          </div>
          <div className="mt-16">
            <HeroVisual />
          </div>
        </div>
      </section>
      <section className="bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4">
          {stats.slice(0, 4).map((stat, i) => (
            <div
              key={stat.label}
              className={`py-12 ${i > 0 ? "lg:border-l lg:pl-8" : ""} ${i % 2 === 1 ? "border-l pl-6 lg:pl-8" : ""} border-background/10`}
            >
              <div className="text-4xl font-semibold tracking-tight md:text-5xl ">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-background/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Services
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Design and code that work as hard as you do
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Where thoughtful design meets production-ready code, for accounts, cards, payments and everything in between.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-blue-600 dark:text-blue-400" />
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
                Selected fintech work
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Apps, dashboards, brands and sites for money products, all designed and built by Designali.
              </p>
            </div>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="#" />}
            >
              View all work
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
                  <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">
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
              How we work together
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
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
              What fintech clients say
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
              Transparent pricing, no fine print
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Pick a fixed-price project or a monthly studio plan. You own everything we make.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "bg-foreground text-background border-foreground" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-background text-foreground px-3 py-1 text-xs font-medium">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-semibold">{tier.name}</h3>
                  <p
                    className={
                      featured
                        ? "mt-2 text-sm text-background/65"
                        : "mt-2 text-sm text-muted-foreground"
                    }
                  >
                    {tier.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight">
                      {tier.price}
                    </span>
                    <span
                      className={
                        featured
                          ? "text-sm text-background/65"
                          : "text-sm text-muted-foreground"
                      }
                    >
                      {tier.period}
                    </span>
                  </div>
                  <ul className="mt-8 flex-1 space-y-3 text-sm">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check
                          className={
                            featured
                              ? "mt-0.5 size-4 shrink-0"
                              : "mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-400"
                          }
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={
                      featured
                        ? "mt-8 w-full bg-background text-foreground hover:bg-background/90"
                        : "mt-8 w-full"
                    }
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
              Your questions, answered
            </h2>
            <p className="mt-4 text-muted-foreground">
              Still curious?{" "}
              <a
                href="#"
                className="font-medium text-foreground underline underline-offset-4"
              >
                Email hello@designali.com
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
      <section className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl ">
              Get more users through your flows
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Share your current flows and Ali will send back a free UX review.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Start a project
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#" />}
            >
              See pricing
            </Button>
          </div>
        </div>
      </section>
      <footer className="border-t border-background/10 bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center gap-2 font-semibold tracking-tight"
            >
              <Logo className="h-5 w-auto" />
              <span className="">designali</span>
            </a>
            <p className="max-w-xs text-sm text-background/60">
              Fast, fair product design.
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
                      className="text-background/60 transition-colors hover:text-background"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-6 text-xs text-background/60 sm:flex-row">
            <span>
              © {new Date().getFullYear()} Designali. All rights reserved.
            </span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background">
                Privacy
              </a>
              <a href="#" className="hover:text-background">
                Terms
              </a>
              <a href="#" className="hover:text-background">
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
          designali.com/work
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
              <span className="text-blue-600 dark:text-blue-400">+24.6%</span>
            </div>
            <div className="flex h-32 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === bars.length - 1 ? "bg-blue-600" : "bg-muted-foreground/20"}`}
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
                <span className="shrink-0 rounded-full bg-blue-500/10 px-2 py-0.5 text-[11px] font-medium text-blue-600 dark:text-blue-400">
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
