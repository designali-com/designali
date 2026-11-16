"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const phases = [
  {
    name: "Listen",
    weeks: "Weeks 1-2",
    title: "Discovery before a single sketch",
    body: "We started with the brief, the brand and a few honest conversations. The client said the site looked dated. The research said visitors could not find the work.",
    artefacts: ["Discovery notes", "Site audit", "Moodboard"],
  },
  {
    name: "Frame",
    weeks: "Weeks 3-4",
    title: "One direction, written on one page",
    body: "We narrowed every idea to a single statement the whole team signed: show the work first, and make starting a project one click away.",
    artefacts: ["Brand direction", "Sitemap", "Scope agreement"],
  },
  {
    name: "Make",
    weeks: "Weeks 5-10",
    title: "Figma prototypes every Friday",
    body: "Six weekly rounds of clickable prototypes in Figma, then the same screens built as Designali blocks in Next.js and Tailwind CSS.",
    artefacts: ["Figma prototypes", "Design system", "Next.js build"],
  },
  {
    name: "Ship",
    weeks: "Weeks 11-14",
    title: "Launched on Vercel, then refined",
    body: "Ali Imam stayed on through launch, watching analytics and feedback daily and shipping fixes within the week.",
    artefacts: ["Production code", "Launch checklist", "Post-launch review"],
  },
]

export default function Portfolio15() {
  const [active, setActive] = useState(0)
  const phase = phases[active]!

  return (
    <section className="w-full bg-muted/40 py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          How a Designali project unfolds
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
          Fourteen weeks, four phases
        </h2>

        <ol className="mt-10 grid grid-cols-4 gap-2">
          {phases.map((p, i) => (
            <li key={p.name}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group w-full text-left"
                aria-current={active === i ? "step" : undefined}
              >
                <span className="block h-1 w-full bg-border">
                  <span
                    className={cn(
                      "block h-full bg-foreground transition-all duration-500",
                      i <= active ? "w-full" : "w-0"
                    )}
                  />
                </span>
                <span className="mt-3 flex items-baseline gap-2">
                  <span className="font-sans text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors",
                      active === i
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    )}
                  >
                    {p.name}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-8 border border-border bg-background p-6 md:grid-cols-[1.4fr_1fr] md:p-10">
          <div>
            <p className="text-xs text-muted-foreground">{phase.weeks}</p>
            <h3 className="mt-2 text-2xl leading-tight font-medium tracking-tight md:text-3xl">
              {phase.title}
            </h3>
            <p className="mt-4 leading-7 text-muted-foreground">{phase.body}</p>
          </div>
          <div className="flex flex-col justify-between gap-8 md:border-l md:border-border md:pl-8">
            <div>
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Artefacts
              </p>
              <ul className="mt-4 space-y-3">
                {phase.artefacts.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="size-1.5 bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon-lg"
                aria-label="Previous phase"
                disabled={active === 0}
                onClick={() => setActive((a) => a - 1)}
              >
                <ArrowLeft />
              </Button>
              <Button
                className="flex-1"
                size="lg"
                disabled={active === phases.length - 1}
                onClick={() => setActive((a) => a + 1)}
              >
                Next phase
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
