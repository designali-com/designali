import {
  Gauge,
  GaugeIndicator,
  GaugeRange,
  GaugeTrack,
  GaugeValueText,
} from "@/registry/designali/ui/gauge"

const gauges = [
  { name: "designali.com availability", value: 99.97, target: 99.95, unit: "%", min: 99, max: 100 },
  { name: "Checkout latency p95", value: 412, target: 500, unit: "ms", min: 0, max: 800, lowerIsBetter: true },
  { name: "Error budget left", value: 63, target: 25, unit: "%", min: 0, max: 100 },
]

export default function Analytics08() {
  return (
    <section className="w-full bg-muted/40 py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Service level objectives
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
            designali.com reliability, rolling 30 days
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every objective is measured at the Vercel edge and published to
            Designali customers without smoothing or exclusions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {gauges.map((g) => {
            const ok = g.lowerIsBetter ? g.value <= g.target : g.value >= g.target
            return (
              <div key={g.name} className="flex flex-col items-center border bg-background p-8">
                <Gauge
                  value={g.value}
                  min={g.min}
                  max={g.max}
                  size={200}
                  startAngle={-135}
                  endAngle={135}
                  className="max-w-full"
                >
                  <GaugeIndicator>
                    <GaugeTrack />
                    <GaugeRange className="text-primary" />
                  </GaugeIndicator>
                  <GaugeValueText className="flex-col">
                    <span className="text-3xl font-semibold tracking-tight">
                      {g.value}
                      <span className="text-base font-normal text-muted-foreground">{g.unit}</span>
                    </span>
                  </GaugeValueText>
                </Gauge>
                <div className="mt-2 flex w-full max-w-[240px] justify-between text-[10px] text-muted-foreground">
                  <span>
                    {g.min}
                    {g.unit}
                  </span>
                  <span>
                    {g.max}
                    {g.unit}
                  </span>
                </div>
                <p className="mt-6 font-medium">{g.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Target {g.lowerIsBetter ? "under" : "above"} {g.target}
                  {g.unit}
                </p>
                <span
                  className={
                    ok
                      ? "mt-4 bg-primary/10 px-2 py-1 text-xs text-chart-3 dark:text-primary"
                      : "mt-4 bg-primary/10 px-2 py-1 text-xs text-chart-3 dark:text-primary"
                  }
                >
                  {ok ? "Meeting objective" : "At risk"}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
