import { ArrowRight, Quote, Star } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const quotes = [
  {
    body: "We replaced three tools and a spreadsheet. Month-end close went from eight days to three.",
    name: "Priya Raman",
    role: "Controller, Fernhill Foods",
    initials: "PR",
    color: "bg-chart-1",
    offset: "",
  },
  {
    body: "The approval flows alone saved my team a full day every week.",
    name: "Diego Alvarez",
    role: "VP Finance, Oakline",
    initials: "DA",
    color: "bg-chart-2",
    offset: "sm:ms-12",
  },
  {
    body: "Auditors asked how we got so organised. I just sent them a Ledgerly link.",
    name: "Hana Sato",
    role: "CFO, Brightwater Labs",
    initials: "HS",
    color: "bg-chart-3",
    offset: "sm:ms-4",
  },
]

export default function Hero14() {
  return (
    <section className="w-full bg-muted/30 px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4", "bg-chart-5"].map((color, index) => (
                <span
                  key={color}
                  className={`flex size-9 items-center justify-center rounded-full border-2 border-background text-[10px] font-medium text-white ${color}`}
                >
                  {["JM", "KL", "RT", "SA", "BN"][index]}
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Loved by 6,200 finance teams
              </p>
            </div>
          </div>
          <h1 className="mt-8 text-4xl font-medium tracking-tight md:text-6xl">
            Close the books in days, not weeks.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
            Ledgerly automates reconciliation, accruals and approvals so your
            finance team can spend month-end on analysis instead of chasing
            receipts.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} render={<a href="#" />}>
              Start free trial
              <ArrowRight />
            </Button>
            <Button size="lg" variant="ghost" nativeButton={false} render={<a href="#" />}>
              Read customer stories
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            SOC 2 Type II. No credit card required.
          </p>
        </div>

        <div className="space-y-4">
          {quotes.map((quote) => (
            <figure
              key={quote.name}
              className={`border border-border bg-card p-6 shadow-sm ${quote.offset}`}
            >
              <Quote className="size-4 text-muted-foreground" />
              <blockquote className="mt-3 text-sm leading-6">
                {quote.body}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span
                  className={`flex size-8 items-center justify-center rounded-full text-[10px] font-medium text-white ${quote.color}`}
                >
                  {quote.initials}
                </span>
                <div className="text-xs">
                  <p className="font-medium">{quote.name}</p>
                  <p className="text-muted-foreground">{quote.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
