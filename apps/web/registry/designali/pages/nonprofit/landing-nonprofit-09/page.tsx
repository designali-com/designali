import {
  ArrowRight,
  ArrowUpRight,
  ChartPie,
  Check,
  FileCheck,
  HeartHandshake,
  Mail,
  Plus,
  Quote,
  Repeat,
  Sparkles,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Resources", "Impact", "Stories", "Contribute", "About"]

const logos = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "Vercel",
  "shadcn-style UI",
  "21st.dev",
]

const features = [
  {
    icon: HeartHandshake,
    title: "Community-led",
    description:
      "Feedback from designers and developers decides what we build next. We provide the blocks, icons and docs.",
  },
  {
    icon: ChartPie,
    title: "Free to start",
    description:
      "Hundreds of blocks, UI examples, icons and vectors are free to use, with no credit card and no sign-up wall.",
  },
  {
    icon: FileCheck,
    title: "Production-ready code",
    description:
      "Every resource is built with Next.js, React, TypeScript and Tailwind CSS, so it drops straight into real projects.",
  },
  {
    icon: Repeat,
    title: "Built to last",
    description:
      "Resources follow one design system with semantic tokens, so they stay consistent as the library grows.",
  },
  {
    icon: Mail,
    title: "Updates you can see",
    description:
      "New blocks, pages and icons ship regularly, with every release listed on designali.com.",
  },
]

const stats = [
  { value: "4000+", label: "Resource libraries" },
  { value: "9", label: "Icons in @designali/icons" },
  { value: "12K+", label: "Pro members" },
  { value: "Always", label: "Free to start" },
]

const steps = [
  {
    title: "You browse",
    description:
      "Explore blocks, pages, UI examples, icons and vectors on designali.com, all free to preview.",
  },
  {
    title: "You copy or install",
    description:
      "Copy the code or install the packages, and drop them into your Next.js project.",
  },
  {
    title: "You build faster",
    description:
      "Ship landing pages, dashboards and apps in days instead of weeks.",
  },
  {
    title: "You share back",
    description:
      "Send feedback or show what you built, and help shape the next release.",
  },
]

