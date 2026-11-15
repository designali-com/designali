import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clapperboard,
  Compass,
  Megaphone,
  MonitorSmartphone,
  Palette,
  Plus,
  Quote,
  Sparkles,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Work", "Services", "Studio", "Journal", "Careers"]

const logos = [
  "Mercer & Co",
  "Atelier Nord",
  "Bloom Coffee",
  "Vela Motors",
  "Copperleaf",
  "Hollis Hotels",
  "Juniper Bank",
  "Strata Outdoor",
]

const features = [
  {
    icon: Compass,
    title: "Brand strategy",
    description:
      "Positioning, naming and messaging grounded in research with your customers and your market.",
  },
  {
    icon: Palette,
    title: "Identity design",
    description:
      "Logos, type, colour and motion systems built to flex from a favicon to a billboard.",
  },
  {
    icon: MonitorSmartphone,
    title: "Websites and products",
    description:
      "Fast, accessible websites and digital products designed and engineered by the same team.",
  },
  {
    icon: Clapperboard,
    title: "Film and motion",
    description:
      "Launch films, product animations and social content produced by our in-house studio.",
  },
  {
    icon: Megaphone,
    title: "Campaigns",
    description:
      "Integrated campaigns across digital, out-of-home and social that move real numbers.",
  },
]

const stats = [
  { value: "38", label: "Industry awards" },
  { value: "92%", label: "Clients who return" },
  { value: "45", label: "Designers and engineers" },
  { value: "3", label: "Studios worldwide" },
]

const steps = [
  {
    title: "Discover",
    description:
      "Workshops, stakeholder interviews and audits to understand your business, audience and goals.",
  },
  {
    title: "Define",
    description:
      "A clear strategy, creative direction and roadmap that everyone signs off before design begins.",
  },
  {
    title: "Design and build",
    description:
      "Iterative sprints with weekly reviews, so you see progress and steer direction throughout.",
  },
  {
    title: "Launch and grow",
    description:
      "We launch together, measure results and keep optimising with an ongoing partnership.",
  },
]

