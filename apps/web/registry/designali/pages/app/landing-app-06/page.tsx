import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  Lock,
  Moon,
  Plus,
  Sparkles,
  Users,
  WifiOff,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Features", "How it works", "Reviews", "Pricing", "Support"]

const logos = [
  "Product Hunt",
  "Fast Company",
  "9to5Mac",
  "App Store",
  "Google Play",
  "The Verge",
  "Wired",
  "TechCrunch",
]

const features = [
  {
    icon: Moon,
    title: "Beautiful dark mode",
    description:
      "Hand-tuned themes for day and night, plus custom app icons and accent colours.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    description:
      "Everything works without a connection, on planes, trains and in basements.",
  },
  {
    icon: Users,
    title: "Share with family",
    description:
      "Invite up to five people to shared spaces with one Premium Family plan.",
  },
  {
    icon: Sparkles,
    title: "Smart suggestions",
    description:
      "On-device intelligence learns your routine and surfaces the right thing at the right time.",
  },
  {
    icon: Bell,
    title: "Gentle reminders",
    description:
      "Notifications that respect focus modes and never nag. Snooze, reschedule or skip with a swipe.",
  },
  {
    icon: Lock,
    title: "Private by default",
    description:
      "Your data stays on your device and is end-to-end encrypted when it syncs. We never sell it.",
  },
]

const stats = [
  { value: "11 min", label: "Saved per user daily" },
  { value: "3.2M", label: "Downloads" },
  { value: "4.9", label: "App Store rating" },
  { value: "180K", label: "Five-star reviews" },
]

const steps = [
  {
    title: "Download the app",
    description:
      "Free on the App Store and Google Play. No account needed to try it.",
  },
  {
    title: "Pick your goals",
    description:
      "Answer three quick questions and we tailor the experience to you.",
  },
  {
    title: "Add your first item",
    description:
      "Use the quick-add button, a widget, Siri or a share sheet from any app.",
  },
  {
    title: "Build the habit",
    description:
      "Weekly insights show your progress and keep you gently on track.",
  },
]

const showcase = [
  {
    name: "Home screen widgets",
    meta: "Small, medium and large sizes",
    tag: "iOS and Android",
    price: "Free",
  },
  {
    name: "Lock screen glance",
    meta: "See today at a glance",
    tag: "iOS 17+",
    price: "Free",
  },
  {
    name: "Watch app",
    meta: "Quick actions on your wrist",
    tag: "watchOS",
    price: "Premium",
  },
  {
    name: "Siri and Shortcuts",
    meta: "Hands-free logging",
    tag: "Voice",
    price: "Free",
  },
  {
    name: "Weekly insights",
    meta: "Trends and streaks",
    tag: "Insights",
    price: "Premium",
  },
  {
    name: "Family spaces",
    meta: "Share with up to five people",
    tag: "Family",
    price: "Family",
  },
]

const testimonials = [
  {
    quote:
      "Small details everywhere. You can tell the team obsesses over making it feel right.",
    name: "Andre Silva",
    role: "Designer, longtime user",
  },
  {
    quote:
      "I have tried every app in this category. This is the first one I have kept on my home screen for more than a month.",
    name: "Jasmine Wu",
    role: "App Store review",
  },
  {
    quote:
      "Clean, fast and no dark patterns. Paying for Premium felt like supporting people who respect their users.",
    name: "Tyler Brooks",
    role: "Google Play review",
  },
]

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Everything you need to get started.",
    features: [
      "Core features",
      "Sync across 2 devices",
      "Home screen widgets",
      "Dark mode",
    ],
    cta: "Download free",
  },
  {
    name: "Premium",
    price: "$4.99",
    period: "/month",
    description: "For people who want the full experience.",
    features: [
      "Unlimited devices",
      "Weekly insights",
      "Watch app",
      "Custom themes and icons",
      "Priority support",
    ],
    cta: "Try 7 days free",
  },
  {
    name: "Family",
    price: "$7.99",
    period: "/month",
    description: "Premium for up to six people.",
    features: [
      "Everything in Premium",
      "Up to 6 members",
      "Shared spaces",
      "Parental controls",
      "One simple bill",
    ],
    cta: "Start family plan",
  },
]

