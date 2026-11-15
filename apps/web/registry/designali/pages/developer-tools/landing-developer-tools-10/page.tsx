import {
  ArrowRight,
  ArrowUpRight,
  Bug,
  Check,
  Code,
  Gauge,
  GitBranch,
  Lock,
  Plus,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Docs", "Pricing", "Changelog", "Blog", "GitHub"]

const features = [
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
  {
    icon: Gauge,
    title: "Edge-fast by default",
    description:
      "Requests are served from 31 regions with a median latency under 40 ms worldwide.",
  },
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
]

const stats = [
  { value: "4.2B", label: "Requests served monthly" },
  { value: "600+", label: "Open source contributors" },
  { value: "99.99%", label: "API uptime" },
  { value: "40K", label: "GitHub stars" },
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
      "Clear pricing, no surprises. Our bill dropped 40% compared with managing it ourselves on raw cloud.",
    name: "Fatima Zahra",
    role: "Engineering Manager, Quantra",
  },
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
    q: "Is there vendor lock-in?",
    a: "No. Your code stays standard, configuration is a single portable file and you can export everything at any time.",
  },
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

export default function LandingDeveloperTools10() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-emerald-600 text-white text-sm">
              V
            </span>
            <span className="font-serif text-lg font-normal">Vaultline</span>
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
              Secure your secrets
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-28">
          <div className="flex items-center justify-between border-b pb-4 text-xs tracking-widest text-muted-foreground uppercase">
            <span>Secrets, handled</span>
            <span className="hidden sm:inline">
              Secrets management for teams.
            </span>
          </div>
          <h1 className="mt-12 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl font-serif font-normal">
            {"Keep every secret "}
            <span className="text-emerald-600 dark:text-emerald-400">
              out of your codebase
            </span>
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-lg text-lg leading-8 text-muted-foreground">
              Vaultline syncs API keys and credentials to every environment,
              rotates them on schedule and logs every read for audit.
            </p>
            <div className="md:justify-self-end">
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Secure your secrets
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  Security overview
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
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Developer experience
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal mt-3">
                Built by developers, for developers
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Sensible defaults, zero config and an escape hatch for
                everything. Spend your time on your product, not your plumbing.
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
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
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
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            Loved by engineers
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
              From zero to production
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-foreground pt-6"
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
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal">
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
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal">
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
            <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl font-serif font-normal">
              Delete your last .env file
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Import your existing secrets in one command and invite your team
              for free.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Secure your secrets
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#" />}
            >
              Security overview
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
              <span className="flex size-7 items-center justify-center rounded-md bg-emerald-600 text-white text-sm">
                V
              </span>
              <span className="font-serif text-lg font-normal">Vaultline</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Secrets management for teams.
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
              © {new Date().getFullYear()} Vaultline. All rights reserved.
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
                <span className="text-emerald-400">$</span>
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
