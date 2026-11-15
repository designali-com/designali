import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Headset,
  Leaf,
  MapPinned,
  Plus,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const navLinks = ["Destinations", "Journeys", "Experiences", "Reviews", "About"]

const logos = [
  "Far Horizons",
  "Condé Traveller",
  "The Wanderer",
  "Atlas Weekly",
  "Outbound",
  "Lonely Coast",
  "Meridian",
  "Passport Daily",
]

const features = [
  {
    icon: Wallet,
    title: "Transparent pricing",
    description:
      "One price covers stays, transfers, guides and activities. No surprise supplements at the hotel desk.",
  },
  {
    icon: MapPinned,
    title: "Local specialists",
    description:
      "Our guides live in the places they show you, so you eat where locals eat and skip the tourist traps.",
  },
  {
    icon: Users,
    title: "Small groups only",
    description:
      "Never more than 12 travellers per departure, which means more time with guides and less time in queues.",
  },
  {
    icon: ShieldCheck,
    title: "Fully protected bookings",
    description:
      "Every trip is bonded and covered by financial protection, so your money is safe whatever happens.",
  },
  {
    icon: Headset,
    title: "24/7 on-trip support",
    description:
      "A real person answers within minutes, day or night, whether it is a missed connection or a lost bag.",
  },
  {
    icon: Leaf,
    title: "Lower-impact travel",
    description:
      "We favour rail over short flights, family-run stays and carbon-balanced itineraries by default.",
  },
]

const stats = [
  { value: "92", label: "Countries covered" },
  { value: "4.9/5", label: "Average trip rating" },
  { value: "12", label: "Max group size" },
  { value: "18 yrs", label: "Designing journeys" },
]

const steps = [
  {
    title: "Tell us your idea",
    description:
      "Share where you want to go, when, and how you like to travel. A specialist replies within one working day.",
  },
  {
    title: "Get a tailored itinerary",
    description:
      "Receive a day-by-day plan with stays, guides and prices. Adjust anything until it feels right.",
  },
  {
    title: "Book with a small deposit",
    description:
      "Secure your trip with 15% down. The balance is due eight weeks before you leave.",
  },
  {
    title: "Travel with support",
    description:
      "Your app holds every ticket and contact, and our team is on call throughout the journey.",
  },
]

