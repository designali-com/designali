"use client"

import { useState } from "react"

import { cn } from "@workspace/ui/lib/utils"

const milestones = [
  {
    year: "Dalim",
    title: "Where it started",
    body: "Ali Imam starts Dalim, a home for his design work across graphics, visuals and type.",
    stat: "Dalim Graphic",
  },
  {
    year: "Fonts",
    title: "Type and icons",
    body: "Dalim Fonts and Dalim Icons turn one-off project assets into tools other designers can use.",
    stat: "Dalim Icons",
  },
  {
    year: "Agency",
    title: "Client work",
    body: "Dalim Agency and Dalim Works take on brand identity, UI/UX and web projects for clients.",
    stat: "Dalim Agency",
  },
  {
    year: "UI",
    title: "Design meets code",
    body: "Dalim UI and Dalim Tools bring the design work into React and Tailwind CSS components.",
    stat: "Dalim UI",
  },
  {
    year: "Today",
    title: "designali",
    body: "Everything comes together as Designali: a design and development studio, plus templates, blocks, icons and logos on designali.com.",
    stat: "460+ blocks",
  },
]

export default function Sections08() {
  const [active, setActive] = useState(milestones.length - 1)
  const item = milestones[active]!

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase">Our story</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
          From Dalim to designali, design se code tak.
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
                      "font-sans text-xs transition-colors sm:text-sm",
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
