const devices = [
  { key: "desktop", label: "Desktop", color: "var(--chart-1)" },
  { key: "mobile", label: "Mobile", color: "var(--chart-2)" },
  { key: "tablet", label: "Tablet", color: "var(--chart-3)" },
  { key: "app", label: "Native app", color: "var(--chart-4)" },
] as const

const months: { month: string; desktop: number; mobile: number; tablet: number; app: number }[] = [
  { month: "June", desktop: 48, mobile: 37, tablet: 9, app: 6 },
  { month: "July", desktop: 45, mobile: 39, tablet: 9, app: 7 },
  { month: "August", desktop: 43, mobile: 40, tablet: 8, app: 9 },
  { month: "September", desktop: 41, mobile: 41, tablet: 8, app: 10 },
  { month: "October", desktop: 38, mobile: 43, tablet: 7, app: 12 },
  { month: "November", desktop: 35, mobile: 44, tablet: 7, app: 14 },
]

export default function Analytics15() {
  return (
    <section className="w-full bg-muted/40 py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Device mix</p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight">
              Mobile overtook desktop in September
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Share of sessions on Parcel &amp; Pine by device. The native app has
              more than doubled since the June release of saved carts.
            </p>
            <ul className="mt-8 space-y-3">
              {devices.map((d) => {
                const first = months[0]?.[d.key] ?? 0
                const last = months[months.length - 1]?.[d.key] ?? 0
                const delta = last - first
                return (
                  <li key={d.key} className="flex items-center gap-3 text-sm">
                    <span className="size-3" style={{ background: d.color }} />
                    <span className="flex-1">{d.label}</span>
                    <span className="font-mono">{last}%</span>
                    <span
                      className={
                        delta >= 0
                          ? "w-12 text-right font-mono text-xs text-emerald-600 dark:text-emerald-400"
                          : "w-12 text-right font-mono text-xs text-rose-600 dark:text-rose-400"
                      }
                    >
                      {delta > 0 ? "+" : ""}
                      {delta}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="space-y-5 border bg-background p-6 md:p-8">
            {months.map((m) => (
              <div key={m.month} className="grid grid-cols-[5.5rem_1fr] items-center gap-4">
                <span className="text-sm text-muted-foreground">{m.month}</span>
                <div className="flex h-9 w-full overflow-hidden">
                  {devices.map((d) => (
                    <div
                      key={d.key}
                      className="flex items-center justify-center text-[10px] font-medium text-background"
                      style={{ width: `${m[d.key]}%`, background: d.color }}
                      title={`${d.label}: ${m[d.key]}%`}
                    >
                      {m[d.key] >= 10 ? `${m[d.key]}%` : ""}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-[5.5rem_1fr] gap-4 pt-2">
              <span />
              <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
