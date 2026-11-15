import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cpu,
  Map,
  Plus,
  Quote,
  Sparkles,
  Swords,
  Trophy,
  Users,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Game", "Editions", "Roadmap", "Community", "Press"]

const logos = [
  "PC Arena",
  "Pixel Press",
  "GameFront",
  "Respawn Weekly",
  "Critical Hit",
  "Lootbox",
  "IndieVerse",
  "The Joystick",
]

const features = [
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
  {
    icon: Trophy,
    title: "Ranked seasons",
    description:
      "Climb from Bronze to Apex in eight-week seasons with skill-based matchmaking and exclusive cosmetic rewards.",
  },
  {
    icon: Cpu,
    title: "Runs at 120 FPS",
    description:
      "Optimised for current consoles and mid-range PCs, with DLSS, FSR and full ultrawide support.",
  },
]

const stats = [
  { value: "60+", label: "Hours of campaign content" },
  { value: "18", label: "Languages supported" },
  { value: "$1.5M", label: "Tournament prize pool" },
  { value: "240K", label: "Discord members" },
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
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
  {
    name: "Hollow Peaks",
    meta: "Frozen highlands · Levels 15-30",
    tag: "Act II",
    price: "12 hrs",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Verdant Deep",
    meta: "Overgrown ruins · Levels 30-45",
    tag: "Act III",
    price: "14 hrs",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "The Iron Citadel",
    meta: "Raid dungeon · 4 players",
    tag: "Raid",
    price: "3 hrs",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Duskmarket",
    meta: "Social hub · Trading and crafting",
    tag: "Hub",
    price: "Free",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "The Rift",
    meta: "Endgame arena · Ranked only",
    tag: "Season 3",
    price: "Ranked",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
]

const testimonials = [
  {
    quote:
      "Co-op is seamless. My friends join mid-dungeon and the difficulty just adjusts. No lobbies, no waiting.",
    name: "Luis Ortega",
    role: "Streamer, 180K followers",
  },
  {
    quote:
      "Finally a ranked mode that feels fair. The matchmaking is tight and the seasons give you a reason to come back.",
    name: "Aisha Bello",
    role: "Pro player, Team Vortex",
  },
  {
    quote:
      "A small team made something that stands next to the biggest releases of the year. Essential.",
    name: "Rhys Morgan",
    role: "Reviewer, IndieVerse",
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
    q: "Are there microtransactions?",
    a: "Only optional cosmetics. Nothing that affects gameplay, power or progression is ever sold.",
  },
  {
    q: "Can I play solo?",
    a: "Absolutely. The full campaign is designed for solo play, with co-op as an optional extra.",
  },
  {
    q: "What are the minimum PC requirements?",
    a: "A GTX 1660 or RX 5600, 16 GB of RAM and an SSD with 70 GB of free space.",
  },
  {
    q: "When does early access start?",
    a: "Deluxe and Collector's owners can start playing 72 hours before the global launch.",
  },
  {
    q: "Which platforms is the game available on?",
    a: "PC via Steam and Epic, PlayStation 5 and Xbox Series X and S. Steam Deck is fully verified.",
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

export default function LandingGaming09() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-orange-600 text-white text-sm">
              G
            </span>
            <span className="">Gridlock Tactics</span>
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
              Get it on Steam
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-orange-600 dark:text-orange-400" />
              Turn-based mech tactics
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl ">
              {"Command a squad where "}
              <span className="text-orange-600 dark:text-orange-400">
                every move counts
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              Gridlock Tactics pairs deep loadout building with destructible
              maps, so the battlefield changes as fast as your plan does.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Get it on Steam
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Read the roadmap
              </Button>
            </div>
          </div>
          <div className="mt-14 grid gap-3 lg:grid-cols-[2fr_1fr]">
            <HeroVisual />
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {stats.slice(0, 3).map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col justify-between rounded-2xl border p-5 ${i === 0 ? "bg-orange-500/10" : "bg-muted/40"} ${i === 2 ? "col-span-2 lg:col-span-1" : ""}`}
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
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
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
          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border p-6 transition-colors hover:bg-muted/40 ${i === 0 ? "bg-orange-500/10 md:col-span-2 md:row-span-2 md:p-10" : ""} ${i === 3 ? "md:col-span-2" : ""}`}
              >
                <feature.icon
                  className={`${i === 0 ? "size-8" : "size-5"} text-orange-600 dark:text-orange-400`}
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
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              What players and critics are saying
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`flex flex-col justify-between rounded-2xl border bg-background p-6 ${i === 0 ? "md:col-span-2 md:p-10" : ""}`}
              >
                <Quote className="size-6 text-orange-600 dark:text-orange-400" />
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
              Your first night in the game
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
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
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-orange-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-orange-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-orange-600 dark:text-orange-400" />
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-orange-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-orange-500/25 via-amber-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Your squad is waiting for orders
            </h2>
            <p className="text-lg text-muted-foreground">
              Available now on PC, with the console release coming next spring.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Get it on Steam
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Read the roadmap
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
              <span className="flex size-7 items-center justify-center rounded-md bg-orange-600 text-white text-sm">
                G
              </span>
              <span className="">Gridlock Tactics</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Think three turns ahead.
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
              © {new Date().getFullYear()} Gridlock Tactics. All rights
              reserved.
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
