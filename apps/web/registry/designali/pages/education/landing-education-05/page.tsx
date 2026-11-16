import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Brain,
  Briefcase,
  Check,
  Download,
  CirclePlay as PlayCircle,
  Plus,
} from "@designali/icons"

import { Logo } from "@/src/components/logo"
import { Button } from "@workspace/ui/components/button"

const navLinks = ["Courses", "Resources", "Blog", "Pricing", "For teams"]

const features = [
  {
    icon: Award,
    title: "Real source files",
    description:
      "Every lesson comes with the Figma file and the finished code, so nothing is left as theory.",
  },
  {
    icon: Brain,
    title: "Hands-on practice",
    description:
      "Rebuild real Designali blocks step by step, from layout and tokens to responsive details.",
  },
  {
    icon: Download,
    title: "Free blog and guides",
    description:
      "Read free articles on design systems, Tailwind CSS and AI workflows on designali.com/blogs.",
  },
  {
    icon: Briefcase,
    title: "Portfolio reviews",
    description:
      "One-to-one reviews of your portfolio and case studies, with clear next steps.",
  },
  {
    icon: PlayCircle,
    title: "Bite-sized lessons",
    description:
      "Short lessons on design and code, so you can learn between client work or on a lunch break.",
  },
]

const stats = [
  { value: "2300+", label: "UI design examples" },
  { value: "1:1", label: "Mentoring with Ali Imam" },
  { value: "460+", label: "Blocks to learn from" },
  { value: "240+", label: "Landing pages to study" },
]

const steps = [
  {
    title: "Pick your path",
    description:
      "Choose design, code or the full design-to-code track based on where you are today.",
  },
  {
    title: "Learn at your pace",
    description:
      "Work through short lessons and exercises built around real Designali components.",
  },
  {
    title: "Build real projects",
    description:
      "Design in Figma, build in Next.js and ship a project you are proud to share.",
  },
  {
    title: "Share your work",
    description:
      "Publish your project, share it on LinkedIn or X and get feedback from the community.",
  },
]

const showcase = [
  {
    name: "Design to Code with Next.js",
    meta: "12 modules · 48 lessons",
    tag: "Bestseller",
    price: "$149",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "UI/UX Design Fundamentals",
    meta: "8 modules · 32 lessons",
    tag: "Beginner",
    price: "$99",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Design Engineering Track",
    meta: "Live sessions with Ali",
    tag: "Track",
    price: "$499",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-primary dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "Design Systems in Figma",
    meta: "10 modules · 40 lessons",
    tag: "Popular",
    price: "$129",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-chart-1 dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
  {
    name: "AI-Assisted Design Workflows",
    meta: "6 modules · 24 lessons",
    tag: "New",
    price: "$119",
    tile: "bg-gradient-to-br from-muted via-border to-muted-foreground dark:from-muted dark:via-card dark:to-card",
  },
  {
    name: "Tailwind CSS for Designers",
    meta: "4 modules · 16 lessons",
    tag: "Short course",
    price: "$49",
    tile: "bg-gradient-to-br from-primary/20 via-chart-1 to-chart-1 dark:from-chart-3 dark:via-chart-4 dark:to-chart-5",
  },
]

const testimonials = [
  {
    quote:
      "Our whole design team took the design systems course together. We now share one token set across Figma and code.",
    name: "Sarah G.",
    role: "Design lead",
  },
  {
    quote:
      "Lessons are short enough that I can do one every morning. Small steps added up fast.",
    name: "Tomás S.",
    role: "Product manager",
  },
  {
    quote:
      "I was a designer who could not code. After the Next.js course I shipped my own portfolio site in a weekend.",
    name: "Maya T.",
    role: "Product designer",
  },
]

const tiers = [
  {
    name: "Single course",
    price: "$49",
    period: "from",
    description: "Buy one course and keep it forever.",
    features: [
      "Lifetime access",
      "All lessons and exercises",
      "Figma and code source files",
      "Learn on any device",
    ],
    cta: "Browse courses",
  },
  {
    name: "All-access",
    price: "$19",
    period: "/month",
    description: "Every Designali course and resource, updated monthly.",
    features: [
      "Every course included",
      "Project reviews from Ali",
      "Live design-to-code sessions",
      "Pro blocks for practice",
      "Cancel any time",
    ],
    cta: "Start learning",
  },
  {
    name: "Teams",
    price: "$15",
    period: "/seat/month",
    description: "Level up your design and dev team together.",
    features: [
      "Everything in All-access",
      "Team progress overview",
      "Custom workshop with Ali",
      "Design system review",
      "Priority email support",
    ],
    cta: "Contact Designali",
  },
]

const faqs = [
  {
    q: "Can I get a refund?",
    a: "See designali.com/docs/legal/terms for the refund policy, or email support@designali.com with any questions.",
  },
  {
    q: "Do you offer live classes?",
    a: "Yes. The Design Engineering Track includes live sessions with Ali Imam and small-group reviews.",
  },
  {
    q: "Do I need any prior experience?",
    a: "No. Each track starts with the basics, whether you are a designer learning code or a developer learning design.",
  },
  {
    q: "How much time should I set aside?",
    a: "Most learners spend three to five hours a week. Lessons are self-paced, so pause whenever you need.",
  },
  {
    q: "Do I get a certificate?",
    a: "Designali focuses on real work instead of certificates. You finish with deployed projects you can show anyone.",
  },
]

const footer = [
  {
    title: "Learn",
    links: ["Courses", "Resources", "Blog", "Free resources"],
  },
  {
    title: "Community",
    links: ["Templates", "Blocks", "Instagram", "X"],
  },
  { title: "Designali", links: ["About", "Work", "LinkedIn", "Contact"] },
]

export default function LandingEducation05() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <Logo className="h-5 w-auto" />
            <span className="font-sans text-lg font-normal">
              designali
            </span>
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
              Log in
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Start a project
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-28">
          <div className="flex items-center justify-between border-b pb-4 text-xs tracking-widest text-muted-foreground uppercase">
            <span>Designali for schools</span>
            <span className="hidden sm:inline">
              Clear websites, happy parents.
            </span>
          </div>
          <h1 className="mt-12 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl font-sans font-normal">
            {"School websites where "}
            <span className="text-primary dark:text-primary">
              families find answers fast
            </span>
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-lg text-lg leading-8 text-muted-foreground">
              Designali designs and builds brands and websites for schools, with clear admissions pages, calendars and news that staff can update easily.
            </p>
            <div className="md:justify-self-end">
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Start a project
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  See case studies
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
                Learning
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-sans font-normal mt-3">
                Learning that actually ships
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Short lessons, real projects and honest feedback, designed around how designers and developers really work.
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
                Popular Designali courses
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Taught by Ali Imam, who designs and codes everything on designali.com. Start any course today.
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
                    <h3 className="font-medium font-sans text-lg">
                      {item.name}
                    </h3>
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
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            Learners who shipped their work
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
              How learning works here
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
              Plans for every learner
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Learn at your own pace or join live sessions. Free resources are always available on the blog.
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
              Questions from learners
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
              Give your school a website it deserves
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Book a free call with Ali and get a plan for your new school website.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Start a project
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#" />}
            >
              See case studies
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
              <span className="font-sans text-lg font-normal">
                designali
              </span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Clear websites, happy parents.
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
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {showcase.slice(0, 3).map((item, i) => (
        <div
          key={item.name}
          className={`relative overflow-hidden rounded-2xl ${item.tile} ${i === 0 ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[3/4]" : "aspect-[3/4]"}`}
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
