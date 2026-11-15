"use client"

import { useState } from "react"
import { MoveHorizontal } from "lucide-react"

const projects = [
  {
    name: "Kitchen, Elm Street",
    note: "Opened the wall to the dining room and replaced the dark oak with limewashed ash.",
    before: "linear-gradient(135deg, oklch(0.35 0.03 60), oklch(0.25 0.02 40))",
    after: "linear-gradient(135deg, oklch(0.93 0.03 90), oklch(0.8 0.06 70))",
  },
  {
    name: "Loft, Mill Quarter",
    note: "Exposed the original brick, added a steel mezzanine and north-facing skylights.",
    before: "linear-gradient(200deg, oklch(0.4 0.02 250), oklch(0.28 0.02 260))",
    after: "linear-gradient(200deg, oklch(0.85 0.08 220), oklch(0.7 0.1 30))",
  },
  {
    name: "Courtyard, Old Town",
    note: "Removed the concrete slab, planted olive and lavender, laid reclaimed stone.",
    before: "linear-gradient(90deg, oklch(0.5 0.01 100), oklch(0.38 0.01 100))",
    after: "linear-gradient(90deg, oklch(0.75 0.12 140), oklch(0.6 0.1 160))",
  },
]

export default function Gallery10() {
  const [active, setActive] = useState(0)
  const [pos, setPos] = useState(50)
  const project = projects[active]!

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_2fr] lg:items-center">
        <div>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Before / After
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Renovations by Hollow &amp; Pine
          </h2>
          <p className="mt-4 text-muted-foreground">
            Drag the handle to compare. Every project below was delivered on
            schedule and within the agreed budget.
          </p>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {projects.map((p, i) => (
              <button
                key={p.name}
                type="button"
                onClick={() => {
                  setActive(i)
                  setPos(50)
                }}
                className={`block w-full py-4 text-left transition-colors ${i === active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <span className="flex items-center gap-3 font-medium">
                  <span className="font-mono text-xs">0{i + 1}</span>
                  {p.name}
                </span>
                {i === active && (
                  <span className="mt-2 block pl-8 text-sm text-muted-foreground">
                    {p.note}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden border border-border select-none">
          <div className="absolute inset-0" style={{ background: project.after }} />
          <div
            className="absolute inset-0"
            style={{ background: project.before, clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          />
          <span className="absolute top-4 left-4 bg-background/85 px-2 py-1 text-xs font-medium backdrop-blur">
            Before
          </span>
          <span className="absolute top-4 right-4 bg-background/85 px-2 py-1 text-xs font-medium backdrop-blur">
            After
          </span>
          <div
            className="pointer-events-none absolute inset-y-0 w-px bg-white"
            style={{ left: `${pos}%` }}
          >
            <span className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-white bg-black/60 text-white">
              <MoveHorizontal className="size-4" />
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Comparison position"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  )
}
