import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Briefcase,
  Check,
  Download,
  FolderKanban,
  CirclePlay as PlayCircle,
  Plus,
  Users,
} from "@designali/icons"

import { Logo } from "@/src/components/logo"
import { Button } from "@workspace/ui/components/button"

const navLinks = ["Courses", "Resources", "Blog", "Pricing", "For teams"]

const logos = [
  "Vercel",
  "shadcn/ui",
  "Blender",
  "Figma",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
]

const features = [
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
  {
    icon: FolderKanban,
    title: "Portfolio projects",
    description:
      "Every course ends with a real Next.js project you can deploy to Vercel and add to your portfolio.",
  },
  {
    icon: Users,
    title: "Live sessions",
    description:
      "Join live design-to-code sessions with Ali Imam and learn alongside other designers and developers.",
  },
]

const stats = [
  { value: "1:1", label: "Mentoring with Ali Imam" },
  { value: "460+", label: "Blocks to learn from" },
  { value: "240+", label: "Landing pages to study" },
  { value: "4000+", label: "Icons in @designali/icons" },
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
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
  {
    name: "UI/UX Design Fundamentals",
    meta: "8 modules · 32 lessons",
    tag: "Beginner",
    price: "$99",
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
  },
  {
    name: "Design Engineering Track",
    meta: "Live sessions with Ali",
    tag: "Track",
    price: "$499",
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
  {
    name: "Design Systems in Figma",
    meta: "10 modules · 40 lessons",
    tag: "Popular",
    price: "$129",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "AI-Assisted Design Workflows",
    meta: "6 modules · 24 lessons",
    tag: "New",
    price: "$119",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Tailwind CSS for Designers",
    meta: "4 modules · 16 lessons",
    tag: "Short course",
    price: "$49",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
]

const testimonials = [
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
  {
    quote:
      "The feedback is the real value. Ali actually read my code and showed me how to make the layout cleaner.",
    name: "Arjun M.",
    role: "Frontend developer",
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
  {
    q: "Are there free resources?",
    a: "Yes. The Designali blog, docs and free blocks are open to everyone on designali.com.",
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

export default function LandingEducation06() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
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
              Start free
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-x border-b px-6 py-3 text-xs text-muted-foreground">
            <span>Daily design challenges</span>
            <span className="hidden sm:inline">Confident with every pixel.</span>
          </div>
          <div className="border-x px-6 py-16 md:py-28">
            <h1 className="max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"Daily design challenges you "}
              <span className="text-fuchsia-600 dark:text-fuchsia-400">
                actually enjoy
              </span>
            </h1>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                Designali sends a ten-minute UI challenge every day, from spacing and type to layout, with a reference solution built in code.
              </p>
              <div className="flex flex-wrap gap-3 ">
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
                  See how it works
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
            Tools you will learn
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
            <p className="text-sm font-medium text-fuchsia-600 dark:text-fuchsia-400">
              Learning
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Learning that actually ships
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Short lessons, real projects and honest feedback, designed around how designers and developers really work.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-fuchsia-600 dark:text-fuchsia-400" />
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
              Learners who shipped their work
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
              How learning works here
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-fuchsia-600 dark:text-fuchsia-400">
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
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-fuchsia-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-fuchsia-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-fuchsia-600 dark:text-fuchsia-400" />
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
      <section className="px-6 py-20 md:py-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-fuchsia-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-fuchsia-500/25 via-purple-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Ten minutes a day makes the difference
            </h2>
            <p className="text-lg text-muted-foreground">
              Try the daily challenges free for 14 days.
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
                See how it works
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
              <Logo className="h-5 w-auto" />
              <span className="">designali</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Confident with every pixel.
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
