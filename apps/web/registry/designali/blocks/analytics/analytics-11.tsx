"use client"

import { useEffect, useState } from "react"

const seed = [38, 42, 40, 45, 51, 48, 53, 57, 55, 60, 58, 62, 66, 63, 61, 67, 70, 68, 72, 69, 74, 71, 76, 79, 77, 81, 78, 83, 86, 84]

const pages = [
  { path: "/launch/aurora-2", live: 412 },
  { path: "/pricing", live: 188 },
  { path: "/docs/quickstart", live: 141 },
  { path: "/changelog", live: 76 },
]

export default function Analytics11() {
  const [series, setSeries] = useState(seed)

  useEffect(() => {
    const id = setInterval(() => {
      setSeries((prev) => {
        const last = prev[prev.length - 1] ?? 60
        const next = Math.max(30, Math.min(100, last + Math.round((Math.random() - 0.45) * 10)))
        return [...prev.slice(1), next]
      })
    }, 1500)
    return () => clearInterval(id)
  }, [])

  const current = series[series.length - 1] ?? 0
  const liveNow = current * 11 + 23
  const max = 100

  return (
    <section className="w-full bg-foreground py-16 text-background md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 border border-background/20 px-3 py-1 text-xs">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Live, updating every 1.5s
            </div>
            <p className="mt-8 text-sm text-background/60">People on site right now</p>
            <p className="mt-2 font-mono text-6xl font-light tracking-tighter tabular-nums md:text-8xl">
              {liveNow.toLocaleString()}
            </p>
            <p className="mt-4 max-w-sm text-sm text-background/60">
              Aurora 2 launch day. Traffic is 4.2x a normal Tuesday and every
              edge region is healthy.
            </p>
          </div>

          <div>
            <div className="flex h-40 items-end gap-[3px]">
              {series.map((v, i) => (
                <div
                  key={i}
                  className="flex-1 bg-background/25 transition-[height] duration-500 last:bg-emerald-400"
                  style={{ height: `${(v / max) * 100}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-background/50">
              <span>45s ago</span>
              <span>now</span>
            </div>

            <ul className="mt-8 divide-y divide-background/15 border-y border-background/15">
              {pages.map((p) => (
                <li key={p.path} className="flex items-center justify-between gap-4 py-3 text-sm">
                  <span className="min-w-0 truncate font-mono text-background/80">{p.path}</span>
                  <span className="font-mono tabular-nums">{p.live}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
