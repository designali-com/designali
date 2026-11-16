"use client"

import { useState } from "react"
import {
  MoveHorizontal,
} from "@designali/icons"

const projects = [
  {
    name: "Dalim Agency to Designali",
    note: "Rebuilt the agency site with a new brand identity, Next.js and Tailwind CSS.",
    before: 'url("/images/templates/dalim-agency-old.jpg") center / cover',
    after: 'url("/images/templates/design-agency.jpg") center / cover',
  },
  {
    name: "Ali Imam portfolio",
    note: "Refreshed the personal portfolio with a cleaner layout and production-ready components.",
    before: 'url("/images/templates/aliimam-old.jpg") center / cover',
    after: 'url("/images/templates/aliimam-comp.jpg") center / cover',
  },
  {
    name: "Dalim UI to Designali Blocks",
    note: "Evolved the Dalim UI kit into 460+ Designali blocks with semantic design tokens.",
    before: 'url("/images/templates/dalim-ui-old.jpg") center / cover',
    after: 'url("/img/dashboard-1-light.jpg") center / cover',
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
            Redesigns by Designali
          </h2>
          <p className="mt-4 text-muted-foreground">
            Drag the handle to compare. Earlier Dalim projects by Ali Imam,
            redesigned and rebuilt at Designali.
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
                  <span className="font-sans text-xs">0{i + 1}</span>
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
