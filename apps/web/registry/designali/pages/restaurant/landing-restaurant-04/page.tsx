import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Gift,
  Plus,
  Quote,
  Salad,
  Sparkles,
  Truck,
  Users,
  Wheat,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Menu", "About", "Private dining", "Gift cards", "Visit"]

const logos = [
  "The Infatuation",
  "Time Out",
  "Food & Wine",
  "The Guardian",
  "Condé Nast",
  "Michelin Guide",
  "Eater",
  "Bon Appétit",
]

const features = [
  {
    icon: Wheat,
    title: "Bread baked daily",
    description:
      "Sourdough made from heritage grains, fermented for 48 hours and baked every morning.",
  },
  {
    icon: Users,
    title: "Private dining",
    description:
      "A private room for up to 24 guests, with a dedicated host and a bespoke menu.",
  },
  {
    icon: Salad,
    title: "Every diet welcome",
    description:
      "Vegetarian, vegan and gluten-free versions of most dishes, without compromise.",
  },
  {
    icon: Truck,
    title: "Delivery and pickup",
    description:
      "Order our favourite dishes for pickup or delivery within three miles.",
  },
  {
    icon: Gift,
    title: "Gift cards",
    description:
      "Give the gift of a great meal, with digital gift cards delivered instantly.",
  },
]

const stats = [
  { value: "200+", label: "Wines by the bottle" },
  { value: "4.8/5", label: "Guest rating" },
  { value: "65", label: "Seats in the dining room" },
  { value: "1 Michelin", label: "Star since 2021" },
]

const steps = [
  {
    title: "Reserve a table",
    description:
      "Book online up to 60 days ahead. We hold a few tables for walk-ins every evening.",
  },
  {
    title: "Tell us your needs",
    description:
      "Add allergies, dietary requirements or a special occasion to your booking.",
  },
  {
    title: "Join us for dinner",
    description:
      "Arrive a little early for a drink at the bar while we prepare your table.",
  },
  {
    title: "Take a taste home",
    description:
      "Pick up sourdough, preserves and gift cards from our counter on your way out.",
  },
]

