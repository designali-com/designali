import {
  ArrowRight,
  ArrowUpRight,
  Bug,
  Check,
  Code,
  Gauge,
  GitBranch,
  GitFork,
  Plus,
  Quote,
  Sparkles,
  Terminal,
} from "@designali/icons"

import { Logo } from "@/src/components/logo"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const navLinks = ["Docs", "Pricing", "Icons", "Blocks", "Templates"]

const logos = [
  "Radix UI",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Figma",
  "Vercel",
]

const features = [
  {
    icon: GitFork,
    title: "Built by a design engineer",
    description:
      "Ali Imam designs every asset in Figma and codes every component, so design and code never drift apart.",
  },
  {
    icon: Terminal,
    title: "Install in one command",
    description:
      "Add @designali/icons, logos or vectors with pnpm, npm or yarn and import only what you use.",
  },
  {
    icon: GitBranch,
    title: "Copy, paste, ship",
    description:
      "Every block and page is plain React and Tailwind CSS you own, with no runtime lock-in.",
  },
  {
    icon: Code,
    title: "Fully typed packages",
    description:
      "Every icon, logo and vector ships as a typed React component with size and className props.",
  },
  {
    icon: Gauge,
    title: "Tree-shakeable by default",
    description:
      "Named exports mean your bundle only includes the icons and shapes you actually import.",
  },
  {
    icon: Bug,
    title: "Semantic design tokens",
    description:
      "Blocks use bg-background, text-foreground and friends, so light and dark mode work out of the box.",
  },
]

const stats = [
  { value: "460+", label: "Ready-made blocks" },
  { value: "240+", label: "Landing pages" },
  { value: "2300+", label: "UI design examples" },
  { value: "3", label: "Packages: icons, logos, vectors" },
]

const steps = [
  {
    title: "Install a package",
    description:
      "Run pnpm add @designali/icons in any React or Next.js project.",
  },
  {
    title: "Import what you need",
    description:
      "Use named imports like ArrowRight or Github and style them with Tailwind classes.",
  },
  {
    title: "Copy a block",
    description:
      "Browse designali.com/blocks, copy the code and drop it straight into your app.",
  },
  {
    title: "Ship and customise",
    description:
      "Adjust tokens, copy and layout freely. It is your code from the moment you paste it.",
  },
]

const showcase = [
  {
    name: "@designali/icons",
    meta: "4000+ icons · React and TypeScript",
    tag: "Package",
    price: "4000+",
  },
  {
    name: "@designali/logos",
    meta: "Brand and tech logos · React",
    tag: "Package",
    price: "Logos",
  },
  {
    name: "@designali/vectors",
    meta: "Abstract shapes and illustrations",
    tag: "Package",
    price: "Vectors",
  },
  {
    name: "Next.js templates",
    meta: "Portfolio, agency and SaaS starters",
    tag: "Template",
    price: "1-click",
  },
  {
    name: "Apple device mockups",
    meta: "iPhone, iPad, MacBook and iMac frames",
    tag: "Component",
    price: "Mockups",
  },
  {
    name: "Blocks library",
    meta: "460+ sections · Copy and paste",
    tag: "Blocks",
    price: "460+",
  },
]

const testimonials = [
  {
    quote:
      "The typed components are a joy. Autocomplete finds every icon and the size prop just works.",
    name: "Mei L.",
    role: "Design engineer",
  },
  {
    quote:
      "Designali blocks gave our landing page a real design system. Designers and developers finally work from the same pieces.",
    name: "Jake T.",
    role: "Startup founder",
  },
  {
    quote:
      "The free tier covers most of what I need, and the pro templates saved me weeks on client work.",
    name: "Fatima Z.",
    role: "Freelance developer",
  },
]

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    description: "For side projects and learning.",
    features: [
      "@designali/icons, logos and vectors",
      "Free blocks and UI examples",
      "Docs and install guides",
      "Personal and commercial use",
    ],
    cta: "Browse free",
  },
  {
    name: "Pro",
    price: "$49",
    period: "/one-time",
    description: "For developers shipping client and product work.",
    features: [
      "All 460+ blocks",
      "240+ landing pages",
      "Premium Next.js templates",
      "7-day log retention",
      "Lifetime updates",
    ],
    cta: "Get Pro",
  },
  {
    name: "Studio",
    price: "Custom",
    period: "",
    description: "For teams that want Designali to design and build with them.",
    features: [
      "Custom design system",
      "Brand identity and UI/UX",
      "Next.js development",
      "Figma source files",
      "Direct access to Ali Imam",
    ],
    cta: "Contact Designali",
  },
]

