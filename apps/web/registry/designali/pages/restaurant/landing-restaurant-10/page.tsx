import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Flame,
  Plus,
  Salad,
  Users,
  Wheat,
  Wine,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Services", "About", "Packages", "Work", "Contact"]

const features = [
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
  {
    icon: Salad,
    title: "Social & motion visuals",
    description:
      "Templates, short motion loops and launch visuals so your feed always looks as good as the food.",
  },
]

const stats = [
  { value: "2300+", label: "Templates to start from" },
  { value: "4.8/5", label: "Client rating" },
  { value: "30+", label: "Pages and screens per project" },
  { value: "2-4 wks", label: "Typical brand sprint" },
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
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Logo & Identity",
    meta: "Logo, colour, type, brand guidelines",
    tag: "Brand",
    price: "$1,400",
    tile: "bg-gradient-to-br from-primary/10 via-primary/20 to-chart-1 dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Booking Website",
    meta: "Next.js site, reservations, hours",
    tag: "Website",
    price: "$1,200",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Packaging Set",
    meta: "Boxes, bags, cups and labels",
    tag: "Print",
    price: "$2,400",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Social Kit",
    meta: "48-hour heritage grain loaf",
    tag: "Templates and launch posts",
    price: "$600",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Motion Loops",
    meta: "Short videos for menus and screens",
    tag: "Motion",
    price: "$900",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-chart-1 dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
]

const testimonials = [
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
  {
    quote:
      "Designali found a brand direction that beat anything we had imagined. Great value, zero fuss.",
    name: "Patrick",
    role: "Owner, wine bar",
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
  {
    q: "Can you design for dietary labels and allergens?",
    a: "Absolutely. Menus are designed with clear dietary icons and allergen notes, based on the information you provide.",
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

export default function LandingRestaurant10() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-chart-2 text-white text-sm">
              P
            </span>
            <span className="font-sans text-lg font-normal">designali</span>
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
              See cafe work
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-28">
          <div className="flex items-center justify-between border-b pb-4 text-xs tracking-widest text-muted-foreground uppercase">
            <span>Design for coffee shops</span>
            <span className="hidden sm:inline">Your corner coffee brand.</span>
          </div>
          <h1 className="mt-12 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl font-sans font-normal">
            {"Slow mornings and "}
            <span className="text-primary dark:text-primary">
              very good design
            </span>
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-lg text-lg leading-8 text-muted-foreground">
              Designali designs cafe brands, menu boards, cups and bean packaging
              for coffee shops and roasters, with plenty of personality.
            </p>
            <div className="md:justify-self-end">
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  See cafe work
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  See packaging
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
              <div className="text-4xl font-semibold tracking-tight md:text-5xl font-sans font-normal">
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
              <p className="text-sm font-medium text-primary dark:text-primary">
                Our approach
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-sans font-normal mt-3">
                Restaurant design, made with care
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                We work closely with chefs and owners, design every touchpoint
                together and make almost everything production ready.
              </p>
            </div>
          </div>
          <div className="divide-y border-y">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr]"
              >
                <span className="font-sans text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-sans text-2xl">{feature.title}</h3>
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
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-sans font-normal">
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
                  <span className="absolute top-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
                    {item.tag}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-medium font-sans text-lg">
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
            What restaurant owners are saying
          </p>
          {testimonials.slice(0, 1).map((t) => (
            <figure key={t.name} className="mt-10">
              <blockquote className="font-sans text-3xl leading-snug text-balance md:text-5xl">
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
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-sans font-normal">
              How a project works
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-foreground pt-6"
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
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-sans font-normal">
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
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-primary shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-chart-2 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-primary dark:text-primary" />
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
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-sans font-normal">
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
      <section className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl font-sans font-normal">
              Pull up a chair
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Book a discovery call on weekdays, with project kick-offs every
              month.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              See cafe work
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#" />}
            >
              See packaging
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
              <span className="flex size-7 items-center justify-center rounded-md bg-chart-2 text-white text-sm">
                P
              </span>
              <span className="font-sans text-lg font-normal">designali</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Your corner coffee brand.
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
