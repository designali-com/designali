import { CounterNumber } from "@/registry/designali/ui/counter-number"

const stats = [
  { value: 460, unit: "+", label: "Blocks", note: "designali.com/blocks" },
  { value: 240, unit: "+", label: "Landing pages", note: "Ready to ship" },
  { value: 2300, unit: "+", label: "UI designs", note: "designali.com/ui" },
  { value: 4000, unit: "+", label: "Icons", note: "@designali/icons" },
]

export default function Sections12() {
  return (
    <section className="w-full bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="max-w-2xl text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
            design se code tak. The Designali library so far.
          </h2>
          <p className="text-xs opacity-60">designali.com</p>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-px border border-background/15 bg-background/15 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-foreground p-6 md:p-8"
            >
              <dt className="text-sm opacity-70">{stat.label}</dt>
              <dd className="mt-4">
                <CounterNumber
                  value={stat.value}
                  className="text-6xl font-semibold tracking-tighter text-background md:text-7xl"
                />
                <span className="ml-1 text-2xl font-medium opacity-60">{stat.unit}</span>
              </dd>
              <dd className="mt-3 font-sans text-[11px] tracking-wide uppercase opacity-50">{stat.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
