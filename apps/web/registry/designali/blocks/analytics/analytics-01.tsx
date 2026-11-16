import {
  ArrowDownRight,
  ArrowUpRight,
} from "@designali/icons"

const stats = [
  { label: "Template revenue", value: "$184,320", change: "+12.4%", up: true },
  { label: "Designali Pro members", value: "8,942", change: "+6.1%", up: true },
  { label: "Refund rate", value: "2.3%", change: "-0.4%", up: false },
  { label: "Avg. order (blocks & icons)", value: "$64.80", change: "+3.2%", up: true },
]

const revenue = [42, 48, 45, 53, 58, 55, 62, 68, 64, 72, 79, 86]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export default function Analytics01() {
  const max = Math.max(...revenue)
  const min = Math.min(...revenue) - 10
  const points = revenue
    .map((v, i) => {
      const x = (i / (revenue.length - 1)) * 100
      const y = 100 - ((v - min) / (max - min)) * 100
      return `${x},${y}`
    })
    .join(" ")

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Overview
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
              designali.com revenue, 2026
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Sales of Designali templates, blocks, icons and UI kits. Figures
            update every 15 minutes and are shown in USD before tax.
          </p>
        </div>

        <div className="grid grid-cols-2 border-t border-l border-border lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-r border-b border-border p-6">
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                {stat.value}
              </p>
              <p
                className={`mt-2 inline-flex items-center gap-1 text-xs ${
                  stat.up ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                }`}
              >
                {stat.up ? (
                  <ArrowUpRight className="size-3" />
                ) : (
                  <ArrowDownRight className="size-3" />
                )}
                {stat.change} vs last month
              </p>
            </div>
          ))}
        </div>

        <div className="border-x border-b border-border p-6">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm font-medium">Designali Pro recurring revenue ($k)</p>
            <span className="text-xs text-muted-foreground">Jan – Dec</span>
          </div>
          <div className="relative h-56 w-full">
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3].map((line) => (
                <div key={line} className="border-t border-dashed border-border" />
              ))}
            </div>
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              <polygon
                points={`0,100 ${points} 100,100`}
                fill="var(--chart-1)"
                opacity="0.12"
              />
              <polyline
                points={points}
                fill="none"
                stroke="var(--chart-1)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
          <div className="mt-3 grid grid-cols-12 text-center text-[10px] text-muted-foreground">
            {months.map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