const showcase = [
  {
    name: "Kyoto and the Japanese Alps",
    meta: "11 days · Small group · Rail",
    tag: "Bestseller",
    price: "From $4,290",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Patagonia Wilderness Trek",
    meta: "14 days · Active · Lodges",
    tag: "Adventure",
    price: "From $5,850",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Amalfi Coast Slow Travel",
    meta: "8 days · Private · Boutique",
    tag: "Couples",
    price: "From $3,140",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Serengeti Migration Safari",
    meta: "9 days · Family · Tented camps",
    tag: "Limited",
    price: "From $6,720",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Iceland Ring Road",
    meta: "10 days · Self-drive · Guesthouses",
    tag: "Self-guided",
    price: "From $2,980",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Morocco Atlas and Desert",
    meta: "12 days · Small group · Riads",
    tag: "New",
    price: "From $2,460",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
]

const testimonials = [
  {
    quote:
      "When our ferry was cancelled, support had us rebooked and a hotel sorted before we had even finished complaining.",
    name: "Rafael Gomez",
    role: "Greek Islands hopping, July",
  },
  {
    quote:
      "I was nervous about travelling solo at 64. The small group became friends and the pace was perfect.",
    name: "Margaret Hughes",
    role: "Peru and the Sacred Valley",
  },
  {
    quote:
      "The safari lodges were extraordinary, but it was the guide's knowledge of the animals that made it unforgettable.",
    name: "Kwame Asante",
    role: "Tanzania family safari",
  },
]

const tiers = [
  {
    name: "Small group",
    price: "$2,460",
    period: "/person",
    description: "Scheduled departures with up to 12 travellers.",
    features: [
      "Expert local guide",
      "Handpicked stays",
      "Most meals included",
      "All transfers",
      "Shared experiences",
    ],
    cta: "Browse departures",
  },
  {
    name: "Private",
    price: "$3,900",
    period: "/person",
    description: "Your own guide and driver on dates you choose.",
    features: [
      "Any start date",
      "Private guide and vehicle",
      "Flexible daily pace",
      "Upgraded rooms",
      "Dedicated trip manager",
    ],
    cta: "Plan a private trip",
  },
  {
    name: "Bespoke",
    price: "Custom",
    period: "",
    description: "A journey designed from scratch by a specialist.",
    features: [
      "Unlimited itinerary changes",
      "Multi-country routing",
      "Luxury and remote stays",
      "Special occasion planning",
      "Concierge on call",
    ],
    cta: "Speak to a specialist",
  },
]

const faqs = [
  {
    q: "What happens if I need to cancel?",
    a: "Cancel more than 60 days before departure and you only lose your deposit. We strongly recommend travel insurance for later changes.",
  },
  {
    q: "How fit do I need to be?",
    a: "Every trip has an activity rating from one to five. Most journeys are rated two, which means a few hours of easy walking each day.",
  },
  {
    q: "Can solo travellers join?",
    a: "Absolutely. Around a third of our travellers come alone, and we offer room-share matching to avoid single supplements.",
  },
  {
    q: "Do you cater for dietary requirements?",
    a: "Yes. Tell us when you book and we will brief every guide, hotel and restaurant on your itinerary in advance.",
  },
  {
    q: "Is my booking financially protected?",
    a: "Yes. All payments are held in a trust account and every trip is covered by full financial failure protection.",
  },
]

const footer = [
  {
    title: "Travel",
    links: [
      "Destinations",
      "Small groups",
      "Private trips",
      "Last-minute deals",
    ],
  },
  {
    title: "Company",
    links: ["About us", "Our guides", "Responsible travel", "Careers"],
  },
  {
    title: "Support",
    links: ["Contact", "Booking terms", "Travel insurance", "FAQs"],
  },
]

export default function LandingTravel08() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b bg-muted/50 text-muted-foreground px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          Members saved an average of $410 per ticket last year
          <ArrowRight className="size-3.5" />
        </a>
      </div>
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-blue-600 text-white text-sm">
              F
            </span>
            <span className="">Fareglide</span>
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
              My trips
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Get free alerts
            </Button>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden border-b">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-blue-600 dark:text-blue-400" />
              Cheap flight alerts
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl ">
              {"Fly for "}
              <span className="text-blue-600 dark:text-blue-400">
                half the price
              </span>
              {" you usually pay"}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              Fareglide scans thousands of fares daily and emails you mistake
              fares and flash sales from your home airport before they vanish.
            </p>
            <form
              action="#"
              className="flex w-full max-w-md flex-col gap-2 sm:flex-row "
            >
              <Input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="h-10 bg-background"
              />
              <Button type="submit" size="lg">
                Get free alerts
                <ArrowRight />
              </Button>
            </form>
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-blue-500/25 via-indigo-500/10 to-transparent blur-3xl" />
            <HeroVisual />
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm text-muted-foreground">
            As featured in
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
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Why travel with us
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Trips planned by people who have been there
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Every itinerary is designed by a local specialist, priced
              transparently and supported around the clock from departure to
              return.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-background p-6 shadow-xs"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-blue-500/10">
                  <feature.icon className="size-5 text-blue-600 dark:text-blue-400" />
                </span>
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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              From first idea to boarding pass
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
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Journeys departing this season
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Small-group and private trips with limited places. Prices
                include stays, guides and most meals.
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
      <section className="border-b ">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Stories from recent travellers
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
              Choose how you want to travel
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Join a scheduled small group, go private on your own dates, or let
              a specialist design everything from scratch.
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-blue-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500/25 via-indigo-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Never overpay for a flight again
            </h2>
            <p className="text-lg text-muted-foreground">
              Enter your email and home airport. Your first deal alert usually
              arrives within a week.
            </p>
            <form
              action="#"
              className="flex w-full max-w-md flex-col gap-2 sm:flex-row mx-auto"
            >
              <Input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="h-10 bg-background"
              />
              <Button type="submit" size="lg">
                Get free alerts
                <ArrowRight />
              </Button>
            </form>
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
                F
              </span>
              <span className="">Fareglide</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Better fares, fewer tabs.
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
              © {new Date().getFullYear()} Fareglide. All rights reserved.
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
