import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mic,
  Plus,
  Presentation,
  Quote,
  Sparkles,
  Ticket,
  Users,
  UtensilsCrossed,
  Video,
} from "@designali/icons"

import { Logo } from "@/src/components/logo"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const navLinks = ["Host", "Agenda", "Online", "Tickets", "Resources"]

const logos = [
  "@designali/icons",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "Vercel",
  "shadcn/ui",
]

const features = [
  {
    icon: Ticket,
    title: "Fully transferable tickets",
    description:
      "Cannot make it? Transfer your ticket to a teammate for free until the day before the stream starts.",
  },
  {
    icon: Mic,
    title: "Live design-to-code sessions",
    description:
      "Ali Imam designs in Figma and builds in Next.js live, explaining every decision as he goes.",
  },
  {
    icon: Users,
    title: "Community chat",
    description:
      "A live chat room for questions, feedback and sharing what you are building with other attendees.",
  },
  {
    icon: Presentation,
    title: "Hands-on workshops",
    description:
      "Small online groups capped at 30 people, with starter files from Designali blocks and templates.",
  },
  {
    icon: Video,
    title: "Every session recorded",
    description:
      "Ticket holders get recordings, Figma files and source code within 48 hours.",
  },
  {
    icon: UtensilsCrossed,
    title: "Real project files",
    description:
      "Keep the Figma files, components and code from every session to use in your own projects.",
  },
]

const stats = [
  { value: "20+", label: "Host" },
  { value: "2", label: "Days, fully online" },
  { value: "460+", label: "Designali blocks to build with" },
  { value: "3rd", label: "Online edition" },
]

const steps = [
  {
    title: "Opening session",
    description:
      "The stream opens at 9:00. Ali opens with how Designali takes a project from design to code.",
  },
  {
    title: "Design and code tracks",
    description:
      "Choose between brand and UI design in Figma or building it in Next.js and Tailwind CSS.",
  },
  {
    title: "Workshops",
    description:
      "Pre-booked small-group workshops run online from 14:00, with limited seats.",
  },
  {
    title: "Live Q&A",
    description:
      "Wrap up with an open Q&A, portfolio feedback and a look at what Designali is shipping next.",
  },
]

const showcase = [
  {
    name: "Ali Imam",
    meta: "Design se code tak: the Designali workflow",
    tag: "Keynote",
    price: "Day 1 · 09:30",
    tile: "bg-gradient-to-br from-primary/10 via-primary/20 to-chart-1 dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Brand track · Ali Imam",
    meta: "Building a brand identity from scratch",
    tag: "Brand",
    price: "Day 1 · 11:15",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Code track · Ali Imam",
    meta: "From Figma to Next.js without losing detail",
    tag: "Code",
    price: "Day 1 · 14:00",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Guest designer",
    meta: "Hands-on: building with Designali blocks",
    tag: "Workshop",
    price: "Day 2 · 10:00",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Community panel",
    meta: "Design systems with @designali/icons",
    tag: "Design",
    price: "Day 2 · 13:30",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-chart-1 dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Ali Imam & guests",
    meta: "Closing session: AI-assisted design workflows",
    tag: "Keynote",
    price: "Day 2 · 16:45",
    tile: "bg-gradient-to-br from-muted via-border to-muted-foreground dark:from-muted dark:via-card dark:to-card",
  },
]

const testimonials = [
  {
    quote:
      "The clearest design-to-code session I have seen. Every step was practical and the files were ready to use.",
    name: "Chris N.",
    role: "Frontend developer",
  },
  {
    quote:
      "The workshop alone was worth the ticket. I used the components in a client project on Monday morning.",
    name: "Mei T.",
    role: "Product designer",
  },
  {
    quote:
      "As a first-time attendee I felt completely welcome. The live Q&A answered questions I had for months.",
    name: "Oliver G.",
    role: "Designer, attended online",
  },
]

const tiers = [
  {
    name: "Early bird",
    price: "$29",
    period: "/ticket",
    description: "Limited release for the first 300 attendees.",
    features: [
      "Both live session days",
      "Design and code tracks",
      "Live chat and Q&A",
      "Live Q&A",
      "Session recordings",
    ],
    cta: "Buy early bird",
  },
  {
    name: "Full pass",
    price: "$59",
    period: "/ticket",
    description: "Everything, including workshops.",
    features: [
      "Both live session days",
      "Two workshop seats",
      "Figma files and source code",
      "Portfolio review with Ali",
      "Recordings and slides",
    ],
    cta: "Get the full pass",
  },
  {
    name: "Team",
    price: "$45",
    period: "/person",
    description: "For teams of five or more.",
    features: [
      "Full pass benefits",
      "Single invoice",
      "Private team Q&A",
      "Flexible name changes",
      "Email support from Designali",
    ],
    cta: "Book for your team",
  },
]

