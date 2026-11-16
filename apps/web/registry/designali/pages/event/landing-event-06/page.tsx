import {
  Accessibility,
  ArrowRight,
  ArrowUpRight,
  Check,
  Mic,
  PartyPopper,
  Plus,
  Presentation,
  Ticket,
  Users,
} from "@designali/icons"

import { Logo } from "@/src/components/logo"
import { Button } from "@workspace/ui/components/button"

const navLinks = ["Host", "Agenda", "Online", "Tickets", "Resources"]

const logos = [
  "Vercel",
  "shadcn/ui",
  "@designali/icons",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
]

const features = [
  {
    icon: Accessibility,
    title: "Accessible by design",
    description:
      "Fully online, live captions on every session and replays you can watch at your own pace.",
  },
  {
    icon: PartyPopper,
    title: "Live Q&A",
    description:
      "An open portfolio review on day one, included in every ticket.",
  },
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
]

const stats = [
  { value: "94%", label: "Would attend again" },
  { value: "1,200", label: "Seats available" },
  { value: "20+", label: "Host" },
  { value: "2", label: "Days, fully online" },
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
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
  },
  {
    name: "Brand track · Ali Imam",
    meta: "Building a brand identity from scratch",
    tag: "Brand",
    price: "Day 1 · 11:15",
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
  {
    name: "Code track · Ali Imam",
    meta: "From Figma to Next.js without losing detail",
    tag: "Code",
    price: "Day 1 · 14:00",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Guest designer",
    meta: "Hands-on: building with Designali blocks",
    tag: "Workshop",
    price: "Day 2 · 10:00",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Community panel",
    meta: "Design systems with @designali/icons",
    tag: "Design",
    price: "Day 2 · 13:30",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Ali Imam & guests",
    meta: "Closing session: AI-assisted design workflows",
    tag: "Keynote",
    price: "Day 2 · 16:45",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
]

const testimonials = [
  {
    quote:
      "I have joined every Designali session so far because each one leaves me with files I actually use.",
    name: "Ben H.",
    role: "Design engineer, attendee",
  },
  {
    quote:
      "I watched Ali build a full landing page live and shipped my own the same week using Designali blocks.",
    name: "Aisha B.",
    role: "Founder, attended online",
  },
  {
    quote:
      "The clearest design-to-code session I have seen. Every step was practical and the files were ready to use.",
    name: "Chris N.",
    role: "Frontend developer",
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
    q: "Can my team join together?",
    a: "Yes. Team tickets include a private Q&A. Email hello@designali.com for details.",
  },
  {
    q: "Where is the event held?",
    a: "Fully online. You get a private stream link by email, so you can join from anywhere.",
  },
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

export default function LandingEvent06() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
              Join the challenge
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-x border-b px-6 py-3 text-xs text-muted-foreground">
            <span>30 days · Online</span>
            <span className="hidden sm:inline">
              {"The 30-day design challenge."}
            </span>
          </div>
          <div className="border-x px-6 py-16 md:py-28">
            <h1 className="max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"Ship one design a day, "}
              <span className="text-orange-600 dark:text-orange-400">
                with Designali
              </span>
            </h1>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                The Designali 30-day challenge gives you a daily brief, starter files and live reviews from Ali Imam, so you build a portfolio one day at a time.
              </p>
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Join the challenge
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  See the briefs
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 border-x border-t lg:grid-cols-4">
            {stats.slice(0, 4).map((stat, i) => (
              <div
                key={stat.label}
                className={`border-b px-6 py-8 ${i % 2 === 0 ? "border-r" : ""} ${i === 1 ? "lg:border-r" : ""}`}
              >
                <div className="text-3xl font-semibold tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="border-x p-6 md:p-10">
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
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
              The experience
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Two days designed to be worth your time
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Live sessions, workshops and Q&A where thoughtful design meets production-ready code.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-orange-600 dark:text-orange-400" />
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
                  <span className="absolute top-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-zinc-900 backdrop-blur">
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
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              What past attendees say
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
              How the days unfold
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
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
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-orange-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-orange-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-orange-600 dark:text-orange-400" />
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-orange-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-orange-500/25 via-amber-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Your challenge starts here
            </h2>
            <p className="text-lg text-muted-foreground">
              Register now and get the first week of briefs free.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Join the challenge
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                See the briefs
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
              {"The 30-day design challenge."}
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
          <span className="absolute top-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-zinc-900 backdrop-blur">
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
