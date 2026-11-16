import {
  ArrowRight,
  ArrowUpRight,
  ChartCandlestick,
  Check,
  Coins,
  Landmark,
  Plus,
  Wallet,
  Zap,
} from "@designali/icons"

import { Logo } from "@/src/components/logo"
import { Button } from "@workspace/ui/components/button"

const navLinks = ["Work", "Services", "Process", "Pricing", "Blog"]

const features = [
  {
    icon: Zap,
    title: "Fast front ends",
    description:
      "Next.js and TypeScript front ends that stay smooth with live prices, charts and order books.",
  },
  {
    icon: Coins,
    title: "Dashboards and data",
    description:
      "Portfolio, staking and analytics dashboards with charts and tables designed for clarity.",
  },
  {
    icon: ChartCandlestick,
    title: "Design systems",
    description:
      "A component library and tokens for trading screens, dapps and docs, ready for your developers.",
  },
  {
    icon: Wallet,
    title: "Brand identity",
    description:
      "Logos, motion and 3D visuals that help a web3 product feel credible from the first glance.",
  },
  {
    icon: Landmark,
    title: "CGI and motion",
    description:
      "3D renders and motion loops for launches, token pages and social, without generic stock visuals.",
  },
]

const stats = [
  { value: "2300+", label: "UI examples on designali.com" },
  { value: "4.9", label: "Average client rating" },
  { value: "4000+", label: "Icons in @designali/icons" },
  { value: "1:1", label: "Figma to code parity on every hand-off" },
]

const steps = [
  {
    title: "Book a discovery call",
    description:
      "A 30-minute call with Ali to understand your product, users and launch plans.",
  },
  {
    title: "Get a clear proposal",
    description:
      "Scope, timeline and a fixed price, usually within 48 hours of the call.",
  },
  {
    title: "Design in Figma",
    description:
      "Flows, screens and components designed and reviewed with your team every week.",
  },
  {
    title: "Ship in code",
    description:
      "Production-ready Next.js, React and Tailwind CSS, connected to your contracts and APIs.",
  },
]

const showcase = [
  {
    name: "Exchange dashboard",
    meta: "UI/UX · Trading screens",
    tag: "Product",
    price: "10 weeks",
  },
  {
    name: "Staking app",
    meta: "Next.js · Dashboard",
    tag: "Web",
    price: "8 weeks",
  },
  {
    name: "Wallet onboarding",
    meta: "UX · Mobile flows",
    tag: "UX",
    price: "6 weeks",
  },
  {
    name: "Protocol rebrand",
    meta: "Identity · Motion",
    tag: "Brand",
    price: "5 weeks",
  },
  {
    name: "Developer docs",
    meta: "Docs · Design system",
    tag: "-0.6%",
    price: "4 weeks",
  },
  { name: "Launch visuals", meta: "CGI · 3D renders", tag: "New", price: "3 weeks" },
]

const testimonials = [
  {
    quote:
      "Our wallet onboarding finally explains everything without ever making new users feel stupid.",
    name: "Laura M.",
    role: "Founder, wallet app",
  },
  {
    quote:
      "Design files land every week and the code matches them exactly. It just works the way it should.",
    name: "Omar H.",
    role: "Founder, Designali client",
  },
  {
    quote:
      "The new dashboard design was the deciding factor for our launch. Clarity is not optional any more.",
    name: "Grace L.",
    role: "Head of product, web3 team",
  },
]

const tiers = [
  {
    name: "Sprint",
    price: "$2,400",
    period: "per project",
    description: "One landing page or token page, designed and coded.",
    features: [
      "One page in Next.js",
      "Built from Designali blocks",
      "Responsive and accessible",
      "Delivered in two weeks",
    ],
    cta: "Start a sprint",
  },
  {
    name: "Product",
    price: "$4,500",
    period: "/month",
    description: "Ongoing UI/UX and front-end work for your dapp.",
    features: [
      "Unlimited design requests",
      "Next.js development included",
      "Dashboards and charts",
      "Design system upkeep",
      "Pause or cancel any time",
    ],
    cta: "Work with Designali",
  },
  {
    name: "Partner",
    price: "Custom",
    period: "",
    description: "For protocols and platforms with a long roadmap.",
    features: [
      "Brand and product together",
      "Ali embedded in your team",
      "Docs and developer portal",
      "CGI and launch motion",
      "Weekly roadmap check-ins",
    ],
    cta: "Talk to Ali",
  },
]

