import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Camera,
  ChartLine,
  Check,
  Landmark,
  MapPin,
  Plus,
  ShieldCheck,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Buy", "Rent", "Sell", "Agents", "Insights"]

const logos = [
  "Chase",
  "Wells Fargo",
  "Matterport",
  "Zillow",
  "Realtor.com",
  "Compass",
  "Redfin",
  "Rocket Mortgage",
]

const features = [
  {
    icon: Landmark,
    title: "Mortgage support",
    description:
      "Compare rates from 40+ lenders and get pre-approved in as little as 24 hours.",
  },
  {
    icon: Calendar,
    title: "Flexible viewings",
    description:
      "Book viewings in the evenings and at weekends, in person or by live video.",
  },
  {
    icon: ShieldCheck,
    title: "Verified listings",
    description:
      "Every property is checked by an agent, so what you see is exactly what you get.",
  },
  {
    icon: MapPin,
    title: "Local market experts",
    description:
      "Agents who live in the neighbourhoods they sell, with an average of 12 years experience.",
  },
  {
    icon: ChartLine,
    title: "Accurate valuations",
    description:
      "Pricing backed by recent sales data, so your home sells fast without leaving money on the table.",
  },
  {
    icon: Camera,
    title: "Professional media",
    description:
      "Photography, floor plans and 3D tours included with every listing at no extra cost.",
  },
]

const stats = [
  { value: "4.9/5", label: "Client rating" },
  { value: "$2.8B", label: "Property sold last year" },
  { value: "21 days", label: "Average time to sale" },
  { value: "102%", label: "Of asking price achieved" },
]

const steps = [
  {
    title: "Book a consultation",
    description:
      "Meet a local agent to talk budget, timeline and the neighbourhoods you love.",
  },
  {
    title: "Tour your shortlist",
    description:
      "View homes in person or by video, with honest notes on every property.",
  },
  {
    title: "Make a strong offer",
    description:
      "We use recent sales data to help you offer confidently and negotiate the best terms.",
  },
  {
    title: "Close and move in",
    description:
      "We coordinate inspections, lenders and lawyers right up to handing over the keys.",
  },
]

const showcase = [
  {
    name: "Hillside Modern Residence",
    meta: "4 bed · 3 bath · 280 m²",
    tag: "New listing",
    price: "$1,450,000",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Riverside Loft",
    meta: "2 bed · 2 bath · 118 m²",
    tag: "Open house",
    price: "$725,000",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Garden Townhouse",
    meta: "3 bed · 2.5 bath · 190 m²",
    tag: "Price reduced",
    price: "$899,000",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Penthouse at The Arbor",
    meta: "3 bed · 3 bath · 210 m²",
    tag: "Exclusive",
    price: "$2,300,000",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Coastal Cottage",
    meta: "2 bed · 1 bath · 92 m²",
    tag: "Sea view",
    price: "$640,000",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Downtown Studio",
    meta: "1 bed · 1 bath · 48 m²",
    tag: "For rent",
    price: "$2,100/mo",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
]

const testimonials = [
  {
    quote:
      "Mortgage pre-approval in one day, offer accepted in a week. I still cannot believe how smooth it was.",
    name: "Sasha Ivanova",
    role: "Bought a condo",
  },
  {
    quote:
      "We had four offers in the first weekend and sold above asking. The valuation was spot on and the photos were stunning.",
    name: "Emily and Josh Turner",
    role: "Sold in Brooklyn",
  },
  {
    quote:
      "As first-time buyers we were terrified. Our agent explained every step and got us the house we had almost given up on.",
    name: "Priya Shah",
    role: "First-time buyer",
  },
]

const tiers = [
  {
    name: "Essentials",
    price: "1.5%",
    period: "of sale price",
    description: "For confident sellers who want expert marketing.",
    features: [
      "Professional photography",
      "Listing on all major portals",
      "Online offer management",
      "Sale progression support",
    ],
    cta: "Get a valuation",
  },
  {
    name: "Full service",
    price: "2.5%",
    period: "of sale price",
    description: "Our most popular, fully managed sale.",
    features: [
      "Everything in Essentials",
      "Accompanied viewings",
      "3D tour and floor plan",
      "Dedicated negotiator",
      "Weekly progress reports",
    ],
    cta: "Book an agent",
  },
  {
    name: "Premier",
    price: "Custom",
    period: "",
    description: "For luxury and architect-designed homes.",
    features: [
      "Bespoke marketing campaign",
      "Print and film production",
      "Private buyer network",
      "International exposure",
      "Senior partner as lead agent",
    ],
    cta: "Speak to a partner",
  },
]

const faqs = [
  {
    q: "Can I view homes outside office hours?",
    a: "Yes. We run viewings on weekday evenings and weekends, as well as live video tours.",
  },
  {
    q: "How much is my home worth?",
    a: "Book a free valuation and a local agent will visit, review recent comparable sales and give you a written estimate within 48 hours.",
  },
  {
    q: "How long does it take to sell?",
    a: "Our homes sell in an average of 21 days, though timing depends on price, location and the season.",
  },
  {
    q: "Do I have to sign a long contract?",
    a: "No. Our agreements run for 12 weeks and you can cancel with 14 days notice.",
  },
  {
    q: "Can you help me get a mortgage?",
    a: "Yes. Our in-house advisers compare rates from more than 40 lenders and can arrange pre-approval quickly.",
  },
]

const footer = [
  { title: "Property", links: ["Buy", "Rent", "Sell", "New developments"] },
  {
    title: "Services",
    links: ["Valuations", "Mortgages", "Property management", "Commercial"],
  },
  {
    title: "Company",
    links: ["Our agents", "Market insights", "Careers", "Contact"],
  },
]

export default function LandingRealEstate06() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-orange-600 text-white text-sm">
              L
            </span>
            <span className="">Ledgerstone</span>
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
              Saved homes
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Find an office
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-x border-b px-6 py-3 text-xs text-muted-foreground">
            <span>Flexible office leases</span>
            <span className="hidden sm:inline">
              Workspace without the long lease.
            </span>
          </div>
          <div className="border-x px-6 py-16 md:py-28">
            <h1 className="max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"Office space that "}
              <span className="text-orange-600 dark:text-orange-400">
                grows with your team
              </span>
            </h1>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                Ledgerstone leases fitted offices from 10 to 300 desks across
                downtown, with flexible terms and no upfront fit-out costs.
              </p>
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Find an office
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  Book a tour
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
            Partnered with
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
              Why choose us
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              A smarter way to buy, sell and rent
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Local experts, accurate data and a process that keeps you informed
              from the first viewing to the final signature.
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
                Featured listings
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Hand-picked homes, updated daily. Book a viewing in person or
                take a 3D tour from your sofa.
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
              Homeowners who trusted us
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
              From first viewing to keys in hand
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
              Fair fees, clearly explained
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Choose the level of service that suits your sale. No hidden
              charges and no long tie-in contracts.
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
              Buying and selling questions
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-orange-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-orange-500/25 via-amber-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Moving your team this year?
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us your headcount and budget and we will shortlist three
              offices within 48 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Find an office
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Book a tour
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
              <span className="flex size-7 items-center justify-center rounded-md bg-orange-600 text-white text-sm">
                L
              </span>
              <span className="">Ledgerstone</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Workspace without the long lease.
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
              © {new Date().getFullYear()} Ledgerstone. All rights reserved.
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