const showcase = [
  {
    name: "Juniper Bank",
    meta: "Rebrand and digital banking app",
    tag: "Branding",
    price: "2025",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Vela Motors",
    meta: "Website and launch campaign",
    tag: "Web",
    price: "2025",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Bloom Coffee",
    meta: "Packaging for a national rollout",
    tag: "Packaging",
    price: "2024",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
  {
    name: "Hollis Hotels",
    meta: "Booking experience redesign",
    tag: "Product",
    price: "2024",
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
  },
  {
    name: "Strata Outdoor",
    meta: "Brand film and social content",
    tag: "Film",
    price: "2024",
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
  {
    name: "Atelier Nord",
    meta: "Identity and e-commerce store",
    tag: "Commerce",
    price: "2023",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
]

const testimonials = [
  {
    quote:
      "Senior people in every meeting, honest timelines and work that exceeded what we imagined. Rare combination.",
    name: "Freya Lindqvist",
    role: "Founder, Atelier Nord",
  },
  {
    quote:
      "The packaging redesign lifted shelf sales by thirty percent. We have since hired them for three more lines.",
    name: "Sam Achebe",
    role: "Brand Director, Bloom Coffee",
  },
  {
    quote:
      "They built us a design system our engineers actually use. Shipping new pages now takes days, not weeks.",
    name: "Chloe Bennett",
    role: "VP Product, Copperleaf",
  },
]

const tiers = [
  {
    name: "Sprint",
    price: "$18k",
    period: "fixed",
    description: "A focused two-week engagement for a defined problem.",
    features: [
      "Discovery workshop",
      "One core deliverable",
      "Two review rounds",
      "Handover documentation",
    ],
    cta: "Book a sprint",
  },
  {
    name: "Project",
    price: "From $60k",
    period: "per project",
    description: "End-to-end brand or product launches.",
    features: [
      "Strategy and creative direction",
      "Dedicated project lead",
      "Design and development",
      "Weekly reviews",
      "30 days of post-launch support",
    ],
    cta: "Start a project",
  },
  {
    name: "Partnership",
    price: "$25k",
    period: "/month",
    description: "An embedded team for ongoing work.",
    features: [
      "Dedicated multidisciplinary team",
      "Quarterly strategy sessions",
      "Unlimited requests in scope",
      "Monthly performance reports",
    ],
    cta: "Let us talk",
  },
]

const faqs = [
  {
    q: "Do you work with in-house teams?",
    a: "Often. We are happy to lead, to collaborate or to coach your team so they can carry the work forward.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes. We have studios in three cities and work with clients worldwide, meeting in person for key workshops.",
  },
  {
    q: "Who owns the work?",
    a: "You do. All intellectual property transfers to you on final payment, including source files and code.",
  },
  {
    q: "What does a typical project cost?",
    a: "Brand identity projects usually range from $60k to $150k, and websites from $80k to $250k depending on scope.",
  },
  {
    q: "What size of companies do you work with?",
    a: "Mostly growth-stage startups and established mid-market brands, though we take on a few founder-led early projects each year.",
  },
]

const footer = [
  { title: "Studio", links: ["About", "Team", "Careers", "Press"] },
  { title: "Services", links: ["Branding", "Digital", "Film", "Campaigns"] },
  {
    title: "Connect",
    links: ["Instagram", "LinkedIn", "Dribbble", "Newsletter"],
  },
]

export default function LandingAgency09() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-teal-600 text-white text-sm">
              K
            </span>
            <span className="">Kiln Collective</span>
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
              Contact
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Book a shoot
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-teal-600 dark:text-teal-400" />
              Product photography and video
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl ">
              {"Product shoots that make "}
              <span className="text-teal-600 dark:text-teal-400">
                scrolling stop
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              Kiln Collective shoots e-commerce stills, lifestyle sets and
              short-form video in our London studio, with edited assets back in
              five days.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Book a shoot
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Browse the portfolio
              </Button>
            </div>
          </div>
          <div className="mt-14 grid gap-3 lg:grid-cols-[2fr_1fr]">
            <HeroVisual />
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {stats.slice(0, 3).map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col justify-between rounded-2xl border p-5 ${i === 0 ? "bg-teal-500/10" : "bg-muted/40"} ${i === 2 ? "col-span-2 lg:col-span-1" : ""}`}
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
            Brands we have partnered with
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
            <p className="text-sm font-medium text-teal-600 dark:text-teal-400">
              Services
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Strategy, design and technology under one roof
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              We partner with ambitious brands from the first workshop to launch
              day and beyond, with senior people on every project.
            </p>
          </div>
          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border p-6 transition-colors hover:bg-muted/40 ${i === 0 ? "bg-teal-500/10 md:col-span-2 md:row-span-2 md:p-10" : ""} ${i === 3 ? "md:col-span-2" : ""}`}
              >
                <feature.icon
                  className={`${i === 0 ? "size-8" : "size-5"} text-teal-600 dark:text-teal-400`}
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
                Selected work
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                A few recent projects for clients who wanted to be remembered,
                not just noticed.
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
                <Quote className="size-6 text-teal-600 dark:text-teal-400" />
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
              How we work together
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
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
              Clear engagement models with fixed scopes or dedicated teams. No
              surprise invoices, ever.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-teal-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-teal-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-teal-600 dark:text-teal-400" />
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
              Before you get in touch
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-teal-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-teal-500/25 via-emerald-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Fresh content for your next drop
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us your products and channels and we will quote a full shoot
              within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Book a shoot
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Browse the portfolio
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
              <span className="flex size-7 items-center justify-center rounded-md bg-teal-600 text-white text-sm">
                K
              </span>
              <span className="">Kiln Collective</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Content made to convert.
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
              © {new Date().getFullYear()} Kiln Collective. All rights reserved.
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