const faqs = [
  {
    q: "How long does a project take?",
    a: "A landing page usually takes two weeks. A full product UI and front end takes eight to twelve weeks.",
  },
  {
    q: "Can you work with our smart contract developers?",
    a: "Yes. We design around your contracts and APIs and pair with your engineers on wallet and data integration.",
  },
  {
    q: "Will we own the design and code?",
    a: "Yes. You get the Figma files and the full codebase, ready to deploy on Vercel or your own infrastructure.",
  },
  {
    q: "Do you sign NDAs before launch?",
    a: "Always. Unreleased products stay private, and we only share work publicly with your permission.",
  },
  {
    q: "Do you give financial or token advice?",
    a: "No. Designali designs and builds interfaces and brands. Token, legal and financial decisions stay with your team.",
  },
]

const footer = [
  {
    title: "Services",
    links: ["Web3 UI", "Brand identity", "Dashboards", "Partner"],
  },
  {
    title: "Studio",
    links: ["About", "Work", "Trust-first UI", "Contact"],
  },
  { title: "Resources", links: ["Docs", "Pricing", "Blocks", "Icons"] },
]

export default function LandingCrypto03() {
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
            <span>Designali for DeFi dashboards</span>
            <span className="hidden sm:inline">
              Designed, coded, shipped.
            </span>
          </div>
          <h1 className="mt-12 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl font-serif font-normal">
            {"DeFi dashboards "}
            <span className="text-fuchsia-600 dark:text-fuchsia-400">
              without the guesswork
            </span>
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-lg text-lg leading-8 text-muted-foreground">
              Yieldra routes your stablecoins to audited lending markets
              automatically, rebalancing every block for the best risk-adjusted
              return.
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
                  Read the docs
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
              <p className="text-sm font-medium text-fuchsia-600 dark:text-fuchsia-400">
                Services
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal mt-3">
                Built for teams who take UX seriously
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Where thoughtful design meets production-ready code, simple enough for a first-time user.
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
                Selected web3 work
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Exchanges, wallets, dashboards and launch visuals, all designed and built by Designali.
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
                  <span className="rounded-full bg-fuchsia-500/10 px-2.5 py-0.5 text-xs font-medium text-fuchsia-600 dark:text-fuchsia-400">
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
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            What web3 teams say
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
              From first call to first release
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-foreground pt-6"
              >
                <span className="text-sm font-medium text-fuchsia-600 dark:text-fuchsia-400">
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
              Transparent pricing, no surprises
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Fixed-price sprints or a monthly plan. Every option includes Figma files and production-ready code you own.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-fuchsia-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-fuchsia-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-fuchsia-600 dark:text-fuchsia-400" />
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
              Frequently asked questions
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
              Put your dashboard to work
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Book a call and get a dashboard review in two days.
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
              Read the docs
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
              <span className="font-serif text-lg font-normal">designali</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Designed, coded, shipped.
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
  const bars = [38, 52, 44, 63, 58, 71, 66, 80, 74, 88, 83, 95]
  return (
    <div className="overflow-hidden rounded-xl border bg-card text-left text-card-foreground shadow-2xl/10">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 hidden rounded-md bg-muted px-3 py-0.5 text-[11px] text-muted-foreground sm:inline">
          designali.com/blocks
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
              <span className="font-medium">Project progress, last 12 weeks</span>
              <span className="text-fuchsia-600 dark:text-fuchsia-400">
                On track
              </span>
            </div>
            <div className="flex h-32 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === bars.length - 1 ? "bg-fuchsia-600" : "bg-muted-foreground/20"}`}
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
                <span className="shrink-0 rounded-full bg-fuchsia-500/10 px-2 py-0.5 text-[11px] font-medium text-fuchsia-600 dark:text-fuchsia-400">
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
