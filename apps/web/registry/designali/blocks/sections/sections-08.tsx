"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const milestones = [
  {
    year: "2017",
    title: "A spreadsheet and a van",
    body: "Two former chefs start delivering surplus produce from three farms to restaurants in Leeds, tracked in one shared spreadsheet.",
    stat: "3 farms",
  },
  {
    year: "2019",
    title: "The first warehouse",
    body: "A 400 m² cold store in Bradford lets us hold stock for 48 hours, cutting spoilage from 22% to 7%.",
    stat: "62 restaurants",
  },
  {
    year: "2021",
    title: "Software, by accident",
    body: "The routing tool we built for our own drivers gets licensed by four other food hubs. Harvestline the platform is born.",
    stat: "4 licensees",
  },
  {
    year: "2024",
    title: "Series A, still in Yorkshire",
    body: "We raise £9m to bring the platform to regional food networks across the UK and Ireland. HQ stays in Leeds.",
    stat: "£9m raised",
  },
  {
    year: "2026",
    title: "One million kilos",
    body: "Networks on Harvestline moved one million kilos of produce that would otherwise have gone to waste.",
    stat: "1M kg saved",
  },
]

export default function Sections08() {
  const [active, setActive] = useState(milestones.length - 1)
  const item = milestones[active]

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Our story</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
          Nine years from a van to a platform.
        </h2>

        <div className="relative mt-16">
          <div className="absolute top-[7px] right-0 left-0 h-px bg-border" aria-hidden />
          <div
            className="absolute top-[7px] left-0 h-px bg-foreground transition-all duration-500"
            style={{ width: `${(active / (milestones.length - 1)) * 100}%` }}
            aria-hidden
          />
          <ol className="relative flex justify-between" role="tablist" aria-label="Milestones">
            {milestones.map((milestone, index) => (
              <li key={milestone.year}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  onClick={() => setActive(index)}
                  className="group flex flex-col items-center gap-3"
                >
                  <span
                    className={cn(
                      "size-[15px] border-2 transition-colors",
                      index <= active ? "border-foreground bg-foreground" : "border-border bg-background group-hover:border-foreground"
                    )}
                  />
                  <span
                    className={cn(
                      "font-mono text-xs transition-colors sm:text-sm",
                      active === index ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {milestone.year}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div key={item.year} className="mt-14 grid gap-8 border-t border-border pt-10 md:grid-cols-[1fr_2fr_1fr]" role="tabpanel">
          <p className="text-6xl font-semibold tracking-tight text-muted-foreground/40 md:text-7xl">
            {item.year}
          </p>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">{item.body}</p>
          </div>
          <div className="md:text-right">
            <p className="text-xs text-muted-foreground">Milestone</p>
            <p className="mt-1 text-2xl font-medium">{item.stat}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