const showcase = [
  {
    name: "Wood-roasted Hake",
    meta: "Brown butter, sea herbs, smoked mussels",
    tag: "Chef's pick",
    price: "$34",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
  {
    name: "Heritage Beetroot",
    meta: "Whipped goat curd, hazelnut, honey",
    tag: "Vegetarian",
    price: "$16",
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
  },
  {
    name: "Dry-aged Ribeye",
    meta: "Bone marrow, charred onion, chips",
    tag: "For two",
    price: "$78",
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
  {
    name: "Hand-cut Tagliatelle",
    meta: "Wild mushrooms, aged parmesan, truffle",
    tag: "Signature",
    price: "$26",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Sourdough and Butter",
    meta: "48-hour heritage grain loaf",
    tag: "Baked daily",
    price: "$8",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Burnt Honey Tart",
    meta: "Crème fraîche, poached rhubarb",
    tag: "Dessert",
    price: "$13",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
]

const testimonials = [
  {
    quote:
      "Relaxed, warm and genuinely delicious. It feels like eating at a friend's house who happens to be a brilliant chef.",
    name: "Sam Okoro",
    role: "Food writer",
  },
  {
    quote:
      "The vegan tasting menu was so good my meat-loving husband ordered it too on our second visit.",
    name: "Elena Rossi",
    role: "Guest",
  },
  {
    quote:
      "The sommelier found us a bottle under $60 that beat anything we have ever ordered. Great value, zero snobbery.",
    name: "Patrick Walsh",
    role: "Wine lover",
  },
]

const tiers = [
  {
    name: "Lunch set",
    price: "$45",
    period: "/person",
    description: "Three courses, served Wednesday to Saturday.",
    features: [
      "Choice of three starters",
      "Seasonal main course",
      "Dessert or cheese",
      "Optional wine pairing",
    ],
    cta: "Book lunch",
  },
  {
    name: "Chef's tasting",
    price: "$125",
    period: "/person",
    description: "Seven courses that change with the seasons.",
    features: [
      "Seven seasonal courses",
      "Snacks and house bread",
      "Sommelier wine pairing",
      "Vegetarian version available",
      "Kitchen table option",
    ],
    cta: "Reserve tasting",
  },
  {
    name: "Catering and events",
    price: "From $65",
    period: "/guest",
    description: "Private dining and off-site catering.",
    features: [
      "Private room for 24",
      "Bespoke menus",
      "Dedicated event host",
      "Canapés and drinks packages",
      "Off-site catering available",
    ],
    cta: "Plan an event",
  },
]

const faqs = [
  {
    q: "Do you have a cancellation policy?",
    a: "Please give us 24 hours notice to cancel. Late cancellations for tasting menus incur a $25 per person fee.",
  },
  {
    q: "Are children welcome?",
    a: "Children are welcome at lunch and early dinner, and we offer a small menu for younger guests.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes. Digital gift cards are available in any amount and are valid for 24 months.",
  },
  {
    q: "Do you take walk-ins?",
    a: "Yes. We keep the bar and a few tables free for walk-ins every evening, served on a first-come basis.",
  },
  {
    q: "Can you accommodate allergies?",
    a: "Absolutely. Let us know when you book and our kitchen will adapt your dishes. We handle nuts and gluten in the kitchen.",
  },
]

const footer = [
  {
    title: "Visit",
    links: ["Reservations", "Opening hours", "Find us", "Accessibility"],
  },
  { title: "Menus", links: ["Dinner", "Lunch", "Wine list", "Desserts"] },
  {
    title: "More",
    links: ["Private dining", "Gift cards", "Careers", "Press"],
  },
]

export default function LandingRestaurant04() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-emerald-600 text-white text-sm">
              S
            </span>
            <span className="">Saffron Street</span>
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
              Book a table
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Order now
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-emerald-600 dark:text-emerald-400" />
              Delivered in 30 minutes
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl ">
              {"Street food from Mumbai, "}
              <span className="text-emerald-600 dark:text-emerald-400">
                delivered hot
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              {
                "Saffron Street cooks family recipes from Mumbai's street stalls, with free delivery on orders over $25 across the city."
              }
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Order now
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                See the menu
              </Button>
            </div>
          </div>
          <div className="mt-14 grid gap-3 lg:grid-cols-[2fr_1fr]">
            <HeroVisual />
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {stats.slice(0, 3).map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col justify-between rounded-2xl border p-5 ${i === 0 ? "bg-emerald-500/10" : "bg-muted/40"} ${i === 2 ? "col-span-2 lg:col-span-1" : ""}`}
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
            As reviewed by
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
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Our kitchen
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Seasonal cooking, made with care
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              We work with local farms and fishermen, change the menu with the
              seasons and make almost everything in house.
            </p>
          </div>
          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border p-6 transition-colors hover:bg-muted/40 ${i === 0 ? "bg-emerald-500/10 md:col-span-2 md:row-span-2 md:p-10" : ""} ${i === 3 ? "md:col-span-2" : ""}`}
              >
                <feature.icon
                  className={`${i === 0 ? "size-8" : "size-5"} text-emerald-600 dark:text-emerald-400`}
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
                From the menu
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                {
                  "A taste of what is cooking this week. Dishes change with the market, so ask your server for today's specials."
                }
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
              What our guests are saying
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`flex flex-col justify-between rounded-2xl border bg-background p-6 ${i === 0 ? "md:col-span-2 md:p-10" : ""}`}
              >
                <Quote className="size-6 text-emerald-600 dark:text-emerald-400" />
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
              Planning your visit
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
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
              Tasting menus and events
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {
                "Celebrate with a chef's tasting menu, or let us cater your next gathering. Dietary needs always welcome."
              }
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-emerald-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-emerald-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
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
              Good to know
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-emerald-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-500/25 via-teal-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Dinner is sorted
            </h2>
            <p className="text-lg text-muted-foreground">
              Order in under a minute and track your rider live.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Order now
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                See the menu
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
              <span className="flex size-7 items-center justify-center rounded-md bg-emerald-600 text-white text-sm">
                S
              </span>
              <span className="">Saffron Street</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Big flavours, close to home.
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
              © {new Date().getFullYear()} Saffron Street. All rights reserved.
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
