import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Images,
  MapPin,
  Plus,
  Sun,
  Wand,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Work", "Services", "Packages", "Journal", "Contact"]

const features = [
  {
    icon: Sun,
    title: "Light-first rendering",
    description:
      "Scenes are lit like a real studio, with soft shadows and reflections that make products feel tangible.",
  },
  {
    icon: Wand,
    title: "Hand-finished detail",
    description:
      "Every frame is colour-graded and refined by hand by Ali Imam, never pushed out with a one-click preset.",
  },
  {
    icon: Images,
    title: "Private review links",
    description:
      "A clean online gallery to review, comment on, download and share frames with your team.",
  },
  {
    icon: Clock,
    title: "Two-week delivery",
    description:
      "First previews within 48 hours and final renders within fourteen days.",
  },
  {
    icon: MapPin,
    title: "Work from anywhere",
    description:
      "Designali Visuals works remotely with brands worldwide, with reviews held by video.",
  },
]

const stats = [
  { value: "12", label: "Years creating CGI" },
  { value: "48h", label: "Preview turnaround" },
  { value: "5.0", label: "Average client rating" },
  { value: "12", label: "Formats delivered" },
]

const steps = [
  {
    title: "Share your brief",
    description:
      "Tell us about your product, your brand and where the visuals will be used.",
  },
  {
    title: "Plan together",
    description:
      "A video call to agree concepts, formats, camera angles and the feel of the frames.",
  },
  {
    title: "Build & render",
    description:
      "Scenes are modelled, lit and rendered in 3D, with AI-assisted exploration where it helps.",
  },
  {
    title: "Your gallery",
    description:
      "Previews in 48 hours and your full set of final renders within two weeks.",
  },
]

const showcase = [
  {
    name: "Abstract Fluid Series",
    meta: "Motion · 64 loops",
    tag: "Motion",
    price: "2026",
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
    image: "/img/ask/ask1.jpg",
  },
  {
    name: "Colourful Spheres",
    meta: "CGI · 85 frames",
    tag: "Brand Visuals",
    price: "2026",
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
    image: "/img/ask/ask2.jpg",
  },
  {
    name: "Dalim Visuals Archive",
    meta: "Editorial · 42 frames",
    tag: "Editorial",
    price: "2026",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
    image: "/images/templates/dalim-visuals-old.jpg",
  },
  {
    name: "Wallpaper Collection",
    meta: "Wallpapers · 21 frames",
    tag: "Wallpapers",
    price: "2025",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
    image: "/stock/wallpaper-1.jpg",
  },
  {
    name: "Studio Product Set",
    meta: "Product CGI · 24 renders",
    tag: "Commercial",
    price: "2025",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
    image: "/img/ask/ask5.jpg",
  },
  {
    name: "Device Mockups",
    meta: "3D · 60 renders",
    tag: "Product CGI",
    price: "2025",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
    image: "/img/ask/ask8.jpg",
  },
]

const testimonials = [
  {
    quote:
      "Ali turned a few sketches into a full set of 3D visuals. Every frame looks like it belongs to the same brand.",
    name: "Rachel",
    role: "Marketing lead",
  },
  {
    quote:
      "The motion loops doubled engagement on our launch posts. Fast, professional and genuinely fun to work with.",
    name: "Victor",
    role: "Designali client",
  },
  {
    quote:
      "The product renders were delivered early and were exactly on brief. Our launch page looked brand new.",
    name: "Ines",
    role: "Brand lead, Designali client",
  },
]

const tiers = [
  {
    name: "Product CGI",
    price: "$450",
    period: "/package",
    description: "A focused set of product renders for one item.",
    features: [
      "1 product, 3 camera angles",
      "10 final renders",
      "Private review gallery",
      "Commercial license",
    ],
    cta: "Book Product CGI",
  },
  {
    name: "Brand Visuals",
    price: "$790",
    period: "/package",
    description: "Our most popular package for brands.",
    features: [
      "Up to 3 products or scenes",
      "30 final renders",
      "48-hour sneak peek",
      "Private review gallery",
      "2 short motion loops",
    ],
    cta: "Book Brand Visuals",
  },
  {
    name: "Full Production",
    price: "$3,800",
    period: "/production",
    description: "Full visual production for a launch.",
    features: [
      "Unlimited scenes for one launch",
      "CGI, 3D and motion",
      "60+ final frames",
      "Wallpapers and social formats",
      "Source files included",
    ],
    cta: "Book a production",
  },
]

