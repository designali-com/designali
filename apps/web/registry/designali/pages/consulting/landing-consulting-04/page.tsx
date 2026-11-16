import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cpu,
  GraduationCap,
  Handshake,
  Leaf,
  Plus,
  Quote,
  Sparkles,
  Target,
  Users,
} from "@designali/icons"

import { Logo } from "@/src/components/logo"
import { Button } from "@workspace/ui/components/button"

const navLinks = ["Services", "Audits", "Case studies", "Blog", "About"]

const logos = [
  "Tailwind CSS",
  "Figma",
  "Vercel",
  "shadcn/ui",
  "@designali/icons",
  "Next.js",
  "React",
  "TypeScript",
]

const features = [
  {
    icon: Users,
    title: "Design team setup",
    description:
      "Clarify roles, rituals and Figma-to-code handoffs so designers and developers move faster together.",
  },
  {
    icon: Handshake,
    title: "Rebrand and migration",
    description:
      "Merge old brands and interfaces into one coherent system, without breaking what already works.",
  },
  {
    icon: Cpu,
    title: "Design engineering advisory",
    description:
      "Ali Imam advises on Next.js, React and Tailwind CSS architecture so design ships as production-ready code.",
  },
  {
    icon: Leaf,
    title: "Accessibility",
    description:
      "Accessibility audits and fixes that make your product usable by everyone, checked against WCAG.",
  },
  {
    icon: GraduationCap,
    title: "Capability building",
    description:
      "We train your team as we go, so the system sticks long after the engagement ends.",
  },
  {
    icon: Target,
    title: "UX strategy",
    description:
      "Journeys, positioning and product priorities grounded in real user evidence, not assumptions.",
  },
]

const stats = [
  { value: "4.9", label: "Average client rating" },
  { value: "4000+", label: "Icons in @designali/icons" },
  { value: "2 wks", label: "Typical audit" },
  { value: "60+", label: "Products reviewed" },
]

const steps = [
  {
    title: "Audit",
    description:
      "A focused two-week review of your product, brand and code to find the highest-impact fixes.",
  },
  {
    title: "Design",
    description:
      "Co-create the UX strategy, design principles and system roadmap with your team, not for them.",
  },
  {
    title: "Build",
    description:
      "Ship real components and pages in code, review weekly and scale what works across the product.",
  },
  {
    title: "Hand over",
    description:
      "Hand over Figma libraries, docs and trained owners so quality keeps compounding.",
  },
]

const showcase = [
  {
    name: "E-commerce UX audit",
    meta: "Checkout and product pages",
    tag: "Strategy",
    price: "12 key fixes",
  },
  {
    name: "Design system rebuild",
    meta: "SaaS platform · 140 components",
    tag: "Systems",
    price: "-22% cost",
  },
  {
    name: "Onboarding redesign",
    meta: "Health app",
    tag: "UX",
    price: "-34% wait time",
  },
  {
    name: "Two-brand merge",
    meta: "Unified identity and UI",
    tag: "Brand",
    price: "1 design system",
  },
  {
    name: "Analytics dashboard",
    meta: "Data-heavy web app",
    tag: "Data UX",
    price: "4x faster reviews",
  },
  {
    name: "Accessibility programme",
    meta: "Logistics web app",
    tag: "Accessibility",
    price: "-40% emissions",
  },
]

const testimonials = [
  {
    quote:
      "The pre-launch review caught issues we would have shipped to every user. We now bring Designali in on every release.",
    name: "Martin S.",
    role: "Founder, Designali client",
  },
  {
    quote:
      "The design team setup was handled with care. Handoffs got faster without adding a single meeting.",
    name: "Ana P.",
    role: "Head of design, product team",
  },
  {
    quote:
      "Designali built the dashboard system in-house with us rather than making us dependent on them. That is rare.",
    name: "David K.",
    role: "Data product lead, Designali client",
  },
]

