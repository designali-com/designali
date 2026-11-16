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
} from "@designali/icons"

import { Logo } from "@/src/components/logo"
import { Button } from "@workspace/ui/components/button"

const navLinks = ["Case studies", "Studio", "Services", "Process", "Blog"]

const logos = [
  "Tailwind CSS",
  "Figma",
  "Vercel",
  "Blender-style CGI",
  "@designali/icons",
  "Next.js",
  "React",
  "TypeScript",
]

const features = [
  {
    icon: HardHat,
    title: "Hands-on, every week",
    description:
      "Ali stays involved from first sketch to launch, with weekly updates and live previews.",
  },
  {
    icon: Box,
    title: "3D walkthroughs",
    description:
      "Animated CGI walkthroughs let clients experience a building before a single foundation is poured.",
  },
  {
    icon: Sun,
    title: "Light and material studies",
    description:
      "Renders that show timber, stone and daylight exactly as your team imagines them.",
  },
  {
    icon: Compass,
    title: "Brand identity",
    description:
      "Logos, type and colour systems that feel as considered as the buildings your practice designs.",
  },
  {
    icon: Leaf,
    title: "Portfolio websites",
    description:
      "Fast Next.js sites with large imagery, project filters and case studies that load in a blink.",
  },
  {
    icon: Ruler,
    title: "Detail obsessed",
    description:
      "Every grid, margin and hover state is designed in Figma and matched exactly in code.",
  },
]

const stats = [
  { value: "4000+", label: "Icons in @designali/icons" },
  { value: "60+", label: "Studio projects shipped" },
  { value: "98%", label: "Delivered on schedule" },
  { value: "460+", label: "Blocks to build from" },
]

const steps = [
  {
    title: "Discovery call",
    description:
      "We talk through your practice, your audience and the work you want to win, then agree a clear brief.",
  },
  {
    title: "Concept and direction",
    description:
      "Moodboards, type studies and early 3D views explore ideas before we refine one direction.",
  },
  {
    title: "Design and build",
    description:
      "Ali designs every page in Figma, then builds it in Next.js, TypeScript and Tailwind CSS.",
  },
  {
    title: "Launch and handover",
    description:
      "Weekly check-ins, a smooth launch on Vercel and a handover guide so your team can update everything.",
  },
]

const showcase = [
  {
    name: "Residential studio rebrand",
    meta: "Brand identity · Website",
    tag: "Featured",
    price: "2025",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Workplace architects site",
    meta: "Next.js · Project archive",
    tag: "Web",
    price: "2024",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Heritage practice identity",
    meta: "Identity · Print",
    tag: "Brand",
    price: "2024",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Civic project renders",
    meta: "CGI · 3D visualisation",
    tag: "3D",
    price: "2023",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Interior studio portfolio",
    meta: "UI/UX · Website",
    tag: "Interiors",
    price: "2025",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Cabin collection launch",
    meta: "Motion · Landing page",
    tag: "Motion",
    price: "2026",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
]

const testimonials = [
  {
    quote:
      "A true collaborator. Ali challenged our brief in all the right ways and the website is better for it.",
    name: "Alan H.",
    role: "Director, civic practice",
  },
  {
    quote:
      "Designali understood our work better than we expected. The new site finally feels like walking through one of our buildings.",
    name: "Catherine A.",
    role: "Founding partner, Designali client",
  },
  {
    quote:
      "Our project archive used to be a PDF. Now it is a fast, filterable site that clients actually browse.",
    name: "Jonas L.",
    role: "Director, architecture studio",
  },
]

const tiers = [
  {
    name: "Starter",
    price: "$2,400",
    period: "fixed fee",
    description: "A focused portfolio landing page for a new studio or project.",
    features: [
      "Discovery call with Ali",
      "Two design directions",
      "Built with Designali blocks",
      "Responsive and accessible",
    ],
    cta: "Start a starter project",
  },
  {
    name: "Studio",
    price: "$9,800",
    period: "per project",
    description: "Brand identity and full website, from concept to launch.",
    features: [
      "Logo, type and colour system",
      "Full Next.js website",
      "Project archive and filters",
      "Weekly check-ins",
      "CMS-ready content",
    ],
    cta: "Start a project",
  },
  {
    name: "Interiors",
    price: "$3,200",
    period: "/render set",
    description: "CGI and 3D visuals for unbuilt or interior projects.",
    features: [
      "Five photoreal stills",
      "Material and light studies",
      "Short motion fly-through",
      "Social-ready crops",
      "Two rounds of revisions",
    ],
    cta: "Discuss renders",
  },
]

const faqs = [
  {
    q: "What does the first call involve?",
    a: "A free 30-minute call online to understand your goals, budget and timeline.",
  },
  {
    q: "What size practices do you work with?",
    a: "Everyone from solo architects to multi-office studios. The process scales, and Ali stays involved on every project.",
  },
  {
    q: "How long does a typical project take?",
    a: "A landing page usually takes two weeks, and a full brand plus website takes six to eight weeks.",
  },
  {
    q: "Do you work with studios worldwide?",
    a: "Yes. Designali works remotely with clients anywhere, with calls scheduled around your time zone.",
  },
  {
    q: "Can you photograph our buildings?",
    a: "We do not shoot photography, but CGI renders can fill gaps for projects that are unbuilt or hard to photograph.",
  },
]

const footer = [
  { title: "Studio", links: ["About", "Ali Imam", "Templates", "Blocks"] },
  {
    title: "Work",
    links: ["Brand identity", "Web", "CGI and 3D", "Interiors"],
  },
  {
    title: "Contact",
    links: ["hello@designali.com", "LinkedIn", "Instagram", "X"],
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
              Start a project
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Discuss your project
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-x border-b px-6 py-3 text-xs text-muted-foreground">
            <span>Designali for heritage practices</span>
            <span className="hidden sm:inline">
              Old practices, new chapters.
            </span>
          </div>
          <div className="border-x px-6 py-16 md:py-28">
            <h1 className="max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"Heritage practices, designed for "}
              <span className="text-rose-600 dark:text-rose-400">
                new clients
              </span>
            </h1>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                Designali refreshes identities and websites for conservation architects, with care for their history and the detail their clients expect.
              </p>
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Discuss your project
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  View work
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
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-rose-600 dark:text-rose-400">
              Services
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Brands shaped by your buildings
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Where thoughtful design meets production-ready code. Identity, web and 3D for practices that care about craft.
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
                Selected architecture work
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Identities, websites and CGI for residential, workplace and civic practices, all designed and built by Designali.
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
              From first sketch to launch
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
              Ways to work with Designali
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Fees are agreed upfront, so you always know what comes next and what it costs. You own everything we make.
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-rose-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-rose-500/25 via-pink-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Run a practice with a story?
            </h2>
            <p className="text-lg text-muted-foreground">
              Arrange a call with Ali Imam to talk through options.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Discuss your project
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                View work
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
              Old practices, new chapters.
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
