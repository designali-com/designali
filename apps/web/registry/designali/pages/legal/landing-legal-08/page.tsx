import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building,
  Check,
  Clock,
  Gavel,
  Lock,
  MessageSquare,
  Plus,
  Quote,
  Sparkles,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const navLinks = [
  "Practice areas",
  "Attorneys",
  "Results",
  "Insights",
  "Contact",
]

const logos = [
  "Benchmark Litigation",
  "Chambers USA",
  "Best Lawyers",
  "Super Lawyers",
  "Legal 500",
  "Martindale-Hubbell",
  "Law360",
  "The American Lawyer",
]

const features = [
  {
    icon: Building,
    title: "Offices in three cities",
    description:
      "Meet in person in New York, Chicago or Austin, or by video from anywhere.",
  },
  {
    icon: Gavel,
    title: "Trial-ready litigators",
    description:
      "Our attorneys prepare every case as if it will go to trial, which is why opponents settle on better terms.",
  },
  {
    icon: MessageSquare,
    title: "Plain-language advice",
    description:
      "No jargon. You will understand your options, the risks and the likely costs at every stage.",
  },
  {
    icon: Clock,
    title: "Same-day responses",
    description:
      "Every client has a named attorney who returns calls and emails within one business day.",
  },
  {
    icon: Lock,
    title: "Strict confidentiality",
    description:
      "Encrypted client portal, secure document sharing and conflict checks on every new matter.",
  },
  {
    icon: Award,
    title: "Recognised expertise",
    description:
      "Partners ranked by leading legal directories and peer-reviewed for ethics and ability.",
  },
]

const stats = [
  { value: "35 yrs", label: "Of practice" },
  { value: "2,800", label: "Matters resolved" },
  { value: "42", label: "Attorneys" },
  { value: "96%", label: "Client satisfaction" },
]

const steps = [
  {
    title: "Free consultation",
    description:
      "Tell us about your situation in a confidential 30-minute call with an attorney.",
  },
  {
    title: "Clear plan and fee",
    description:
      "We outline your options, the strategy we recommend and the cost, in writing.",
  },
  {
    title: "We get to work",
    description:
      "Your named attorney leads the matter with regular updates through the client portal.",
  },
  {
    title: "Resolution",
    description:
      "We negotiate, litigate or close, and stay available for whatever comes next.",
  },
]

