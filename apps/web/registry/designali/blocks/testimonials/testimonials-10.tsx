import { BadgeCheck, Star } from "lucide-react"

const distribution = [
  [5, 86],
  [4, 10],
  [3, 3],
  [2, 1],
  [1, 0],
]

const reviews = [
  {
    title: "Paid for itself in week one",
    body: "Caught a double-billing issue with a supplier on the first sync. That alone covered the annual plan.",
    name: "Rachel G.",
    meta: "Bookkeeper, 12 clients",
    rating: 5,
  },
  {
    title: "Clean, fast, no fluff",
    body: "The mobile app is as capable as desktop. I approve invoices from the school pickup line now.",
    name: "Owen P.",
    meta: "Owner, Harbor Joinery",
    rating: 5,
  },
  {
    title: "Great, with one wish",
    body: "Bank feeds are excellent. I would love multi-entity consolidation, which the team says is on the roadmap.",
    name: "Sofia L.",
    meta: "Controller, Mosaic Retail",
    rating: 4,
  },
]

function Stars({ n, className }: { n: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 text-amber-500 ${className ?? ""}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`size-4 ${i < n ? "fill-current" : "text-muted-foreground/30"}`} />
      ))}
    </div>
  )
}

export default function Testimonials10() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[320px_1fr]">
        <div>
          <h2 className="text-3xl font-medium tracking-tight">Customer reviews</h2>
          <div className="mt-6 flex items-end gap-3">
            <span className="text-6xl font-medium tracking-tight">4.9</span>
            <div className="pb-2">
              <Stars n={5} />
              <div className="mt-1 text-xs text-muted-foreground">2,318 verified reviews</div>
            </div>
          </div>
          <div className="mt-8 space-y-2">
            {distribution.map(([stars, pct]) => (
              <div key={stars} className="flex items-center gap-3 text-xs">
                <span className="w-3 text-muted-foreground">{stars}</span>
                <div className="h-2 flex-1 bg-muted">
                  <div className="h-full bg-amber-500" style={{ width: `${pct}%` }} />
                </div>
                <span className="w-8 text-right text-muted-foreground">{pct}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {reviews.map((r) => (
            <article key={r.name} className="py-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Stars n={r.rating} />
                <span className="inline-flex items-center gap-1 text-xs text-emerald-700 dark:text-emerald-400">
                  <BadgeCheck className="size-3.5" /> Verified customer
                </span>
              </div>
              <h3 className="mt-3 text-base font-medium">{r.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{r.body}</p>
              <div className="mt-4 text-xs">
                <span className="font-medium">{r.name}</span>
                <span className="text-muted-foreground"> &middot; {r.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
