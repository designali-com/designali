import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Camera,
  ChartLine,
  Check,
  FileText,
  Landmark,
  MapPin,
  Plus,
  Sparkles,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const navLinks = ["Studio", "Work", "Process", "Pricing", "Insights"]

const logos = [
  "Next.js",
  "React",
  "Figma",
  "Vercel",
  "TypeScript",
  "Tailwind CSS",
  "Blender",
  "shadcn-style UI",
]

const features = [
  {
    icon: MapPin,
    title: "Brand identity for property",
    description:
      "Logos, colour and type systems for agencies and developers that look as premium as the homes they sell.",
  },
  {
    icon: ChartLine,
    title: "Listing websites",
    description:
      "Fast Next.js property sites with search, filters and listing pages your team can update without a developer.",
  },
  {
    icon: Camera,
    title: "CGI & 3D renders",
    description:
      "Architectural renders, interiors and walkthrough motion so buyers can see a home before it is built.",
  },
  {
    icon: Bell,
    title: "Lead capture flows",
    description:
      "Viewing requests, enquiry forms and valuation flows designed to be short and easy to complete on a phone.",
  },
  {
    icon: FileText,
    title: "Brochures & sales kits",
    description:
      "Digital and print brochures, floor plan layouts and sales decks in one consistent visual system.",
  },
  {
    icon: Landmark,
    title: "Design systems",
    description:
      "Tokens, components and docs that keep your website, portal and marketing consistent as you grow.",
  },
]

const stats = [
  { value: "240+", label: "Property pages designed" },
  { value: "4 weeks", label: "Average time to launch" },
  { value: "100%", label: "Projects delivered on scope" },
  { value: "2300+", label: "Screens designed" },
]

const steps = [
  {
    title: "Book a discovery call",
    description:
      "Meet Ali Imam to talk about your brand, your listings and what the project needs.",
  },
  {
    title: "Shortlist the direction",
    description:
      "Review moodboards and concepts in Figma, with honest notes on what will work best.",
  },
  {
    title: "Design and build",
    description:
      "Brand, CGI and website are designed together, then built in Next.js and tested.",
  },
  {
    title: "Launch and hand over",
    description:
      "We launch the site, hand over Figma files and documentation, and stay on for updates.",
  },
]

const showcase = [
  {
    name: "Hillside Residence Launch",
    meta: "Brand · Website · CGI renders",
    tag: "New project",
    price: "6 wks",
    tile: "bg-gradient-to-br from-emerald-200 via-green-300 to-lime-300 dark:from-emerald-700 dark:via-green-800 dark:to-lime-900",
  },
  {
    name: "Riverside Loft Site",
    meta: "Listing site · 12 pages",
    tag: "Website",
    price: "4 wks",
    tile: "bg-gradient-to-br from-stone-200 via-neutral-300 to-zinc-400 dark:from-stone-700 dark:via-neutral-800 dark:to-zinc-900",
  },
  {
    name: "Townhouse Brochure",
    meta: "Print · Digital brochure",
    tag: "Brochure",
    price: "5 wks",
    tile: "bg-gradient-to-br from-rose-200 via-pink-300 to-purple-300 dark:from-rose-700 dark:via-pink-800 dark:to-purple-900",
  },
  {
    name: "Penthouse CGI Walkthrough",
    meta: "3D · Motion · 90 seconds",
    tag: "CGI",
    price: "8 wks",
    tile: "bg-gradient-to-br from-blue-200 via-indigo-300 to-violet-400 dark:from-blue-700 dark:via-indigo-800 dark:to-violet-900",
  },
  {
    name: "Coastal Resort Brand",
    meta: "Identity · Booking site",
    tag: "Brand",
    price: "3 wks",
    tile: "bg-gradient-to-br from-yellow-100 via-amber-200 to-orange-300 dark:from-yellow-700 dark:via-amber-800 dark:to-orange-900",
  },
  {
    name: "Agency Design System",
    meta: "Components · Docs",
    tag: "System",
    price: "From $2,100/mo",
    tile: "bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900",
  },
]

const testimonials = [
  {
    quote:
      "We had four enquiries in the first weekend after launch. The renders and the new site made the development feel real.",
    name: "Emily",
    role: "Sales director, property developer",
  },
  {
    quote:
      "Ali explained every step and delivered a brand that finally matched the quality of our homes.",
    name: "Priya",
    role: "Founder, boutique agency",
  },
  {
    quote:
      "The 3D walkthrough let overseas buyers explore the apartment before it existed. It made the launch feel easy.",
    name: "Oliver",
    role: "Marketing lead, Designali client",
  },
]

