const stats = [
  { value: "4.2", unit: "M", label: "Parcels delivered", note: "Since launch in 2021" },
  { value: "99.3", unit: "%", label: "On-time rate", note: "Trailing 90 days" },
  { value: "-41", unit: "%", label: "CO₂ per delivery", note: "vs. diesel van baseline" },
  { value: "18", unit: "min", label: "Median last mile", note: "Hub to doorstep" },
]

export default function Sections12() {
  return (
    <section className="w-full bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="max-w-2xl text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
            Cargo bikes, not vans. The numbers so far.
          </h2>
          <p className="font-mono text-xs opacity-60">Updated 1 Nov 2026</p>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-px border border-background/15 bg-background/15 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-foreground p-6 md:p-8"
            >
              <dt className="text-sm opacity-70">{stat.label}</dt>
              <dd className="mt-4">
                <span className="text-6xl font-semibold tracking-tighter md:text-7xl">{stat.value}</span>
                <span className="ml-1 text-2xl font-medium opacity-60">{stat.unit}</span>
              </dd>
              <dd className="mt-3 font-mono text-[11px] tracking-wide uppercase opacity-50">{stat.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
