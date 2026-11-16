import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  CalendarCheck,
  Check,
  Leaf,
  MapPinned,
  Plus,
  Sparkles,
  Users,
  Wallet,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const navLinks = ["Destinations", "Journeys", "Experiences", "Reviews", "About"]

const features = [
  {
    icon: Leaf,
    title: "Lower-impact travel",
    description:
      "We favour rail over short flights, family-run stays and carbon-balanced itineraries by default.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible dates",
    description:
      "Change your departure up to 30 days before travel at no cost, as many times as you need.",
  },
  {
    icon: BedDouble,
    title: "Handpicked stays",
    description:
      "Boutique hotels, guesthouses and lodges we have personally inspected for comfort and character.",
  },
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
]

const stats = [
  { value: "18 yrs", label: "Designing journeys" },
  { value: "96%", label: "Would travel with us again" },
  { value: "48,000+", label: "Travellers hosted" },
  { value: "92", label: "Countries covered" },
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
    tile: "bg-gradient-to-br from-primary/10 via-primary/20 to-chart-1 dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Patagonia Wilderness Trek",
    meta: "14 days · Active · Lodges",
    tag: "Adventure",
    price: "From $5,850",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Amalfi Coast Slow Travel",
    meta: "8 days · Private · Boutique",
    tag: "Couples",
    price: "From $3,140",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Serengeti Migration Safari",
    meta: "9 days · Family · Tented camps",
    tag: "Limited",
    price: "From $6,720",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Iceland Ring Road",
    meta: "10 days · Self-drive · Guesthouses",
    tag: "Self-guided",
    price: "From $2,980",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-chart-1 dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Morocco Atlas and Desert",
    meta: "12 days · Small group · Riads",
    tag: "New",
    price: "From $2,460",
    tile: "bg-gradient-to-br from-muted via-border to-muted-foreground dark:from-muted dark:via-card dark:to-card",
  },
]

const testimonials = [
  {
    quote:
      "We planned our honeymoon in two calls. Every transfer was on time and every room had a view.",
    name: "Leah and Sam Porter",
    role: "Amalfi Coast, September",
  },
  {
    quote:
      "Taking the train across Europe instead of flying was the best decision. The itinerary flowed beautifully.",
    name: "Jonas Weber",
    role: "Rail journey, Paris to Vienna",
  },
  {
    quote:
      "Our guide in Kyoto took us to a tiny tofu restaurant we would never have found. Every single day felt considered.",
    name: "Hannah Clarke",
    role: "Travelled to Japan, April",
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
    q: "Do you cater for dietary requirements?",
    a: "Yes. Tell us when you book and we will brief every guide, hotel and restaurant on your itinerary in advance.",
  },
  {
    q: "Is my booking financially protected?",
    a: "Yes. All payments are held in a trust account and every trip is covered by full financial failure protection.",
  },
  {
    q: "Are flights included?",
    a: "International flights are not included by default, but our team can book them for you and connect them to your itinerary.",
  },
  {
    q: "What happens if I need to cancel?",
    a: "Cancel more than 60 days before departure and you only lose your deposit. We strongly recommend travel insurance for later changes.",
  },
  {
    q: "How fit do I need to be?",
    a: "Every trip has an activity rating from one to five. Most journeys are rated two, which means a few hours of easy walking each day.",
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

export default function LandingTravel05() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-background/10 bg-foreground text-background/80 px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          New location: Cape Town opens in February
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
              N
            </span>
            <span className="">Nomad Nest</span>
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
              My trips
            </Button>
            <Button
              size="sm"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Join the waitlist
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
              Work from anywhere
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-7xl ">
              {"Month-long stays for "}
              <span className="text-background/60">remote workers</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-background/65">
              Nomad Nest curates furnished homes with fast Wi-Fi, coworking
              access and a community of professionals in Lisbon, Bali, Medellín
              and Tbilisi.
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
                className="h-10 border-background/20 bg-background/10 text-background placeholder:text-background/50"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Join the waitlist
                <ArrowRight />
              </Button>
            </form>
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
              From first idea to boarding pass
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
              Stories from recent travellers
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
              Your desk with a view is waiting
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Get first access to new locations and member-only rates.
            </p>
          </div>
          <form
            action="#"
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row "
          >
            <Input
              type="email"
              required
              placeholder="you@company.com"
              aria-label="Email address"
              className="h-10 border-background/20 bg-background/10 text-background placeholder:text-background/50"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Join the waitlist
              <ArrowRight />
            </Button>
          </form>
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
                N
              </span>
              <span className="">Nomad Nest</span>
            </a>
            <p className="max-w-xs text-sm text-background/60">
              Live well, work anywhere.
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
              © {new Date().getFullYear()} Nomad Nest. All rights reserved.
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
