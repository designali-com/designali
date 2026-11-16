import {
  ArrowRight,
  ArrowUpRight,
  Building,
  Check,
  Clock,
  Gavel,
  Languages,
  Lock,
  MessageSquare,
  Plus,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const navLinks = [
  "Licenses",
  "Policies",
  "Terms",
  "Docs",
  "Contact",
]

const logos = [
  "Figma",
  "Vercel",
  "shadcn-style UI",
  "Designali",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
]

const features = [
  {
    icon: Languages,
    title: "Plain-language summaries",
    description:
      "Every policy starts with a short summary in plain English before the full text.",
  },
  {
    icon: Building,
    title: "One license, every project",
    description:
      "Use Pro resources in every product and client site you build, as described in the terms.",
  },
  {
    icon: Gavel,
    title: "Plain-language terms",
    description:
      "Our terms for templates, blocks, UI, icons and vectors are written so designers and developers can read them in minutes.",
  },
  {
    icon: MessageSquare,
    title: "Clear licensing",
    description:
      "Know exactly what Free and Pro licenses allow, from personal projects to commercial client work.",
  },
  {
    icon: Clock,
    title: "Fast answers",
    description:
      "Questions about a license or an invoice? Email support@designali.com and expect a reply within one business day.",
  },
  {
    icon: Lock,
    title: "Privacy first",
    description:
      "We collect only what we need to run designali.com, and we never sell your personal data.",
  },
]

const stats = [
  { value: "4000+", label: "Resources covered by one license" },
  { value: "Policies kept up to date", label: "Policies kept up to date" },
  { value: "2300+", label: "Questions answered" },
  { value: "460+", label: "Blocks covered" },
]

const steps = [
  {
    title: "Read the summary",
    description:
      "Start with the plain-language overview of what you can and cannot do with Designali resources.",
  },
  {
    title: "Pick the right license",
    description:
      "Choose Free for personal and open projects, or Pro for commercial and client work.",
  },
  {
    title: "Build with confidence",
    description:
      "Use templates, blocks, icons and vectors in your projects, following the attribution and redistribution rules.",
  },
  {
    title: "Ask when unsure",
    description:
      "If a use case is not covered, email hello@designali.com and we will clarify it in writing.",
  },
]

const showcase = [
  {
    name: "Templates license",
    meta: "Websites, landing pages, client sites",
    tag: "Templates",
    price: "Free & Pro",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
  {
    name: "Blocks & UI license",
    meta: "460+ blocks, 2300+ UI examples",
    tag: "Components",
    price: "Pro",
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
  },
  {
    name: "Icons license",
    meta: "@designali/icons, 4000+ icons",
    tag: "Icons",
    price: "Pro license",
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
  {
    name: "Logos & brand marks",
    meta: "Third-party logos, trademarks",
    tag: "Brand assets",
    price: "Included",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Client project terms",
    meta: "Ownership, handover, revisions",
    tag: "Brand assets",
    price: "Studio work",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Privacy policy",
    meta: "Accounts, analytics, cookies",
    tag: "Everyone",
    price: "Included",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
]

const testimonials = [
  {
    quote:
      "The license page answered every question I had about using the templates for client work. Clear and short.",
    name: "Chris",
    role: "Freelance web designer",
  },
  {
    quote:
      "We shipped three client sites on Designali blocks. Knowing the Pro license covered commercial work made it easy.",
    name: "Sara",
    role: "Founder, small design agency",
  },
  {
    quote:
      "Ali replied the same day when I asked about attribution for the icons. Straightforward and friendly.",
    name: "Maria",
    role: "Frontend developer",
  },
]

const tiers = [
  {
    name: "Free",
    price: "Free",
    period: "",
    description: "For personal, learning and open projects.",
    features: [
      "Free and Pro explained",
      "Free blocks and UI examples",
      "Personal and open-source use",
      "No credit card required",
    ],
    cta: "Browse free resources",
  },
  {
    name: "Included",
    price: "Studio work",
    period: "/year",
    description: "For commercial and client work.",
    features: [
      "Commercial projects",
      "Unlimited client sites",
      "All Pro templates and blocks",
      "Pro icons and vectors",
      "One simple license",
    ],
    cta: "View Pro pricing",
  },
  {
    name: "Studio",
    price: "Custom",
    period: "",
    description: "For teams and studio partnerships.",
    features: [
      "Team seats",
      "Custom project terms",
      "Design and development work",
      "Priority support",
      "Invoice billing",
    ],
    cta: "Contact the studio",
  },
]

const faqs = [
  {
    q: "Can I use free resources in commercial projects?",
    a: "Free resources can be used in personal and many commercial projects. Check the license summary in /docs/legal/terms for attribution rules.",
  },
  {
    q: "What does the Pro license add?",
    a: "Pro unlocks the full library of templates, blocks, UI, icons and vectors for commercial and client work, with no per-project fees.",
  },
  {
    q: "Can I resell or redistribute the files?",
    a: "No. You can use resources inside your own products and client projects, but you cannot resell them as templates or icon packs.",
  },
  {
    q: "Who owns custom studio work?",
    a: "For client projects, ownership and handover terms are agreed in writing before work begins. This page is a summary, not legal advice.",
  },
  {
    q: "How do I ask a licensing question?",
    a: "Email hello@designali.com or use the contact page. We usually reply within one business day.",
  },
]

const footer = [
  {
    title: "Licenses",
    links: ["Templates", "Templates", "Brand assets", "Privacy policy"],
  },
  { title: "Designali", links: ["Policies", "Terms", "About", "Contact"] },
  {
    title: "Contact",
    links: ["Terms", "Privacy", "Licensing", "Docs"],
  },
]

export default function LandingLegal07() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-rose-600 text-white text-sm">
              C
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
              Sign in
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Read the brand guidelines
            </Button>
          </div>
        </div>
      </header>
      <section className="relative isolate overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-[ellipse_60%_50%_at_50%_0%] from-rose-500/25 via-pink-500/10 to-transparent to-70%" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_50%_45%_at_50%_0%,#000_60%,transparent_100%)]" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border bg-background/70 py-1 pr-3 pl-1 text-xs backdrop-blur"
            >
              <span className="rounded-full bg-rose-600 px-2 py-0.5 font-medium text-white">
                New
              </span>
              <span className="text-muted-foreground">
                Trademarks and brand assets
              </span>
            </a>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"Use logos "}
              <span className="text-rose-600 dark:text-rose-400">
                the right way
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              Logos in @designali/logos are trademarks of their owners. Our guidelines explain
              how to use them, and the Designali name, responsibly in your projects.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Read the brand guidelines
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                See brand guidelines
              </Button>
            </div>
          </div>
          <div className="relative mx-auto mt-20 max-w-5xl">
            <div className="absolute inset-x-10 -top-6 -z-10 h-24 rounded-full bg-rose-500/10 blur-2xl" />
            <HeroVisual />
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm text-muted-foreground">
            Built with
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
            <p className="text-sm font-medium text-rose-600 dark:text-rose-400">
              Why creators trust our terms
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Terms that are clear, fair and readable
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              We combine the coverage of a proper license with the tone of a
              friendly studio, and explain every rule in plain language.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-rose-600 dark:text-rose-400" />
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
                License topics
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Plain-language guides to the rules that affect your projects,
                your clients and your products.
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
              How licensing works
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-rose-600 dark:text-rose-400">
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
              What creators say
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
              Transparent plans
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              No hidden fees. Free and Pro licenses are explained in full before
              you download anything.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-rose-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-rose-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-rose-600 dark:text-rose-400" />
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
              Common questions
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-rose-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-rose-500/25 via-pink-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Respect every brand
            </h2>
            <p className="text-lg text-muted-foreground">
              Third-party logos are provided for identification only and remain
              the property of their owners.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Read the brand guidelines
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                See brand guidelines
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
              <span className="flex size-7 items-center justify-center rounded-md bg-rose-600 text-white text-sm">
                C
              </span>
              <span className="">designali</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              {"Respect what others have built."}
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
