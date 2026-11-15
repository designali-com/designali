"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

type Status = "open" | "soon" | "planned"

const sites: { city: string; status: Status; date: string; x: number; y: number }[] = [
  { city: "Leeds", status: "open", date: "Since 2021", x: 54, y: 38 },
  { city: "Manchester", status: "open", date: "Since 2022", x: 47, y: 42 },
  { city: "Bristol", status: "open", date: "Since 2023", x: 40, y: 68 },
  { city: "Edinburgh", status: "open", date: "Since 2024", x: 48, y: 14 },
  { city: "Birmingham", status: "soon", date: "Feb 2027", x: 50, y: 55 },
  { city: "Cardiff", status: "soon", date: "Apr 2027", x: 34, y: 66 },
  { city: "Newcastle", status: "planned", date: "2028", x: 56, y: 25 },
  { city: "Brighton", status: "planned", date: "2028", x: 62, y: 78 },
  { city: "Norwich", status: "planned", date: "2028", x: 74, y: 55 },
]

const legend: { id: Status | "all"; label: string; dot: string }[] = [
  { id: "all", label: "All", dot: "bg-foreground" },
  { id: "open", label: "Open", dot: "bg-emerald-500" },
  { id: "soon", label: "Opening soon", dot: "bg-amber-500" },
  { id: "planned", label: "Planned", dot: "bg-muted-foreground/50" },
]

const dot: Record<Status, string> = {
  open: "bg-emerald-500 ring-emerald-500/25",
  soon: "bg-amber-500 ring-amber-500/25",
  planned: "border-2 border-dashed border-muted-foreground bg-background ring-transparent",
}

export default function Location15() {
  const [filter, setFilter] = useState<Status | "all">("all")
  const visible = sites.filter((s) => filter === "all" || s.status === filter)

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.1fr] md:items-center">
        <div>
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Expansion
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Bouldering walls, coming to a city near you
          </h2>
          <p className="mt-4 text-muted-foreground">
            Crux Climbing opened four gyms in four years. Here&apos;s where we
            are heading next.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {legend.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                aria-pressed={filter === item.id}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                  filter === item.id ? "border-foreground bg-muted" : "hover:bg-muted/60"
                )}
              >
                <span className={cn("size-2 rounded-full", item.dot)} />
                {item.label}
              </button>
            ))}
          </div>

          <ul className="mt-8 divide-y border-y">
            {visible.map((site) => (
              <li key={site.city} className="flex items-center justify-between py-3 text-sm">
                <span className="flex items-center gap-3">
                  <span className={cn("size-2.5 rounded-full ring-4", dot[site.status])} />
                  {site.city}
                </span>
                <span className="text-muted-foreground tabular-nums">{site.date}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto aspect-[3/4] w-full max-w-md">
          <svg viewBox="0 0 100 130" className="absolute inset-0 h-full w-full" aria-hidden>
            <path
              d="M44 4 C 52 2, 58 8, 54 14 C 60 18, 62 24, 58 30 C 64 36, 66 42, 70 48 C 80 50, 84 58, 78 66 C 84 72, 78 82, 70 84 C 62 90, 50 88, 40 92 C 30 94, 24 90, 30 84 C 34 80, 26 76, 30 70 C 34 64, 30 60, 36 56 C 42 52, 38 46, 42 40 C 38 34, 34 28, 40 22 C 36 16, 38 8, 44 4 Z"
              className="fill-muted stroke-border"
              strokeWidth="0.6"
            />
          </svg>
          {sites.map((site) => (
            <span
              key={site.city}
              style={{ left: `${site.x}%`, top: `${site.y}%` }}
              className={cn(
                "absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 transition-opacity",
                !visible.includes(site) && "opacity-15"
              )}
            >
              <span className={cn("size-3 rounded-full ring-4", dot[site.status])} />
              <span className="hidden text-[11px] font-medium sm:inline">{site.city}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
