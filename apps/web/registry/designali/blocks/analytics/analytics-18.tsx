import { ArrowUpRight, Clock, Users, Zap } from "lucide-react"

const hourly = [12, 9, 7, 6, 8, 14, 26, 41, 58, 64, 61, 57, 60, 63, 66, 62, 55, 48, 40, 34, 29, 24, 19, 15]

const plans = [
  { name: "Starter", value: 54, color: "var(--chart-1)" },
  { name: "Team", value: 31, color: "var(--chart-2)" },
  { name: "Business", value: 15, color: "var(--chart-3)" },
]

const features = [
  { name: "Shared boards", usage: 88 },
  { name: "AI summaries", usage: 71 },
  { name: "Time tracking", usage: 46 },
  { name: "Client portal", usage: 23 },
]

export default function Analytics18() {
  const maxHour = Math.max(...hourly)
  const r = 34
  const circ = 2 * Math.PI * r
  const arcs = plans.map((p, i) => ({
    ...p,
    len: (p.value / 100) * circ,
    offset: plans.slice(0, i).reduce((sum, q) => sum + (q.value / 100) * circ, 0),
  }))

  return (
    <section className="w-full bg-muted/40 py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Workspace health</h2>
        <p className="mt-1 text-sm text-muted-foreground">Kitebase, all workspaces, today</p>

        <div className="mt-8 grid auto-rows-[minmax(160px,auto)] gap-4 md:grid-cols-4">
          <div className="flex flex-col justify-between bg-primary p-6 text-primary-foreground md:col-span-2 md:row-span-2">
            <div className="flex items-center justify-between">
              <p className="text-sm opacity-80">Daily active users</p>
              <Users className="size-4 opacity-80" />
            </div>
            <div>
              <p className="text-6xl font-light tracking-tighter md:text-7xl">48,215</p>
              <p className="mt-3 inline-flex items-center gap-1 text-sm opacity-80">
                <ArrowUpRight className="size-4" />
                12.8% vs. last Tuesday
              </p>
            </div>
            <div className="mt-6 flex h-20 items-end gap-[3px]">
              {hourly.map((v, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary-foreground/30 last:bg-primary-foreground"
                  style={{ height: `${(v / maxHour) * 100}%` }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between border bg-background p-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              Median session
              <Clock className="size-4" />
            </div>
            <p className="text-4xl font-semibold tracking-tight">
              14<span className="text-lg text-muted-foreground">m</span> 32
              <span className="text-lg text-muted-foreground">s</span>
            </p>
          </div>

          <div className="flex flex-col justify-between border bg-background p-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              Automations run
              <Zap className="size-4" />
            </div>
            <p className="text-4xl font-semibold tracking-tight">1.2M</p>
          </div>

          <div className="flex items-center gap-6 border bg-background p-6 md:col-span-2">
            <svg viewBox="0 0 100 100" className="size-28 shrink-0 -rotate-90">
              {arcs.map((p) => (
                <circle
                  key={p.name}
                  cx="50"
                  cy="50"
                  r={r}
                  fill="none"
                  stroke={p.color}
                  strokeWidth="14"
                  strokeDasharray={`${p.len} ${circ - p.len}`}
                  strokeDashoffset={-p.offset}
                />
              ))}
            </svg>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-muted-foreground">Active users by plan</p>
              <ul className="mt-3 space-y-2 text-sm">
                {plans.map((p) => (
                  <li key={p.name} className="flex items-center gap-2">
                    <span className="size-2.5" style={{ background: p.color }} />
                    <span className="flex-1">{p.name}</span>
                    <span className="font-mono text-xs">{p.value}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border bg-background p-6 md:col-span-4">
            <p className="text-sm text-muted-foreground">Feature adoption (weekly active)</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div key={f.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm">{f.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{f.usage}%</span>
                  </div>
                  <div className="mt-2 grid grid-cols-10 gap-1">
                    {Array.from({ length: 10 }, (_, i) => (
                      <span
                        key={i}
                        className={i < Math.round(f.usage / 10) ? "h-2 bg-foreground" : "h-2 bg-muted"}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
