import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code,
  Gauge,
  LayoutTemplate,
  PenTool,
  Plus,
  Presentation,
  Shapes,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Work", "About", "Services", "Writing", "Contact"]

const logos = [
  "Dalim Icons",
  "Dalim Visuals",
  "Dalim Tools",
  "Dalim Agency",
  "Dalim Works",
  "designali.com",
  "Dalim UI",
  "Dalim Fonts",
]

const features = [
  {
    icon: Presentation,
    title: "Workshops",
    description:
      "Focused sessions to align teams on vision, priorities and the problems worth solving.",
  },
  {
    icon: Gauge,
    title: "Performance audits",
    description:
      "Reviews of speed, accessibility and SEO with a prioritised list of fixes you can ship this week.",
  },
  {
    icon: PenTool,
    title: "UI/UX design",
    description:
      "User flows, wireframes and polished interfaces for web and mobile, designed in Figma and tested with real users.",
  },
  {
    icon: Code,
    title: "Web development",
    description:
      "Production-ready Next.js, React and TypeScript, with accessible components and smooth interactions.",
  },
  {
    icon: Shapes,
    title: "Brand identity",
    description:
      "Logos, typography and colour systems for studios and startups finding their voice.",
  },
  {
    icon: LayoutTemplate,
    title: "Design systems",
    description:
      "Reusable component libraries in Figma and code, like the blocks and UI on designali.com.",
  },
]

const stats = [
  { value: "9", label: "Years designing and coding" },
  { value: "50+", label: "Projects shipped" },
  { value: "10+", label: "Product libraries launched" },
  { value: "4", label: "Icon and logo libraries" },
]

const steps = [
  {
    title: "Intro call",
    description:
      "A free 30-minute call to understand your goals, timeline and whether we are a good fit.",
  },
  {
    title: "Proposal",
    description:
      "A short written proposal with scope, milestones and a fixed price, usually within three days.",
  },
  {
    title: "Design and build",
    description:
      "Weekly check-ins and shared progress in Figma and a staging link, so there are no surprises.",
  },
  {
    title: "Handover",
    description:
      "Clean files, documentation and a recorded walkthrough so your team can take it from there.",
  },
]

const showcase = [
  {
    name: "designali.com",
    meta: "Templates, blocks, UI and icons",
    tag: "Product",
    price: "2025",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
    image: "/images/templates/design-agency.jpg",
  },
  {
    name: "Dalim UI",
    meta: "Component library for React",
    tag: "UI",
    price: "2025",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
    image: "/images/templates/dalim-ui-old.jpg",
  },
  {
    name: "Dalim Fonts",
    meta: "Type and lettering experiments",
    tag: "Type",
    price: "2024",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
    image: "/images/templates/dalim-fonts-old.jpg",
  },
  {
    name: "Dalim Icons",
    meta: "Icon system for products",
    tag: "Icons",
    price: "2024",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
    image: "/images/templates/dalim-icons-old.jpg",
  },
  {
    name: "Dalim Works",
    meta: "Portfolio and studio site",
    tag: "Web",
    price: "2023",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
    image: "/images/templates/dalim-works-old.jpg",
  },
  {
    name: "Dalim Visuals",
    meta: "CGI and 3D visual series",
    tag: "CGI",
    price: "2023",
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
    image: "/images/templates/dalim-visuals-old.jpg",
  },
]

const testimonials = [
  {
    quote:
      "Working with Ali felt like adding a senior designer and engineer at once. Our new landing page converted noticeably better.",
    name: "Laura",
    role: "Founder, SaaS startup",
  },
  {
    quote:
      "Clear communication, thoughtful questions and pixel-perfect delivery. I would hire Ali again tomorrow.",
    name: "James",
    role: "Product lead, Designali client",
  },
  {
    quote:
      "Ali took our messy MVP and turned it into something our users immediately understood. Launch week went smoothly.",
    name: "Aisha",
    role: "Founder, early-stage startup",
  },
]

