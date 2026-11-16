import {
  ArrowDownRight,
  ArrowUpRight,
} from "@designali/icons"

const metrics = [
  { label: "Blocks", value: "460+", change: 12.4, points: [12, 14, 13, 17, 19, 18, 22, 25, 24, 28] },
  { label: "Landing pages", value: "240+", change: 6.8, points: [20, 21, 21, 23, 22, 24, 25, 25, 27, 28] },
  { label: "UI examples", value: "2,300+", change: 2.1, points: [18, 19, 18, 20, 21, 20, 21, 22, 22, 23] },
  { label: "Bounce rate", value: "1.9%", change: -0.4, points: [26, 24, 25, 22, 21, 22, 19, 18, 17, 16] },
  { label: "Icons", value: "4,000+", change: 4.2, points: [14, 15, 15, 16, 17, 17, 18, 19, 19, 21] },
  { label: "Client CSAT", value: "97.2", change: 0.6, points: [22, 23, 22, 23, 24, 23, 24, 24, 25, 25] },
  { label: "Avg. page load", value: "0.8s", change: -18.0, points: [28, 26, 25, 23, 21, 19, 18, 16, 15, 13] },
  { label: "Template downloads", value: "18,240", change: 3.3, points: [15, 14, 16, 17, 16, 18, 19, 18, 20, 22] },
]

function sparkline(points: number[]) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  return points
    .map((p, i) => `${(i / (points.length - 1)) * 100},${30 - ((p - min) / range) * 26 - 2}`)
    .join(" ")
}

export default function Grid08() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-muted-foreground">Q3 2026 · Designali studio update</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">Designali by the numbers</h2>
          </div>
          <p className="text-xs text-muted-foreground">Change vs. previous quarter</p>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => {
            const goodWhenDown = metric.label === "Bounce rate" || metric.label === "Avg. page load"
            const positive = goodWhenDown ? metric.change < 0 : metric.change > 0
            const Arrow = metric.change > 0 ? ArrowUpRight : ArrowDownRight
            return (
              <div key={metric.label} className="flex flex-col gap-6 bg-background p-6">
                <dt className="text-sm text-muted-foreground">{metric.label}</dt>
                <dd className="flex items-end justify-between gap-4">
                  <span className="text-3xl font-semibold tracking-tight">{metric.value}</span>
                  <span
                    className={`inline-flex items-center gap-0.5 font-mono text-xs ${
                      positive
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-rose-600 dark:text-rose-400"
                    }`}
                  >
                    <Arrow className="size-3.5" />
                    {Math.abs(metric.change).toFixed(1)}%
                  </span>
                </dd>
                <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="h-10 w-full" aria-hidden>
                  <polyline
                    points={sparkline(metric.points)}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    className={positive ? "text-emerald-500" : "text-rose-500"}
                  />
                </svg>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
