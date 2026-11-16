"use client"

import { useState } from "react"
import { MoveHorizontal } from "@designali/icons"

const changes = [
  { label: "Steps to book", before: "7", after: "3" },
  { label: "Time on task", before: "4m 12s", after: "1m 05s" },
  { label: "Booking completion", before: "38%", after: "71%" },
]

function Screen({ variant }: { variant: "before" | "after" }) {
  return (
    <img
      src={
        variant === "before"
          ? "/images/templates/dalim-old.jpg"
          : "/images/templates/resort.jpg"
      }
      alt={
        variant === "before"
          ? "Booking page before the Designali redesign"
          : "Designali Resort template booking page"
      }
      draggable={false}
      className="absolute inset-0 size-full object-cover object-top"
    />
  )
}

export default function Portfolio13() {
  const [position, setPosition] = useState(50)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Redesign · Designali Resort template
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
              From a wall of options to a booking you can finish on the go
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">Drag to compare</p>
        </div>

        <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden border border-border select-none md:aspect-[16/8]">
          <Screen variant="after" />
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Screen variant="before" />
          </div>
          <span className="absolute top-4 left-4 bg-background/90 px-2 py-1 text-xs">
            Before
          </span>
          <span className="absolute top-4 right-4 bg-background/90 px-2 py-1 text-xs">
            After
          </span>
          <div
            className="pointer-events-none absolute inset-y-0 w-px bg-foreground"
            style={{ left: `${position}%` }}
          >
            <span className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-lg">
              <MoveHorizontal className="size-4" />
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            aria-label="Compare before and after"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>

        <dl className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-3">
          {changes.map((c) => (
            <div key={c.label} className="bg-background p-5">
              <dt className="text-xs text-muted-foreground">{c.label}</dt>
              <dd className="mt-2 flex items-baseline gap-3">
                <span className="text-sm text-muted-foreground line-through">
                  {c.before}
                </span>
                <span className="text-2xl font-semibold tracking-tight">
                  {c.after}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
