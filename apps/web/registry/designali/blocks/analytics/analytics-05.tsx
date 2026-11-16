const funnel = [
  { step: "Visited designali.com", users: 24800 },
  { step: "Browsed /blocks", users: 6120 },
  { step: "Copied a free block", users: 3940 },
  { step: "Downloaded @designali/icons", users: 1870 },
  { step: "Bought Designali Pro", users: 742 },
]

const segments = [
  { label: "Design engineers", value: 46, color: "var(--chart-1)" },
  { label: "Agencies", value: 28, color: "var(--chart-2)" },
  { label: "Freelancers", value: 17, color: "var(--chart-3)" },
  { label: "Startups", value: 9, color: "var(--chart-4)" },
]

export default function Analytics05() {
  const top = funnel[0]?.users ?? 1
  const radius = 40
  const circumference = 2 * Math.PI * radius
  let offset = 0

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Conversion funnel
          </p>
          <h2 className="mt-2 text-3xl font-medium tracking-tight">
            From first visit to Designali Pro
          </h2>
          <div className="mt-10 space-y-2">
            {funnel.map((item, i) => {
              const prev = funnel[i - 1]
              const rate = prev ? Math.round((item.users / prev.users) * 100) : 100
              return (
                <div key={item.step} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div
                      className="flex h-12 items-center justify-between bg-primary px-4 text-primary-foreground"
                      style={{
                        width: `${Math.max((item.users / top) * 100, 22)}%`,
                        opacity: 1 - i * 0.14,
                      }}
                    >
                      <span className="truncate text-xs">{item.step}</span>
                    </div>
                  </div>
                  <div className="w-24 shrink-0 text-right">
                    <p className="text-sm font-medium tabular-nums">
                      {item.users.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {i === 0 ? "baseline" : `${rate}% of previous`}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="border border-border p-6 md:p-8">
          <p className="text-sm font-medium">Designali Pro members by segment</p>
          <div className="relative mx-auto mt-8 size-48">
            <svg viewBox="0 0 100 100" className="size-full -rotate-90">
              {segments.map((segment) => {
                const length = (segment.value / 100) * circumference
                const circle = (
                  <circle
                    key={segment.label}
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke={segment.color}
                    strokeWidth="12"
                    strokeDasharray={`${length} ${circumference - length}`}
                    strokeDashoffset={-offset}
                  />
                )
                offset += length
                return circle
              })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-semibold">742</span>
              <span className="text-xs text-muted-foreground">accounts</span>
            </div>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-4">
            {segments.map((segment) => (
              <li key={segment.label} className="border-l-2 pl-3" style={{ borderColor: segment.color }}>
                <p className="text-lg font-medium">{segment.value}%</p>
                <p className="text-xs text-muted-foreground">{segment.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
