import {
  Accessibility,
  ArrowRight,
  ArrowUpRight,
  Check,
  Headphones,
  Map,
  Plus,
  RefreshCw,
  Swords,
  Users,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Game", "Editions", "Roadmap", "Community", "Press"]

const logos = [
  "Lootbox",
  "IndieVerse",
  "The Joystick",
  "PC Arena",
  "Pixel Press",
  "GameFront",
  "Respawn Weekly",
  "Critical Hit",
]

const features = [
  {
    icon: RefreshCw,
    title: "Cross-progression",
    description:
      "Start on console, continue on PC or Steam Deck. Your saves, unlocks and friends follow you everywhere.",
  },
  {
    icon: Headphones,
    title: "Original soundtrack",
    description:
      "Over four hours of original music recorded with a live orchestra and a dynamic score that reacts to combat.",
  },
  {
    icon: Accessibility,
    title: "Accessible by design",
    description:
      "Remappable controls, colour-blind modes, subtitles with speaker names and adjustable combat speed.",
  },
  {
    icon: Swords,
    title: "Skill-based combat",
    description:
      "Parry, dodge and chain abilities in a fluid system with no auto-aim and no pay-to-win upgrades.",
  },
  {
    icon: Map,
    title: "Hand-crafted open world",
    description:
      "Six regions built by hand, with dungeons, side stories and secrets you will still be finding a year from now.",
  },
  {
    icon: Users,
    title: "Four-player co-op",
    description:
      "Drop in and out of a friend's campaign at any time, with shared loot and scaling difficulty.",
  },
]

const stats = [
  { value: "240K", label: "Discord members" },
  { value: "3.2M", label: "Players in the first month" },
  { value: "94%", label: "Positive reviews on Steam" },
  { value: "60+", label: "Hours of campaign content" },
]

const steps = [
  {
    title: "Create your character",
    description:
      "Pick from five classes and shape your look, voice and backstory in a detailed creator.",
  },
  {
    title: "Survive the prologue",
    description:
      "A tight two-hour opening teaches every system without a single tutorial pop-up.",
  },
  {
    title: "Find your squad",
    description:
      "Invite friends or use in-game matchmaking to form a party of up to four players.",
  },
  {
    title: "Enter ranked",
    description:
      "Unlock ranked after level 20 and start climbing the seasonal ladder.",
  },
]

const showcase = [
  {
    name: "The Ashen Coast",
    meta: "Starting region · Levels 1-15",
    tag: "Act I",
    price: "8 hrs",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Hollow Peaks",
    meta: "Frozen highlands · Levels 15-30",
    tag: "Act II",
    price: "12 hrs",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Verdant Deep",
    meta: "Overgrown ruins · Levels 30-45",
    tag: "Act III",
    price: "14 hrs",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "The Iron Citadel",
    meta: "Raid dungeon · 4 players",
    tag: "Raid",
    price: "3 hrs",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Duskmarket",
    meta: "Social hub · Trading and crafting",
    tag: "Hub",
    price: "Free",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
  {
    name: "The Rift",
    meta: "Endgame arena · Ranked only",
    tag: "Season 3",
    price: "Ranked",
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
  },
]

const testimonials = [
  {
    quote:
      "The accessibility options are the best I have seen. I could finally finish a game like this with my friends.",
    name: "Hannah Klein",
    role: "Community member",
  },
  {
    quote:
      "The most confident combat system I have played in years. Every fight feels earned, and every death teaches you something.",
    name: "Jordan Hale",
    role: "Senior Editor, PC Arena",
  },
  {
    quote:
      "I have put 200 hours in and I am still discovering new areas. The world design is genuinely remarkable.",
    name: "Mika Tanaka",
    role: "Steam reviewer, 214 hours played",
  },
]

const tiers = [
  {
    name: "Standard",
    price: "$39",
    period: "one-time",
    description: "The complete base game.",
    features: [
      "Full campaign",
      "Online co-op",
      "Ranked seasons",
      "Free seasonal updates",
    ],
    cta: "Buy Standard",
  },
  {
    name: "Deluxe",
    price: "$59",
    period: "one-time",
    description: "The game plus year-one content.",
    features: [
      "Everything in Standard",
      "Year 1 expansion pass",
      "Digital soundtrack",
      "Exclusive armour set",
      "72-hour early access",
    ],
    cta: "Buy Deluxe",
  },
  {
    name: "Collector's",
    price: "$149",
    period: "one-time",
    description: "For the most dedicated players.",
    features: [
      "Everything in Deluxe",
      "30 cm resin statue",
      "Hardcover art book",
      "Steelbook case",
      "Cloth world map",
    ],
    cta: "Pre-order now",
  },
]

const faqs = [
  {
    q: "When does early access start?",
    a: "Deluxe and Collector's owners can start playing 72 hours before the global launch.",
  },
  {
    q: "Which platforms is the game available on?",
    a: "PC via Steam and Epic, PlayStation 5 and Xbox Series X and S. Steam Deck is fully verified.",
  },
  {
    q: "Is there cross-play?",
    a: "Yes. Co-op and ranked matchmaking work across all platforms, and you can opt out at any time.",
  },
  {
    q: "Are there microtransactions?",
    a: "Only optional cosmetics. Nothing that affects gameplay, power or progression is ever sold.",
  },
  {
    q: "Can I play solo?",
    a: "Absolutely. The full campaign is designed for solo play, with co-op as an optional extra.",
  },
]

const footer = [
  {
    title: "Game",
    links: ["Editions", "Roadmap", "Patch notes", "System requirements"],
  },
  {
    title: "Community",
    links: ["Discord", "Forums", "Creator program", "Esports"],
  },
  { title: "Studio", links: ["About", "Careers", "Press kit", "Support"] },
]

export default function LandingGaming06() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-emerald-600 text-white text-sm">
              H
            </span>
            <span className="">Hollowkeep</span>
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
              Join Discord
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Wishlist now
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-x border-b px-6 py-3 text-xs text-muted-foreground">
            <span>Four-player co-op horror</span>
            <span className="hidden sm:inline">
              Fear is better with friends.
            </span>
          </div>
          <div className="border-x px-6 py-16 md:py-28">
            <h1 className="max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"Survive the night "}
              <span className="text-emerald-600 dark:text-emerald-400">
                together, or not at all
              </span>
            </h1>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                Hollowkeep drops up to four friends into a procedurally shifting
                manor where every door, sound and flashlight battery matters.
              </p>
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Wishlist now
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  Watch the trailer
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
              Gameplay
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Built for the long session
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Deep systems, hand-crafted worlds and a combat loop that rewards
              practice, whether you play for twenty minutes or all night.
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
                Explore the worlds
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Every region has its own factions, music and secrets. Here is a
                first look at where your journey begins.
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
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              What players and critics are saying
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
              Your first night in the game
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
              Choose your edition
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Every edition includes the full campaign, free seasonal updates
              and cross-progression across PC and console.
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
              Frequently asked questions
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
              The manor opens its doors this October
            </h2>
            <p className="text-lg text-muted-foreground">
              Pre-order any edition and get early access to the Lantern Night
              playtest.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Wishlist now
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Watch the trailer
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
                H
              </span>
              <span className="">Hollowkeep</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Fear is better with friends.
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
              © {new Date().getFullYear()} Hollowkeep. All rights reserved.
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
