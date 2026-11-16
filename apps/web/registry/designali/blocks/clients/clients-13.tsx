import {
  ArrowUpRight,
} from "@designali/icons"

import { Macbook } from "@/registry/designali/ui/apple/macbook"
import { CounterNumber } from "@/registry/designali/ui/counter-number"

const cases = [
  {
    company: "Resort Website",
    initials: "RW",
    industry: "Hospitality",
    image: "/images/templates/resort.jpg",
    value: 3,
    suffix: "x",
    metricLabel: "more direct booking enquiries",
    summary:
      "Brand identity, UI/UX and a Next.js site built from the Designali Resort template.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    company: "Design Agency Site",
    initials: "DA",
    industry: "Agency",
    image: "/images/templates/design-agency.jpg",
    value: -62,
    suffix: "%",
    metricLabel: "front-end bug reports",
    summary:
      "Case study pages now ship from shared Designali blocks, so the team focuses on the work instead of pixels.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    company: "AI Product Launch",
    initials: "AI",
    industry: "AI startup",
    image: "/images/templates/ai.jpg",
    value: 11,
    suffix: " days",
    metricLabel: "from brief to launch page",
    summary:
      "A launch page, product UI and motion assets designed and coded in one Designali sprint.",
    gradient: "from-primary/20 to-primary/5",
  },
]

export default function Clients13() {
  return (
    <section className="w-full border-y border-border bg-muted/30 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-lg text-3xl font-semibold tracking-tight md:text-4xl">
            Outcomes, not logos.
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
          >
            All case studies
            <ArrowUpRight className="size-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <a
              key={item.company}
              href="#"
              className="group flex flex-col border border-border bg-background transition-colors hover:border-foreground/40"
            >
              <div
                className={`relative flex flex-col items-center gap-4 overflow-hidden bg-gradient-to-br px-6 pt-6 ${item.gradient}`}
              >
                <div className="flex w-full items-center justify-between">
                  <span className="flex size-12 items-center justify-center border border-border bg-background text-sm font-semibold tracking-tight">
                    {item.initials}
                  </span>
                  <span className="text-xs tracking-widest text-muted-foreground uppercase">
                    {item.industry}
                  </span>
                </div>
                <Macbook variant="macbook-air" color="silver" size="sm" className="-mb-8 max-w-full">
                  <img
                    src={item.image}
                    alt={`${item.company} preview`}
                    className="size-full object-cover object-top"
                  />
                </Macbook>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-medium">{item.company}</p>
                <CounterNumber
                  value={item.value}
                  suffix={item.suffix}
                  className="mt-6 block text-4xl font-semibold tracking-tight"
                />
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.metricLabel}
                </p>
                <p className="mt-6 flex-1 text-sm leading-6 text-muted-foreground">
                  {item.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium">
                  Read the story
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
