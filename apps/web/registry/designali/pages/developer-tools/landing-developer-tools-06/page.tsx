import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code,
  GitBranch,
  GitFork,
  Lock,
  Plus,
  Puzzle,
  Terminal,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Docs", "Pricing", "Changelog", "Blog", "GitHub"]

const logos = [
  "Hexagon",
  "Runloop",
  "Gridline",
  "Stackwise",
  "Byteforge",
  "Cloudnest",
  "Parsec",
  "Quantra",
]

const features = [
  {
    icon: Lock,
    title: "Secrets done right",
    description:
      "Encrypted environment variables, scoped per branch, with full rotation and audit history.",
  },
  {
    icon: Puzzle,
    title: "Extensible with plugins",
    description:
      "Hook into every build and deploy step with a simple plugin API and a growing ecosystem.",
  },
  {
    icon: GitFork,
    title: "Open source core",
    description:
      "The runtime is MIT licensed, with 40K stars and over 600 contributors on GitHub.",
  },
  {
    icon: Terminal,
    title: "A CLI that gets out of the way",
    description:
      "One command to scaffold, test and deploy, with readable errors and helpful suggestions.",
  },
  {
    icon: GitBranch,
    title: "Preview every pull request",
    description:
      "Each branch gets its own isolated environment and URL, torn down automatically on merge.",
  },
  {
    icon: Code,
    title: "Fully typed SDKs",
    description:
      "End-to-end type safety for TypeScript, Python, Go and Rust, generated from one OpenAPI spec.",
  },
]

const stats = [
  { value: "99.99%", label: "API uptime" },
  { value: "40K", label: "GitHub stars" },
  { value: "180K", label: "Developers building" },
  { value: "38ms", label: "Median global latency" },
]

const steps = [
  {
    title: "Install the CLI",
    description:
      "One npm, brew or curl command. Works on macOS, Linux and Windows.",
  },
  {
    title: "Connect your repo",
    description:
      "Link GitHub, GitLab or Bitbucket and we detect your framework automatically.",
  },
  {
    title: "Push to deploy",
    description:
      "Every push builds, tests and deploys, with preview URLs for every branch.",
  },
  {
    title: "Observe and scale",
    description:
      "Watch logs and traces in real time while traffic scales automatically.",
  },
]

const showcase = [
  {
    name: "@acme/sdk",
    meta: "TypeScript · Node, Deno and Bun",
    tag: "Official",
    price: "v4.2.0",
  },
  {
    name: "acme-python",
    meta: "Python 3.9+ · Async support",
    tag: "Official",
    price: "v3.8.1",
  },
  {
    name: "acme-go",
    meta: "Go 1.21+ · Zero dependencies",
    tag: "Official",
    price: "v2.5.0",
  },
  {
    name: "Next.js starter",
    meta: "Template · App Router and auth",
    tag: "Template",
    price: "1-click",
  },
  {
    name: "acme-rs",
    meta: "Rust · Tokio and async-std",
    tag: "Community",
    price: "v1.3.4",
  },
  {
    name: "GitHub Action",
    meta: "CI · Deploy on every push",
    tag: "Integration",
    price: "v2",
  },
]

const testimonials = [
  {
    quote:
      "Observability out of the box saved us from hiring a dedicated SRE for our first two years.",
    name: "Ana Petrovic",
    role: "Co-founder, Gridline",
  },
  {
    quote:
      "We moved our whole platform over in a week. Deploys went from twelve minutes to under thirty seconds.",
    name: "Alex Novak",
    role: "Platform Lead, Byteforge",
  },
  {
    quote:
      "The TypeScript SDK is the best I have used. Autocomplete for every endpoint and errors that explain themselves.",
    name: "Mei Lin",
    role: "Senior Engineer, Parsec",
  },
]

