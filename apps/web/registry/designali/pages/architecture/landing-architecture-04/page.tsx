import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Check,
  FileCheck,
  HardHat,
  Plus,
  Quote,
  Sofa,
  Sparkles,
  Sun,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Projects", "Studio", "Services", "Process", "Journal"]

const logos = [
  "ArchDaily",
  "AJ Awards",
  "Frame",
  "Domus",
  "Mies Prize",
  "RIBA",
  "Dezeen",
  "Wallpaper",
]

const features = [
  {
    icon: Sofa,
    title: "Interiors included",
    description:
      "Architecture and interiors designed by one team, down to the joinery, lighting and furniture.",
  },
  {
    icon: FileCheck,
    title: "Planning expertise",
    description:
      "A 96% planning approval rate, including listed buildings and conservation areas.",
  },
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
]

const stats = [
  { value: "18", label: "Years in practice" },
  { value: "65%", label: "Lower embodied carbon" },
  { value: "34", label: "Architects and designers" },
  { value: "140+", label: "Projects completed" },
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
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Nordform HQ",
    meta: "Workplace · Copenhagen · 4,800 m²",
    tag: "Workplace",
    price: "2024",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
  {
    name: "The Old Mill",
    meta: "Heritage retrofit · Yorkshire",
    tag: "Listed",
    price: "2024",
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
  },
  {
    name: "City Library",
    meta: "Civic · 6,200 m² · CLT structure",
    tag: "Public",
    price: "2023",
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
  {
    name: "Garden Apartment",
    meta: "Interiors · London · 140 m²",
    tag: "Interiors",
    price: "2025",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Coastal Cabins",
    meta: "Hospitality · 12 cabins",
    tag: "Timber",
    price: "2026",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
]

const testimonials = [
  {
    quote:
      "On budget, on time and beautifully built. Rare words to say about any construction project.",
    name: "Ravi Patel",
    role: "Developer, Patel Homes",
  },
  {
    quote:
      "The interiors are calm, practical and full of thoughtful details. Every cupboard is exactly where it should be.",
    name: "Lucia Romano",
    role: "Client, Garden Apartment",
  },
  {
    quote:
      "A true collaborator. They challenged our brief in all the right ways and the library is better for it.",
    name: "Dr. Alan Hughes",
    role: "Director, City Library",
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
    q: "Can you help us find a contractor?",
    a: "We run a competitive tender with trusted contractors and help you choose on quality, programme and price.",
  },
  {
    q: "How do you approach sustainability?",
    a: "We measure whole-life carbon on every project and target net zero operational energy wherever the brief allows.",
  },
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

export default function LandingArchitecture04() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-indigo-600 text-white text-sm">
              F
            </span>
            <span className="">Form Collective</span>
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
              Plan your workplace
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-indigo-600 dark:text-indigo-400" />
              Workplace design
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl ">
              {"Offices people actually "}
              <span className="text-indigo-600 dark:text-indigo-400">
                want to visit
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              We design headquarters and studios around how teams really work
              today, with space for focus, collaboration and rest.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Plan your workplace
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Case studies
              </Button>
            </div>
          </div>
          <div className="mt-14 grid gap-3 lg:grid-cols-[2fr_1fr]">
            <HeroVisual />
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {stats.slice(0, 3).map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col justify-between rounded-2xl border p-5 ${i === 0 ? "bg-indigo-500/10" : "bg-muted/40"} ${i === 2 ? "col-span-2 lg:col-span-1" : ""}`}
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
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
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
          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border p-6 transition-colors hover:bg-muted/40 ${i === 0 ? "bg-indigo-500/10 md:col-span-2 md:row-span-2 md:p-10" : ""} ${i === 3 ? "md:col-span-2" : ""}`}
              >
                <feature.icon
                  className={`${i === 0 ? "size-8" : "size-5"} text-indigo-600 dark:text-indigo-400`}
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
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              What our clients say
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`flex flex-col justify-between rounded-2xl border bg-background p-6 ${i === 0 ? "md:col-span-2 md:p-10" : ""}`}
              >
                <Quote className="size-6 text-indigo-600 dark:text-indigo-400" />
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
              From first sketch to handover
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
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
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-indigo-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-indigo-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-indigo-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/25 via-violet-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Bring your team back with better space
            </h2>
            <p className="text-lg text-muted-foreground">
              Start with a free workplace audit of your current office.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Plan your workplace
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Case studies
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
              <span className="flex size-7 items-center justify-center rounded-md bg-indigo-600 text-white text-sm">
                F
              </span>
              <span className="">Form Collective</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Workplaces for modern teams.
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
              © {new Date().getFullYear()} Form Collective. All rights reserved.
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
