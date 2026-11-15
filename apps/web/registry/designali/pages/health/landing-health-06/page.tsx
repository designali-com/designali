import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  Pill,
  Plus,
  ShieldCheck,
  Stethoscope,
  Video,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Services", "How it works", "Pricing", "Clinicians", "FAQ"]

const logos = [
  "Kaiser",
  "Blue Shield",
  "Oscar",
  "Aetna",
  "Cigna",
  "UnitedHealthcare",
  "Humana",
  "Anthem",
]

const features = [
  {
    icon: ShieldCheck,
    title: "Private and secure",
    description:
      "HIPAA compliant, end-to-end encrypted, and we never sell your health data. Ever.",
  },
  {
    icon: CalendarCheck,
    title: "Same-day appointments",
    description:
      "Book in-person visits at partner clinics near you, with real-time availability.",
  },
  {
    icon: Activity,
    title: "Connected monitoring",
    description:
      "Sync blood pressure cuffs, glucose monitors and wearables so your team sees trends.",
  },
  {
    icon: Video,
    title: "Video visits in minutes",
    description:
      "See a board-certified clinician by video, usually in under 15 minutes, any time of day.",
  },
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
]

const stats = [
  { value: "92%", label: "Issues resolved in one visit" },
  { value: "1.8M", label: "Patients treated" },
  { value: "14 min", label: "Average wait for a visit" },
  { value: "4.9/5", label: "Patient satisfaction" },
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
      "We offer this to all 1,200 employees. Sick days dropped and our benefits survey scores went up.",
    name: "Michael Owens",
    role: "HR Director",
  },
  {
    quote:
      "I had a doctor on screen in ten minutes and a prescription at my pharmacy within the hour. I will never sit in an urgent care waiting room again.",
    name: "Jasmine Carter",
    role: "Patient since 2023",
  },
  {
    quote:
      "Managing my diabetes used to mean a 40-minute drive each month. Now my care team checks my readings and messages me when something changes.",
    name: "Robert Nguyen",
    role: "Chronic care member",
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
  {
    q: "Is telehealth as good as an in-person visit?",
    a: "For most common conditions, yes. If you need an exam in person, we will refer you to a partner clinic nearby.",
  },
  {
    q: "Who are your clinicians?",
    a: "Every clinician is board certified and licensed in your state, with an average of 11 years of experience.",
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

export default function LandingHealth06() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-rose-600 text-white text-sm">
              B
            </span>
            <span className="">Brightsmile</span>
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
              Book a check-up
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-x border-b px-6 py-3 text-xs text-muted-foreground">
            <span>Gentle dentistry for all ages</span>
            <span className="hidden sm:inline">
              {"Dentistry you won't put off."}
            </span>
          </div>
          <div className="border-x px-6 py-16 md:py-28">
            <h1 className="max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"A brighter smile "}
              <span className="text-rose-600 dark:text-rose-400">
                without the dread
              </span>
            </h1>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                Brightsmile offers check-ups, whitening and aligners in calm,
                modern clinics with sedation options for nervous patients.
              </p>
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Book a check-up
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  View treatments
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
            In network with
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
            <p className="text-sm font-medium text-rose-600 dark:text-rose-400">
              Care
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Healthcare that fits around your life
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Licensed clinicians, same-day appointments and prescriptions
              delivered to your door, all from your phone.
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
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
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
                  <span className="rounded-full bg-rose-500/10 px-2.5 py-0.5 text-xs font-medium text-rose-600 dark:text-rose-400">
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
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Patients who feel heard
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
              Getting care is simple
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-rose-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-rose-500/25 via-pink-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Your next check-up, sorted
            </h2>
            <p className="text-lg text-muted-foreground">
              Book online in a minute, with evening and Saturday appointments
              available.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Book a check-up
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                View treatments
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
                B
              </span>
              <span className="">Brightsmile</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              {"Dentistry you won't put off."}
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
              © {new Date().getFullYear()} Brightsmile. All rights reserved.
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
          app.brightsmile.com
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
              <span className="text-rose-600 dark:text-rose-400">+24.6%</span>
            </div>
            <div className="flex h-32 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === bars.length - 1 ? "bg-rose-600" : "bg-muted-foreground/20"}`}
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
                <span className="shrink-0 rounded-full bg-rose-500/10 px-2 py-0.5 text-[11px] font-medium text-rose-600 dark:text-rose-400">
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