const tiers = [
  {
    name: "Hobby",
    price: "$0",
    period: "/month",
    description: "For side projects and experiments.",
    features: [
      "100 GB bandwidth",
      "1M requests",
      "Preview deployments",
      "Community support",
    ],
    cta: "Start building",
  },
  {
    name: "Pro",
    price: "$20",
    period: "/month + usage",
    description: "For production apps and small teams.",
    features: [
      "1 TB bandwidth included",
      "10M requests included",
      "Unlimited team members",
      "7-day log retention",
      "Email support",
    ],
    cta: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams with scale and compliance needs.",
    features: [
      "Dedicated infrastructure",
      "SSO and audit logs",
      "SOC 2 and HIPAA",
      "99.99% SLA",
      "24/7 engineering support",
    ],
    cta: "Contact sales",
  },
]

const faqs = [
  {
    q: "How do I get support?",
    a: "Community support on Discord and GitHub for everyone, email support on Pro and a dedicated channel on Enterprise.",
  },
  {
    q: "Which languages and frameworks are supported?",
    a: "Node, Python, Go, Rust and Ruby runtimes, with zero-config support for Next.js, Remix, Astro, Django and Rails.",
  },
  {
    q: "Can I self-host?",
    a: "Yes. The open source runtime can be self-hosted with Docker or Kubernetes. Enterprise includes support for self-hosted setups.",
  },
  {
    q: "How does usage billing work?",
    a: "Each plan includes a monthly allowance. Above that you pay per GB and per million requests, with spend limits you control.",
  },
  {
    q: "Is there vendor lock-in?",
    a: "No. Your code stays standard, configuration is a single portable file and you can export everything at any time.",
  },
]

const footer = [
  {
    title: "Developers",
    links: ["Documentation", "API reference", "CLI", "Status"],
  },
  {
    title: "Open source",
    links: ["GitHub", "Contributing", "Roadmap", "Changelog"],
  },
  { title: "Company", links: ["About", "Blog", "Careers", "Security"] },
]

const terminal = [
  "# install the CLI",
  "$ npm install -g @acme/cli",
  "added 1 package in 2.1s",
  "$ acme init my-app --template next",
  "Created my-app with 14 files",
  "$ acme deploy --prod",
  "Building... done in 8.4s",
  "Uploading 212 assets to 31 regions",
  "Deployed to https://my-app.acme.dev",
]

export default function LandingDeveloperTools06() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-sky-600 text-white text-sm">
              F
            </span>
            <span className="">Flagpole</span>
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
              Start flagging free
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-x border-b px-6 py-3 text-xs text-muted-foreground">
            <span>Feature flags for every stack</span>
            <span className="hidden sm:inline">Release with confidence.</span>
          </div>
          <div className="border-x px-6 py-16 md:py-28">
            <h1 className="max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"Ship features to "}
              <span className="text-sky-600 dark:text-sky-400">
                the right users
              </span>
              {", safely"}
            </h1>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                Flagpole lets you roll out features gradually, run experiments
                and kill a bad release in one click, without redeploying.
              </p>
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Start flagging free
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
            Powering engineering teams at
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
            <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
              Developer experience
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Built by developers, for developers
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Sensible defaults, zero config and an escape hatch for everything.
              Spend your time on your product, not your plumbing.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-sky-600 dark:text-sky-400" />
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
                SDKs, templates and packages
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                First-class libraries for every major language and framework,
                all open source and fully typed.
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
                  <span className="rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-600 dark:text-sky-400">
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
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Loved by engineers
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
              From zero to production
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-sky-600 dark:text-sky-400">
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
              Pay for what you use
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              A generous free tier for side projects and transparent usage
              pricing once you scale. No seat fees, ever.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-sky-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-sky-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-sky-600 dark:text-sky-400" />
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-sky-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-500/25 via-cyan-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Decouple deploys from releases
            </h2>
            <p className="text-lg text-muted-foreground">
              Add the SDK in minutes and manage your first flag on the free
              plan.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Start flagging free
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
      </section>
      <footer className="">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center gap-2 font-semibold tracking-tight"
            >
              <span className="flex size-7 items-center justify-center rounded-md bg-sky-600 text-white text-sm">
                F
              </span>
              <span className="">Flagpole</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Release with confidence.
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
              © {new Date().getFullYear()} Flagpole. All rights reserved.
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
        <span className="ml-3 font-mono text-xs text-zinc-500">~/projects</span>
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
                <span className="text-sky-400">$</span>
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
