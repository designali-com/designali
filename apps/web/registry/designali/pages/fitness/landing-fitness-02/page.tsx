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
} from "@designali/icons"

import { Logo } from "@/src/components/logo"
import { Button } from "@workspace/ui/components/button"

const navLinks = ["Work", "Services", "Pricing", "Process", "Contact"]

const features = [
  {
    icon: CalendarDays,
    title: "Booking-first websites",
    description:
      "Next.js sites built around timetables, memberships and free-trial sign-ups, not brochure pages.",
  },
  {
    icon: Smartphone,
    title: "Member app UI",
    description:
      "UI/UX for booking, waitlists and workout tracking, designed in Figma and handed off as real components.",
  },
  {
    icon: HeartPulse,
    title: "Live data screens",
    description:
      "Dashboards and in-studio displays for effort zones, leaderboards and progress, built with clear data design.",
  },
  {
    icon: Apple,
    title: "Content & motion",
    description:
      "Social templates, CGI and motion loops so every launch, challenge and class drop looks on-brand.",
  },
  {
    icon: Users,
    title: "Design systems",
    description:
      "A shared component library and tokens, so your team can ship new pages without breaking the brand.",
  },
]

const stats = [
  { value: "460+", label: "Ready-made blocks to start from" },
  { value: "4.9", label: "Average client rating" },
  { value: "92%", label: "Launched within 8 weeks" },
  { value: "4000+", label: "Icons in @designali/icons" },
]

const steps = [
  {
    title: "Book a discovery call",
    description:
      "A 30-minute call with Ali to talk about your members, your goals and what is not working today.",
  },
  {
    title: "Get a clear proposal",
    description:
      "You receive scope, timeline and a fixed price, with no surprises once the work begins.",
  },
  {
    title: "Design and build",
    description:
      "Weekly check-ins in Figma, then production-ready code you can preview from the first sprint.",
  },
  {
    title: "Launch and grow",
    description:
      "We launch, measure sign-ups and bookings, and keep improving the experience together.",
  },
]

const showcase = [
  {
    name: "Strength gym rebrand",
    meta: "Brand identity · Website",
    tag: "Identity",
    price: "6 weeks",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Hybrid training site",
    meta: "Next.js · Booking flow",
    tag: "Web",
    price: "8 weeks",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Pilates studio brand",
    meta: "Identity · Social templates",
    tag: "Brand",
    price: "4 weeks",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Cycling studio launch",
    meta: "Motion · Landing page",
    tag: "Motion",
    price: "5 weeks",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Coaching app UI",
    meta: "UI/UX · Design system",
    tag: "Product",
    price: "10 weeks",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Recovery studio CGI",
    meta: "CGI · 3D product renders",
    tag: "3D",
    price: "3 weeks",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
]

const testimonials = [
  {
    quote:
      "Ali designed and coded the whole site himself. No hand-off gaps, no lost details, just a booking flow that works.",
    name: "James P.",
    role: "Studio founder, Designali client",
  },
  {
    quote:
      "The app UI was so clear that our coaches stopped getting support questions. That alone paid for the project.",
    name: "Aisha B.",
    role: "Coaching app founder",
  },
  {
    quote:
      "We got a full design system, not just screens. Our team ships new class pages in an afternoon now.",
    name: "Daniel R.",
    role: "Head of product, fitness app",
  },
]

const tiers = [
  {
    name: "Sprint",
    price: "$2,400",
    period: "/project",
    description: "A focused landing page for a launch, challenge or new location.",
    features: [
      "One landing page, designed and coded",
      "Built from Designali blocks",
      "Responsive and accessible",
      "Delivered in two weeks",
    ],
    cta: "Start a sprint",
  },
  {
    name: "Studio",
    price: "$4,500",
    period: "/month",
    description: "Ongoing design and development for growing fitness brands.",
    features: [
      "Unlimited design requests",
      "Next.js development included",
      "Monthly performance review",
      "Social and motion templates",
      "Pause or cancel any time",
    ],
    cta: "Work with Designali",
  },
  {
    name: "Partner",
    price: "$8,000",
    period: "/month",
    description: "Ali Imam as your embedded design engineer, every week.",
    features: [
      "Dedicated design engineer",
      "Product UI and code",
      "Content & motion",
      "Unlimited design requests",
      "Weekly check-ins with Ali",
    ],
    cta: "Book a call",
  },
]

const faqs = [
  {
    q: "What do you need from us to get started?",
    a: "Your goals, any existing brand assets, photos of your space and a few sites you like. We handle the rest.",
  },
  {
    q: "Can I pause a monthly plan?",
    a: "Yes. Studio plans can be paused or cancelled at the end of any month, just send us an email.",
  },
  {
    q: "How long does a project take?",
    a: "Most landing pages take two weeks and a full brand plus website takes six to eight weeks.",
  },
  {
    q: "Will I own the design and code?",
    a: "Yes. You get the Figma files and the full Next.js codebase, ready to host on Vercel or anywhere you like.",
  },
  {
    q: "Do you work with multi-location brands?",
    a: "Yes. We build design systems that scale across locations, apps and campaigns without losing consistency.",
  },
]

const footer = [
  {
    title: "Studio",
    links: ["Work", "Services", "Process", "Contact"],
  },
  {
    title: "Resources",
    links: ["Templates", "Blocks", "Icons", "Docs"],
  },
  {
    title: "Follow",
    links: ["Instagram", "X", "LinkedIn", "21st.dev"],
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
            <Logo className="h-5 w-auto" />
            <span className="font-serif text-lg font-normal">designali</span>
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
              View work
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Start a project
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-28">
          <div className="flex items-center justify-between border-b pb-4 text-xs tracking-widest text-muted-foreground uppercase">
            <span>Designali for pilates and yoga studios</span>
            <span className="hidden sm:inline">A softer kind of brand.</span>
          </div>
          <h1 className="mt-12 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl font-serif font-normal">
            {"Calm brands for "}
            <span className="text-indigo-600 dark:text-indigo-400">
              movement studios.
            </span>
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-lg text-lg leading-8 text-muted-foreground">
              Designali creates calm, light-filled identities and websites for pilates, yoga and wellness studios, designed and coded by Ali Imam.
            </p>
            <div className="md:justify-self-end">
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Start a project
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  Meet Ali Imam
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
                Services
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal mt-3">
                Everything a fitness brand needs to grow
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Where thoughtful design meets production-ready code. From the first logo sketch to the live booking flow.
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
                Selected fitness work
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Identities, websites, apps and motion for gyms, studios and coaches, all designed and built by Designali.
              </p>
            </div>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="#" />}
            >
              View all work
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
            What fitness clients say
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
              How we work together
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
              Simple pricing for fitness brands
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Fixed-price projects or a monthly studio plan. No hidden fees and you own everything we make.
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
              Before we start
            </h2>
            <p className="mt-4 text-muted-foreground">
              Still curious?{" "}
              <a
                href="#"
                className="font-medium text-foreground underline underline-offset-4"
              >
                Email hello@designali.com
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
              Give your studio a calmer brand
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Book a free 30-minute call and get a proposal within 48 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Start a project
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#" />}
            >
              Meet Ali Imam
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
              <Logo className="h-5 w-auto" />
              <span className="font-serif text-lg font-normal">
                designali
              </span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              A softer kind of brand.
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
              © {new Date().getFullYear()} Designali. All rights reserved.
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
