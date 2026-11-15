import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ChartPie,
  Check,
  FileCheck,
  HeartHandshake,
  Mail,
  Plus,
  Quote,
  Repeat,
  Sparkles,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const navLinks = ["Our work", "Impact", "Stories", "Get involved", "About"]

const logos = [
  "Unity Grants",
  "Hartwell Foundation",
  "Open Society Fund",
  "Bluebridge Trust",
  "Common Good",
  "Meridian Giving",
  "Lantern Partners",
  "Tidewell",
]

const features = [
  {
    icon: BadgeCheck,
    title: "Top-rated charity",
    description:
      "Rated four stars for financial health and transparency by independent charity evaluators.",
  },
  {
    icon: HeartHandshake,
    title: "Community-led",
    description:
      "Local leaders decide priorities and run programmes. We provide funding, training and tools.",
  },
  {
    icon: ChartPie,
    title: "87% to programmes",
    description:
      "Eighty-seven cents of every dollar funds frontline work. Our accounts are audited and public.",
  },
  {
    icon: FileCheck,
    title: "Independently evaluated",
    description:
      "Third-party evaluators measure outcomes every year, and we publish what did not work too.",
  },
  {
    icon: Repeat,
    title: "Built to last",
    description:
      "Programmes are designed to become locally sustainable within five to seven years.",
  },
  {
    icon: Mail,
    title: "Updates you can see",
    description:
      "Donors receive quarterly reports with photos, stories and numbers from the projects they fund.",
  },
]

const stats = [
  { value: "87%", label: "Spent on programmes" },
  { value: "14", label: "Countries" },
  { value: "120", label: "Local partners" },
  { value: "32,000", label: "Monthly donors" },
]

const steps = [
  {
    title: "You give",
    description:
      "Donate once or monthly. Every gift is processed securely and receipted instantly.",
  },
  {
    title: "We fund local partners",
    description:
      "Funds go to vetted community organisations who know the needs best.",
  },
  {
    title: "Programmes deliver",
    description:
      "Clean water, education and health services reach families on the ground.",
  },
  {
    title: "You see the results",
    description:
      "Quarterly reports show exactly what your support made possible.",
  },
]

