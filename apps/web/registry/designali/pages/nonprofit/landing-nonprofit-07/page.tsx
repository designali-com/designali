import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ChartPie,
  Check,
  FileCheck,
  Globe,
  HeartHandshake,
  Plus,
  Repeat,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Our work", "Impact", "Stories", "Get involved", "About"]

const logos = [
  "Tidewell",
  "Unity Grants",
  "Hartwell Foundation",
  "Open Society Fund",
  "Bluebridge Trust",
  "Common Good",
  "Meridian Giving",
  "Lantern Partners",
]

const features = [
  {
    icon: Globe,
    title: "Global reach",
    description:
      "Active programmes in 14 countries, working with more than 120 partner organisations.",
  },
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
]

const stats = [
  { value: "1.8M", label: "People reached" },
  { value: "87%", label: "Spent on programmes" },
  { value: "14", label: "Countries" },
  { value: "120", label: "Local partners" },
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
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
  {
    name: "Girls in School",
    meta: "Scholarships and mentoring",
    tag: "Education",
    price: "9,800 students",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Community Health Workers",
    meta: "Trained local health teams",
    tag: "Health",
    price: "1,200 trained",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Emergency Response",
    meta: "Rapid relief after disasters",
    tag: "Relief",
    price: "72 hrs",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Food Security Hubs",
    meta: "Local growing and food banks",
    tag: "Food",
    price: "36 hubs",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
  {
    name: "Climate Resilience",
    meta: "Drought-proof farming practices",
    tag: "Climate",
    price: "14,000 farmers",
    tile: "bg-gradient-to-br from-sky-200 via-cyan-300 to-teal-400 dark:from-sky-700 dark:via-cyan-800 dark:to-teal-900",
  },
]

const testimonials = [
  {
    quote:
      "Before the well was built my daughters walked three hours for water. Now they walk to school instead.",
    name: "Grace Wanjiru",
    role: "Community leader, Kenya",
  },
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
    q: "Is my donation tax deductible?",
    a: "Yes. We are a registered charity and you will receive a tax receipt by email immediately after every donation.",
  },
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

export default function LandingNonprofit07() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-7 items-center justify-center rounded-md bg-indigo-600 text-white text-sm">
              K
            </span>
            <span className="">Kindred Care</span>
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
              Get support
            </Button>
          </div>
        </div>
      </header>
      <section className="relative isolate overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-[ellipse_60%_50%_at_50%_0%] from-indigo-500/25 via-violet-500/10 to-transparent to-70%" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_50%_45%_at_50%_0%,#000_60%,transparent_100%)]" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border bg-background/70 py-1 pr-3 pl-1 text-xs backdrop-blur"
            >
              <span className="rounded-full bg-indigo-600 px-2 py-0.5 font-medium text-white">
                New
              </span>
              <span className="text-muted-foreground">
                Our free carers helpline is now open seven days a week
              </span>
            </a>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-8xl ">
              {"Caring for someone you love? "}
              <span className="text-indigo-600 dark:text-indigo-400">
                {"You're not alone"}
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              Kindred Care offers respite breaks, peer support groups and a free
              helpline for the millions caring for family members at home.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Get support
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Volunteer with us
              </Button>
            </div>
          </div>
          <div className="relative mx-auto mt-20 max-w-5xl">
            <div className="absolute inset-x-10 -top-6 -z-10 h-24 rounded-full bg-indigo-500/10 blur-2xl" />
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
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
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
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-indigo-600 dark:text-indigo-400" />
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
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
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
              Voices from the communities we serve
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
                  className={`relative flex h-full flex-col rounded-2xl border p-8 ${featured ? "border-transparent ring-2 ring-indigo-500 shadow-xl" : ""}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-indigo-600 text-white px-3 py-1 text-xs font-medium">
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
                        <Check className="mt-0.5 size-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-indigo-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/25 via-violet-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Give a carer a day to rest
            </h2>
            <p className="text-lg text-muted-foreground">
              Your donation funds respite sitters so carers can take a
              well-earned break.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Get support
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#" />}
              >
                Volunteer with us
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
              <span className="flex size-7 items-center justify-center rounded-md bg-indigo-600 text-white text-sm">
                K
              </span>
              <span className="">Kindred Care</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Caring for those who care.
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
              © {new Date().getFullYear()} Kindred Care. All rights reserved.
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
