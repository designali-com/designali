import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FlaskConical,
  MessageCircle,
  Pill,
  Plus,
  ShieldCheck,
  Stethoscope,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Services", "How it works", "Pricing", "Clinicians", "FAQ"]

const features = [
  {
    icon: Pill,
    title: "Prescriptions delivered",
    description:
      "Medications are sent to your local pharmacy or delivered free to your door in two days.",
  },
  {
    icon: Stethoscope,
    title: "Your own care team",
    description:
      "Stay with the same doctor and nurse for ongoing care, so you never repeat your history.",
  },
  {
    icon: MessageCircle,
    title: "Message your clinician",
    description:
      "Ask follow-up questions in a secure chat and get a reply within one business day.",
  },
  {
    icon: FlaskConical,
    title: "At-home lab tests",
    description:
      "Order blood work online, collect a sample at home and get results with a doctor's notes.",
  },
  {
    icon: ShieldCheck,
    title: "Private and secure",
    description:
      "HIPAA compliant, end-to-end encrypted, and we never sell your health data. Ever.",
  },
]

const stats = [
  { value: "50", label: "States covered" },
  { value: "2,300", label: "Licensed clinicians" },
  { value: "92%", label: "Issues resolved in one visit" },
  { value: "1.8M", label: "Patients treated" },
]

const steps = [
  {
    title: "Tell us what is going on",
    description:
      "Answer a few questions about your symptoms and medical history in about three minutes.",
  },
  {
    title: "Meet your clinician",
    description:
      "Connect by video or chat with a licensed provider in your state, often within minutes.",
  },
  {
    title: "Get your treatment plan",
    description:
      "Receive a diagnosis, prescriptions and clear next steps, all saved in your app.",
  },
  {
    title: "Follow up any time",
    description:
      "Message your care team with questions or book a follow-up with the same clinician.",
  },
]

const showcase = [
  {
    name: "Urgent care",
    meta: "Colds, flu, infections, rashes",
    tag: "24/7",
    price: "$49",
  },
  {
    name: "Mental health",
    meta: "Therapy and psychiatry",
    tag: "Popular",
    price: "$99",
  },
  {
    name: "Women's health",
    meta: "Birth control, UTIs, menopause",
    tag: "Same day",
    price: "$39",
  },
  {
    name: "Chronic care",
    meta: "Diabetes, hypertension, thyroid",
    tag: "Ongoing",
    price: "$29/mo",
  },
  {
    name: "Dermatology",
    meta: "Acne, eczema, hair loss",
    tag: "Photo visit",
    price: "$59",
  },
  {
    name: "Weight care",
    meta: "Clinician-led programs",
    tag: "New",
    price: "$79/mo",
  },
]

const testimonials = [
  {
    quote:
      "As a working parent, being able to get my kids seen at 9pm on a Tuesday is genuinely life-changing.",
    name: "Carlos Rivera",
    role: "Family plan member",
  },
  {
    quote:
      "Prices are listed upfront, and the bill matched exactly. That alone made me switch.",
    name: "Nina Patel",
    role: "Self-pay patient",
  },
  {
    quote:
      "We offer this to all 1,200 employees. Sick days dropped and our benefits survey scores went up.",
    name: "Michael Owens",
    role: "HR Director",
  },
]

const tiers = [
  {
    name: "Pay per visit",
    price: "$49",
    period: "/visit",
    description: "For occasional care when you need it.",
    features: [
      "24/7 urgent care",
      "Prescriptions sent anywhere",
      "Visit notes in the app",
      "No membership",
    ],
    cta: "Book a visit",
  },
  {
    name: "Membership",
    price: "$19",
    period: "/month",
    description: "For individuals who want a regular care team.",
    features: [
      "Unlimited messaging",
      "$0 urgent care visits",
      "Dedicated primary care doctor",
      "Discounted lab tests",
      "Annual wellness check",
    ],
    cta: "Become a member",
  },
  {
    name: "Family",
    price: "$39",
    period: "/month",
    description: "Cover up to six people on one plan.",
    features: [
      "Everything in Membership",
      "Pediatric care",
      "Shared family dashboard",
      "Up to 6 members",
      "Priority booking",
    ],
    cta: "Cover your family",
  },
]

const faqs = [
  {
    q: "Who are your clinicians?",
    a: "Every clinician is board certified and licensed in your state, with an average of 11 years of experience.",
  },
  {
    q: "Is my information private?",
    a: "Your data is protected under HIPAA, encrypted end to end and never sold or shared for advertising.",
  },
  {
    q: "What if I need emergency care?",
    a: "For emergencies such as chest pain or difficulty breathing, call 911 or go to the nearest emergency room.",
  },
  {
    q: "Do you accept insurance?",
    a: "Yes. We are in network with most major insurers. Enter your plan details at checkout to see your exact cost.",
  },
  {
    q: "Can you prescribe medication?",
    a: "Our clinicians can prescribe most common medications. We do not prescribe controlled substances online.",
  },
]

