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
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Menu", "About", "Private dining", "Gift cards", "Visit"]

const features = [
  {
    icon: Flame,
    title: "Wood-fired kitchen",
    description:
      "Our oak-burning hearth gives everything from bread to fish a gentle smoky depth.",
  },
  {
    icon: Wine,
    title: "Natural wine list",
    description:
      "Over 200 low-intervention wines, with a sommelier on hand to find your perfect glass.",
  },
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
]

const stats = [
  { value: "12", label: "Partner farms" },
  { value: "48h", label: "Sourdough fermentation" },
  { value: "200+", label: "Wines by the bottle" },
  { value: "4.8/5", label: "Guest rating" },
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
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Heritage Beetroot",
    meta: "Whipped goat curd, hazelnut, honey",
    tag: "Vegetarian",
    price: "$16",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Dry-aged Ribeye",
    meta: "Bone marrow, charred onion, chips",
    tag: "For two",
    price: "$78",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Hand-cut Tagliatelle",
    meta: "Wild mushrooms, aged parmesan, truffle",
    tag: "Signature",
    price: "$26",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Sourdough and Butter",
    meta: "48-hour heritage grain loaf",
    tag: "Baked daily",
    price: "$8",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
  {
    name: "Burnt Honey Tart",
    meta: "Crème fraîche, poached rhubarb",
    tag: "Dessert",
    price: "$13",
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
  },
]

const testimonials = [
  {
    quote:
      "That wood-fired bread with cultured butter is worth the trip on its own. I dream about it.",
    name: "Marcus Bell",
    role: "Regular guest",
  },
  {
    quote:
      "They hosted our company dinner for 22 people flawlessly, including four different dietary requirements.",
    name: "Joanna Price",
    role: "Office manager",
  },
  {
    quote:
      "Relaxed, warm and genuinely delicious. It feels like eating at a friend's house who happens to be a brilliant chef.",
    name: "Sam Okoro",
    role: "Food writer",
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
    q: "Can you accommodate allergies?",
    a: "Absolutely. Let us know when you book and our kitchen will adapt your dishes. We handle nuts and gluten in the kitchen.",
  },
  {
    q: "Is there a dress code?",
    a: "No dress code. Come as you are, whether that is jeans or a special-occasion outfit.",
  },
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

export default function LandingRestaurant02() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-amber-600 text-white text-sm">
              M
            </span>
            <span className="font-serif text-lg font-normal">Maison Lune</span>
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
              Reserve tasting
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-28">
          <div className="flex items-center justify-between border-b pb-4 text-xs tracking-widest text-muted-foreground uppercase">
            <span>One Michelin star</span>
            <span className="hidden sm:inline">Fine dining, gently.</span>
          </div>
          <h1 className="mt-12 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl font-serif font-normal">
            {"A seven-course journey "}
            <span className="text-amber-600 dark:text-amber-400">
              through the seasons
            </span>
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-lg text-lg leading-8 text-muted-foreground">
              Maison Lune offers an intimate 28-seat dining room and a tasting
              menu that changes with the market, paired with rare wines.
            </p>
            <div className="md:justify-self-end">
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Reserve tasting
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  Our story
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
              <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
                Our kitchen
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal mt-3">
                Seasonal cooking, made with care
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                We work with local farms and fishermen, change the menu with the
                seasons and make almost everything in house.
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
            What our guests are saying
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
              Planning your visit
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-foreground pt-6"
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
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal">
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
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal">
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
      <section className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl font-serif font-normal">
              An evening to remember
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Reservations open on the first of each month for the month ahead.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Reserve tasting
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#" />}
            >
              Our story
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
              <span className="flex size-7 items-center justify-center rounded-md bg-amber-600 text-white text-sm">
                M
              </span>
              <span className="font-serif text-lg font-normal">
                Maison Lune
              </span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Fine dining, gently.
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
              © {new Date().getFullYear()} Maison Lune. All rights reserved.
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
