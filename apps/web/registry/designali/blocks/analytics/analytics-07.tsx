"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const channels = [
  { key: "organic", label: "Search", color: "var(--chart-1)" },
  { key: "paid", label: "Social", color: "var(--chart-2)" },
  { key: "partner", label: "21st.dev", color: "var(--chart-3)" },
] as const

type ChannelKey = (typeof channels)[number]["key"]

const weeks: { week: string; organic: number; paid: number; partner: number }[] = [
  { week: "W35", organic: 420, paid: 210, partner: 90 },
  { week: "W36", organic: 450, paid: 240, partner: 110 },
  { week: "W37", organic: 430, paid: 280, partner: 100 },
  { week: "W38", organic: 480, paid: 260, partner: 130 },
  { week: "W39", organic: 510, paid: 300, partner: 120 },
  { week: "W40", organic: 540, paid: 320, partner: 150 },
  { week: "W41", organic: 520, paid: 290, partner: 170 },
  { week: "W42", organic: 580, paid: 340, partner: 160 },
  { week: "W43", organic: 610, paid: 360, partner: 190 },
  { week: "W44", organic: 640, paid: 330, partner: 210 },
  { week: "W45", organic: 690, paid: 380, partner: 220 },
  { week: "W46", organic: 720, paid: 410, partner: 240 },
]

export default function Analytics07() {
  const [enabled, setEnabled] = useState<ChannelKey[]>(["organic", "paid", "partner"])
  const [hover, setHover] = useState<number | null>(null)

  const totals = weeks.map((w) => enabled.reduce((sum, k) => sum + w[k], 0))
  const max = Math.max(...totals, 1)
  const active = hover !== null ? weeks[hover] : undefined

  function toggle(key: ChannelKey) {
    setEnabled((prev) =>
      prev.includes(key)
        ? prev.length > 1
          ? prev.filter((k) => k !== key)
          : prev
        : [...prev, key]
    )
  }

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="border bg-card p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">designali.com signups by channel</p>
              <p className="mt-1 text-3xl font-semibold tracking-tight">
                {(active
                  ? enabled.reduce((s, k) => s + active[k], 0)
                  : totals.reduce((s, v) => s + v, 0)
                ).toLocaleString()}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {active ? `Week ${active.week.slice(1)}` : "Total, last 12 weeks"}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {channels.map((c) => {
                const on = enabled.includes(c.key)
                return (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => toggle(c.key)}
                    aria-pressed={on}
                    className={cn(
                      "inline-flex items-center gap-2 border px-3 py-1.5 text-xs transition-colors",
                      on ? "bg-background text-foreground" : "text-muted-foreground opacity-60"
                    )}
                  >
                    <span className="size-2.5" style={{ background: c.color }} />
                    {c.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div
            className="relative mt-10 flex h-64 items-end gap-1.5 sm:gap-3"
            onMouseLeave={() => setHover(null)}
          >
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="border-t border-dashed border-border" />
              ))}
            </div>
            {weeks.map((w, i) => (
              <div
                key={w.week}
                onMouseEnter={() => setHover(i)}
                className={cn(
                  "relative flex h-full flex-1 flex-col justify-end transition-opacity",
                  hover !== null && hover !== i && "opacity-40"
                )}
              >
                {channels
                  .filter((c) => enabled.includes(c.key))
                  .map((c) => (
                    <div
                      key={c.key}
                      style={{ height: `${(w[c.key] / max) * 100}%`, background: c.color }}
                      className="w-full transition-[height] duration-300"
                    />
                  ))}
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-1.5 text-center text-[10px] text-muted-foreground sm:gap-3">
            {weeks.map((w, i) => (
              <span key={w.week} className={cn("flex-1", i % 2 === 1 && "hidden sm:block")}>
                {w.week}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 border-t pt-6">
            {channels.map((c) => (
              <div key={c.key}>
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="mt-1 text-lg font-medium">
                  {(active ? active[c.key] : weeks.reduce((s, w) => s + w[c.key], 0)).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