const showcase = [
  {
    name: "Clean Water Access",
    meta: "Wells and filtration in rural East Africa",
    tag: "Water",
    price: "412 wells",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Girls in School",
    meta: "Scholarships and mentoring",
    tag: "Education",
    price: "9,800 students",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Community Health Workers",
    meta: "Trained local health teams",
    tag: "Health",
    price: "1,200 trained",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Emergency Response",
    meta: "Rapid relief after disasters",
    tag: "Relief",
    price: "72 hrs",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
  {
    name: "Food Security Hubs",
    meta: "Local growing and food banks",
    tag: "Food",
    price: "36 hubs",
    tile: "bg-gradient-to-br from-violet-200 via-purple-300 to-fuchsia-400 dark:from-violet-700 dark:via-purple-800 dark:to-fuchsia-900",
  },
  {
    name: "Climate Resilience",
    meta: "Drought-proof farming practices",
    tag: "Climate",
    price: "14,000 farmers",
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
  },
]

const testimonials = [
  {
    quote:
      "The mentoring programme gave me the confidence to apply for university. I am the first in my family to go.",
    name: "Ahmed Siddiqui",
    role: "Programme graduate",
  },
  {
    quote:
      "I have given monthly for six years. The quarterly updates make me feel like part of the work.",
    name: "Rebecca Lawson",
    role: "Monthly donor",
  },
  {
    quote:
      "They listened to what our village needed, not what looked good in a brochure. That is rare.",
    name: "Luis Ortega",
    role: "Partner organisation, Guatemala",
  },
]

const tiers = [
  {
    name: "Supporter",
    price: "$15",
    period: "/month",
    description: "Provides clean water for one family each month.",
    features: [
      "Quarterly impact reports",
      "Annual tax receipt",
      "Supporter newsletter",
      "Cancel anytime",
    ],
    cta: "Give $15 monthly",
  },
  {
    name: "Champion",
    price: "$40",
    period: "/month",
    description: "Funds a girl's school fees and supplies.",
    features: [
      "Everything in Supporter",
      "Letters from programmes",
      "Invitation to donor calls",
      "Annual field report",
      "Champion pin",
    ],
    cta: "Become a Champion",
  },
  {
    name: "Partner",
    price: "$100",
    period: "/month",
    description: "Trains and equips a community health worker.",
    features: [
      "Everything in Champion",
      "Named programme updates",
      "Site visit opportunities",
      "Direct contact with our team",
      "Recognition in annual report",
    ],
    cta: "Become a Partner",
  },
]

const faqs = [
  {
    q: "How much goes to programmes?",
    a: "87% funds programmes directly, 9% goes to fundraising and 4% to administration. Our audited accounts are published every year.",
  },
  {
    q: "Can I choose where my money goes?",
    a: "Yes. You can restrict your gift to a specific programme, or give unrestricted to let us direct funds where the need is greatest.",
  },
  {
    q: "How do I cancel a monthly gift?",
    a: "Email or call our supporter team, or manage it yourself in your donor account. There is never any pressure to continue.",
  },
  {
    q: "Can my company match my donation?",
    a: "Many employers match gifts. Search for your company on our matching page or ask your HR team.",
  },
  {
    q: "Can I volunteer?",
    a: "Yes. We have local volunteering roles, skilled remote roles and fundraising opportunities. Visit the get involved page.",
  },
]

const footer = [
  {
    title: "Our work",
    links: ["Programmes", "Where we work", "Impact reports", "Stories"],
  },
  {
    title: "Get involved",
    links: ["Donate", "Fundraise", "Volunteer", "Corporate partners"],
  },
  {
    title: "About",
    links: ["Our team", "Accounts", "Safeguarding", "Contact"],
  },
]

export default function LandingNonprofit08() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b bg-muted/50 text-muted-foreground px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          Salmon spotted upstream for the first time in 40 years
          <ArrowRight className="size-3.5" />
        </a>
      </div>
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-amber-600 text-white text-sm">
              R
            </span>
            <span className="">Rewild Rivers</span>
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
              Donate now
            </Button>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden border-b">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-amber-600 dark:text-amber-400" />
              Restoring freshwater habitats
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl ">
              {"Bring "}
              <span className="text-amber-600 dark:text-amber-400">
                life back to our rivers
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              Rewild Rivers removes old weirs, replants riverbanks and works
              with farmers to keep waterways clean for fish and wildlife.
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
                Donate now
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
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-amber-500/25 via-yellow-500/10 to-transparent blur-3xl" />
            <HeroVisual />
          </div>
        </div>
      </section>
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-center text-sm text-muted-foreground">
            Partners and funders
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
            <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
              How we work
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              Every gift goes further with us
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              We partner with local organisations, measure everything and
              publish the results, so you always know what your support
              achieved.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-background p-6 shadow-xs"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-amber-500/10">
                  <feature.icon className="size-5 text-amber-600 dark:text-amber-400" />
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
              Where your donation goes
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-t-2 border-border pt-6"
              >
                <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
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
                Our programmes
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Long-term programmes led by the communities they serve, funded
                by people like you.
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
              Voices from the communities we serve
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className={`flex flex-col justify-between rounded-2xl border bg-background p-6 ${i === 0 ? "md:col-span-2 md:p-10" : ""}`}
              >
                <Quote className="size-6 text-amber-600 dark:text-amber-400" />
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
              Choose your impact
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Monthly gifts let us plan ahead and respond faster. Every donation
              is tax deductible.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => {
              const featured = i === 1
              return (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-amber-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-amber-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" />
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
              Giving questions
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-amber-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-500/25 via-yellow-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              {"Follow the rivers we're restoring"}
            </h2>
            <p className="text-lg text-muted-foreground">
              Sign up with your email for seasonal updates from our restoration
              sites.
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
                Donate now
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
              <span className="flex size-7 items-center justify-center rounded-md bg-amber-600 text-white text-sm">
                R
              </span>
              <span className="">Rewild Rivers</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Clean water, wild rivers.
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
              © {new Date().getFullYear()} Rewild Rivers. All rights reserved.
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