const tiers = [
  {
    name: "Audit",
    price: "$1,800",
    period: "/2 weeks",
    description: "Find the biggest UX and design system wins.",
    features: [
      "Stakeholder interviews",
      "Product and code review",
      "Accessibility check",
      "Prioritised roadmap",
    ],
    cta: "Book an audit",
  },
  {
    name: "Embedded",
    price: "From $4,500",
    period: "/month",
    description: "Design and build alongside your team.",
    features: [
      "Ali embedded in your team",
      "Weekly design reviews",
      "Components shipped in code",
      "Figma library upkeep",
      "Monthly roadmap check-in",
    ],
    cta: "Discuss an engagement",
  },
  {
    name: "Advisory",
    price: "Custom",
    period: "",
    description: "On-call design engineering advice.",
    features: [
      "Direct access to Ali",
      "Launch reviews",
      "Design and code reviews",
      "Quarterly strategy sessions",
      "Flexible scope",
    ],
    cta: "Talk to Ali",
  },
]

const faqs = [
  {
    q: "How quickly can you start?",
    a: "Audits can usually start within one to two weeks of agreeing the scope.",
  },
  {
    q: "Do you help with implementation?",
    a: "Yes. Designali can build the fixes in Next.js, React and Tailwind CSS, or pair with your developers.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Always. Confidentiality is standard and your files stay private.",
  },
  {
    q: "What size of teams do you work with?",
    a: "Mostly startups and product teams from two to two hundred people, plus founders who need a senior design partner.",
  },
  {
    q: "How are engagements priced?",
    a: "Audits are fixed price. Embedded and advisory work is a simple monthly fee you can pause or cancel.",
  },
]

const footer = [
  { title: "Services", links: ["Strategy", "Systems", "Data UX", "Brand"] },
  { title: "Studio", links: ["About", "Ali Imam", "Work", "Contact"] },
  { title: "Blog", links: ["Templates", "Blocks", "Docs", "Icons"] },
]

export default function LandingConsulting04() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b bg-muted/50 text-muted-foreground px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          The Designali design team playbook is now free
          <ArrowRight className="size-3.5" />
        </a>
      </div>
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
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
              View work
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Book a discovery call
            </Button>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden border-b">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-sky-600 dark:text-sky-400" />
              Designali for design teams
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl ">
              {"Design teams people "}
              <span className="text-sky-600 dark:text-sky-400">
                want to work in
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              Designali helps scaling companies set up design roles, rituals and Figma-to-code workflows so teams move faster with less friction.
            </p>
            <div className="flex flex-wrap gap-3 ">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Book a discovery call
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Download the playbook
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-sky-500/25 via-cyan-500/10 to-transparent blur-3xl" />
            <HeroVisual />
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm text-muted-foreground">
            Designed in Figma, built with
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
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
              Capabilities
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Strategy that turns into shipped product
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              We work alongside your team from audit to delivery, and we measure success by what ships, not slide count.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-background p-6 shadow-xs"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-sky-500/10">
                  <feature.icon className="size-5 text-sky-600 dark:text-sky-400" />
                </span>
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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              How an engagement works
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
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Selected engagements
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                A few engagements where Designali helped teams fix what mattered most.
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
      <section className="border-b ">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              What teams say about working with Designali
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`flex flex-col justify-between rounded-2xl border bg-background p-6 ${i === 0 ? "md:col-span-2 md:p-10" : ""}`}
              >
                <Quote className="size-6 text-sky-600 dark:text-sky-400" />
                <blockquote
                  className={`mt-4 leading-relaxed ${i === 0 ? "text-xl md:text-2xl" : "text-muted-foreground"}`}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 text-sm">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold">
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
              Ways to work with Designali
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              From a focused audit to an embedded design engineer, every engagement has clear scope and outcomes.
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
              Working with Designali
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
      <section className="px-6 py-20 md:py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-sky-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-500/25 via-cyan-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Build the design team for your next stage
            </h2>
            <p className="text-lg text-muted-foreground">
              Start with a free 30-minute discovery call with Ali Imam.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Book a discovery call
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Download the playbook
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
              <Logo className="h-5 w-auto" />
              <span className="">designali</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Design teams, redesigned.
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
              © {new Date().getFullYear()} Designali. All rights reserved.
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
          designali.com/blogs
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
              <span className="font-medium">Usability score, last 12 weeks</span>
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
