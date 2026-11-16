"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const ranges = {
  "7d": [320, 410, 380, 460, 520, 490, 610],
  "30d": [280, 340, 390, 360, 420, 470, 450, 510, 560, 530, 590, 640, 620, 680],
  "90d": [210, 260, 300, 340, 330, 380, 420, 460, 440, 500, 540, 580],
} as const

type Range = keyof typeof ranges

const sources = [
  { name: "Google search", share: 42, color: "var(--chart-1)" },
  { name: "Direct", share: 24, color: "var(--chart-2)" },
  { name: "21st.dev", share: 18, color: "var(--chart-3)" },
  { name: "Instagram & X", share: 11, color: "var(--chart-4)" },
  { name: "Newsletter", share: 5, color: "var(--chart-5)" },
]

export default function Analytics02() {
  const [range, setRange] = useState<Range>("30d")
  const data = ranges[range]
  const max = Math.max(...data)
  const total = data.reduce((sum, v) => sum + v, 0)

  return (
    <section className="w-full bg-muted/40 px-6 py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-px border border-border bg-border lg:grid-cols-3">
        <div className="bg-background p-6 md:p-8 lg:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Unique visitors on designali.com</p>
              <p className="mt-1 text-4xl font-semibold tracking-tight">
                {total.toLocaleString()}
              </p>
            </div>
            <div className="flex border border-border">
              {(Object.keys(ranges) as Range[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setRange(key)}
                  className={cn(
                    "px-3 py-1.5 text-xs transition-colors not-last:border-r not-last:border-border",
                    range === key
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 flex h-64 items-end gap-1.5 md:gap-2">
            {data.map((value, i) => (
              <div key={i} className="group relative flex h-full flex-1 items-end">
                <div
                  className="w-full bg-primary/80 transition-colors group-hover:bg-primary"
                  style={{ height: `${(value / max) * 100}%` }}
                />
                <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 border border-border bg-background px-1.5 py-0.5 text-[10px] opacity-0 transition-opacity group-hover:opacity-100">
                  {value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 border-t border-border pt-2 text-[10px] text-muted-foreground">
            Hover a bar to see daily totals
          </div>
        </div>

        <div className="bg-background p-6 md:p-8">
          <p className="text-sm font-medium">Where visitors come from</p>
          <div className="mt-6 flex h-3 w-full">
            {sources.map((source) => (
              <div
                key={source.name}
                style={{ width: `${source.share}%`, background: source.color }}
              />
            ))}
          </div>
          <ul className="mt-8 divide-y divide-border">
            {sources.map((source) => (
              <li key={source.name} className="flex items-center justify-between py-3 text-sm">
                <span className="flex items-center gap-2">
                  <span className="size-2.5" style={{ background: source.color }} />
                  {source.name}
                </span>
                <span className="font-mono text-muted-foreground">{source.share}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
