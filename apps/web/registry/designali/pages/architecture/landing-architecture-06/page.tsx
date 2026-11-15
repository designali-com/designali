import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Check,
  Compass,
  HardHat,
  Leaf,
  Plus,
  Ruler,
  Sun,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Projects", "Studio", "Services", "Process", "Journal"]

const logos = [
  "Frame",
  "Domus",
  "Mies Prize",
  "RIBA",
  "Dezeen",
  "Wallpaper",
  "ArchDaily",
  "AJ Awards",
]

const features = [
  {
    icon: HardHat,
    title: "On site, every week",
    description:
      "We stay involved through construction, with weekly site visits and clear reporting.",
  },
  {
    icon: Box,
    title: "3D and VR walkthroughs",
    description:
      "Walk through your building in virtual reality before a single foundation is poured.",
  },
  {
    icon: Sun,
    title: "Daylight modelling",
    description:
      "Detailed sun-path and daylight studies to place every window where it matters most.",
  },
  {
    icon: Compass,
    title: "Site-led design",
    description:
      "Every project begins with weeks of study on the site: its light, its climate, its history and its neighbours.",
  },
  {
    icon: Leaf,
    title: "Low-carbon by default",
    description:
      "Timber structures, passive strategies and reclaimed materials to minimise embodied and operational carbon.",
  },
  {
    icon: Ruler,
    title: "Detail obsessed",
    description:
      "We draw every junction, joint and handle, so the finished building is as precise as the drawings.",
  },
]

const stats = [
  { value: "34", label: "Architects and designers" },
  { value: "140+", label: "Projects completed" },
  { value: "96%", label: "Planning approval rate" },
  { value: "22", label: "Design awards" },
]

const steps = [
  {
    title: "Brief and feasibility",
    description:
      "We study the site, test options and agree a clear brief, budget and programme.",
  },
  {
    title: "Concept design",
    description:
      "Sketches, models and 3D views explore the big ideas before we refine one direction.",
  },
  {
    title: "Planning and technical",
    description:
      "We prepare the planning application, then detailed drawings for tender and construction.",
  },
  {
    title: "Construction and handover",
    description:
      "Weekly site visits, contractor coordination and a careful handover with a building manual.",
  },
]

const showcase = [
  {
    name: "Hillside House",
    meta: "Residential · Cotswolds · 320 m²",
    tag: "Award winner",
    price: "2025",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Nordform HQ",
    meta: "Workplace · Copenhagen · 4,800 m²",
    tag: "Workplace",
    price: "2024",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "The Old Mill",
    meta: "Heritage retrofit · Yorkshire",
    tag: "Listed",
    price: "2024",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "City Library",
    meta: "Civic · 6,200 m² · CLT structure",
    tag: "Public",
    price: "2023",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Garden Apartment",
    meta: "Interiors · London · 140 m²",
    tag: "Interiors",
    price: "2025",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Coastal Cabins",
    meta: "Hospitality · 12 cabins",
    tag: "Timber",
    price: "2026",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
]

const testimonials = [
  {
    quote:
      "A true collaborator. They challenged our brief in all the right ways and the library is better for it.",
    name: "Dr. Alan Hughes",
    role: "Director, City Library",
  },
  {
    quote:
      "They listened to how we actually live and designed a home around it. Five years later it still surprises us with the light.",
    name: "Catherine and Paul Ashby",
    role: "Clients, Hillside House",
  },
  {
    quote:
      "Our new headquarters changed how the company works. People want to come into the office again.",
    name: "Jonas Lindqvist",
    role: "CEO, Nordform",
  },
]

const tiers = [
  {
    name: "Feasibility",
    price: "$4,500",
    period: "fixed fee",
    description: "Understand what is possible on your site.",
    features: [
      "Site visit and analysis",
      "Three design options",
      "Planning appraisal",
      "Cost guidance",
    ],
    cta: "Book a feasibility study",
  },
  {
    name: "Full Service",
    price: "12%",
    period: "of build cost",
    description: "Complete architecture from concept to handover.",
    features: [
      "Concept and planning",
      "Technical drawings",
      "Contractor tender",
      "Weekly site visits",
      "Interior design included",
    ],
    cta: "Start a project",
  },
  {
    name: "Interiors",
    price: "$180",
    period: "/m²",
    description: "Interior design for new or existing spaces.",
    features: [
      "Space planning",
      "Joinery design",
      "Lighting scheme",
      "Furniture sourcing",
      "Installation management",
    ],
    cta: "Discuss interiors",
  },
]

const faqs = [
  {
    q: "What does the first meeting involve?",
    a: "A free one-hour conversation on site or online to understand your goals, budget and timeline.",
  },
  {
    q: "What size projects do you take on?",
    a: "We work on everything from single-room extensions over $150,000 to civic buildings, with a dedicated team for each scale.",
  },
  {
    q: "How long does a typical house project take?",
    a: "A new home usually takes 18 to 30 months from first meeting to moving in, including planning and construction.",
  },
  {
    q: "Do you work outside the country?",
    a: "Yes. We have completed projects in nine countries and partner with local architects where required.",
  },
  {
    q: "Can you help us find a contractor?",
    a: "We run a competitive tender with trusted contractors and help you choose on quality, programme and price.",
  },
]

const footer = [
  { title: "Studio", links: ["About", "Team", "Awards", "Careers"] },
  {
    title: "Work",
    links: ["Residential", "Workplace", "Cultural", "Interiors"],
  },
  {
    title: "Contact",
    links: ["New projects", "Press", "Instagram", "Newsletter"],
  },
]

export default function LandingArchitecture06() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-rose-600 text-white text-sm">
              A
            </span>
            <span className="">Arcline</span>
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
              Start a project
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Discuss your building
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-x border-b px-6 py-3 text-xs text-muted-foreground">
            <span>Heritage and conservation</span>
            <span className="hidden sm:inline">
              Old buildings, new chapters.
            </span>
          </div>
          <div className="border-x px-6 py-16 md:py-28">
            <h1 className="max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"Restoring old buildings for "}
              <span className="text-rose-600 dark:text-rose-400">
                new lives
              </span>
            </h1>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                We repair, adapt and extend listed buildings with care for their
                history and the planning detail heritage officers expect.
              </p>
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Discuss your building
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  View restorations
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
            Recognised by
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
            <p className="text-sm font-medium text-rose-600 dark:text-rose-400">
              Practice
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Buildings shaped by place, light and people
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              We design homes, workplaces and public spaces that respond to
              their site, last for generations and are a pleasure to live in.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-rose-600 dark:text-rose-400" />
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
                Selected projects
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Residential, cultural and workplace projects completed over the
                last decade, from small extensions to civic buildings.
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
              What our clients say
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
              From first sketch to handover
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-rose-600 dark:text-rose-400">
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
              Ways to work with us
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Fees are agreed upfront for each stage, so you always know what
              comes next and what it costs.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-rose-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-rose-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-rose-600 dark:text-rose-400" />
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
              Common questions
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-rose-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-rose-500/25 via-pink-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Own a building with a story?
            </h2>
            <p className="text-lg text-muted-foreground">
              Arrange a site visit with a conservation architect to talk through
              options.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Discuss your building
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                View restorations
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
              <span className="flex size-7 items-center justify-center rounded-md bg-rose-600 text-white text-sm">
                A
              </span>
              <span className="">Arcline</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Old buildings, new chapters.
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
              © {new Date().getFullYear()} Arcline. All rights reserved.
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
