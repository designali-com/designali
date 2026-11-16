import {
  ArrowRight,
  ArrowUpRight,
  Bug,
  Check,
  Code,
  Gauge,
  Lock,
  Plus,
  Puzzle,
} from "@designali/icons"

import { Logo } from "@/src/components/logo"
import { Button } from "@workspace/ui/components/button"

const navLinks = ["Docs", "Pricing", "Icons", "Blocks", "Templates"]

const features = [
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
]

const stats = [
  { value: "240+", label: "Landing pages" },
  { value: "2300+", label: "UI design examples" },
  { value: "3", label: "Packages: icons, logos, vectors" },
  { value: "100%", label: "Typed React components" },
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
  {
    quote:
      "The docs on designali.com are short and clear. Install, import, done. When I had a question, Ali replied himself.",
    name: "Chris D.",
    role: "Indie developer",
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
  {
    q: "Which frameworks are supported?",
    a: "Everything is built for React and Next.js with TypeScript and Tailwind CSS. The icon, logo and vector packages work in any React app.",
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

export default function LandingDeveloperTools03() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <Logo className="h-5 w-auto" />
            <span className="font-sans text-lg font-normal">designali</span>
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
              Read the docs
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-28">
          <div className="flex items-center justify-between border-b pb-4 text-xs tracking-widest text-muted-foreground uppercase">
            <span>Designali Docs</span>
            <span className="hidden sm:inline">
              Documentation without the noise.
            </span>
          </div>
          <h1 className="mt-12 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl font-sans font-normal">
            {"Find the answer "}
            <span className="text-primary dark:text-primary">
              in under a minute
            </span>
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-lg text-lg leading-8 text-muted-foreground">
              Designali docs cover install, props and real examples for every package, block and template, written by the person who built them.
            </p>
            <div className="md:justify-self-end">
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Read the docs
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  Live examples
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
              <div className="text-4xl font-semibold tracking-tight md:text-5xl font-sans font-normal">
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
              <p className="text-sm font-medium text-primary dark:text-primary">
                Developer experience
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-sans font-normal mt-3">
                Designed by a design engineer, for developers
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Where thoughtful design meets production-ready code. Spend your time on your product, not on pushing pixels.
              </p>
            </div>
          </div>
          <div className="divide-y border-y">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr]"
              >
                <span className="font-sans text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-sans text-2xl">{feature.title}</h3>
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
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-sans font-normal">
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
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            Loved by developers
          </p>
          {testimonials.slice(0, 1).map((t) => (
            <figure key={t.name} className="mt-10">
              <blockquote className="font-sans text-3xl leading-snug text-balance md:text-5xl">
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
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-sans font-normal">
              From install to production
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-foreground pt-6"
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
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-sans font-normal">
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
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-primary shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-chart-2 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-primary dark:text-primary" />
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
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-sans font-normal">
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
            <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl font-sans font-normal">
              Stop guessing, start shipping
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Install your first Designali package in five minutes with the quick start guide.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Read the docs
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#" />}
            >
              Live examples
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
              <span className="font-sans text-lg font-normal">designali</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Documentation without the noise.
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