const footer = [
  {
    title: "Care",
    links: ["Urgent care", "Mental health", "Chronic care", "Lab tests"],
  },
  { title: "Company", links: ["About", "Clinicians", "Careers", "Press"] },
  {
    title: "Support",
    links: ["Help center", "Insurance", "Privacy", "Contact"],
  },
]

export default function LandingHealth10() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-orange-600 text-white text-sm">
              C
            </span>
            <span className="font-serif text-lg font-normal">
              Clearview Eye
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
              Patient login
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Book an eye exam
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-28">
          <div className="flex items-center justify-between border-b pb-4 text-xs tracking-widest text-muted-foreground uppercase">
            <span>Eye exams and eyewear</span>
            <span className="hidden sm:inline">See the detail again.</span>
          </div>
          <h1 className="mt-12 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl font-serif font-normal">
            {"Clear sight, "}
            <span className="text-orange-600 dark:text-orange-400">
              carefully examined
            </span>
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-lg text-lg leading-8 text-muted-foreground">
              Clearview Eye offers comprehensive eye exams, contact lens
              fittings and independent frames, with results explained in plain
              language.
            </p>
            <div className="md:justify-self-end">
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Book an eye exam
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  Browse frames
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
              <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
                Care
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl font-serif font-normal mt-3">
                Healthcare that fits around your life
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Licensed clinicians, same-day appointments and prescriptions
                delivered to your door, all from your phone.
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
                What we can help with
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                From everyday illnesses to ongoing conditions, our clinicians
                treat hundreds of concerns online.
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
                  <span className="flex size-10 items-center justify-center rounded-lg border bg-muted/50 font-semibold ">
                    {item.name.charAt(0)}
                  </span>
                  <span className="rounded-full bg-orange-500/10 px-2.5 py-0.5 text-xs font-medium text-orange-600 dark:text-orange-400">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-semibold ">{item.name}</h3>
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
            Patients who feel heard
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
              Getting care is simple
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-foreground pt-6"
              >
                <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
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
              Clear pricing, with or without insurance
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Most major insurance plans accepted. Self-pay prices are listed
              upfront, with no surprise bills.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-orange-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-orange-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-orange-600 dark:text-orange-400" />
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
      <section className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl font-serif font-normal">
              Your eyes deserve a proper look
            </h2>
            <p className="mt-5 text-lg text-background/65">
              Most vision plans accepted, with same-week appointments available.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              nativeButton={false}
              render={<a href="#" />}
            >
              Book an eye exam
              <ArrowRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/25 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#" />}
            >
              Browse frames
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
              <span className="flex size-7 items-center justify-center rounded-md bg-orange-600 text-white text-sm">
                C
              </span>
              <span className="font-serif text-lg font-normal">
                Clearview Eye
              </span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              See the detail again.
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
              © {new Date().getFullYear()} Clearview Eye. All rights reserved.
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
  const bars = [38, 52, 44, 63, 58, 71, 66, 80, 74, 88, 83, 95]
  return (
    <div className="overflow-hidden rounded-xl border bg-card text-left text-card-foreground shadow-2xl/10">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 hidden rounded-md bg-muted px-3 py-0.5 text-[11px] text-muted-foreground sm:inline">
          app.clearvieweye.com
        </span>
      </div>
      <div className="grid md:grid-cols-[180px_1fr]">
        <aside className="hidden space-y-1 border-r p-3 text-sm md:block">
          {navLinks.map((link, i) => (
            <div
              key={link}
              className={`rounded-md px-3 py-1.5 ${i === 0 ? "bg-muted font-medium" : "text-muted-foreground"}`}
            >
              {link}
            </div>
          ))}
        </aside>
        <div className="space-y-4 p-4 md:p-6">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.slice(0, 4).map((stat) => (
              <div key={stat.label} className="rounded-lg border p-3">
                <div className="truncate text-[11px] text-muted-foreground">
                  {stat.label}
                </div>
                <div className="mt-1 text-lg font-semibold tracking-tight">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border p-4">
            <div className="mb-4 flex items-center justify-between text-xs">
              <span className="font-medium">Last 12 weeks</span>
              <span className="text-orange-600 dark:text-orange-400">
                +24.6%
              </span>
            </div>
            <div className="flex h-32 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === bars.length - 1 ? "bg-orange-600" : "bg-muted-foreground/20"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="hidden divide-y rounded-lg border sm:block">
            {showcase.slice(0, 3).map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-4 px-4 py-2.5 text-sm"
              >
                <div className="min-w-0">
                  <div className="truncate font-medium">{item.name}</div>
                  <div className="truncate text-xs text-muted-foreground">
                    {item.meta}
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-orange-500/10 px-2 py-0.5 text-[11px] font-medium text-orange-600 dark:text-orange-400">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
