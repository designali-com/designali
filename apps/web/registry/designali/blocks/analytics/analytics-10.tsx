import {
  Globe,
} from "@designali/icons"

const regions = [
  { code: "US", name: "United States", visitors: 182400, change: 6.2 },
  { code: "DE", name: "Germany", visitors: 74210, change: 11.8 },
  { code: "GB", name: "United Kingdom", visitors: 61980, change: 3.4 },
  { code: "IN", name: "India", visitors: 58320, change: 24.1 },
  { code: "BR", name: "Brazil", visitors: 39150, change: 17.5 },
  { code: "JP", name: "Japan", visitors: 27640, change: -2.3 },
  { code: "CA", name: "Canada", visitors: 24410, change: 4.9 },
]

const continents = [
  { name: "North America", share: 41 },
  { name: "Europe", share: 32 },
  { name: "Asia Pacific", share: 18 },
  { name: "Latin America", share: 7 },
  { name: "Africa", share: 2 },
]

export default function Analytics10() {
  const top = regions[0]?.visitors ?? 1
  const total = regions.reduce((s, r) => s + r.visitors, 0)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-px border bg-border lg:grid-cols-[1fr_1.6fr]">
        <div className="flex flex-col justify-between gap-10 bg-background p-6 md:p-10">
          <div>
            <span className="flex size-10 items-center justify-center border">
              <Globe className="size-4" />
            </span>
            <h2 className="mt-6 text-3xl font-medium tracking-tight">Where designali.com readers come from</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Designali blog audience by country, October 2026. Visitors are
              deduplicated per device across the month.
            </p>
          </div>
          <div>
            <p className="text-5xl font-light tracking-tighter">{total.toLocaleString()}</p>
            <p className="mt-2 text-xs text-muted-foreground">Visitors from top 7 countries</p>
            <div className="mt-6 flex h-3 w-full overflow-hidden">
              {continents.map((c, i) => (
                <div
                  key={c.name}
                  style={{ width: `${c.share}%`, background: `var(--chart-${i + 1})` }}
                />
              ))}
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {continents.map((c, i) => (
                <li key={c.name} className="flex items-center gap-2">
                  <span className="size-2" style={{ background: `var(--chart-${i + 1})` }} />
                  <span className="text-muted-foreground">{c.name}</span>
                  <span className="ml-auto font-mono">{c.share}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-background p-6 md:p-10">
          <div className="mb-4 grid grid-cols-[1fr_auto] gap-4 border-b pb-3 text-xs text-muted-foreground">
            <span>Country</span>
            <span>Visitors / change</span>
          </div>
          <ol className="space-y-5">
            {regions.map((r, i) => (
              <li key={r.code}>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-5 font-mono text-xs text-muted-foreground">{i + 1}</span>
                  <span className="flex h-6 w-8 items-center justify-center border bg-muted font-mono text-[10px]">
                    {r.code}
                  </span>
                  <span className="min-w-0 flex-1 truncate">{r.name}</span>
                  <span className="font-mono text-xs">{r.visitors.toLocaleString()}</span>
                  <span
                    className={
                      r.change >= 0
                        ? "w-14 text-right font-mono text-xs text-emerald-600 dark:text-emerald-400"
                        : "w-14 text-right font-mono text-xs text-rose-600 dark:text-rose-400"
                    }
                  >
                    {r.change > 0 ? "+" : ""}
                    {r.change}%
                  </span>
                </div>
                <div className="mt-2 ml-8 h-1.5 bg-muted">
                  <div
                    className="h-full bg-foreground/80"
                    style={{ width: `${(r.visitors / top) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
        </div>
      </div>
    </section>
  )
}
