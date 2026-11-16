import {
  ArrowUpRight,
} from "@designali/icons"

import { CounterNumber } from "@/registry/designali/ui/counter-number"

const cases = [
  {
    company: "Brand identity",
    metric: 1,
    suffix: " system",
    label: "for brand, product and website",
    quote: "Designali gave us one identity that works from our logo to every screen of the app.",
    name: "Dana, COO, Designali client",
  },
  {
    company: "Next.js website",
    metric: 460,
    suffix: "+",
    label: "blocks to build new pages from",
    quote: "New landing pages now take an afternoon, built from Designali blocks.",
    name: "Imran, Head of Marketing, Designali client",
  },
  {
    company: "Design system",
    metric: 4000,
    suffix: "+",
    label: "icons in @designali/icons",
    quote: "Designers and engineers finally work from the same components and tokens.",
    name: "Grace, VP Product, Designali client",
  },
]

export default function Testimonials12() {
  return (
    <section className="w-full bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
          Results, not adjectives. designali case studies.
        </h2>
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {cases.map((c) => (
            <article key={c.company} className="flex flex-col bg-background p-8">
              <div className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {c.company}
              </div>
              <CounterNumber
                value={c.metric}
                suffix={c.suffix}
                className="mt-10 text-6xl font-medium tracking-tighter"
              />
              <div className="mt-1 text-sm text-muted-foreground">{c.label}</div>
              <blockquote className="mt-10 flex-1 border-l-2 border-foreground pl-4 text-sm leading-6">
                &ldquo;{c.quote}&rdquo;
              </blockquote>
              <div className="mt-4 text-xs text-muted-foreground">{c.name}</div>
              <a href="https://www.designali.com/work" className="mt-8 inline-flex items-center gap-1 text-sm font-medium hover:underline hover:underline-offset-4">
                Read case study <ArrowUpRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
