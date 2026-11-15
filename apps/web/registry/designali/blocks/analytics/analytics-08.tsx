const gauges = [
  { name: "API availability", value: 99.97, target: 99.95, unit: "%", min: 99, max: 100 },
  { name: "Checkout latency p95", value: 412, target: 500, unit: "ms", min: 0, max: 800, lowerIsBetter: true },
  { name: "Error budget left", value: 63, target: 25, unit: "%", min: 0, max: 100 },
]

function Gauge({ ratio, ok }: { ratio: number; ok: boolean }) {
  const r = 80
  const circumference = Math.PI * r
  const clamped = Math.min(Math.max(ratio, 0), 1)
  return (
    <svg viewBox="0 0 200 110" className="w-full max-w-[240px]">
      <path
        d="M 20 100 A 80 80 0 0 1 180 100"
        fill="none"
        stroke="var(--muted)"
        strokeWidth="14"
      />
      <path
        d="M 20 100 A 80 80 0 0 1 180 100"
        fill="none"
        className={ok ? "stroke-emerald-500" : "stroke-amber-500"}
        strokeWidth="14"
        strokeDasharray={`${circumference * clamped} ${circumference}`}
      />
    </svg>
  )
}

export default function Analytics08() {
  return (
    <section className="w-full bg-muted/40 py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Service level objectives
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
            Northwind Pay reliability, rolling 30 days
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every objective is measured at the load balancer and published to
            customers without smoothing or exclusions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {gauges.map((g) => {
            const ratio = (g.value - g.min) / (g.max - g.min)
            const ok = g.lowerIsBetter ? g.value <= g.target : g.value >= g.target
            return (
              <div key={g.name} className="flex flex-col items-center border bg-background p-8">
                <div className="relative flex w-full justify-center">
                  <Gauge ratio={ratio} ok={ok} />
                  <div className="absolute bottom-1 text-center">
                    <p className="text-3xl font-semibold tracking-tight">
                      {g.value}
                      <span className="text-base font-normal text-muted-foreground">{g.unit}</span>
                    </p>
                  </div>
                </div>
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
                      ? "mt-4 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-700 dark:text-emerald-400"
                      : "mt-4 bg-amber-500/10 px-2 py-1 text-xs text-amber-700 dark:text-amber-400"
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
