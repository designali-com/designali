import {
  ArrowUpRight,
} from "@designali/icons"

import { CounterNumber } from "@/registry/designali/ui/counter-number"

const cases = [
  {
    client: "Dalim UI",
    value: 38,
    decimals: 0,
    suffix: "%",
    label: "faster design handoff",
    sector: "UI kit",
  },
  {
    client: "Designali Blocks",
    value: 2.4,
    decimals: 1,
    suffix: "x",
    label: "component reuse",
    sector: "Component library",
  },
  {
    client: "Dalim to Designali",
    value: 12,
    decimals: 0,
    suffix: " wks",
    label: "to full rebrand",
    sector: "Brand identity",
  },
]

const names = ["Designali", "Dalim", "Dalim UI", "Dalim Fonts", "Dalim Works", "Dalim Visuals"]

export default function Clients09() {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-border pb-8">
          {names.map((name) => (
            <span
              key={name}
              className="text-xl font-semibold tracking-tight text-muted-foreground"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <a
              key={item.client}
              href="#"
              className="group flex flex-col justify-between border border-border bg-card p-6 transition-colors hover:bg-muted"
            >
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{item.sector}</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="mt-12">
                <CounterNumber
                  value={item.value}
                  decimalPlaces={item.decimals}
                  suffix={item.suffix}
                  className="block text-5xl font-semibold tracking-tighter"
                />
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-6 text-sm font-medium">{item.client}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
