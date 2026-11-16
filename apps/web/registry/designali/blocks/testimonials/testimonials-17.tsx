import {
  TrendingUp,
} from "@designali/icons"

const rows = [
  { customer: "Wrenfield Insurance", initials: "WI", metric: "Claims handled per agent", before: "42 / week", after: "71 / week", delta: "+69%", quote: "Agents spend their time on people, not paperwork." },
  { customer: "Pivot Dental Group", initials: "PD", metric: "Average reply time", before: "9 hours", after: "38 min", delta: "-93%", quote: "Patients notice. Our reviews say so." },
  { customer: "Arcadia Travel", initials: "AT", metric: "Tickets resolved by AI", before: "0%", after: "46%", delta: "+46 pts", quote: "Holiday rush without temp hires, for the first time." },
  { customer: "Nimbus Telecom", initials: "NT", metric: "Customer satisfaction", before: "3.6", after: "4.7", delta: "+1.1", quote: "CSAT is now our best number in the board pack." },
]

export default function Testimonials17() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
          Before and after Helpwise, in customers&apos; own numbers.
        </h2>
        <div className="mt-12 border border-border">
          <div className="hidden grid-cols-[1.4fr_1fr_1fr_1fr_0.7fr] gap-6 border-b border-border bg-muted/50 px-6 py-3 text-xs tracking-wide text-muted-foreground uppercase md:grid">
            <span>Customer</span>
            <span>Metric</span>
            <span>Before</span>
            <span>After</span>
            <span className="text-right">Change</span>
          </div>
          {rows.map((r) => (
            <div
              key={r.customer}
              className="grid grid-cols-2 gap-x-6 gap-y-3 border-b border-border px-6 py-6 last:border-b-0 md:grid-cols-[1.4fr_1fr_1fr_1fr_0.7fr] md:items-center"
            >
              <div className="col-span-2 flex items-center gap-3 md:col-span-1">
                <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-muted font-mono text-xs">
                  {r.initials}
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-medium">{r.customer}</div>
                  <div className="text-xs text-muted-foreground">&ldquo;{r.quote}&rdquo;</div>
                </div>
              </div>
              <div className="col-span-2 text-sm text-muted-foreground md:col-span-1">{r.metric}</div>
              <div className="text-sm">
                <span className="text-xs text-muted-foreground md:hidden">Before </span>
                <span className="text-muted-foreground line-through decoration-muted-foreground/50">{r.before}</span>
              </div>
              <div className="text-sm font-medium">
                <span className="text-xs font-normal text-muted-foreground md:hidden">After </span>
                {r.after}
              </div>
              <div className="col-span-2 md:col-span-1 md:text-right">
                <span className="inline-flex items-center gap-1 bg-emerald-100 px-2 py-1 font-mono text-xs text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  <TrendingUp className="size-3" />
                  {r.delta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
