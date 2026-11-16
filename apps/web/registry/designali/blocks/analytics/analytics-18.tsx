import {
  ArrowUpRight,
  Clock,
  Users,
  Zap,
} from "@designali/icons"

import { BentoGrid, BentoGridItem } from "@/registry/designali/ui/bento"
import { CounterNumber } from "@/registry/designali/ui/counter-number"

const hourly = [12, 9, 7, 6, 8, 14, 26, 41, 58, 64, 61, 57, 60, 63, 66, 62, 55, 48, 40, 34, 29, 24, 19, 15]

const plans = [
  { name: "Free", value: 54, color: "var(--chart-1)" },
  { name: "Pro", value: 31, color: "var(--chart-2)" },
  { name: "Studio", value: 15, color: "var(--chart-3)" },
]

const features = [
  { name: "Blocks library", usage: 88 },
  { name: "Icons search", usage: 71 },
  { name: "Templates", usage: 46 },
  { name: "UI kits", usage: 23 },
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
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">designali.com health</h2>
        <p className="mt-1 text-sm text-muted-foreground">designali.com, all members, today</p>

        <BentoGrid
          cols={{ base: 1, md: 4 }}
          gap={{ base: 4 }}
          rowHeight="minmax(160px,auto)"
          className="mt-8"
        >
          <BentoGridItem
            colSpan={{ base: 1, md: 2 }}
            rowSpan={{ base: 1, md: 2 }}
            className="flex flex-col justify-between border-0 bg-primary p-6 text-primary-foreground"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm opacity-80">Daily active users</p>
              <Users className="size-4 opacity-80" />
            </div>
            <div>
              <CounterNumber
                value={48215}
                className="block text-6xl font-light tracking-tighter text-primary-foreground md:text-7xl"
              />
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
          </BentoGridItem>

          <BentoGridItem className="flex flex-col justify-between p-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              Median session
              <Clock className="size-4" />
            </div>
            <p className="text-4xl font-semibold tracking-tight">
              14<span className="text-lg text-muted-foreground">m</span> 32
              <span className="text-lg text-muted-foreground">s</span>
            </p>
          </BentoGridItem>

          <BentoGridItem className="flex flex-col justify-between p-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              Blocks copied
              <Zap className="size-4" />
            </div>
            <CounterNumber
              value={1.2}
              decimalPlaces={1}
              suffix="M"
              className="block text-4xl font-semibold tracking-tight"
            />
          </BentoGridItem>

          <BentoGridItem
            colSpan={{ base: 1, md: 2 }}
            className="flex items-center gap-6 p-6"
          >
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
                    <span className="font-sans text-xs">{p.value}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </BentoGridItem>

          <BentoGridItem colSpan={{ base: 1, md: 4 }} className="p-6">
            <p className="text-sm text-muted-foreground">Feature adoption (weekly active)</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div key={f.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm">{f.name}</span>
                    <span className="font-sans text-xs text-muted-foreground">{f.usage}%</span>
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
          </BentoGridItem>
        </BentoGrid>
      </div>
    </section>
  )
}
