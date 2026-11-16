import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Camera,
  Check,
  Clock,
  MapPin,
  Plus,
  ShieldCheck,
  Sparkles,
  Sun,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Work", "Services", "Packages", "Journal", "Contact"]

const features = [
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
  {
    icon: BookOpen,
    title: "Wallpaper packs",
    description:
      "Desktop and mobile wallpapers rendered from your brand scenes, ready to share with your community.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable delivery",
    description:
      "Versioned files, clear naming and organised folders for every frame we deliver.",
  },
  {
    icon: Camera,
    title: "Art direction",
    description:
      "Every render starts with a clear concept, so your visuals feel intentional rather than generic.",
  },
  {
    icon: Sun,
    title: "Light-first rendering",
    description:
      "Scenes are lit like a real studio, with soft shadows and reflections that make products feel tangible.",
  },
]

const stats = [
  { value: "12", label: "Formats delivered" },
  { value: "9", label: "Motion loops delivered" },
  { value: "1,200+", label: "Visuals rendered" },
  { value: "12", label: "Years creating CGI" },
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
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
    image: "/img/ask/ask1.jpg",
  },
  {
    name: "Colourful Spheres",
    meta: "CGI · 85 frames",
    tag: "Brand Visuals",
    price: "2026",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
    image: "/img/ask/ask2.jpg",
  },
  {
    name: "Dalim Visuals Archive",
    meta: "Editorial · 42 frames",
    tag: "Editorial",
    price: "2026",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-chart-1 dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
    image: "/images/templates/dalim-visuals-old.jpg",
  },
  {
    name: "Wallpaper Collection",
    meta: "Wallpapers · 21 frames",
    tag: "Wallpapers",
    price: "2025",
    tile: "bg-gradient-to-br from-muted via-border to-muted-foreground dark:from-muted dark:via-card dark:to-card",
    image: "/stock/wallpaper-1.jpg",
  },
  {
    name: "Studio Product Set",
    meta: "Product CGI · 24 renders",
    tag: "Commercial",
    price: "2025",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-chart-1 dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
    image: "/img/ask/ask5.jpg",
  },
  {
    name: "Device Mockups",
    meta: "3D · 60 renders",
    tag: "Product CGI",
    price: "2025",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
    image: "/img/ask/ask8.jpg",
  },
]

const testimonials = [
  {
    quote:
      "Calm, kind and incredibly organised. We never once worried about the launch deadline.",
    name: "Sam and Priya",
    role: "Founders, design startup",
  },
  {
    quote:
      "The wallpaper set is the most shared thing we have ever posted. Our community still asks for more.",
    name: "Hannah",
    role: "Community lead",
  },
  {
    quote:
      "The renders looked more real than our photo shoot ever did, and they arrived early. Our launch page finally pops.",
    name: "Amelia",
    role: "Founder, product startup",
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
    q: "Is a deposit required?",
    a: "A deposit secures your production slot, with the balance due on delivery.",
  },
  {
    q: "Can we order more frames later?",
    a: "Yes. Scenes are kept on file, so new angles, colours and formats can be added later.",
  },
  {
    q: "How far in advance should I book?",
    a: "Launch productions are usually booked four to eight weeks ahead. Smaller product sets can start within two weeks.",
  },
  {
    q: "What do you need from us?",
    a: "Product photos, CAD files or sketches, plus your brand guidelines. We send a short brief template after booking.",
  },
  {
    q: "What if we need changes?",
    a: "Every package includes revision rounds, and we review previews with you before final rendering.",
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

export default function LandingPhotography05() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-background/10 bg-foreground text-background/80 px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          Now booking motion and CGI for product launches
          <ArrowRight className="size-3.5" />
        </a>
      </div>
      <header className="bg-foreground text-background sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-background text-foreground text-sm">
              H
            </span>
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
              Check availability
            </Button>
            <Button
              size="sm"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Book a call
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
              Mockups in days
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-7xl ">
              {"Device mockups for your "}
              <span className="text-background/60">whole product</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-background/65">
              Designali renders iPhone, iPad, MacBook and Studio Display mockups of your product
              and delivers retouched, on-brand visuals within days.
            </p>
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
                See examples
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
            <p className="text-sm font-medium text-primary dark:text-primary">
              The experience
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Calm, considered and completely about your brand
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              From the first call to the final render, every step is designed so
              your team can relax while the visuals come together.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-primary dark:text-primary" />
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
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              How a production works
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
                              : "mt-0.5 size-4 shrink-0 text-primary dark:text-primary"
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
            <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl ">
              Make your product page look as good as your product
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Fixed pricing per scene, a consistent look, and zero disruption
              to your team.
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
              See examples
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
              <span className="flex size-7 items-center justify-center rounded-md bg-background text-foreground text-sm">
                H
              </span>
              <span className="">designali</span>
            </a>
            <p className="max-w-xs text-sm text-background/60">
              Consistent mockups, done fast.
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
              © {new Date().getFullYear()} designali. All rights reserved.
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
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {showcase.slice(0, 3).map((item, i) => (
        <div
          key={item.name}
          className={`relative overflow-hidden rounded-2xl ${item.tile} ${i === 0 ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[3/4]" : "aspect-[3/4]"}`}
        >
          <img src={item.image} alt={item.name} className="absolute inset-0 size-full object-cover" />
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