const faqs = [
  {
    q: "What do you need from us?",
    a: "Product photos, CAD files or sketches, plus your brand guidelines. We send a short brief template after booking.",
  },
  {
    q: "What if we need changes?",
    a: "Every package includes revision rounds, and we review previews with you before final rendering.",
  },
  {
    q: "Do you provide source files?",
    a: "Final renders are delivered in high resolution. Scene source files are included in the full production package.",
  },
  {
    q: "Is a deposit required?",
    a: "A deposit secures your production slot, with the balance due on delivery.",
  },
  {
    q: "Can we order more frames later?",
    a: "Yes. Scenes are kept on file, so new angles, colours and formats can be added later.",
  },
]

const footer = [
  { title: "Work", links: ["CGI", "Motion", "3D renders", "Commercial"] },
  { title: "Info", links: ["Packages", "Journal", "FAQ", "Wallpapers"] },
  {
    title: "Contact",
    links: ["Share your brief", "Instagram", "X", "Newsletter"],
  },
]

export default function LandingPhotography02() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-blue-600 text-white text-sm">
              L
            </span>
            <span className="font-serif text-lg font-normal">designali</span>
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
              Book a call
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-28">
          <div className="flex items-center justify-between border-b pb-4 text-xs tracking-widest text-muted-foreground uppercase">
            <span>Brand visuals and wallpapers</span>
            <span className="hidden sm:inline">
              Brand visuals, gently done.
            </span>
          </div>
          <h1 className="mt-12 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl font-serif font-normal">
            {"The small details, "}
            <span className="text-blue-600 dark:text-blue-400">
              rendered beautifully
            </span>
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-lg text-lg leading-8 text-muted-foreground">
              Soft, colourful CGI scenes and wallpapers for brands, with gentle
              art direction that lets your product simply be itself.
            </p>
            <div className="md:justify-self-end">
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Book a call
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  See visuals
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <HeroVisual />
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4">
          {stats.slice(0, 4).map((stat, i) => (
            <div
              key={stat.label}
              className={`py-12 ${i > 0 ? "lg:border-l lg:pl-8" : ""} ${i % 2 === 1 ? "border-l pl-6 lg:pl-8" : ""} `}
            >
              <div className="text-4xl font-semibold tracking-tight md:text-5xl font-serif font-normal">
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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                The experience
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal mt-3">
                Calm, considered and completely about your brand
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                From the first call to the final frame, every step is designed
                so your team can relax while the visuals come together.
              </p>
            </div>
          </div>
          <div className="divide-y border-y">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr]"
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl">{feature.title}</h3>
                  <p className="mt-2 leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal">
                Selected visuals
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                A small selection of recent CGI and motion work. Full sets are
                shared privately with each client on request.
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
                  <img src={item.image} alt={item.name} className="absolute inset-0 size-full object-cover" />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-zinc-900 backdrop-blur">
                    {item.tag}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-medium font-serif text-lg">
                      {item.name}
                    </h3>
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
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            Kind words from clients
          </p>
          {testimonials.slice(0, 1).map((t) => (
            <figure key={t.name} className="mt-10">
              <blockquote className="font-serif text-3xl leading-snug text-balance md:text-5xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-10 text-sm">
                <span className="font-medium">{t.name}</span>
                <span className="text-muted-foreground"> · {t.role}</span>
              </figcaption>
            </figure>
          ))}
          <div className="mt-16 grid gap-6 border-t pt-12 text-left md:grid-cols-2">
            {testimonials.slice(1).map((t) => (
              <figure key={t.name}>
                <blockquote className="leading-7 text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium">
                  {t.name}{" "}
                  <span className="font-normal text-muted-foreground">
                    · {t.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal">
              How a production works
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-foreground pt-6"
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
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal">
              Visual packages
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Every package includes a planning call, hand-finished renders
              and a private online gallery to download and share.
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
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal">
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
      <section className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl font-serif font-normal">
              Your launch only happens once
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Productions book out weeks ahead. Reserve your slot for the
              season.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Book a call
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#" />}
            >
              See visuals
            </Button>
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
                L
              </span>
              <span className="font-serif text-lg font-normal">
                designali
              </span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Brand visuals, gently done.
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
              © {new Date().getFullYear()} designali. All rights reserved.
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
          <img src={item.image} alt={item.name} className="absolute inset-0 size-full object-cover" />
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