const showcase = [
  {
    name: "Corporate and M&A",
    meta: "Formation, financing, acquisitions",
    tag: "Business",
    price: "Fixed or hourly",
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
  {
    name: "Commercial litigation",
    meta: "Contract, partnership and IP disputes",
    tag: "Disputes",
    price: "Hourly",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Employment law",
    meta: "Policies, terminations, discrimination",
    tag: "Employers",
    price: "From $450",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Family law",
    meta: "Divorce, custody, prenuptial agreements",
    tag: "Private clients",
    price: "Fixed fee",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Estate planning",
    meta: "Wills, trusts, probate",
    tag: "Private clients",
    price: "From $1,800",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Immigration",
    meta: "Visas, green cards, citizenship",
    tag: "Individuals",
    price: "Fixed fee",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
]

const testimonials = [
  {
    quote:
      "Our acquisition closed on schedule because the team anticipated every issue before the other side raised it.",
    name: "Sarah Whitfield",
    role: "CEO, manufacturing company",
  },
  {
    quote:
      "A difficult divorce handled with real compassion. I always knew where things stood and what came next.",
    name: "Maria Delgado",
    role: "Family law client",
  },
  {
    quote:
      "We have used them as outside counsel for eight years. Responsive, practical and commercially minded.",
    name: "James Holloway",
    role: "General Counsel, logistics group",
  },
]

const tiers = [
  {
    name: "Consultation",
    price: "Free",
    period: "",
    description: "A confidential first conversation.",
    features: [
      "30 minutes with an attorney",
      "Case assessment",
      "Options explained",
      "No obligation",
    ],
    cta: "Book a consultation",
  },
  {
    name: "Fixed fee",
    price: "From $1,800",
    period: "/matter",
    description: "Defined matters at a set price.",
    features: [
      "Wills and trusts",
      "Uncontested divorce",
      "Visa applications",
      "Company formation",
      "Price agreed up front",
    ],
    cta: "Get a fixed quote",
  },
  {
    name: "Retainer",
    price: "Custom",
    period: "",
    description: "Ongoing counsel for businesses.",
    features: [
      "Named outside counsel",
      "Monthly hours included",
      "Contract review",
      "Priority response",
      "Quarterly legal health check",
    ],
    cta: "Discuss a retainer",
  },
]

const faqs = [
  {
    q: "How are your fees structured?",
    a: "Depending on the matter we offer fixed fees, hourly rates, contingency arrangements or monthly retainers. We agree it in writing first.",
  },
  {
    q: "Do you take cases on contingency?",
    a: "For personal injury and some employment claims we work on contingency, which means no fee unless we recover compensation.",
  },
  {
    q: "Who will handle my matter?",
    a: "You will have a named lead attorney supported by a small team. You will never be passed around.",
  },
  {
    q: "Can we meet by video?",
    a: "Yes. Most meetings can be held by secure video, and documents can be signed electronically.",
  },
  {
    q: "Is what I tell you confidential?",
    a: "Yes. Everything you share in a consultation is protected by attorney-client privilege, even if you do not hire us.",
  },
]

const footer = [
  {
    title: "Practice",
    links: ["Business", "Litigation", "Private clients", "Immigration"],
  },
  { title: "Firm", links: ["Attorneys", "Results", "Careers", "Pro bono"] },
  {
    title: "Contact",
    links: ["New York", "Chicago", "Austin", "Client portal"],
  },
]

export default function LandingLegal08() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b bg-muted/50 text-muted-foreground px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          Free downloadable guide to severance agreements
          <ArrowRight className="size-3.5" />
        </a>
      </div>
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-emerald-600 text-white text-sm">
              F
            </span>
            <span className="">Fairshift</span>
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
              Client portal
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Request a review
            </Button>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden border-b">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-emerald-600 dark:text-emerald-400" />
              Workplace rights advice
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl ">
              {"Treated unfairly at work? "}
              <span className="text-emerald-600 dark:text-emerald-400">
                Know your rights
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              Fairshift represents employees in wrongful termination,
              discrimination and unpaid wage claims, often on a contingency
              basis.
            </p>
            <form
              action="#"
              className="flex w-full max-w-md flex-col gap-2 sm:flex-row "
            >
              <Input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="h-10 bg-background"
              />
              <Button type="submit" size="lg">
                Request a review
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
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-emerald-500/25 via-teal-500/10 to-transparent blur-3xl" />
            <HeroVisual />
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm text-muted-foreground">
            Recognised by
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
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Why clients choose us
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Counsel that is clear, responsive and relentless
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              We combine the depth of a large firm with the attention of a
              boutique, and we explain every option in plain language.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-background p-6 shadow-xs"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-emerald-500/10">
                  <feature.icon className="size-5 text-emerald-600 dark:text-emerald-400" />
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
              How we work with you
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
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
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Practice areas
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Experienced attorneys focused on the matters that affect your
                business, your family and your future.
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
      <section className="border-b ">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              What our clients say
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`flex flex-col justify-between rounded-2xl border bg-background p-6 ${i === 0 ? "md:col-span-2 md:p-10" : ""}`}
              >
                <Quote className="size-6 text-emerald-600 dark:text-emerald-400" />
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
              Transparent fees
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              No surprise invoices. We agree the fee structure in writing before
              any work begins.
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
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Common questions
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-emerald-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-500/25 via-teal-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Know where you stand before you sign
            </h2>
            <p className="text-lg text-muted-foreground">
              Enter your email for our free severance guide, or request a
              confidential case review.
            </p>
            <form
              action="#"
              className="flex w-full max-w-md flex-col gap-2 sm:flex-row mx-auto"
            >
              <Input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="h-10 bg-background"
              />
              <Button type="submit" size="lg">
                Request a review
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
              <span className="flex size-7 items-center justify-center rounded-md bg-emerald-600 text-white text-sm">
                F
              </span>
              <span className="">Fairshift</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              On the side of employees.
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
              © {new Date().getFullYear()} Fairshift. All rights reserved.
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