const faqs = [
  {
    q: "Can I get a refund?",
    a: "Tickets are refundable up to 7 days before the event. After that you can transfer your ticket to someone else for free.",
  },
  {
    q: "Is there a code of conduct?",
    a: "Yes. Every attendee agrees to the Designali code of conduct, and the chat is moderated throughout.",
  },
  {
    q: "Will the sessions be recorded?",
    a: "Yes. Recordings, Figma files and code are shared with ticket holders within 48 hours.",
  },
  {
    q: "Do you offer free tickets?",
    a: "Yes. A number of free tickets are set aside for students. Email hello@designali.com to apply.",
  },
  {
    q: "Can my team join together?",
    a: "Yes. Team tickets include a private Q&A. Email hello@designali.com for details.",
  },
]

const footer = [
  { title: "Event", links: ["Host", "Agenda", "Workshops", "Tickets"] },
  {
    title: "Agenda",
    links: ["Online", "Workshops", "Accessibility", "Code of conduct"],
  },
  {
    title: "Designali",
    links: ["Templates", "Blocks", "Blog", "Contact"],
  },
]

export default function LandingEvent08() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b bg-muted/50 text-muted-foreground px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          Applications for Designali Buildnight open next month
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
              Log in
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Apply to build
            </Button>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden border-b">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-primary dark:text-primary" />
              48 hours · Online
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl ">
              {"Build something wild in "}
              <span className="text-primary dark:text-primary">
                one weekend
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              Designali Buildnight is an online weekend where developers, designers and founders ship projects with Designali blocks, templates and live mentoring from Ali Imam.
            </p>
            <form
              action="#"
              className="flex w-full max-w-md flex-col gap-2 sm:flex-row "
            >
              <Input
                type="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                className="h-10 bg-background"
              />
              <Button type="submit" size="lg">
                Apply to build
                <ArrowRight />
              </Button>
            </form>
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
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-primary/25 via-primary/10 to-transparent blur-3xl" />
            <HeroVisual />
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm text-muted-foreground">
            Built live with
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
            <p className="text-sm font-medium text-primary dark:text-primary">
              The experience
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Two days designed to be worth your time
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Live sessions, workshops and Q&A where thoughtful design meets production-ready code.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-background p-6 shadow-xs"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="size-5 text-primary dark:text-primary" />
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
              How the days unfold
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-primary dark:text-primary">
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
                Sessions
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Ali Imam and guests sharing what they have actually designed and shipped, not slides about it.
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
          <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {showcase.map((item) => (
              <a key={item.name} href="#" className="group">
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${item.tile}`}
                >
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
                    {item.tag}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-medium ">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.meta}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold">
                    {item.price}
                  </span>
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
              What past attendees say
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`flex flex-col justify-between rounded-2xl border bg-background p-6 ${i === 0 ? "md:col-span-2 md:p-10" : ""}`}
              >
                <Quote className="size-6 text-primary dark:text-primary" />
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
              Get your ticket
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Prices rise as each release sells out. Team discounts apply automatically for five or more tickets.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-primary shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-chart-2 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-primary dark:text-primary" />
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
              Event FAQ
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-primary/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/25 via-primary/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Get notified when applications open
            </h2>
            <p className="text-lg text-muted-foreground">
              Join the list for early application access, starter files and the theme reveal.
            </p>
            <form
              action="#"
              className="flex w-full max-w-md flex-col gap-2 sm:flex-row mx-auto"
            >
              <Input
                type="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                className="h-10 bg-background"
              />
              <Button type="submit" size="lg">
                Apply to build
                <ArrowRight />
              </Button>
            </form>
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
              Ship it by Sunday.
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
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {showcase.slice(0, 3).map((item, i) => (
        <div
          key={item.name}
          className={`relative overflow-hidden rounded-2xl ${item.tile} ${i === 0 ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[3/4]" : "aspect-[3/4]"}`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
          <span className="absolute top-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
            {item.tag}
          </span>
          <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2 text-white">
            <div className="min-w-0">
              <div className="truncate text-sm font-medium">{item.name}</div>
              <div className="truncate text-xs text-white/75">{item.meta}</div>
            </div>
            <div className="shrink-0 text-sm font-semibold">{item.price}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
