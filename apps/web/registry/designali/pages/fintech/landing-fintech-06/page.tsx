import {
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  CreditCard,
  FileSpreadsheet,
  PiggyBank,
  Plus,
  Receipt,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Personal", "Business", "Pricing", "Security", "Help"]

const logos = [
  "Apple Pay",
  "Google Pay",
  "SWIFT",
  "Visa",
  "Mastercard",
  "Plaid",
  "Corvia",
  "FDIC member bank",
]

const features = [
  {
    icon: Receipt,
    title: "Automatic receipts",
    description:
      "Snap receipts or forward emails and they match to transactions automatically.",
  },
  {
    icon: Bell,
    title: "Real-time alerts",
    description:
      "Get notified the moment money moves, with merchant names you can actually recognise.",
  },
  {
    icon: FileSpreadsheet,
    title: "Accounting sync",
    description:
      "Connect QuickBooks, Xero or NetSuite and keep your books reconciled without manual entry.",
  },
  {
    icon: CreditCard,
    title: "Instant virtual cards",
    description:
      "Create cards for every subscription or team member and freeze them with a single tap.",
  },
  {
    icon: ArrowLeftRight,
    title: "Global transfers",
    description:
      "Send money to 70 countries at the real exchange rate with a small, upfront fee.",
  },
  {
    icon: PiggyBank,
    title: "High-yield savings",
    description:
      "Earn up to 4.1% AER on savings with instant access and no minimum balance.",
  },
]

const stats = [
  { value: "$0", label: "Monthly fee on Standard" },
  { value: "$18B", label: "Processed annually" },
  { value: "3.4M", label: "Customers worldwide" },
  { value: "70", label: "Countries for transfers" },
]

const steps = [
  {
    title: "Download the app",
    description:
      "Available on iOS and Android, or sign up on the web in a couple of minutes.",
  },
  {
    title: "Verify your identity",
    description:
      "Scan your ID and take a quick selfie. Most accounts are approved in under five minutes.",
  },
  {
    title: "Add money",
    description:
      "Top up by bank transfer, card or Apple Pay, or switch your salary with one form.",
  },
  {
    title: "Start spending",
    description:
      "Use your virtual card instantly while your physical card ships to you for free.",
  },
]

const showcase = [
  {
    name: "Current account",
    meta: "Spend and get paid with no monthly fee",
    tag: "Everyday",
    price: "$0/mo",
  },
  {
    name: "Savings vault",
    meta: "Instant access, interest paid daily",
    tag: "4.1% AER",
    price: "$0/mo",
  },
  {
    name: "Business account",
    meta: "Invoices, cards and accounting sync",
    tag: "Business",
    price: "$15/mo",
  },
  {
    name: "Metal card",
    meta: "Stainless steel with 1% cashback",
    tag: "Premium",
    price: "$12/mo",
  },
  {
    name: "Global transfers",
    meta: "Real exchange rate to 70 countries",
    tag: "Low fee",
    price: "From 0.4%",
  },
  {
    name: "Investing",
    meta: "Stocks and ETFs from $1",
    tag: "New",
    price: "No commission",
  },
]

const testimonials = [
  {
    quote:
      "Support actually picks up. A real person sorted a blocked payment in four minutes on a Sunday.",
    name: "Linda Johansson",
    role: "E-commerce founder",
  },
  {
    quote:
      "I moved my business account over in an afternoon. Virtual cards for every vendor have saved us from at least two fraud attempts.",
    name: "Olivia Hart",
    role: "Founder, Hart Interiors",
  },
  {
    quote:
      "Paying contractors in four countries used to cost me a fortune in fees. Now it costs a few dollars and arrives the same day.",
    name: "Diego Santos",
    role: "Agency owner",
  },
]

const tiers = [
  {
    name: "Standard",
    price: "$0",
    period: "/month",
    description: "Everything you need for everyday banking.",
    features: [
      "Free current account",
      "Virtual and physical card",
      "Fee-free spending abroad",
      "Instant notifications",
    ],
    cta: "Open free account",
  },
  {
    name: "Plus",
    price: "$7",
    period: "/month",
    description: "Earn more and pay less on every transaction.",
    features: [
      "4.1% AER on savings",
      "1% cashback on card spend",
      "Unlimited free transfers",
      "Priority 24/7 support",
      "Purchase protection",
    ],
    cta: "Get Plus",
  },
  {
    name: "Business",
    price: "$15",
    period: "/month",
    description: "For freelancers, founders and growing teams.",
    features: [
      "Unlimited team cards",
      "Invoicing and payment links",
      "Accounting integrations",
      "Spend controls and approvals",
      "Multi-currency accounts",
    ],
    cta: "Open business account",
  },
]

const faqs = [
  {
    q: "Do you report to credit bureaus?",
    a: "Our credit-builder feature reports on-time payments to all three major bureaus to help improve your score.",
  },
  {
    q: "Is my money safe?",
    a: "Yes. Deposits are held with FDIC-insured partner banks and protected up to $250,000 per depositor.",
  },
  {
    q: "How long does it take to open an account?",
    a: "Most people are verified and ready to spend in under five minutes. Business accounts usually take one working day.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. Every fee is listed on our pricing page and shown in the app before you confirm a transaction.",
  },
  {
    q: "Can I use my card abroad?",
    a: "Yes. Card payments abroad are fee-free on all plans and use the real exchange rate.",
  },
]

const footer = [
  { title: "Products", links: ["Personal", "Business", "Savings", "Cards"] },
  { title: "Company", links: ["About", "Careers", "Press", "Blog"] },
  { title: "Legal", links: ["Privacy", "Terms", "Licences", "Complaints"] },
]

export default function LandingFintech06() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-violet-600 text-white text-sm">
              T
            </span>
            <span className="">Taxly</span>
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
              Start your return
            </Button>
          </div>
        </div>
      </header>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-x border-b px-6 py-3 text-xs text-muted-foreground">
            <span>Taxes for the self-employed</span>
            <span className="hidden sm:inline">
              Tax made simple for freelancers.
            </span>
          </div>
          <div className="border-x px-6 py-16 md:py-28">
            <h1 className="max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"Freelance taxes, "}
              <span className="text-violet-600 dark:text-violet-400">
                done in an evening
              </span>
            </h1>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                Taxly tracks your income and expenses, estimates quarterly
                payments and files your return with an accountant checking every
                line.
              </p>
              <div className="flex flex-wrap gap-3 ">
                <Button size="lg" nativeButton={false} render={<a href="#" />}>
                  Start your return
                  <ArrowRight />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#" />}
                >
                  See pricing
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
            Regulated and partnered with
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
            <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
              Features
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Money tools that work as hard as you do
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Accounts, cards and payments built on modern infrastructure, with
              fees you can understand at a glance.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-violet-600 dark:text-violet-400" />
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
                Plans and products
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Everything you need to spend, save and move money, available in
                one app and one login.
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
                  <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-600 dark:text-violet-400">
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
              Trusted with millions every day
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
              Open an account in minutes
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
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
              Transparent fees, no fine print
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Pick the plan that fits how you use money. Switch or cancel at any
              time with no penalty.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-violet-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-violet-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-violet-600 dark:text-violet-400" />
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
              Your questions, answered
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-violet-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-500/25 via-fuchsia-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Stop dreading tax season
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect your bank and see your estimated tax bill in five minutes.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Start your return
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                See pricing
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
              <span className="flex size-7 items-center justify-center rounded-md bg-violet-600 text-white text-sm">
                T
              </span>
              <span className="">Taxly</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Tax made simple for freelancers.
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
              © {new Date().getFullYear()} Taxly. All rights reserved.
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
          app.taxly.com
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
              <span className="text-violet-600 dark:text-violet-400">
                +24.6%
              </span>
            </div>
            <div className="flex h-32 items-end gap-1.5">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === bars.length - 1 ? "bg-violet-600" : "bg-muted-foreground/20"}`}
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
                <span className="shrink-0 rounded-full bg-violet-500/10 px-2 py-0.5 text-[11px] font-medium text-violet-600 dark:text-violet-400">
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
