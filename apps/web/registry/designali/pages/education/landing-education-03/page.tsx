import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Brain,
  Briefcase,
  Check,
  Download,
  MessageSquare,
  Plus,
  Sparkles,
  Users,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Courses", "Programs", "Instructors", "Pricing", "For teams"]

const features = [
  {
    icon: Users,
    title: "Live cohorts",
    description:
      "Learn alongside peers with weekly live sessions, study groups and shared deadlines.",
  },
  {
    icon: MessageSquare,
    title: "Mentor feedback",
    description:
      "Get line-by-line feedback from industry mentors within 48 hours of every submission.",
  },
  {
    icon: Award,
    title: "Recognised certificates",
    description:
      "Earn certificates accredited by partner universities and shareable on LinkedIn.",
  },
  {
    icon: Brain,
    title: "Adaptive practice",
    description:
      "Quizzes adapt to what you get wrong, so you spend time where it matters most.",
  },
  {
    icon: Download,
    title: "Learn offline",
    description:
      "Download lessons on the mobile app and keep learning without a connection.",
  },
  {
    icon: Briefcase,
    title: "Career support",
    description:
      "Resume reviews, mock interviews and introductions to our hiring partners.",
  },
]

const stats = [
  { value: "87%", label: "Report a career boost" },
  { value: "4.8/5", label: "Average course rating" },
  { value: "190", label: "Countries represented" },
  { value: "320", label: "Hiring partners" },
]

const steps = [
  {
    title: "Pick your path",
    description:
      "Take a short quiz and get a course or program matched to your goals and level.",
  },
  {
    title: "Learn at your pace",
    description:
      "Work through short lessons and practice exercises on any device.",
  },
  {
    title: "Build real projects",
    description:
      "Apply what you learn to projects reviewed by mentors from the industry.",
  },
  {
    title: "Get certified",
    description:
      "Earn a certificate and share it with employers, plus access career support.",
  },
]

const showcase = [
  {
    name: "Data Analysis with Python",
    meta: "12 weeks · 48 lessons",
    tag: "Bestseller",
    price: "$249",
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
  {
    name: "UX Design Fundamentals",
    meta: "8 weeks · 32 lessons",
    tag: "Beginner",
    price: "$199",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Full-Stack Web Development",
    meta: "24 weeks · Live cohort",
    tag: "Program",
    price: "$2,400",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Product Management",
    meta: "10 weeks · 40 lessons",
    tag: "Popular",
    price: "$299",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Machine Learning Foundations",
    meta: "14 weeks · 56 lessons",
    tag: "New",
    price: "$349",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Business Writing",
    meta: "4 weeks · 16 lessons",
    tag: "Short course",
    price: "$89",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
]

const testimonials = [
  {
    quote:
      "My son's maths grade went from a C to an A minus in one term. His tutor made it click in a way school never did.",
    name: "Karen Doyle",
    role: "Parent",
  },
  {
    quote:
      "Studying with a cohort kept me accountable. I finished every module on time for the first time in my life.",
    name: "Lucas Moreau",
    role: "UX Designer",
  },
  {
    quote:
      "We upskilled 200 analysts in a quarter. Completion rates were three times higher than our old platform.",
    name: "Sarah Goldberg",
    role: "Head of L&D",
  },
]

const tiers = [
  {
    name: "Single course",
    price: "$89",
    period: "from",
    description: "Buy one course and keep it forever.",
    features: [
      "Lifetime access",
      "All lessons and quizzes",
      "Certificate of completion",
      "Mobile app",
    ],
    cta: "Browse courses",
  },
  {
    name: "All-access",
    price: "$39",
    period: "/month",
    description: "Unlimited learning across the whole catalog.",
    features: [
      "Every course included",
      "Mentor project reviews",
      "Live workshops",
      "Offline downloads",
      "Cancel any time",
    ],
    cta: "Start free trial",
  },
  {
    name: "Teams",
    price: "$29",
    period: "/seat/month",
    description: "Upskill your whole organisation.",
    features: [
      "Everything in All-access",
      "Admin dashboard",
      "Custom learning paths",
      "SSO and LMS integration",
      "Dedicated success manager",
    ],
    cta: "Contact sales",
  },
]

const faqs = [
  {
    q: "Are the certificates recognised?",
    a: "Our certificates are co-issued with partner universities and are recognised by more than 300 hiring partners.",
  },
  {
    q: "Is financial aid available?",
    a: "Yes. We offer need-based scholarships and income-share options for full programs.",
  },
  {
    q: "Can I get a refund?",
    a: "You can request a full refund within 14 days of purchase if you have completed less than 20% of the course.",
  },
  {
    q: "Do you offer live classes?",
    a: "Our cohort programs include weekly live sessions with instructors and small-group study rooms.",
  },
  {
    q: "Do I need any prior experience?",
    a: "No. Every path starts with a beginner track, and our placement quiz suggests where to start.",
  },
]

const footer = [
  {
    title: "Learn",
    links: ["Courses", "Programs", "Certificates", "Free resources"],
  },
  {
    title: "Community",
    links: ["Mentors", "Events", "Student stories", "Scholarships"],
  },
  { title: "Company", links: ["About", "Careers", "For business", "Contact"] },
]

export default function LandingEducation03() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-background/10 bg-foreground text-background/80 px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          Income-share option available for the next cohort
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
              C
            </span>
            <span className="">Codeforge Academy</span>
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
              Log in
            </Button>
            <Button
              size="sm"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Apply now
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
              Next cohort starts soon
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-7xl ">
              {"Become a software engineer in "}
              <span className="text-background/60">24 weeks</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-background/65">
              A live, mentor-led bootcamp with a job guarantee. Build real apps,
              ship a capstone and graduate with an offer or your money back.
            </p>
            <div className="flex flex-wrap gap-3 ">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                nativeButton={false}
                render={<a href="#" />}
              >
                Apply now
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
                nativeButton={false}
                render={<a href="#" />}
              >
                Download syllabus
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
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Learning
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Learning that actually sticks
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Short lessons, real projects and feedback from experts, designed
              around how adults really learn.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-blue-600 dark:text-blue-400" />
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
                Popular courses this term
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Taught by practitioners from leading companies and universities.
                Start any course today.
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
              How learning works here
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
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
              Learners who changed their path
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
              Plans for every learner
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Learn at your own pace or join a live cohort. Financial aid and
              student discounts available.
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
                              : "mt-0.5 size-4 shrink-0 text-blue-600 dark:text-blue-400"
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
              Questions from learners
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
              Applications close in two weeks
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Apply in ten minutes. Hear back within three business days.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Apply now
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#" />}
            >
              Download syllabus
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
                C
              </span>
              <span className="">Codeforge Academy</span>
            </a>
            <p className="max-w-xs text-sm text-background/60">
              From beginner to hired.
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
              © {new Date().getFullYear()} Codeforge Academy. All rights
              reserved.
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