const tiers = [
  {
    name: "Website",
    price: "$2,900",
    period: "per project",
    description: "For agencies that need a modern listing site.",
    features: [
      "Next.js listing site",
      "Search and filter pages",
      "Enquiry and viewing flows",
      "Launch support",
    ],
    cta: "Start a website",
  },
  {
    name: "Launch",
    price: "$6,500",
    period: "per project",
    description: "Our most popular package for new developments.",
    features: [
      "Everything in Website",
      "Brand identity",
      "CGI renders and floor plans",
      "Digital brochure",
      "Weekly progress calls",
    ],
    cta: "Book a launch",
  },
  {
    name: "Signature",
    price: "Custom",
    period: "",
    description: "For luxury and architect-designed projects.",
    features: [
      "Full brand campaign",
      "CGI walkthrough film",
      "Print and digital sales kit",
      "Design system and docs",
      "Ali Imam as lead designer",
    ],
    cta: "Talk to the studio",
  },
]

const faqs = [
  {
    q: "How much does a property website cost?",
    a: "Book a free discovery call and Ali Imam will review your listings and goals, then send a written scope and fixed price within 48 hours.",
  },
  {
    q: "How long does a project take?",
    a: "Most websites launch in about four weeks, though timing depends on scope, content and CGI work.",
  },
  {
    q: "Do I have to sign a long contract?",
    a: "No. Projects are scoped up front, and monthly support can be paused or cancelled at any time.",
  },
  {
    q: "Can you create renders before construction?",
    a: "Yes. We create CGI renders and walkthroughs from plans, sketches or CAD files, so you can market homes early.",
  },
  {
    q: "Do you support the site after launch?",
    a: "Yes. Monthly design support covers new listings templates, campaign pages and small updates.",
  },
]

const footer = [
  { title: "Studio", links: ["Studio", "Work", "Process", "Brand identity"] },
  {
    title: "Studio",
    links: ["Websites", "CGI renders", "Design systems", "Brochures"],
  },
  {
    title: "Designali",
    links: ["About Ali", "Insights", "Templates", "Contact"],
  },
]

export default function LandingRealEstate01() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b bg-muted/50 text-muted-foreground px-4 py-2 text-center text-xs sm:text-sm">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 hover:underline"
        >
          New: real estate website templates now on designali.com
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
              K
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
              Our work
            </Button>
            <Button size="sm" nativeButton={false} render={<a href="#" />}>
              Start a project
            </Button>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-amber-500/25 to-transparent opacity-50" />
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-16 md:pt-28">
          <div className="mx-auto max-w-4xl space-y-7 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background text-muted-foreground px-3 py-1 text-xs font-medium">
              <Sparkles className="size-3.5 text-amber-600 dark:text-amber-400" />
              Design for real estate
            </span>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-7xl ">
              {"Design the brand that sells "}
              <span className="text-amber-600 dark:text-amber-400">
                your next development
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              designali helps agencies and developers sell homes with brand identity,
              CGI renders and fast listing websites, from first concept to launch.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
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
                See packages
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-6xl">
            <HeroVisual />
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
            <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
              Why choose Designali
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl  mt-3">
              A smarter way to market property
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Brand, CGI and code from one studio, with a process that keeps you
              informed from the first concept to launch day.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="-mt-px -ml-px border-t border-l p-8"
              >
                <feature.icon className="size-6 text-amber-600 dark:text-amber-400" />
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
                Featured projects
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Hand-picked property projects, from launch sites to 3D walkthroughs.
                Explore case studies in detail on the work page.
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
              From first concept to launch day
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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Clients who trusted Designali
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
              Fair pricing, clearly explained
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Choose the package that suits your project. No hidden
              charges and no long tie-in contracts.
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
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border bg-amber-500/10 px-6 py-16 text-center md:py-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-500/25 via-yellow-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Planning a property launch?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get a free, no-obligation scope from Ali Imam this week.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
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
                See packages
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
              <span className="flex size-7 items-center justify-center rounded-md bg-amber-600 text-white text-sm">
                K
              </span>
              <span className="">designali</span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground">
              Design se code tak, for real estate.
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
              © {new Date().getFullYear()} designali. All rights reserved.
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
