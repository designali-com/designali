import {
  Accessibility,
  ArrowRight,
  ArrowUpRight,
  Check,
  Headphones,
  Map,
  Plus,
  Swords,
  Trophy,
  Users,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Services", "Packages", "Process", "Work", "Contact"]

const logos = [
  "Motion trailers",
  "Design systems",
  "Brand identity",
  "Key art",
  "Game UI",
  "HUD design",
  "Launch sites",
  "CGI & 3D",
]

const features = [
  {
    icon: Headphones,
    title: "Devlogs & socials",
    description:
      "Templates and motion assets for devlogs, patch notes and social posts, so your community updates always look on brand.",
  },
  {
    icon: Accessibility,
    title: "Accessible by design",
    description:
      "Readable type, colour-blind friendly palettes and clear UI states are built into every interface we design.",
  },
  {
    icon: Swords,
    title: "Game UI & HUD design",
    description:
      "Menus, inventories and HUDs designed in Figma and handed off as a clean, documented UI kit your engine team can build from.",
  },
  {
    icon: Map,
    title: "Studio brand identity",
    description:
      "Logo, wordmark, colour and type systems for your studio and your title, built to work on a store capsule and a 4K splash screen.",
  },
  {
    icon: Users,
    title: "Launch & wishlist sites",
    description:
      "Fast Next.js landing pages with trailers, editions and press kits, so every wishlist click lands on something that converts.",
  },
  {
    icon: Trophy,
    title: "Key art & store assets",
    description:
      "Capsule art, banners and social formats sized for every storefront, all exported from one consistent visual system.",
  },
]

const stats = [
  { value: "50+", label: "Game screens designed per project" },
  { value: "4000+", label: "Icons ready to use via @designali/icons" },
  { value: "60+", label: "Key art & UI assets per launch" },
  { value: "18", label: "Days to a launch-ready site" },
]

const steps = [
  {
    title: "Share your game",
    description:
      "Send a build, a pitch deck or a few screenshots. Ali Imam reviews it and replies with ideas and a scope.",
  },
  {
    title: "Discovery call",
    description:
      "A short call to understand your genre, audience, launch date and what the studio needs most.",
  },
  {
    title: "Design sprint",
    description:
      "Brand, key art direction and UI concepts are explored in Figma with weekly reviews.",
  },
  {
    title: "Build & launch",
    description:
      "The approved designs ship as a Next.js site and an engine-ready UI kit, tested before launch.",
  },
]

const showcase = [
  {
    name: "Indie action RPG",
    meta: "Brand identity · Launch site",
    tag: "Case study",
    price: "6 wks",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Cosy farming sim",
    meta: "Key art · Store capsules",
    tag: "Case study",
    price: "3 wks",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Co-op horror",
    meta: "Trailer motion · Socials",
    tag: "Case study",
    price: "5 wks",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
  {
    name: "Tactics game HUD",
    meta: "Game UI · 4 weeks",
    tag: "UI kit",
    price: "4 wks",
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
  },
  {
    name: "Esports team rebrand",
    meta: "Brand system · Merch graphics",
    tag: "Brand",
    price: "Free",
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
  {
    name: "Studio design system",
    meta: "Tokens · Components · Docs",
    tag: "System",
    price: "Ongoing",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
]

const testimonials = [
  {
    quote:
      "Ali understood our game in one call. The brand, the store art and the launch site all felt like they came from the same world.",
    name: "Sam",
    role: "Founder, indie game studio",
  },
  {
    quote:
      "The UI kit Designali delivered was so well documented that our engine team rebuilt the whole HUD in a week.",
    name: "Priya",
    role: "Lead developer, small studio",
  },
  {
    quote:
      "Our wishlist page finally looks like the game. Fast to load, easy to update and it actually converts.",
    name: "Leo",
    role: "Producer, indie publisher",
  },
]

const tiers = [
  {
    name: "Launch Kit",
    price: "$1,900",
    period: "per project",
    description: "Brand and launch site for a single title.",
    features: [
      "Logo and wordmark",
      "Next.js launch site",
      "Key art & store assets",
      "Press kit page",
    ],
    cta: "Book Launch Kit",
  },
  {
    name: "Studio",
    price: "$4,900",
    period: "per project",
    description: "Brand, key art and site for a full launch.",
    features: [
      "Everything in Launch Kit",
      "Key art and store capsules",
      "Trailer logo stinger",
      "Social media templates",
      "72-hour early access",
    ],
    cta: "Book Studio",
  },
  {
    name: "Full Production",
    price: "$9,800",
    period: "per project",
    description: "For studios that want design end to end.",
    features: [
      "Everything in Studio",
      "Motion trailer package",
      "Game UI and HUD kit",
      "CGI and 3D renders",
      "Design system and docs",
    ],
    cta: "Start a project",
  },
]

const faqs = [
  {
    q: "Which kinds of game studios does Designali work with?",
    a: "Mostly indie and small studios, from solo developers to teams of a few dozen, across PC, console and mobile games.",
  },
  {
    q: "Can you design in-game UI as well as the website?",
    a: "Yes. Ali Imam designs both, so the store page, the launch site and the HUD share one visual language.",
  },
  {
    q: "What do I receive at the end?",
    a: "Figma source files, exported assets, a Next.js codebase where included, and documentation for your team.",
  },
  {
    q: "Do you work with existing brands?",
    a: "Absolutely. We can refresh a current identity or extend it into new key art, UI or a launch site.",
  },
  {
    q: "What does the website stack look like?",
    a: "Next.js, React, TypeScript and Tailwind CSS, deployed on Vercel, so the site is fast and easy for your team to update.",
  },
]

const footer = [
  {
    title: "Services",
    links: ["Packages", "Process", "UI kits", "Templates"],
  },
  {
    title: "Work",
    links: ["Instagram", "X", "LinkedIn", "Blog"],
  },
  { title: "Studio", links: ["About", "Pricing", "Docs", "Support"] },
]

export default function LandingGaming07() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-blue-600 text-white text-sm">
              T
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
      <section className="relative isolate overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-[ellipse_60%_50%_at_50%_0%] from-blue-500/25 via-indigo-500/10 to-transparent to-70%" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_50%_45%_at_50%_0%,#000_60%,transparent_100%)]" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border bg-background/70 py-1 pr-3 pl-1 text-xs backdrop-blur"
            >
              <span className="rounded-full bg-blue-600 px-2 py-0.5 font-medium text-white">
                New
              </span>
              <span className="text-muted-foreground">
                Design for racing and sports games
              </span>
            </a>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"Give your game the speed of a "}
              <span className="text-blue-600 dark:text-blue-400">
                great brand
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              Designali designs racing and sports brands with motion, CGI and fast
              sites that feel as quick as the game, from first sketch to
              launch.
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
                See the work
              </Button>
            </div>
          </div>
          <div className="relative mx-auto mt-20 max-w-5xl">
            <div className="absolute inset-x-10 -top-6 -z-10 h-24 rounded-full bg-blue-500/10 blur-2xl" />
            <HeroVisual />
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
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Gameplay
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Built for game launches
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Brand, UI, art and code from one studio, so every touchpoint of
              your game looks and feels like the same world.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-blue-600 dark:text-blue-400" />
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
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4">
          {stats.slice(0, 4).map((stat, i) => (
            <div
              key={stat.label}
              className={`py-12 ${i > 0 ? "lg:border-l lg:pl-8" : ""} ${i % 2 === 1 ? "border-l pl-6 lg:pl-8" : ""} `}
            >
              <div className="text-4xl font-semibold tracking-tight md:text-5xl ">
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
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Recent game projects
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                A few of the studios, genres and launches Designali has designed
                for, from cosy sims to competitive tactics.
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
              How a project with Designali runs
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
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
              What game studios say about Designali
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
              Choose a package
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Every package includes Figma source files, a clear handoff and
              support from Ali Imam through launch day.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-blue-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-blue-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-400" />
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
              Frequently asked questions
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-blue-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500/25 via-indigo-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Start your launch this month
            </h2>
            <p className="text-lg text-muted-foreground">
              Book a discovery call and get a scope for brand, motion and site, with
              clear pricing.
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
                See the work
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
              <span className="flex size-7 items-center justify-center rounded-md bg-blue-600 text-white text-sm">
                T
              </span>
              <span className="">designali</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Every launch, a distinct look.
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
