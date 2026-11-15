import {
  Apple,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  HeartPulse,
  Plus,
  Smartphone,
  Users,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Classes", "Coaches", "Membership", "Locations", "App"]

const features = [
  {
    icon: CalendarDays,
    title: "Programs that progress",
    description:
      "Twelve-week training blocks that adjust load and volume as you get stronger.",
  },
  {
    icon: Smartphone,
    title: "Book from the app",
    description:
      "Reserve classes, join the waitlist and track every workout from your phone.",
  },
  {
    icon: HeartPulse,
    title: "Heart-rate tracking",
    description:
      "See your effort zones live on the screens and get a summary after every class.",
  },
  {
    icon: Apple,
    title: "Nutrition coaching",
    description:
      "Simple, sustainable meal guidance from registered dietitians, built around foods you enjoy.",
  },
  {
    icon: Users,
    title: "A real community",
    description:
      "Monthly challenges, member socials and a crew that notices when you skip a week.",
  },
]

const stats = [
  { value: "120+", label: "Classes every week" },
  { value: "4.9", label: "Average class rating" },
  { value: "86%", label: "Hit their 12-week goal" },
  { value: "45", label: "Certified coaches" },
]

const steps = [
  {
    title: "Book a free intro",
    description:
      "Meet a coach for a 30-minute session to talk goals, history and any injuries.",
  },
  {
    title: "Get your plan",
    description:
      "We recommend classes and a weekly schedule based on your experience and goals.",
  },
  {
    title: "Train consistently",
    description:
      "Show up two to four times a week. The app reminds you and tracks your progress.",
  },
  {
    title: "Retest and level up",
    description:
      "Every 12 weeks we retest your benchmarks and set the next target together.",
  },
]

const showcase = [
  {
    name: "Strength Foundations",
    meta: "Barbell basics · 50 min",
    tag: "Beginner",
    price: "6:30 AM",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Hybrid Conditioning",
    meta: "Rower, sled, kettlebell · 45 min",
    tag: "Popular",
    price: "7:15 AM",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Power Yoga",
    meta: "Heated flow · 60 min",
    tag: "All levels",
    price: "12:00 PM",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Ride 45",
    meta: "Indoor cycling intervals · 45 min",
    tag: "Cardio",
    price: "5:45 PM",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Olympic Lifting",
    meta: "Snatch and clean technique · 60 min",
    tag: "Advanced",
    price: "6:30 PM",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Mobility Reset",
    meta: "Stretch and breathwork · 30 min",
    tag: "Recovery",
    price: "8:00 PM",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
]

const testimonials = [
  {
    quote:
      "I have joined a dozen gyms and quit them all. This is the first place where people notice if I do not show up.",
    name: "James Porter",
    role: "Member for 18 months",
  },
  {
    quote:
      "The app plans my week for me. I just open it, see what is next and go. Zero decision fatigue.",
    name: "Aisha Bello",
    role: "App subscriber",
  },
  {
    quote:
      "Lost 9kg, dropped my blood pressure and actually look forward to Monday mornings now.",
    name: "Daniel Russo",
    role: "12-week program graduate",
  },
]

const tiers = [
  {
    name: "Flex",
    price: "$25",
    period: "/class",
    description: "Drop in whenever your schedule allows.",
    features: [
      "Any class, any studio",
      "Book 7 days ahead",
      "Free towel and lockers",
      "No commitment",
    ],
    cta: "Book a class",
  },
  {
    name: "Unlimited",
    price: "$169",
    period: "/month",
    description: "For members training three or more times a week.",
    features: [
      "Unlimited classes",
      "Recovery suite access",
      "Quarterly progress testing",
      "Bring a friend monthly",
      "Book 14 days ahead",
    ],
    cta: "Join now",
  },
  {
    name: "Personal",
    price: "$399",
    period: "/month",
    description: "One-to-one coaching with a dedicated trainer.",
    features: [
      "8 private sessions",
      "Custom program",
      "Nutrition coaching",
      "Unlimited classes",
      "Weekly check-ins",
    ],
    cta: "Meet a coach",
  },
]

const faqs = [
  {
    q: "What should I bring to my first class?",
    a: "Comfortable clothes, trainers and a water bottle. Towels, lockers and showers are provided.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Yes. You can freeze for up to three months per year at no cost, straight from the app.",
  },
  {
    q: "How early should I arrive?",
    a: "Arrive ten minutes early for your first visit so a coach can show you around and set up your equipment.",
  },
  {
    q: "Is there a minimum contract?",
    a: "No. Memberships are month to month and can be cancelled with 30 days notice.",
  },
  {
    q: "Do you offer corporate memberships?",
    a: "Yes. Teams of five or more get discounted rates and a dedicated onboarding session.",
  },
]

const footer = [
  {
    title: "Train",
    links: ["Classes", "Personal training", "Online coaching", "Schedule"],
  },
  {
    title: "Studios",
    links: ["Downtown", "Riverside", "North Park", "All locations"],
  },
  {
    title: "About",
    links: ["Our coaches", "Careers", "Gift cards", "Contact"],
  },
]

export default function LandingFitness02() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-indigo-600 text-white text-sm">
              H
            </span>
            <span className="font-serif text-lg font-normal">Halo Studio</span>
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
              Member login
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Book intro pack
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-28">
          <div className="flex items-center justify-between border-b pb-4 text-xs tracking-widest text-muted-foreground uppercase">
            <span>Reformer pilates and hot yoga</span>
            <span className="hidden sm:inline">A softer kind of strong.</span>
          </div>
          <h1 className="mt-12 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl font-serif font-normal">
            {"Move slowly. Breathe deeply. "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Feel better.
            </span>
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-lg text-lg leading-8 text-muted-foreground">
              Halo is a calm, light-filled studio offering reformer pilates,
              heated yoga and guided recovery for every body.
            </p>
            <div className="md:justify-self-end">
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Book intro pack
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  Meet the teachers
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
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Training
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal mt-3">
                Everything you need to get stronger
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Expert coaching, smart programming and a community that shows
                up, whether you train with us in person or at home.
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
                Find your class
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                More than 120 sessions a week, from sunrise strength to
                late-night mobility. Book in two taps.
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
            Real members, real results
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
              How to get started
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-foreground pt-6"
              >
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
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
              Memberships for every routine
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              No joining fee, no long contracts. Freeze or cancel your
              membership any time from the app.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-indigo-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-indigo-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
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
              Before your first session
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
              Find your calm this week
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Three classes for $45. Mats, towels and good vibes included.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Book intro pack
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#" />}
            >
              Meet the teachers
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
              <span className="flex size-7 items-center justify-center rounded-md bg-indigo-600 text-white text-sm">
                H
              </span>
              <span className="font-serif text-lg font-normal">
                Halo Studio
              </span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              A softer kind of strong.
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
              © {new Date().getFullYear()} Halo Studio. All rights reserved.
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
