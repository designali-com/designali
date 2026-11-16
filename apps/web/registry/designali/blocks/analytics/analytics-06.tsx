import {
  ArrowDownRight,
  ArrowUpRight,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

import { CounterNumber } from "@/registry/designali/ui/counter-number"

const cards = [
  {
    label: "Template sales",
    value: 1.28,
    prefix: "$",
    suffix: "M",
    decimals: 2,
    change: 14.2,
    data: [12, 14, 13, 17, 16, 19, 22, 21, 24, 26, 25, 29],
  },
  {
    label: "New Designali customers",
    value: 3416,
    prefix: "",
    suffix: "",
    decimals: 0,
    change: 8.7,
    data: [30, 28, 33, 31, 36, 35, 38, 41, 39, 44, 43, 47],
  },
  {
    label: "Refund rate",
    value: 1.9,
    prefix: "",
    suffix: "%",
    decimals: 1,
    change: -0.6,
    data: [28, 26, 27, 24, 25, 22, 21, 22, 19, 18, 18, 16],
  },
  {
    label: "Open support tickets",
    value: 214,
    prefix: "",
    suffix: "",
    decimals: 0,
    change: 11.3,
    data: [14, 15, 13, 16, 18, 17, 21, 20, 23, 22, 25, 27],
    inverse: true,
  },
]

function Sparkline({ data, positive }: { data: number[]; positive: boolean }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * 100
      const y = 36 - ((v - min) / (max - min || 1)) * 32
      return `${x},${y}`
    })
    .join(" ")
  const tone = positive
    ? "fill-primary stroke-primary"
    : "fill-primary stroke-primary"

  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className={`h-12 w-full ${tone}`}>
      <polygon points={`0,40 ${points} 100,40`} stroke="none" opacity="0.1" />
      <polyline
        points={points}
        fill="none"
        strokeWidth="1.75"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Analytics06() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Last 12 weeks at a glance
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              designali.com store: templates, blocks, icons and UI kits combined.
            </p>
          </div>
          <span className="text-xs text-muted-foreground">Week 46, 2026</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const good = card.inverse ? card.change < 0 : card.change > 0
            return (
              <div key={card.label} className="flex flex-col border bg-card p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{card.label}</p>
                  <span
                    className={cn(
                      "inline-flex items-center gap-0.5 px-1.5 py-0.5 text-xs font-medium",
                      good
                        ? "bg-primary/10 text-chart-3 dark:text-primary"
                        : "bg-primary/10 text-chart-3 dark:text-primary"
                    )}
                  >
                    {card.change > 0 ? (
                      <ArrowUpRight className="size-3" />
                    ) : (
                      <ArrowDownRight className="size-3" />
                    )}
                    {Math.abs(card.change)}%
                  </span>
                </div>
                <CounterNumber
                  value={card.value}
                  prefix={card.prefix}
                  suffix={card.suffix}
                  decimalPlaces={card.decimals}
                  className="mt-3 block text-3xl font-semibold tracking-tight"
                />
                <div className="mt-4">
                  <Sparkline data={card.data} positive={good} />
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                  <span>Aug 25</span>
                  <span>Nov 10</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
