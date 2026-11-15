import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Camera,
  Check,
  Images,
  Plus,
  ShieldCheck,
  Sun,
  Wand,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Work", "Services", "Packages", "Journal", "Contact"]

const logos = [
  "Lens Culture",
  "Atelier",
  "Vogue Living",
  "Kinfolk",
  "The Wed Journal",
  "Cereal",
  "Portrait Weekly",
  "Field Notes",
]

const features = [
  {
    icon: BookOpen,
    title: "Heirloom albums",
    description:
      "Lay-flat albums printed on archival paper and bound by hand in linen or leather.",
  },
  {
    icon: ShieldCheck,
    title: "Fully insured",
    description:
      "Backup cameras, dual card recording and full liability insurance at every shoot.",
  },
  {
    icon: Camera,
    title: "Natural direction",
    description:
      "Gentle prompts rather than stiff poses, so your photos feel like you on a very good day.",
  },
  {
    icon: Sun,
    title: "Light-first approach",
    description:
      "Shoots are planned around golden hour and the best available light for every location.",
  },
  {
    icon: Wand,
    title: "Hand retouching",
    description:
      "Every delivered image is colour-graded and retouched by hand, never with a one-click preset.",
  },
  {
    icon: Images,
    title: "Private galleries",
    description:
      "A beautiful online gallery to view, favourite, download and share with family.",
  },
]

const stats = [
  { value: "640+", label: "Sessions photographed" },
  { value: "12", label: "Years behind the camera" },
  { value: "48h", label: "Sneak peek turnaround" },
  { value: "5.0", label: "Average client rating" },
]

const steps = [
  {
    title: "Enquire",
    description:
      "Tell us about your date, your plans and what you would love to remember.",
  },
  {
    title: "Plan together",
    description:
      "A video call to choose locations, timings and the feel of your photographs.",
  },
  {
    title: "The shoot",
    description:
      "Relaxed, guided and unhurried. Most people forget the camera after ten minutes.",
  },
  {
    title: "Your gallery",
    description:
      "Sneak peeks in 48 hours and your full, retouched gallery within two weeks.",
  },
]

const showcase = [
  {
    name: "Lake Como Wedding",
    meta: "Wedding · 640 images",
    tag: "Wedding",
    price: "2026",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "The Harlow Family",
    meta: "Family · 85 images",
    tag: "Family",
    price: "2026",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Atelier Moreau SS26",
    meta: "Editorial · 42 images",
    tag: "Editorial",
    price: "2026",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Coastal Elopement",
    meta: "Elopement · 210 images",
    tag: "Elopement",
    price: "2025",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Field Studio Team",
    meta: "Headshots · 24 portraits",
    tag: "Commercial",
    price: "2025",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Highland Portraits",
    meta: "Portrait · 60 images",
    tag: "Portrait",
    price: "2025",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
]

const testimonials = [
  {
    quote:
      "We hate having our photo taken, and somehow these are the best pictures of us that exist. We cried opening the gallery.",
    name: "Amelia and Josh",
    role: "Wedding, Lake Como",
  },
  {
    quote:
      "Two toddlers, one dog and a rainy afternoon, and every single photo is a keeper. Magic.",
    name: "Rachel Ng",
    role: "Family session",
  },
  {
    quote:
      "Our new headshots doubled the response rate on our team page. Quick, professional and genuinely fun.",
    name: "Victor Alvarez",
    role: "Founder, Field Studio",
  },
]

const tiers = [
  {
    name: "Portrait",
    price: "$450",
    period: "/session",
    description: "A one-hour session for individuals or couples.",
    features: [
      "1 hour on location",
      "40 retouched images",
      "Private online gallery",
      "Print release",
    ],
    cta: "Book a portrait",
  },
  {
    name: "Family",
    price: "$790",
    period: "/session",
    description: "Our most popular session for families.",
    features: [
      "2 hours, up to 2 locations",
      "100 retouched images",
      "48-hour sneak peek",
      "Private online gallery",
      "20x30 cm fine art print",
    ],
    cta: "Book a family session",
  },
  {
    name: "Wedding",
    price: "$3,800",
    period: "/day",
    description: "Full-day coverage for your wedding.",
    features: [
      "Up to 10 hours coverage",
      "Second photographer",
      "600+ retouched images",
      "Engagement session",
      "Lay-flat linen album",
    ],
    cta: "Check your date",
  },
]

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "Weddings are usually booked 9 to 14 months ahead. Portrait and family sessions typically need two to four weeks.",
  },
  {
    q: "What should we wear?",
    a: "We send a styling guide after booking. Soft, neutral tones and comfortable layers photograph beautifully.",
  },
  {
    q: "What if it rains?",
    a: "We reschedule outdoor sessions free of charge, or move to a covered location if you prefer to keep the date.",
  },
  {
    q: "Do you provide RAW files?",
    a: "We deliver fully edited high-resolution images. RAW files are not included, as editing is part of the final work.",
  },
  {
    q: "Is a deposit required?",
    a: "A 30% deposit secures your date, with the balance due two weeks before the session.",
  },
]

const footer = [
  { title: "Work", links: ["Weddings", "Families", "Portraits", "Commercial"] },
  { title: "Info", links: ["Packages", "Journal", "FAQ", "Gift cards"] },
  {
    title: "Contact",
    links: ["Enquire", "Instagram", "Pinterest", "Newsletter"],
  },
]

export default function LandingPhotography07() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-sky-600 text-white text-sm">
              P
            </span>
            <span className="">{"Petal & Paw"}</span>
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
              Check availability
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Book a session
            </Button>
          </div>
        </div>
      </header>
      <section className="relative isolate overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-[ellipse_60%_50%_at_50%_0%] from-sky-500/25 via-cyan-500/10 to-transparent to-70%" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_50%_45%_at_50%_0%,#000_60%,transparent_100%)]" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border bg-background/70 py-1 pr-3 pl-1 text-xs backdrop-blur"
            >
              <span className="rounded-full bg-sky-600 px-2 py-0.5 font-medium text-white">
                New
              </span>
              <span className="text-muted-foreground">
                Holiday portrait sessions now open for booking
              </span>
            </a>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"Portraits that capture their "}
              <span className="text-sky-600 dark:text-sky-400">
                whole personality
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              {
                "We photograph dogs, cats and horses at home or outdoors, with patient sessions that move at your pet's pace."
              }
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Book a session
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                View the gallery
              </Button>
            </div>
          </div>
          <div className="relative mx-auto mt-20 max-w-5xl">
            <div className="absolute inset-x-10 -top-6 -z-10 h-24 rounded-full bg-sky-500/10 blur-2xl" />
            <HeroVisual />
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm text-muted-foreground">
            Published in
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
              The experience
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Calm, considered and completely about you
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              From the first call to the final album, every step is designed so
              you can relax and be yourself in front of the camera.
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
                Selected galleries
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                A small selection of recent work. Full galleries are shared
                privately with each client on request.
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
              How a shoot works
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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Kind words from clients
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
              Session packages
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Every package includes a planning call, professional retouching
              and a private online gallery to download and share.
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
              Before you book
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
              {"Celebrate the friend who's always there"}
            </h2>
            <p className="text-lg text-muted-foreground">
              Sessions include treats, toys and a private gallery within two
              weeks.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Book a session
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                View the gallery
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
                P
              </span>
              <span className="">{"Petal & Paw"}</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Every pet, a portrait.
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
              © {new Date().getFullYear()} {"Petal & Paw"}. All rights reserved.
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
