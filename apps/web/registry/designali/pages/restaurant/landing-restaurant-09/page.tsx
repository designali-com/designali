import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Flame,
  Leaf,
  Plus,
  Quote,
  Sparkles,
  Users,
  Wheat,
  Wine,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Services", "About", "Packages", "Work", "Contact"]

const logos = [
  "Brand identity",
  "Menu design",
  "Packaging",
  "Booking sites",
  "Ordering flows",
  "Social visuals",
  "Signage",
  "Motion",
]

const features = [
  {
    icon: Leaf,
    title: "Brand from the table up",
    description:
      "Logos, colour and type that work on a menu, a coffee cup, a storefront sign and an Instagram post.",
  },
  {
    icon: Flame,
    title: "Menus that sell",
    description:
      "Print and digital menus designed for clarity, so guests find what they want and the specials stand out.",
  },
  {
    icon: Wine,
    title: "Booking & ordering sites",
    description:
      "Fast Next.js websites with reservations, online ordering links and opening hours that are easy to update.",
  },
  {
    icon: Wheat,
    title: "Packaging & print",
    description:
      "Takeaway boxes, bags, labels and gift cards designed as one system with your brand.",
  },
  {
    icon: Users,
    title: "Packages",
    description:
      "Fixed-price packages for brand, menus and website, with Ali Imam as your single point of contact.",
  },
]

const stats = [
  { value: "3", label: "Revision rounds included" },
  { value: "2300+", label: "Templates to start from" },
  { value: "4.8/5", label: "Client rating" },
  { value: "30+", label: "Pages and screens per project" },
]

const steps = [
  {
    title: "Book a discovery call",
    description:
      "Tell us about your restaurant, your guests and what you want people to feel when they walk in.",
  },
  {
    title: "Share your references",
    description:
      "Add photos, menus and brands you love, plus any dietary or accessibility notes for the menu.",
  },
  {
    title: "Design together",
    description:
      "Concepts are shared in Figma with weekly reviews until the brand feels right.",
  },
  {
    title: "Launch and serve",
    description:
      "We deliver print files, the website and social templates, ready for opening night.",
  },
]

const showcase = [
  {
    name: "Menu Design",
    meta: "Print and digital menus, specials boards",
    tag: "Popular",
    price: "$1,800",
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
  {
    name: "Logo & Identity",
    meta: "Logo, colour, type, brand guidelines",
    tag: "Brand",
    price: "$1,400",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Booking Website",
    meta: "Next.js site, reservations, hours",
    tag: "Website",
    price: "$1,200",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Packaging Set",
    meta: "Boxes, bags, cups and labels",
    tag: "Print",
    price: "$2,400",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Social Kit",
    meta: "48-hour heritage grain loaf",
    tag: "Templates and launch posts",
    price: "$600",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Motion Loops",
    meta: "Short videos for menus and screens",
    tag: "Motion",
    price: "$900",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
]

const testimonials = [
  {
    quote:
      "Designali built our booking site in weeks. Reservations moved online and the phone finally stopped ringing all day.",
    name: "Joanna",
    role: "Operations manager, cafe group",
  },
  {
    quote:
      "Relaxed, warm and genuinely thoughtful. Working with Ali felt like having a creative partner in the kitchen.",
    name: "Sam",
    role: "Founder, food brand",
  },
  {
    quote:
      "The vegan menu design was so clear that guests started ordering from it just to try it.",
    name: "Elena",
    role: "Designali client",
  },
]

const tiers = [
  {
    name: "Menu Refresh",
    price: "$1,200",
    period: "/project",
    description: "A new look for your menus and specials.",
    features: [
      "Menu layout and typography",
      "Print-ready files",
      "Digital menu version",
      "Two rounds of revisions",
    ],
    cta: "Book a menu refresh",
  },
  {
    name: "Full Brand",
    price: "$4,800",
    period: "/project",
    description: "Identity, menus and website for a new opening.",
    features: [
      "Logo and brand guidelines",
      "Menus and signage",
      "Next.js booking website",
      "Social media templates",
      "Packaging design",
    ],
    cta: "Book Full Brand",
  },
  {
    name: "Ongoing support",
    price: "From $650",
    period: "/month",
    description: "Monthly design support for busy restaurants.",
    features: [
      "Seasonal menu updates",
      "Campaign graphics",
      "Website updates",
      "Social content templates",
      "Motion loops for screens",
    ],
    cta: "Start support",
  },
]

const faqs = [
  {
    q: "Do you also build the website?",
    a: "Yes. Ali Imam designs and builds the site in Next.js, connected to the booking or ordering tools you already use.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Projects are scoped up front. If plans change, we pause or adjust the scope together before the next milestone.",
  },
  {
    q: "Can you work with existing branding?",
    a: "Yes. We can refresh an existing brand gently or extend it into new menus, packaging and a website.",
  },
  {
    q: "Do you offer gift card designs?",
    a: "Yes. Gift cards, vouchers and loyalty cards can be added to any package.",
  },
  {
    q: "Do you work with new openings?",
    a: "Yes. We often start months before opening, so the brand, menus and website are ready for the first service.",
  },
]

const footer = [
  {
    title: "Contact",
    links: ["Services", "Process", "Work", "Pricing"],
  },
  { title: "Menus", links: ["Brand identity", "Websites", "Packaging", "Social kits"] },
  {
    title: "More",
    links: ["Packages", "Work", "About Ali", "Blog"],
  },
]

export default function LandingRestaurant09() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-teal-600 text-white text-sm">
              S
            </span>
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
              Book a call
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Book a call
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-teal-600 dark:text-teal-400" />
              Design for smokehouses and BBQ
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl ">
              {"Bold brands, slow "}
              <span className="text-teal-600 dark:text-teal-400">
                cooked to perfection
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              Designali designs bold brands, menus and catering sites for smokehouses,
              with signage and packaging that feel as hearty as the food.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
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
                Plan a project
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
            Services include
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
              Our approach
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Restaurant design, made with care
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              We work closely with chefs and owners, design every touchpoint
              together and make almost everything production ready.
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
                Our services
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                {
                  "A taste of what Designali creates for restaurants. Every project is scoped around your menu, your space and your guests."
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
              What restaurant owners are saying
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
              How a project works
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
              Packages and support
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {
                "Start with a menu refresh, go for a full brand, or keep Designali on for monthly updates."
              }
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
              Good to know
            </h2>
            <p className="mt-4 text-muted-foreground">
              Still curious?{" "}
              <a
                href="#"
                className="font-medium text-foreground underline underline-offset-4"
              >
                Contact us
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
              Feeding a crowd with your brand?
            </h2>
            <p className="text-lg text-muted-foreground">
              Catering menus, trays and event graphics can be added to any
              package.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
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
                Plan a project
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
                S
              </span>
              <span className="">designali</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Smoke, salt and design.
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
