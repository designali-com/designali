import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  Leaf,
  Plus,
  Quote,
  Recycle,
  RotateCcw,
  Sparkles,
  Truck,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Shop", "New arrivals", "Bestsellers", "Our story", "Journal"]

const logos = [
  "Vogue",
  "GQ",
  "Wired",
  "The Guardian",
  "Monocle",
  "Kinfolk",
  "Dezeen",
  "Elle Decor",
]

const features = [
  {
    icon: Truck,
    title: "Free shipping over $75",
    description:
      "Fast, carbon-neutral delivery to your door, usually within two to four working days.",
  },
  {
    icon: RotateCcw,
    title: "60-day returns",
    description:
      "Not quite right? Send it back within 60 days for a full refund, no questions asked.",
  },
  {
    icon: Leaf,
    title: "Responsibly sourced",
    description:
      "Organic and recycled materials from certified suppliers we visit in person every year.",
  },
  {
    icon: Award,
    title: "Lifetime guarantee",
    description:
      "Our core pieces are built to last. If something breaks, we repair or replace it for free.",
  },
  {
    icon: Recycle,
    title: "Plastic-free packaging",
    description:
      "Every order ships in recycled, compostable packaging that looks great on the doorstep.",
  },
]

const stats = [
  { value: "48h", label: "Average dispatch time" },
  { value: "100%", label: "Plastic-free packaging" },
  { value: "32", label: "Countries we ship to" },
  { value: "1%", label: "Of revenue to climate projects" },
]

const steps = [
  {
    title: "Designed in house",
    description:
      "Our small design team develops every product over months of testing and refinement.",
  },
  {
    title: "Made by experts",
    description:
      "Crafted by family-run workshops we have partnered with for years, paid fairly for their skill.",
  },
  {
    title: "Checked by hand",
    description:
      "Every piece is inspected before it leaves our warehouse, so only the best reaches you.",
  },
  {
    title: "Delivered to you",
    description:
      "Packed in plastic-free materials and shipped carbon-neutral, with tracking from door to door.",
  },
]

const showcase = [
  {
    name: "The Everyday Tote",
    meta: "Waxed canvas, 3 colours",
    tag: "Bestseller",
    price: "$98",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Merino Crew Sweater",
    meta: "Extra-fine merino, 6 colours",
    tag: "New",
    price: "$120",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Ceramic Pour-Over Set",
    meta: "Hand-glazed stoneware",
    tag: "Limited",
    price: "$64",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Linen Bedding Bundle",
    meta: "Stonewashed European flax",
    tag: "Bestseller",
    price: "$240",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
  {
    name: "Leather Card Wallet",
    meta: "Vegetable-tanned leather",
    tag: "Gift idea",
    price: "$45",
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
  },
  {
    name: "Wool Throw Blanket",
    meta: "Woven in Portugal",
    tag: "Back in stock",
    price: "$135",
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
]

const testimonials = [
  {
    quote:
      "I returned a size with zero hassle and the replacement arrived before I even posted the original back.",
    name: "Yuki Tanaka",
    role: "Verified buyer",
  },
  {
    quote:
      "Two years in and it still looks brand new. Worth every penny and then some.",
    name: "Rachel Adams",
    role: "Verified buyer",
  },
  {
    quote:
      "Love knowing exactly where my things are made and who made them. More brands should be this honest.",
    name: "Daniel Kim",
    role: "Verified buyer",
  },
]

const tiers = [
  {
    name: "Guest",
    price: "Free",
    period: "",
    description: "Shop any time, no account needed.",
    features: [
      "Free shipping over $75",
      "60-day returns",
      "Order tracking",
      "Email support",
    ],
    cta: "Start shopping",
  },
  {
    name: "Member",
    price: "$49",
    period: "/year",
    description: "For people who shop with us often.",
    features: [
      "10% off every order",
      "Free shipping on everything",
      "Early access to new drops",
      "Free returns for life",
      "Birthday gift",
    ],
    cta: "Become a member",
  },
  {
    name: "Wholesale",
    price: "Custom",
    period: "",
    description: "For retailers, hotels and corporate gifting.",
    features: [
      "Volume pricing",
      "Custom branding",
      "Dedicated account manager",
      "Net-30 payment terms",
    ],
    cta: "Enquire now",
  },
]

const faqs = [
  {
    q: "Do you ship internationally?",
    a: "We ship to 32 countries. Duties and taxes are calculated at checkout so there are no surprises on delivery.",
  },
  {
    q: "How do I care for my products?",
    a: "Every order includes a care card, and detailed guides for each material are available in our journal.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "Yes, within one hour of placing it. After that it is usually already being packed, but our team will do its best.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Digital gift cards are available from $25 to $500 and never expire.",
  },
  {
    q: "How long does shipping take?",
    a: "Orders are dispatched within 48 hours. Domestic delivery takes two to four working days and international seven to ten.",
  },
]

const footer = [
  {
    title: "Shop",
    links: ["New arrivals", "Bestsellers", "Gift cards", "Sale"],
  },
  { title: "Help", links: ["Shipping", "Returns", "Size guide", "Contact us"] },
  {
    title: "About",
    links: ["Our story", "Makers", "Sustainability", "Journal"],
  },
]

export default function LandingEcommerce09() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-amber-600 text-white text-sm">
              L
            </span>
            <span className="">Little Oak</span>
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
              Cart (0)
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Shop by age
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-amber-600 dark:text-amber-400" />
              Plastic-free play
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl ">
              {"Toys made to be played with "}
              <span className="text-amber-600 dark:text-amber-400">
                for years
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              Little Oak makes wooden toys from sustainably sourced beech and
              maple, finished with child-safe paints and designed to grow with
              your child.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Shop by age
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Gift guide
              </Button>
            </div>
          </div>
          <div className="mt-14 grid gap-3 lg:grid-cols-[2fr_1fr]">
            <HeroVisual />
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {stats.slice(0, 3).map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col justify-between rounded-2xl border p-5 ${i === 0 ? "bg-amber-500/10" : "bg-muted/40"} ${i === 2 ? "col-span-2 lg:col-span-1" : ""}`}
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
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
              Why shop with us
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Made better, delivered faster
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              We work directly with the makers, skip the middlemen and pass the
              savings on, without ever cutting corners on quality.
            </p>
          </div>
          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border p-6 transition-colors hover:bg-muted/40 ${i === 0 ? "bg-amber-500/10 md:col-span-2 md:row-span-2 md:p-10" : ""} ${i === 3 ? "md:col-span-2" : ""}`}
              >
                <feature.icon
                  className={`${i === 0 ? "size-8" : "size-5"} text-amber-600 dark:text-amber-400`}
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
                Bestsellers this week
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                The pieces our customers keep coming back for. Free shipping on
                every order over $75.
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
              Thousands of five-star reviews
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`flex flex-col justify-between rounded-2xl border bg-background p-6 ${i === 0 ? "md:col-span-2 md:p-10" : ""}`}
              >
                <Quote className="size-6 text-amber-600 dark:text-amber-400" />
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
              From our workshop to your door
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
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
              Join the members club
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Members save on every order, get early access to drops and enjoy
              free returns for life.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-amber-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-amber-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" />
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
              Shipping, returns and more
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-amber-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-500/25 via-yellow-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Give a gift that lasts
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse our gift guide or build a bundle and save 20%.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Shop by age
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Gift guide
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
              <span className="flex size-7 items-center justify-center rounded-md bg-amber-600 text-white text-sm">
                L
              </span>
              <span className="">Little Oak</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Toys made to be handed down.
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
              © {new Date().getFullYear()} Little Oak. All rights reserved.
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