const faqs = [
  {
    q: "Can I use the assets in client projects?",
    a: "Yes. Free and Pro assets can be used in personal and commercial projects. See designali.com/docs/legal/terms for details.",
  },
  {
    q: "How do updates work?",
    a: "Packages update through npm. Pro blocks and templates get new versions on designali.com that you can copy any time.",
  },
  {
    q: "Is there any lock-in?",
    a: "No. Blocks are plain React and Tailwind CSS that live in your repo. Change or remove anything you like.",
  },
  {
    q: "Do the icons match Lucide names?",
    a: "Yes. @designali/icons uses Lucide-compatible names, so most imports only need a new package path.",
  },
  {
    q: "How do I get support?",
    a: "Email support@designali.com or reach Designali on X and LinkedIn. Studio clients work with Ali directly.",
  },
]

const footer = [
  {
    title: "Resources",
    links: ["Documentation", "Icons", "Logos", "Illustrations"],
  },
  {
    title: "Library",
    links: ["Templates", "Blocks", "Templates", "Icons"],
  },
  { title: "Designali", links: ["About", "Blocks", "Work", "Contact"] },
]

const terminal = [
  "# install Designali icons",
  "$ pnpm add @designali/icons",
  "added 1 package in 2.1s",
  "$ pnpm add @designali/logos @designali/vectors",
  "added 2 packages in 3.4s",
  "$ pnpm dev",
  "Ready in 1.2s",
  "Compiled with 4000+ icons available",
  "Local: http://localhost:3000",
]

export default function LandingDeveloperTools08() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b bg-muted/50 text-muted-foreground px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          Coming soon: new Next.js templates on designali.com
          <ArrowRight className="size-3.5" />
        </a>
      </div>
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
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
              Sign in
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Join the list
            </Button>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden border-b">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-amber-600 dark:text-amber-400" />
              Designali Templates
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl ">
              {"Production-ready templates from "}
              <span className="text-amber-600 dark:text-amber-400">
                design to code
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              Designali templates give you complete Next.js sites for portfolios, agencies and SaaS products, with matching Figma files.
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
                className="h-10 bg-background"
              />
              <Button type="submit" size="lg">
                Join the list
                <ArrowRight />
              </Button>
            </form>
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-amber-500/25 via-yellow-500/10 to-transparent blur-3xl" />
            <HeroVisual />
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm text-muted-foreground">
            Built for the stack you already use
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
      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
              Developer experience
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Designed by a design engineer, for developers
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Where thoughtful design meets production-ready code. Spend your time on your product, not on pushing pixels.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-background p-6 shadow-xs"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-amber-500/10">
                  <feature.icon className="size-5 text-amber-600 dark:text-amber-400" />
                </span>
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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              From install to production
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
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
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Packages, blocks and templates
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Everything on designali.com is typed, themeable and ready to drop into a Next.js app.
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
                  <span className="flex size-10 items-center justify-center rounded-lg border bg-muted/50 font-semibold font-mono text-sm">
                    {item.name.charAt(0)}
                  </span>
                  <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-semibold font-mono text-sm">
                  {item.name}
                </h3>
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
      <section className="border-b ">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Loved by developers
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`flex flex-col justify-between rounded-2xl border bg-background p-6 ${i === 0 ? "md:col-span-2 md:p-10" : ""}`}
              >
                <Quote className="size-6 text-amber-600 dark:text-amber-400" />
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
              Start free, upgrade when you ship
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Free packages and blocks for everyone, a one-time Pro license for the full library and a studio plan for custom work.
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
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Developer FAQ
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
      <section className="px-6 py-20 md:py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-amber-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-500/25 via-yellow-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Get early access to new templates
            </h2>
            <p className="text-lg text-muted-foreground">
              Leave your email and we will let you know when the next template drops.
            </p>
            <form
              action="#"
              className="flex w-full max-w-md flex-col gap-2 sm:flex-row mx-auto"
            >
              <Input
                type="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                className="h-10 bg-background"
              />
              <Button type="submit" size="lg">
                Join the list
                <ArrowRight />
              </Button>
            </form>
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
              <span className="">designali</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              design se code tak
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
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 text-left shadow-2xl">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="ml-3 font-mono text-xs text-zinc-500">~/designali</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
        {terminal.map((line, i) => (
          <div
            key={i}
            className={
              line.startsWith("$")
                ? "text-zinc-100"
                : line.startsWith("#")
                  ? "text-zinc-500"
                  : "text-zinc-400"
            }
          >
            {line.startsWith("$") ? (
              <>
                <span className="text-amber-400">$</span>
                {line.slice(1)}
              </>
            ) : (
              line
            )}
          </div>
        ))}
        <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-zinc-300" />
      </pre>
    </div>
  )
}
