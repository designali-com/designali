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
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Docs", "Pricing", "Changelog", "Blog", "GitHub"]

const features = [
  {
    icon: Bug,
    title: "Built-in observability",
    description:
      "Logs, traces and metrics in one place, with OpenTelemetry export to your own stack.",
  },
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
]

const stats = [
  { value: "600+", label: "Open source contributors" },
  { value: "99.99%", label: "API uptime" },
  { value: "40K", label: "GitHub stars" },
  { value: "180K", label: "Developers building" },
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
      "The docs are so good I rarely need to ask support. When I do, an engineer answers within the hour.",
    name: "Chris Duval",
    role: "Indie developer",
  },
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
    q: "Do you have a status page?",
    a: "Yes, with real-time status for every region and a full incident history going back three years.",
  },
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

export default function LandingDeveloperTools05() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-background/10 bg-foreground text-background/80 px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          Lintkit 2.0: type-aware rules and a VS Code extension
          <ArrowRight className="size-3.5" />
        </a>
      </div>
      <header className="bg-foreground text-background sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-background text-foreground text-sm">
              L
            </span>
            <span className="">Lintkit</span>
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
              Install Lintkit
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
              Open source, MIT licensed
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-7xl ">
              {"Lint and format code "}
              <span className="text-background/60">50x faster</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-background/65">
              Lintkit replaces your linter and formatter with a single Rust
              binary that checks a million lines of code in under a second.
            </p>
            <div className="flex flex-wrap gap-3 ">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                nativeButton={false}
                render={<a href="#" />}
              >
                Install Lintkit
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
                nativeButton={false}
                render={<a href="#" />}
              >
                Star on GitHub
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
            <p className="text-sm font-medium text-teal-600 dark:text-teal-400">
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
                <feature.icon className="size-6 text-teal-600 dark:text-teal-400" />
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
                  <span className="rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs font-medium text-teal-600 dark:text-teal-400">
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
              From zero to production
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
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
                              : "mt-0.5 size-4 shrink-0 text-teal-600 dark:text-teal-400"
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
      <section className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl ">
              Make CI fast again
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Drop-in compatible with your existing config. Migrate with one
              command.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Install Lintkit
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#" />}
            >
              Star on GitHub
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
              <span className="flex size-7 items-center justify-center rounded-md bg-background text-foreground text-sm">
                L
              </span>
              <span className="">Lintkit</span>
            </a>
            <p className="max-w-xs text-sm text-background/60">
              Fast tooling for the web.
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
              © {new Date().getFullYear()} Lintkit. All rights reserved.
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
                <span className="text-teal-400">$</span>
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