const tiers = [
  {
    name: "Audit",
    price: "$1,800",
    period: "one-time",
    description: "A deep review of your existing product.",
    features: [
      "UX and accessibility review",
      "Performance check",
      "Prioritised fix list",
      "60-minute walkthrough",
    ],
    cta: "Book an audit",
  },
  {
    name: "Launch",
    price: "$9,500",
    period: "per project",
    description: "Design and build a marketing site or MVP.",
    features: [
      "Discovery and strategy",
      "Full visual design",
      "Next.js front-end code",
      "Two rounds of revisions",
      "30 days of support",
    ],
    cta: "Start a project",
  },
  {
    name: "Retainer",
    price: "$6,000",
    period: "/month",
    description: "An ongoing design partner for your team.",
    features: [
      "Two days per week",
      "Design and code",
      "Shared Slack channel",
      "Pause or cancel any time",
    ],
    cta: "Check availability",
  },
]

const faqs = [
  {
    q: "Are you available for full-time roles?",
    a: "Not at the moment. I run Designali and work with a small number of clients so each project gets my full attention.",
  },
  {
    q: "How far in advance should I book?",
    a: "I usually book three to four weeks ahead. Audits can often start within a week.",
  },
  {
    q: "Do you work with agencies?",
    a: "Yes, I regularly collaborate with agencies as a designer and front-end developer.",
  },
  {
    q: "Which tools do you use?",
    a: "Figma for design, Next.js, React, TypeScript and Tailwind CSS for code, and Vercel for deployment.",
  },
  {
    q: "Can you work in my time zone?",
    a: "I work remotely with clients across time zones and schedule calls at hours that suit both sides.",
  },
]

const footer = [
  { title: "Sitemap", links: ["Work", "About", "Services", "Writing"] },
  { title: "Elsewhere", links: ["Instagram", "X", "LinkedIn", "21st.dev"] },
  {
    title: "Contact",
    links: ["Email me", "Book a call", "Newsletter", "Resume"],
  },
]

export default function LandingPortfolio07() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-teal-600 text-white text-sm">
              T
            </span>
            <span className="">Ali Imam</span>
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
              Resume
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Request a quote
            </Button>
          </div>
        </div>
      </header>
      <section className="relative isolate overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-[ellipse_60%_50%_at_50%_0%] from-teal-500/25 via-emerald-500/10 to-transparent to-70%" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_50%_45%_at_50%_0%,#000_60%,transparent_100%)]" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border bg-background/70 py-1 pr-3 pl-1 text-xs backdrop-blur"
            >
              <span className="rounded-full bg-teal-600 px-2 py-0.5 font-medium text-white">
                New
              </span>
              <span className="text-muted-foreground">
                New illustration and vector sets in @designali/vectors
              </span>
            </a>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"Illustrations that make "}
              <span className="text-teal-600 dark:text-teal-400">
                pages feel alive
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              I am Ali, designing illustrations, abstract shapes and vectors
              for landing pages, decks and product interfaces.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Request a quote
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Browse the vectors
              </Button>
            </div>
          </div>
          <div className="relative mx-auto mt-20 max-w-5xl">
            <div className="absolute inset-x-10 -top-6 -z-10 h-24 rounded-full bg-teal-500/10 blur-2xl" />
            <HeroVisual />
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm text-muted-foreground">
            Projects I have built
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
            <p className="text-sm font-medium text-teal-600 dark:text-teal-400">
              What I do
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Design and code from first sketch to shipped product
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              I design and build digital experiences that look great, feel intuitive
              and work beautifully, handling everything from brand to production code.
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
                Selected projects
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                From designali.com to the Dalim projects that came before it. Full case studies
                are available on request.
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
                  <img src={item.image} alt={item.name} className="absolute inset-0 size-full object-cover" />
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
              How a project with me runs
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
              Kind words from collaborators
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
              Ways to work together
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Fixed-scope packages for common needs, or a monthly retainer if
              you need an ongoing design partner.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-teal-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-teal-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-teal-600 dark:text-teal-400" />
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
              Good to know
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-teal-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-teal-500/25 via-emerald-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Need a world drawn from scratch?
            </h2>
            <p className="text-lg text-muted-foreground">
              Send me your brief and I will sketch a first
              concept within a week.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Request a quote
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Browse the vectors
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
              <span className="flex size-7 items-center justify-center rounded-md bg-teal-600 text-white text-sm">
                T
              </span>
              <span className="">Ali Imam</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Illustration with a sense of wonder.
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
              © {new Date().getFullYear()} Ali Imam. All rights reserved.
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
          <img src={item.image} alt={item.name} className="absolute inset-0 size-full object-cover" />
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