const faqs = [
  {
    q: "How do I cancel Premium?",
    a: "Cancel any time from your App Store or Google Play subscription settings. You keep Premium until the period ends.",
  },
  {
    q: "Is the app really free?",
    a: "Yes. The free plan has no ads and no time limit. Premium adds advanced features for people who want more.",
  },
  {
    q: "Which devices are supported?",
    a: "iPhone and iPad on iOS 16 or later, Android 10 or later, Apple Watch, Wear OS and any modern web browser.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Nothing is deleted. You keep full access to your data on the free plan and can export it at any time.",
  },
  {
    q: "Do you sell my data?",
    a: "Never. We make money from subscriptions, not advertising. Your data is encrypted and stays yours.",
  },
]

const footer = [
  { title: "App", links: ["Features", "Premium", "Download", "What is new"] },
  { title: "Company", links: ["About", "Blog", "Press kit", "Careers"] },
  { title: "Help", links: ["Support", "Privacy", "Terms", "Contact"] },
]

export default function LandingApp06() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-emerald-600 text-white text-sm">
              M
            </span>
            <span className="">Mealwise</span>
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
              Log in
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Download free
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-x border-b px-6 py-3 text-xs text-muted-foreground">
            <span>Meal planning made simple</span>
            <span className="hidden sm:inline">Eat well, waste less.</span>
          </div>
          <div className="border-x px-6 py-16 md:py-28">
            <h1 className="max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"Dinner planned for the week in "}
              <span className="text-emerald-600 dark:text-emerald-400">
                five minutes
              </span>
            </h1>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                Mealwise suggests recipes around what is already in your fridge,
                builds a sorted grocery list and cuts food waste for busy
                households.
              </p>
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Download free
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  Browse recipes
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 border-x border-t lg:grid-cols-4">
            {stats.slice(0, 4).map((stat, i) => (
              <div
                key={stat.label}
                className={`border-b px-6 py-8 ${i % 2 === 0 ? "border-r" : ""} ${i === 1 ? "lg:border-r" : ""}`}
              >
                <div className="text-3xl font-semibold tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="border-x p-6 md:p-10">
            <HeroVisual />
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm text-muted-foreground">
            Featured by
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
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Features
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Designed to fit into your day, not take it over
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Thoughtful features, quick to learn and fast to use, on iPhone,
              Android and the web.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-emerald-600 dark:text-emerald-400" />
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
                Made for every moment
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Widgets, watch complications and shortcuts put the most useful
                parts one tap away.
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
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
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
              Loved by people who hate most apps
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
              Get started in three minutes
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
              Free to start. Premium when you want more.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              The core app is free forever. Premium unlocks advanced features
              and supports an independent team.
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
              Frequently asked
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
              {"Make tonight's dinner the easy part"}
            </h2>
            <p className="text-lg text-muted-foreground">
              Free to download. Your first weekly plan is ready in under a
              minute.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Download free
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Browse recipes
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
                M
              </span>
              <span className="">Mealwise</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Eat well, waste less.
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
              © {new Date().getFullYear()} Mealwise. All rights reserved.
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
  const bars = [38, 52, 44, 63, 58, 71, 66, 80, 74, 88, 83, 95]
  return (
    <div className="overflow-hidden rounded-xl border bg-card text-left text-card-foreground shadow-2xl/10">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 hidden rounded-md bg-muted px-3 py-0.5 text-[11px] text-muted-foreground sm:inline">
          app.mealwise.com
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
              <span className="text-emerald-600 dark:text-emerald-400">
                +24.6%
              </span>
            </div>
            <div className="flex h-32 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === bars.length - 1 ? "bg-emerald-600" : "bg-muted-foreground/20"}`}
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
                <span className="shrink-0 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
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
