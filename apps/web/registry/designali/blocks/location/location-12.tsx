"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const zones = [
  { id: 1, name: "Main stage", detail: "Keynotes, 1,200 seats", x: 20, y: 20, w: 260, h: 150, tone: "fill-violet-200 dark:fill-violet-900/50" },
  { id: 2, name: "Workshop rooms A-D", detail: "Hands-on sessions, 40 seats each", x: 300, y: 20, w: 180, h: 150, tone: "fill-sky-200 dark:fill-sky-900/50" },
  { id: 3, name: "Expo hall", detail: "38 partner booths", x: 20, y: 190, w: 300, h: 130, tone: "fill-amber-200 dark:fill-amber-900/50" },
  { id: 4, name: "Food court", detail: "Lunch served 12:00-14:00", x: 340, y: 190, w: 140, h: 130, tone: "fill-emerald-200 dark:fill-emerald-900/50" },
  { id: 5, name: "Registration", detail: "Badges from 08:00", x: 200, y: 340, w: 120, h: 50, tone: "fill-rose-200 dark:fill-rose-900/50" },
]

export default function Location12() {
  const [hover, setHover] = useState<number | null>(null)

  return (
    <section className="w-full bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Venue map &middot; Level 1
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Finding your way around Forge Summit
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="border bg-background p-4 md:p-6">
            <svg viewBox="0 0 500 410" className="h-auto w-full" role="img" aria-label="Venue floor plan">
              <rect x="10" y="10" width="480" height="390" className="fill-none stroke-foreground/40" strokeWidth="2" />
              {zones.map((zone) => (
                <g
                  key={zone.id}
                  onMouseEnter={() => setHover(zone.id)}
                  onMouseLeave={() => setHover(null)}
                  className="cursor-pointer"
                >
                  <rect
                    x={zone.x}
                    y={zone.y}
                    width={zone.w}
                    height={zone.h}
                    className={cn(
                      zone.tone,
                      "stroke-foreground/30 transition-opacity",
                      hover !== null && hover !== zone.id && "opacity-30"
                    )}
                  />
                  <circle cx={zone.x + 22} cy={zone.y + 22} r="12" className="fill-foreground" />
                  <text
                    x={zone.x + 22}
                    y={zone.y + 26}
                    textAnchor="middle"
                    className="fill-background text-[12px] font-semibold"
                  >
                    {zone.id}
                  </text>
                </g>
              ))}
              <path d="M260 400 L260 392 M240 400 L280 400" className="stroke-foreground" strokeWidth="4" />
              <text x="290" y="404" className="fill-muted-foreground text-[10px]">Entrance</text>
            </svg>
          </div>

          <ol className="space-y-2">
            {zones.map((zone) => (
              <li key={zone.id}>
                <button
                  type="button"
                  onMouseEnter={() => setHover(zone.id)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(zone.id)}
                  onBlur={() => setHover(null)}
                  className={cn(
                    "flex w-full items-center gap-4 border bg-background p-4 text-start transition-colors",
                    hover === zone.id && "border-foreground"
                  )}
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
                    {zone.id}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{zone.name}</span>
                    <span className="block text-xs text-muted-foreground">{zone.detail}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
