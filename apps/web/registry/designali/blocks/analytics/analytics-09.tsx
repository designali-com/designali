const cohorts = [
  { month: "May 2026", size: 1240, retention: [100, 72, 61, 55, 51, 48, 46] },
  { month: "Jun 2026", size: 1385, retention: [100, 74, 63, 57, 53, 50] },
  { month: "Jul 2026", size: 1512, retention: [100, 76, 66, 60, 56] },
  { month: "Aug 2026", size: 1460, retention: [100, 78, 68, 62] },
  { month: "Sep 2026", size: 1698, retention: [100, 81, 71] },
  { month: "Oct 2026", size: 1874, retention: [100, 83] },
  { month: "Nov 2026", size: 902, retention: [100] },
]

const periods = 7

function cellStyle(value: number) {
  const alpha = 0.08 + (value / 100) * 0.82
  return {
    background: `color-mix(in oklch, var(--chart-1) ${Math.round(alpha * 100)}%, transparent)`,
  }
}

export default function Analytics09() {
  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_2.4fr]">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Retention
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight">
              Designali Pro members are sticking longer
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Since the new /docs onboarding launched in July, month-one retention
              has climbed from 72% to 83%. Each row is the share of a Designali Pro
              cohort still active after N months.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-px border bg-border">
              <div className="bg-background p-4">
                <dt className="text-xs text-muted-foreground">M1 retention</dt>
                <dd className="mt-1 text-2xl font-semibold">83%</dd>
              </div>
              <div className="bg-background p-4">
                <dt className="text-xs text-muted-foreground">M3 retention</dt>
                <dd className="mt-1 text-2xl font-semibold">62%</dd>
              </div>
            </dl>
          </div>

          <div className="min-w-0 overflow-x-auto border">
            <table className="w-full min-w-[560px] border-collapse text-xs">
              <thead>
                <tr className="border-b bg-muted/50 text-muted-foreground">
                  <th className="px-3 py-3 text-left font-medium">Cohort</th>
                  <th className="px-3 py-3 text-right font-medium">Members</th>
                  {Array.from({ length: periods }, (_, i) => (
                    <th key={i} className="px-1 py-3 text-center font-medium">
                      M{i}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cohorts.map((c) => (
                  <tr key={c.month} className="border-b last:border-b-0">
                    <td className="px-3 py-2 font-medium whitespace-nowrap">{c.month}</td>
                    <td className="px-3 py-2 text-right font-mono text-muted-foreground">
                      {c.size.toLocaleString()}
                    </td>
                    {Array.from({ length: periods }, (_, i) => {
                      const v = c.retention[i]
                      return (
                        <td key={i} className="p-0.5">
                          {v !== undefined ? (
                            <div
                              style={cellStyle(v)}
                              className="flex h-9 items-center justify-center font-mono text-foreground"
                            >
                              {v}%
                            </div>
                          ) : (
                            <div className="h-9 bg-muted/30" />
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
