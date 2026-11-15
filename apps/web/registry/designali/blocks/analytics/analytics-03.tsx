const metrics = [
  { value: "99.98%", label: "Uptime across all regions", detail: "Last 90 days" },
  { value: "38ms", label: "Median API response time", detail: "p50, global edge" },
  { value: "2.4B", label: "Requests served this month", detail: "Up 18% MoM" },
]

const goals = [
  { name: "Q4 onboarding completion", current: 78, target: 85 },
  { name: "Weekly active teams", current: 64, target: 70 },
  { name: "Support tickets resolved < 4h", current: 91, target: 90 },
  { name: "Self-serve upgrades", current: 42, target: 60 },
]

export default function Analytics03() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
          Infrastructure you can measure,{" "}
          <span className="text-muted-foreground">not just trust.</span>
        </h2>

        <div className="mt-14 grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {metrics.map((metric) => (
            <div key={metric.label} className="py-8 md:px-8 md:first:pl-0">
              <p className="text-5xl font-light tracking-tighter md:text-6xl">
                {metric.value}
              </p>
              <p className="mt-4 text-sm">{metric.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{metric.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-baseline justify-between">
            <h3 className="text-lg font-medium">Quarterly goals</h3>
            <span className="text-xs text-muted-foreground">Updated Nov 14</span>
          </div>
          <div className="space-y-6">
            {goals.map((goal) => {
              const reached = goal.current >= goal.target
              return (
                <div key={goal.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>{goal.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {goal.current}% / {goal.target}%
                    </span>
                  </div>
                  <div className="relative h-2 w-full bg-muted">
                    <div
                      className={reached ? "h-full bg-emerald-500" : "h-full bg-primary"}
                      style={{ width: `${goal.current}%` }}
                    />
                    <div
                      className="absolute -top-1 h-4 w-px bg-foreground"
                      style={{ left: `${goal.target}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