const showcase = [
  {
    name: "Free Blocks",
    meta: "Heroes, pricing, footers and more",
    tag: "Blocks",
    price: "460+ blocks",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Landing Pages",
    meta: "Full pages for every industry",
    tag: "Pages",
    price: "240+ pages",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "UI Examples",
    meta: "Dashboards, forms and app screens",
    tag: "UI",
    price: "2300+ examples",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Icons",
    meta: "@designali/icons for React",
    tag: "Icons",
    price: "4000+ icons",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-chart-1 dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Logos",
    meta: "@designali/logos brand marks",
    tag: "Logos",
    price: "Brand marks",
    tile: "bg-gradient-to-br from-muted via-border to-muted-foreground dark:from-muted dark:via-card dark:to-card",
  },
  {
    name: "Vectors",
    meta: "@designali/vectors shapes",
    tag: "Vectors",
    price: "Abstract shapes",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-chart-1 dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
]

const testimonials = [
  {
    quote:
      "I started with the free blocks and went Pro a year later. The updates make me feel part of the project.",
    name: "Rebecca",
    role: "designali.com Pro member",
  },
  {
    quote:
      "The free blocks gave our small nonprofit a website that looks professional. That is rare for free resources.",
    name: "Luis",
    role: "Volunteer web designer",
  },
  {
    quote:
      "Building with the free blocks every weekend is the best part of my week.",
    name: "Kate",
    role: "Contribute",
  },
]

const tiers = [
  {
    name: "Supporter",
    price: "$5",
    period: "/month",
    description: "Help keep free resources free for everyone.",
    features: [
      "Release update emails",
      "Early access to new blocks",
      "Supporter newsletter",
      "Cancel anytime",
    ],
    cta: "Support monthly",
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "Unlock every template, block and UI example.",
    features: [
      "Everything in Supporter",
      "All Pro templates and blocks",
      "Pro icons and vectors",
      "Commercial license",
      "Priority feedback",
    ],
    cta: "Go Pro",
  },
  {
    name: "Studio",
    price: "$49",
    period: "/month",
    description: "For teams and agencies building with Designali.",
    features: [
      "Everything in Pro",
      "Team seats",
      "Custom blocks on request",
      "Direct contact with Ali Imam",
      "Credit on designali.com",
    ],
    cta: "Become a Studio partner",
  },
]

const faqs = [
  {
    q: "Can I request a resource?",
    a: "Yes. Send a request to hello@designali.com or share it on X, and popular requests are added to the roadmap.",
  },
  {
    q: "How do I cancel a plan?",
    a: "Manage your plan from your designali.com account, or email billing@designali.com. There is never any pressure to continue.",
  },
  {
    q: "Can my team use Designali together?",
    a: "Yes. The Studio plan adds team seats, or contact us for a custom arrangement for your agency.",
  },
  {
    q: "How can I contribute?",
    a: "Share feedback, request blocks, or show what you built with Designali on X and Instagram. Find us on 21st.dev too.",
  },
  {
    q: "Are the free resources really free?",
    a: "Yes. Free blocks, UI examples, icons and vectors can be used without paying. Check the license summary for attribution rules.",
  },
]

const footer = [
  {
    title: "Resources",
    links: ["Resources", "Blocks", "Icons", "Stories"],
  },
  {
    title: "Contribute",
    links: ["Pro", "Templates", "Contribute", "Studio work"],
  },
  {
    title: "About",
    links: ["About Ali", "Licensing", "Docs", "Contact"],
  },
]

export default function LandingNonprofit09() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-chart-2 text-white text-sm">
              S
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
              Volunteer
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Start free
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-primary dark:text-primary" />
              Learn, build, share
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl ">
              {"Every project deserves "}
              <span className="text-primary dark:text-primary">
                a strong start
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              designali gives you free blocks, UI and full pages, with clean code
              and docs, so every new project starts from something good.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Start free
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Support the project
              </Button>
            </div>
          </div>
          <div className="mt-14 grid gap-3 lg:grid-cols-[2fr_1fr]">
            <HeroVisual />
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
              {stats.slice(0, 3).map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col justify-between rounded-2xl border p-5 ${i === 0 ? "bg-primary/10" : "bg-muted/40"} ${i === 2 ? "col-span-2 lg:col-span-1" : ""}`}
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
            <p className="text-sm font-medium text-primary dark:text-primary">
              How it works
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Every resource goes further with you
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              We design, build and document every resource, then share it
              openly, so you always know what you can create and what we have
              achieved.
            </p>
          </div>
          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border p-6 transition-colors hover:bg-muted/40 ${i === 0 ? "bg-primary/10 md:col-span-2 md:row-span-2 md:p-10" : ""} ${i === 3 ? "md:col-span-2" : ""}`}
              >
                <feature.icon
                  className={`${i === 0 ? "size-8" : "size-5"} text-primary dark:text-primary`}
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
                Free resource libraries
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Libraries designed and built by Ali Imam, shaped by feedback
                from people like you.
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
                  <span className="absolute top-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
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
              Voices from the Designali community
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`flex flex-col justify-between rounded-2xl border bg-background p-6 ${i === 0 ? "md:col-span-2 md:p-10" : ""}`}
              >
                <Quote className="size-6 text-primary dark:text-primary" />
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
              From browse to build
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
              Choose how to support
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Supporter and Pro plans fund the free library and help it grow faster. Every plan
              can be cancelled anytime.
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-primary/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/25 via-primary/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Help a free resource find its next maker
            </h2>
            <p className="text-lg text-muted-foreground">
              Supporting Designali funds new blocks, pages and docs for a full
              year.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Start free
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Support the project
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
              <span className="flex size-7 items-center justify-center rounded-md bg-chart-2 text-white text-sm">
                S
              </span>
              <span className="">designali</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Built with love.
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
              © {new Date().getFullYear()} designali. All rights
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
          <span className="absolute top-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
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
