import {
  ArrowUpRight,
} from "@designali/icons"

const cases = [
  {
    company: "Resort Website",
    initials: "RW",
    industry: "Hospitality",
    metric: "3x",
    metricLabel: "more direct booking enquiries",
    summary:
      "Brand identity, UI/UX and a Next.js site built from the Designali Resort template.",
    gradient: "from-emerald-500/20 to-teal-500/5",
  },
  {
    company: "Design Agency Site",
    initials: "DA",
    industry: "Agency",
    metric: "-62%",
    metricLabel: "front-end bug reports",
    summary:
      "Case study pages now ship from shared Designali blocks, so the team focuses on the work instead of pixels.",
    gradient: "from-sky-500/20 to-indigo-500/5",
  },
  {
    company: "AI Product Launch",
    initials: "AI",
    industry: "AI startup",
    metric: "11 days",
    metricLabel: "from brief to launch page",
    summary:
      "A launch page, product UI and motion assets designed and coded in one Designali sprint.",
    gradient: "from-amber-500/20 to-orange-500/5",
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
                className={`relative flex h-36 items-end justify-between bg-gradient-to-br p-6 ${item.gradient}`}
              >
                <span className="flex size-12 items-center justify-center border border-border bg-background text-sm font-semibold tracking-tight">
                  {item.initials}
                </span>
                <span className="text-xs tracking-widest text-muted-foreground uppercase">
                  {item.industry}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-medium">{item.company}</p>
                <p className="mt-6 text-4xl font-semibold tracking-tight">
                  {item.metric}
                </p>
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
