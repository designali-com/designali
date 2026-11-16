import {
  ArrowUpRight,
} from "@designali/icons"

const cases = [
  {
    company: "Brightline Logistics",
    metric: "-41%",
    label: "cost per delivery",
    quote: "Route optimisation paid back the contract in the first quarter.",
    name: "Dana Kowalski, COO",
  },
  {
    company: "Oakmere Schools",
    metric: "3x",
    label: "parent engagement",
    quote: "Teachers send one update and every family gets it in their language.",
    name: "Imran Siddiqui, Director of IT",
  },
  {
    company: "Helio Solar",
    metric: "18 days",
    label: "shorter sales cycle",
    quote: "Proposals that used to take a week now go out the same afternoon.",
    name: "Grace Mbeki, VP Sales",
  },
]

export default function Testimonials12() {
  return (
    <section className="w-full bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
          Results, not adjectives.
        </h2>
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {cases.map((c) => (
            <article key={c.company} className="flex flex-col bg-background p-8">
              <div className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {c.company}
              </div>
              <div className="mt-10 text-6xl font-medium tracking-tighter">{c.metric}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.label}</div>
              <blockquote className="mt-10 flex-1 border-l-2 border-foreground pl-4 text-sm leading-6">
                &ldquo;{c.quote}&rdquo;
              </blockquote>
              <div className="mt-4 text-xs text-muted-foreground">{c.name}</div>
              <a href="#" className="mt-8 inline-flex items-center gap-1 text-sm font-medium hover:underline hover:underline-offset-4">
                Read case study <ArrowUpRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
