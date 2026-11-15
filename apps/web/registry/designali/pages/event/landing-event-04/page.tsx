import {
  Accessibility,
  ArrowRight,
  ArrowUpRight,
  Check,
  PartyPopper,
  Plus,
  Quote,
  Sparkles,
  Ticket,
  UtensilsCrossed,
  Video,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Speakers", "Schedule", "Venue", "Tickets", "Sponsors"]

const logos = [
  "Cobalt",
  "Fieldnote",
  "Harbor",
  "Lumen",
  "Quartz",
  "Northwind",
  "Parallel",
  "Stackhouse",
]

const features = [
  {
    icon: Video,
    title: "Every talk recorded",
    description:
      "Ticket holders get lifetime access to recordings, slides and transcripts within 48 hours.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food that is good",
    description:
      "Local caterers, vegan and allergy-friendly options, and coffee that does not taste like a conference.",
  },
  {
    icon: Accessibility,
    title: "Accessible by design",
    description:
      "Step-free venue, live captions on every stage, quiet rooms and a dedicated accessibility team.",
  },
  {
    icon: PartyPopper,
    title: "Evening social",
    description:
      "An after-party with live music on day one, included in every ticket.",
  },
  {
    icon: Ticket,
    title: "Fully transferable tickets",
    description:
      "Cannot make it? Transfer your ticket to a colleague for free until the day before doors open.",
  },
]

const stats = [
  { value: "28", label: "Countries represented" },
  { value: "9th", label: "Annual edition" },
  { value: "94%", label: "Would attend again" },
  { value: "2,400", label: "Attendees expected" },
]

const steps = [
  {
    title: "Morning keynotes",
    description:
      "Doors open at 8:30 with breakfast. Keynotes run on the main stage from 9:30 until 11:00.",
  },
  {
    title: "Parallel tracks",
    description:
      "Choose between three stages covering strategy, engineering and design through the afternoon.",
  },
  {
    title: "Workshops",
    description:
      "Pre-booked small-group workshops run in the studios from 14:00, with limited seats.",
  },
  {
    title: "Evening social",
    description:
      "Wind down with live music, food trucks and the people you met in the hallway.",
  },
]

const showcase = [
  {
    name: "Amara Okoye",
    meta: "Designing for the next billion users",
    tag: "Keynote",
    price: "Day 1 · 09:30",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Lucas Bernard",
    meta: "Scaling teams without losing culture",
    tag: "Leadership",
    price: "Day 1 · 11:15",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Ingrid Solberg",
    meta: "What we learned shipping weekly for 5 years",
    tag: "Engineering",
    price: "Day 1 · 14:00",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Diego Herrera",
    meta: "Hands-on: prototyping with real data",
    tag: "Workshop",
    price: "Day 2 · 10:00",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
  {
    name: "Yuna Park",
    meta: "The quiet power of good defaults",
    tag: "Design",
    price: "Day 2 · 13:30",
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
  },
  {
    name: "Samuel Adeyemi",
    meta: "Closing keynote: building for decades",
    tag: "Keynote",
    price: "Day 2 · 16:45",
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
]

const testimonials = [
  {
    quote:
      "As a first-time speaker I felt completely supported. The rehearsal coaching made a huge difference.",
    name: "Oliver Grant",
    role: "Speaker, 2025",
  },
  {
    quote:
      "Captions on every stage and a real quiet room. It is rare to see accessibility taken this seriously.",
    name: "Fatima Rahman",
    role: "Accessibility Lead",
  },
  {
    quote:
      "We have sponsored for four years because the audience is exactly who we want to meet.",
    name: "Ben Hollis",
    role: "Head of Marketing, sponsor",
  },
]

const tiers = [
  {
    name: "Early bird",
    price: "$349",
    period: "/ticket",
    description: "Limited release for the first 300 attendees.",
    features: [
      "Both conference days",
      "All talks and stages",
      "Lunch and coffee",
      "Evening social",
      "Session recordings",
    ],
    cta: "Buy early bird",
  },
  {
    name: "Full pass",
    price: "$549",
    period: "/ticket",
    description: "Everything, including workshops.",
    features: [
      "Both conference days",
      "Two workshop seats",
      "Priority seating",
      "Speaker dinner draw",
      "Recordings and slides",
    ],
    cta: "Get the full pass",
  },
  {
    name: "Team",
    price: "$449",
    period: "/person",
    description: "For groups of five or more.",
    features: [
      "Full pass benefits",
      "Single invoice",
      "Reserved team table",
      "Flexible name changes",
      "Dedicated contact",
    ],
    cta: "Book for your team",
  },
]

const faqs = [
  {
    q: "Will the talks be streamed?",
    a: "Talks are recorded and shared with ticket holders within 48 hours. There is no public livestream.",
  },
  {
    q: "Do you offer diversity tickets?",
    a: "We fund over 100 free tickets each year for people from under-represented groups. Applications open in spring.",
  },
  {
    q: "Can my company sponsor?",
    a: "Yes. Download the sponsorship deck or email our partnerships team for available packages.",
  },
  {
    q: "Where is the event held?",
    a: "At a converted riverside warehouse ten minutes from the central station, with step-free access throughout.",
  },
  {
    q: "Can I get a refund?",
    a: "Tickets are refundable up to 30 days before the event. After that you can transfer your ticket to someone else for free.",
  },
]

const footer = [
  { title: "Event", links: ["Speakers", "Schedule", "Workshops", "Tickets"] },
  {
    title: "Attend",
    links: ["Venue", "Travel and hotels", "Accessibility", "Code of conduct"],
  },
  {
    title: "Get involved",
    links: ["Call for speakers", "Sponsorship", "Volunteer", "Contact"],
  },
]

export default function LandingEvent04() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-blue-600 text-white text-sm">
              D
            </span>
            <span className="">Datacraft Summit</span>
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
              Register now
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-blue-600 dark:text-blue-400" />
              Oct 2 to 3 · Hybrid
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl ">
              {"Where data teams learn what "}
              <span className="text-blue-600 dark:text-blue-400">
                actually works
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              Datacraft Summit features 60 sessions on analytics engineering, ML
              in production and data leadership, in person in Berlin and online.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Register now
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Submit a talk
              </Button>
            </div>
          </div>
          <div className="mt-14 grid gap-3 lg:grid-cols-[2fr_1fr]">
            <HeroVisual />
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {stats.slice(0, 3).map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col justify-between rounded-2xl border p-5 ${i === 0 ? "bg-blue-500/10" : "bg-muted/40"} ${i === 2 ? "col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                  <div className="mt-6 text-3xl font-semibold tracking-tight">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm text-muted-foreground">
            Supported by our partners
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
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              The experience
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Two days designed to be worth the trip
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Talks, workshops and conversations you cannot get from a
              livestream, in a venue built for meeting the right people.
            </p>
          </div>
          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border p-6 transition-colors hover:bg-muted/40 ${i === 0 ? "bg-blue-500/10 md:col-span-2 md:row-span-2 md:p-10" : ""} ${i === 3 ? "md:col-span-2" : ""}`}
              >
                <feature.icon
                  className={`${i === 0 ? "size-8" : "size-5"} text-blue-600 dark:text-blue-400`}
                />
                <h3
                  className={`mt-6 font-semibold tracking-tight ${i === 0 ? "text-2xl md:text-3xl" : "text-lg"}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`mt-2 leading-7 text-muted-foreground ${i === 0 ? "max-w-md text-lg" : "text-sm"}`}
                >
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
                Speakers and sessions
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Practitioners, founders and researchers sharing what they have
                actually built, not what they plan to build.
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
      <section className="border-b bg-muted/30">
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
                <Quote className="size-6 text-blue-600 dark:text-blue-400" />
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
              How the days unfold
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
              Get your ticket
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Prices rise as each release sells out. Group discounts apply
              automatically for five or more tickets.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-blue-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-blue-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-400" />
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-blue-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500/25 via-indigo-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Join 3,000 data practitioners
            </h2>
            <p className="text-lg text-muted-foreground">
              Attend in Berlin or online. Every session is recorded for
              registered attendees.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Register now
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Submit a talk
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
              <span className="flex size-7 items-center justify-center rounded-md bg-blue-600 text-white text-sm">
                D
              </span>
              <span className="">Datacraft Summit</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Data, crafted.
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
              © {new Date().getFullYear()} Datacraft Summit. All rights
              reserved.
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
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
      {showcase.slice(0, 5).map((item, i) => (
        <div
          key={item.name}
          className={`relative overflow-hidden rounded-2xl ${item.tile} ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-[4/3]"}`}
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
