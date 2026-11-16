import {
  ArrowRight,
  ArrowUpRight,
  Bug,
  Check,
  GitBranch,
  GitFork,
  Lock,
  Plus,
  Puzzle,
  Sparkles,
  Terminal,
} from "@designali/icons"

import { Logo } from "@/src/components/logo"
import { Button } from "@workspace/ui/components/button"

const navLinks = ["Docs", "Pricing", "Icons", "Blocks", "Templates"]

const features = [
  {
    icon: Bug,
    title: "Semantic design tokens",
    description:
      "Blocks use bg-background, text-foreground and friends, so light and dark mode work out of the box.",
  },
  {
    icon: Lock,
    title: "Clear documentation",
    description:
      "Install guides, props and examples for every package on designali.com/docs.",
  },
  {
    icon: Puzzle,
    title: "Lucide-compatible names",
    description:
      "Icon names match the ones you already know, so migrating an existing project takes minutes.",
  },
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
]

const stats = [
  { value: "3", label: "Packages: icons, logos, vectors" },
  { value: "100%", label: "Typed React components" },
  { value: "4000+", label: "Icons in @designali/icons" },
  { value: "460+", label: "Ready-made blocks" },
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
      "The docs on designali.com are short and clear. Install, import, done. When I had a question, Ali replied himself.",
    name: "Chris D.",
    role: "Indie developer",
  },
  {
    quote:
      "Designali templates gave us a polished marketing site before we had a designer on the team.",
    name: "Ana P.",
    role: "Co-founder, SaaS startup",
  },
  {
    quote:
      "We swapped our icon set for @designali/icons in an afternoon. Same names, cleaner strokes, smaller bundle.",
    name: "Alex N.",
    role: "Frontend developer",
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
    q: "Do the icons match Lucide names?",
    a: "Yes. @designali/icons uses Lucide-compatible names, so most imports only need a new package path.",
  },
  {
    q: "How do I get support?",
    a: "Email support@designali.com or reach Designali on X and LinkedIn. Studio clients work with Ali directly.",
  },
  {
    q: "Which frameworks are supported?",
    a: "Everything is built for React and Next.js with TypeScript and Tailwind CSS. The icon, logo and vector packages work in any React app.",
  },
  {
    q: "Can I use the assets in client projects?",
    a: "Yes. Free and Pro assets can be used in personal and commercial projects. See designali.com/docs/legal/terms for details.",
  },
  {
    q: "How do updates work?",
    a: "Packages update through npm. Pro blocks and templates get new versions on designali.com that you can copy any time.",
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

export default function LandingDeveloperTools05() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-background/10 bg-foreground text-background/80 px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          New: 4000+ icons with Lucide-compatible names
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
              Sign in
            </Button>
            <Button
              size="sm"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Install icons
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
              @designali/icons
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-7xl ">
              {"Icons for every interface, "}
              <span className="text-background/60">ready in seconds</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-background/65">
              @designali/icons gives you 4000+ consistent, typed React icons. Install once, import by name and style with Tailwind classes.
            </p>
            <div className="flex flex-wrap gap-3 ">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                nativeButton={false}
                render={<a href="#" />}
              >
                Install icons
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
                nativeButton={false}
                render={<a href="#" />}
              >
                Browse icons
              </Button>
            </div>
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
            <p className="text-sm font-medium text-primary dark:text-primary">
              Developer experience
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Designed by a design engineer, for developers
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Where thoughtful design meets production-ready code. Spend your time on your product, not on pushing pixels.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-primary dark:text-primary" />
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
                  <span className="flex size-10 items-center justify-center rounded-lg border bg-muted/50 font-semibold font-sans text-sm">
                    {item.name.charAt(0)}
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary dark:text-primary">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-semibold font-sans text-sm">
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
                <span className="text-sm font-medium text-primary dark:text-primary">
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
              Loved by developers
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
                              : "mt-0.5 size-4 shrink-0 text-primary dark:text-primary"
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
      <section className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl ">
              Make your UI consistent again
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Lucide-compatible names. Migrate with a single import change.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Install icons
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#" />}
            >
              Browse icons
            </Button>
          </div>
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
              Icons for the web.
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
  return (
    <div className="overflow-hidden rounded-xl border border-foreground bg-foreground text-left shadow-2xl">
      <div className="flex items-center gap-2 border-b border-foreground px-4 py-3">
        <span className="size-2.5 rounded-full bg-foreground" />
        <span className="size-2.5 rounded-full bg-foreground" />
        <span className="size-2.5 rounded-full bg-foreground" />
        <span className="ml-3 font-sans text-xs text-muted-foreground">~/designali</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
        {terminal.map((line, i) => (
          <div
            key={i}
            className={
              line.startsWith("$")
                ? "text-background"
                : line.startsWith("#")
                  ? "text-muted-foreground"
                  : "text-muted-foreground"
            }
          >
            {line.startsWith("$") ? (
              <>
                <span className="text-primary">$</span>
                {line.slice(1)}
              </>
            ) : (
              line
            )}
          </div>
        ))}
        <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-border" />
      </pre>
    </div>
  )
}
