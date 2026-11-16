import {
  ArrowRight,
  Quote,
  Star,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const quotes = [
  {
    body: "Designali took us from a rough idea to a launched brand and website. Design and code, all in one place.",
    name: "Priya",
    role: "Founder, Designali client",
    initials: "PR",
    color: "bg-chart-1",
    offset: "",
  },
  {
    body: "The Designali blocks saved my team weeks. We copied the code and shipped the same day.",
    name: "Diego",
    role: "Frontend developer",
    initials: "DI",
    color: "bg-chart-2",
    offset: "sm:ms-12",
  },
  {
    body: "Ali Imam designs like a designer and codes like an engineer. Our new site feels effortless.",
    name: "Hana",
    role: "Marketing lead, studio client",
    initials: "HA",
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
                Loved by designers and developers
              </p>
            </div>
          </div>
          <h1 className="mt-8 text-4xl font-medium tracking-tight md:text-6xl">
            Design se code tak, in days, not months.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
            Designali gives you production-ready templates, blocks and UI
            designs — or a studio that designs and builds your whole product
            with Next.js and Tailwind CSS.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" nativeButton={false} render={<a href="/pricing" />}>
              See pricing
              <ArrowRight />
            </Button>
            <Button size="lg" variant="ghost" nativeButton={false} render={<a href="/work" />}>
              View case studies
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Free blocks available. No credit card required.
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
