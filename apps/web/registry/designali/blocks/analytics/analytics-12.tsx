"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const metrics = [
  {
    key: "mrr",
    label: "MRR",
    value: "$96.4k",
    change: "+9.1%",
    data: [61, 63, 66, 65, 70, 74, 73, 78, 82, 85, 91, 96],
    format: (v: number) => `$${v}k`,
  },
  {
    key: "trials",
    label: "Free blocks copied",
    value: "1,284",
    change: "+15.6%",
    data: [720, 760, 810, 790, 880, 940, 920, 1010, 1080, 1120, 1210, 1284],
    format: (v: number) => v.toLocaleString(),
  },
  {
    key: "activation",
    label: "Activation",
    value: "46%",
    change: "+3.2 pts",
    data: [34, 35, 35, 37, 38, 38, 40, 41, 42, 43, 45, 46],
    format: (v: number) => `${v}%`,
  },
  {
    key: "nps",
    label: "NPS",
    value: "52",
    change: "+4",
    data: [41, 43, 42, 44, 45, 47, 46, 48, 49, 50, 51, 52],
    format: (v: number) => `${v}`,
  },
]

const months = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]

export default function Analytics12() {
  const [activeKey, setActiveKey] = useState("mrr")
  const metric = metrics.find((m) => m.key === activeKey) ?? metrics[0]!
  const max = Math.max(...metric.data)
  const min = Math.min(...metric.data)
  const pad = (max - min) * 0.2
  const coords = metric.data.map((v, i) => ({
    x: (i / (metric.data.length - 1)) * 100,
    y: 95 - ((v - (min - pad)) / (max - min + pad * 2)) * 90,
    v,
  }))
  const line = coords.map((c) => `${c.x},${c.y}`).join(" ")

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Growth overview</h2>
        <p className="mt-1 text-sm text-muted-foreground">Trailing twelve months, Designali Pro plans</p>

        <div className="mt-8 border">
          <div role="tablist" className="grid grid-cols-2 border-b md:grid-cols-4">
            {metrics.map((m, i) => {
              const on = m.key === activeKey
              return (
                <button
                  key={m.key}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  onClick={() => setActiveKey(m.key)}
                  className={cn(
                    "relative p-5 text-left transition-colors",
                    i % 2 === 0 && "border-r",
                    i < 2 && "border-b md:border-b-0",
                    i === 1 && "md:border-r",
                    on ? "bg-background" : "bg-muted/40 hover:bg-muted/70"
                  )}
                >
                  {on && <span className="absolute inset-x-0 top-0 h-0.5 bg-primary" />}
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight">{m.value}</p>
                  <p className="mt-1 text-xs text-primary dark:text-primary">{m.change}</p>
                </button>
              )
            })}
          </div>

          <div className="p-6 md:p-8">
            <div className="relative h-64">
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="border-t border-border" />
                ))}
              </div>
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full overflow-visible"
              >
                <defs>
                  <linearGradient id="analytics12-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-2)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="var(--chart-2)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon points={`0,100 ${line} 100,100`} fill="url(#analytics12-fill)" />
                <polyline
                  points={line}
                  fill="none"
                  stroke="var(--chart-2)"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinejoin="round"
                />
              </svg>
              {coords.map((c, i) => (
                <div
                  key={i}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${c.x}%`, top: `${c.y}%` }}
                >
                  <span className="block size-2.5 rounded-full border-2 border-background bg-chart-2" />
                  <span className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 border bg-popover px-2 py-1 text-xs whitespace-nowrap text-popover-foreground shadow-sm group-hover:block">
                    {months[i]}: {metric.format(c.v)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between text-[10px] text-muted-foreground">
              {months.map((m, i) => (
                <span key={m} className={cn(i % 2 === 1 && "hidden sm:inline")}>
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
