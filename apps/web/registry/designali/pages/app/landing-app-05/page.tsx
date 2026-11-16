import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  Moon,
  Plus,
  Sparkles,
  Users,
  Watch,
  WifiOff,
} from "@designali/icons"

import { Logo } from "@/src/components/logo"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const navLinks = ["Services", "Process", "Work", "Pricing", "Contact"]

const features = [
  {
    icon: Watch,
    title: "Widgets and watch UI",
    description:
      "Glanceable widgets, complications and quick actions designed for small screens.",
  },
  {
    icon: Moon,
    title: "Light and dark themes",
    description:
      "Hand-tuned tokens for day and night, plus custom app icons from @designali/icons.",
  },
  {
    icon: WifiOff,
    title: "Design systems",
    description:
      "Components and tokens that keep your app consistent as new features ship.",
  },
  {
    icon: Users,
    title: "App store assets",
    description:
      "Screenshots, device mockups and launch visuals ready for the App Store and Google Play.",
  },
  {
    icon: Sparkles,
    title: "Product strategy",
    description:
      "We map your users, goals and core flows before designing a single screen.",
  },
  {
    icon: Bell,
    title: "UX flows and prototypes",
    description:
      "Clickable Figma prototypes for onboarding, notifications and every key journey.",
  },
]

const stats = [
  { value: "5", label: "Apple device mockups" },
  { value: "6 weeks", label: "Typical app design sprint" },
  { value: "2300+", label: "UI examples on designali.com" },
  { value: "4.9", label: "Average client rating" },
]

const steps = [
  {
    title: "Book a call",
    description:
      "A free 30-minute call with Ali Imam to talk through your app idea and users.",
  },
  {
    title: "Map the flows",
    description:
      "We define the core journeys, screens and edge cases together.",
  },
  {
    title: "Design the UI",
    description:
      "Weekly Figma reviews take the app from wireframes to polished, on-brand screens.",
  },
  {
    title: "Build and launch",
    description:
      "We hand off real components or build the web app in Next.js and help you launch.",
  },
]

const showcase = [
  {
    name: "Habit tracker app",
    meta: "UI/UX and widget design",
    tag: "iOS and Android",
    price: "Starter",
  },
  {
    name: "Finance app dashboard",
    meta: "Product design and web app",
    tag: "Next.js",
    price: "Starter",
  },
  {
    name: "Fitness watch app",
    meta: "Watch and companion UI",
    tag: "watchOS",
    price: "Design",
  },
  {
    name: "Voice journaling app",
    meta: "Conversation flows and UI",
    tag: "Voice",
    price: "Starter",
  },
  {
    name: "Analytics dashboard",
    meta: "Data design and charts",
    tag: "Data",
    price: "Design",
  },
  {
    name: "Shared planner app",
    meta: "Collaboration flows",
    tag: "Design + Build",
    price: "Design + Build",
  },
]

const testimonials = [
  {
    quote:
      "Having one person design and code the web app meant zero hand-off gaps. It just worked.",
    name: "Emily S.",
    role: "App founder, Designali client",
  },
  {
    quote:
      "Small details everywhere. You can tell Ali obsesses over making every interaction feel right.",
    name: "Andre S.",
    role: "Founder, Designali client",
  },
  {
    quote:
      "Designali took our rough app idea and turned it into screens our first users could not stop praising.",
    name: "Jasmine W.",
    role: "App founder, Designali client",
  },
]

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "",
    description: "Free Designali resources to start your app.",
    features: [
      "Free blocks and UI examples",
      "Free @designali/icons",
      "Habit tracker app",
      "Device mockups",
    ],
    cta: "Browse free",
  },
  {
    name: "Design",
    price: "$4,500",
    period: "/month",
    description: "Ongoing app design with Ali Imam.",
    features: [
      "Unlimited design requests",
      "Analytics dashboard",
      "Fitness watch app",
      "Custom icons and themes",
      "Weekly Figma reviews",
    ],
    cta: "Start designing",
  },
  {
    name: "Design + Build",
    price: "$8,000",
    period: "/month",
    description: "Design plus web app development in code.",
    features: [
      "Everything in Design",
      "Next.js web app build",
      "Shared component library",
      "Deploy on Vercel",
      "One simple monthly fee",
    ],
    cta: "Book a call",
  },
]

const faqs = [
  {
    q: "Can I start with just an idea?",
    a: "Yes. Many projects start with a sketch or a note. We shape the flows with you on the first call.",
  },
  {
    q: "How do I cancel a plan?",
    a: "Email hello@designali.com any time. Your plan stays active until the end of the current month.",
  },
  {
    q: "Are the free resources really free?",
    a: "Yes. Designali blocks, icons and UI examples are free to explore. Paid plans add hands-on design and code.",
  },
  {
    q: "Which platforms do you design for?",
    a: "iPhone, iPad, Android, Apple Watch, Wear OS and the web, with responsive web apps built in Next.js.",
  },
  {
    q: "What happens to my files if I cancel?",
    a: "Nothing is lost. You keep every Figma file and line of code produced while you were subscribed.",
  },
]

