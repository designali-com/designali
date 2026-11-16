import { CounterNumber } from "@/registry/designali/ui/counter-number"

const days = Array.from({ length: 30 }, (_, i) => i + 1)
const current = [212, 240, 228, 265, 290, 180, 172, 254, 281, 276, 302, 318, 205, 198, 296, 322, 314, 340, 352, 231, 219, 335, 361, 348, 377, 389, 260, 248, 372, 401]
const previous = [190, 205, 214, 230, 241, 160, 151, 222, 238, 236, 251, 262, 178, 169, 248, 259, 266, 271, 280, 190, 182, 270, 284, 279, 291, 298, 205, 199, 286, 302]

function toPoints(data: number[], max: number) {
  return data
    .map((v, i) => `${(i / (data.length - 1)) * 100},${100 - (v / max) * 100}`)
    .join(" ")
}

export default function Analytics13() {
  const max = Math.max(...current, ...previous) * 1.1
  const sumCur = current.reduce((s, v) => s + v, 0)
  const sumPrev = previous.reduce((s, v) => s + v, 0)
  const lift = ((sumCur - sumPrev) / sumPrev) * 100
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(max * (1 - t)))

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[2.2fr_1fr]">
          <div className="border p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-lg font-medium">designali.com orders per day: November vs October</h2>
              <div className="flex items-center gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="h-0.5 w-5 bg-chart-1" />
                  This month
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-5 border-t-2 border-dashed border-muted-foreground" />
                  Last month
                </span>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <div className="flex h-64 flex-col justify-between text-right font-sans text-[10px] text-muted-foreground">
                {ticks.map((t) => (
                  <span key={t} className="-translate-y-1/2 first:translate-y-0 last:translate-y-0">
                    {t}
                  </span>
                ))}
              </div>
              <div className="relative h-64 flex-1">
                <div className="absolute inset-0 flex flex-col justify-between">
                  {ticks.map((t) => (
                    <div key={t} className="border-t border-border" />
                  ))}
                </div>
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full"
                >
                  <polyline
                    points={toPoints(previous, max)}
                    fill="none"
                    stroke="var(--muted-foreground)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    vectorEffect="non-scaling-stroke"
                  />
                  <polyline
                    points={toPoints(current, max)}
                    fill="none"
                    stroke="var(--chart-1)"
                    strokeWidth="2.5"
                    vectorEffect="non-scaling-stroke"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-3 ml-9 flex justify-between font-sans text-[10px] text-muted-foreground">
              {days
                .filter((d) => d === 1 || d % 7 === 0 || d === 30)
                .map((d) => (
                  <span key={d}>Day {d}</span>
                ))}
            </div>
          </div>

          <div className="flex flex-col gap-px border bg-border">
            <div className="bg-background p-6">
              <p className="text-xs text-muted-foreground">Orders this month</p>
              <CounterNumber value={sumCur} className="mt-2 block text-4xl font-semibold tracking-tight" />
            </div>
            <div className="bg-background p-6">
              <p className="text-xs text-muted-foreground">Same period last month</p>
              <CounterNumber
                value={sumPrev}
                color="secondary"
                className="mt-2 block text-4xl font-semibold tracking-tight"
              />
            </div>
            <div className="flex-1 bg-background p-6">
              <p className="text-xs text-muted-foreground">Period-over-period lift</p>
              <CounterNumber
                value={lift}
                prefix="+"
                suffix="%"
                decimalPlaces={1}
                color="primary"
                className="mt-2 block text-4xl font-semibold tracking-tight"
              />
              <p className="mt-3 text-sm text-muted-foreground">
                Weekend dips are shallower since the free blocks library launched on Oct 28.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