const footer = [
  { title: "Studio", links: ["Services", "Design", "Work", "Services"] },
  { title: "Resources", links: ["Templates", "Blocks", "Icons", "Docs"] },
  { title: "Help", links: ["Contact", "Privacy", "Terms", "Contact"] },
]

export default function LandingApp05() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-background/10 bg-foreground text-background/80 px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          New: learning app UI kit on designali.com
          <ArrowRight className="size-3.5" />
        </a>
      </div>
      <header className="bg-foreground text-background sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <Logo className="h-5 w-auto" />
            <span className="">designali</span>
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
              View work
            </Button>
            <Button
              size="sm"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Start a project
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
              Designali for learning apps
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-7xl ">
              {"Learning apps that teach in "}
              <span className="text-background/60">15 minutes a day</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-background/65">
              Designali designs language and learning apps with conversation UI, AI tutors and progress screens that build real confidence.
            </p>
            <form
              action="#"
              className="flex w-full max-w-md flex-col gap-2 sm:flex-row "
            >
              <Input
                type="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                className="h-10 border-background/20 bg-background/10 text-background placeholder:text-background/50"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Start a project
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
            <p className="text-sm font-medium text-rose-600 dark:text-rose-400">
              Services
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              App design that fits your users, not the other way round
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Thoughtful flows, quick to learn and fast to use, on iPhone, Android and the web.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-rose-600 dark:text-rose-400" />
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
                Selected app work
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Apps, widgets and dashboards designed by Designali, each one built around a real user need.
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
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {showcase.map((item) => (
              <a
                key={item.name}
                href="#"
                className="group flex flex-col rounded-xl border p-6 transition-colors hover:bg-muted/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg border bg-muted/50 font-semibold ">
                    {item.name.charAt(0)}
                  </span>
                  <span className="rounded-full bg-rose-500/10 px-2.5 py-0.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-semibold ">{item.name}</h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">
                  {item.meta}
                </p>
                <div className="mt-6 flex items-center justify-between border-t pt-4 text-sm">
                  <span className="font-medium">{item.price}</span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
              How we design your app
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-rose-600 dark:text-rose-400">
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
              Loved by founders and product teams
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
              Free to start. Hands-on when you want more.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Designali resources are free to explore. Paid plans add Ali Imam designing and building your app.
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
                              : "mt-0.5 size-4 shrink-0 text-rose-600 dark:text-rose-400"
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
              Frequently asked
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
            <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl ">
              Your first call is free
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Tell Ali about your learners and get a plan for your app within 48 hours.
            </p>
          </div>
          <form
            action="#"
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row "
          >
            <Input
              type="email"
              required
              placeholder="you@example.com"
              aria-label="Email address"
              className="h-10 border-background/20 bg-background/10 text-background placeholder:text-background/50"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Start a project
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
              <Logo className="h-5 w-auto" />
              <span className="">designali</span>
            </a>
            <p className="max-w-xs text-sm text-background/60">
              Design your way to launch.
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
              © {new Date().getFullYear()} Designali. All rights reserved.
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
  const bars = [38, 52, 44, 63, 58, 71, 66, 80, 74, 88, 83, 95]
  return (
    <div className="overflow-hidden rounded-xl border bg-card text-left text-card-foreground shadow-2xl/10">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 hidden rounded-md bg-muted px-3 py-0.5 text-[11px] text-muted-foreground sm:inline">
          designali.com/work
        </span>
      </div>
      <div className="grid md:grid-cols-[180px_1fr]">
        <aside className="hidden space-y-1 border-r p-3 text-sm md:block">
          {navLinks.map((link, i) => (
            <div
              key={link}
              className={`rounded-md px-3 py-1.5 ${i === 0 ? "bg-muted font-medium" : "text-muted-foreground"}`}
            >
              {link}
            </div>
          ))}
        </aside>
        <div className="space-y-4 p-4 md:p-6">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.slice(0, 4).map((stat) => (
              <div key={stat.label} className="rounded-lg border p-3">
                <div className="truncate text-[11px] text-muted-foreground">
                  {stat.label}
                </div>
                <div className="mt-1 text-lg font-semibold tracking-tight">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border p-4">
            <div className="mb-4 flex items-center justify-between text-xs">
              <span className="font-medium">Last 12 weeks</span>
              <span className="text-rose-600 dark:text-rose-400">+24.6%</span>
            </div>
            <div className="flex h-32 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === bars.length - 1 ? "bg-rose-600" : "bg-muted-foreground/20"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="hidden divide-y rounded-lg border sm:block">
            {showcase.slice(0, 3).map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-4 px-4 py-2.5 text-sm"
              >
                <div className="min-w-0">
                  <div className="truncate font-medium">{item.name}</div>
                  <div className="truncate text-xs text-muted-foreground">
                    {item.meta}
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-rose-500/10 px-2 py-0.5 text-[11px] font-medium text-rose-600 dark:text-rose-400">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
