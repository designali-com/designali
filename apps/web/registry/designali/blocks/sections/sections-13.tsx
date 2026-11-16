"use client"

import { useState } from "react"
import {
  ClipboardList,
  PencilRuler,
  Rocket,
  Search,
  Wrench,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const steps = [
  {
    icon: Search,
    title: "Survey",
    duration: "Day 1",
    body: "An engineer visits, measures every room and checks the electrics, insulation and roof orientation.",
    outputs: ["Thermal imaging report", "Load assessment", "Photo log"],
  },
  {
    icon: PencilRuler,
    title: "Design",
    duration: "Days 2 - 5",
    body: "We model your home and size the heat pump, panels and battery to your actual usage, not a rule of thumb.",
    outputs: ["System design", "Savings forecast", "Fixed quote"],
  },
  {
    icon: ClipboardList,
    title: "Permits",
    duration: "Weeks 2 - 4",
    body: "We file the grid connection, planning notices and grant paperwork on your behalf and keep you posted.",
    outputs: ["DNO approval", "Grant application", "Install date"],
  },
  {
    icon: Wrench,
    title: "Install",
    duration: "2 - 3 days",
    body: "A certified crew of three installs everything, cleans up and walks you through the app before leaving.",
    outputs: ["Commissioning cert", "App setup", "Handover pack"],
  },
  {
    icon: Rocket,
    title: "Monitor",
    duration: "Ongoing",
    body: "We watch performance remotely and call you before you notice a problem. Ten-year warranty included.",
    outputs: ["Monthly report", "Remote tuning", "10-year cover"],
  },
]

export default function Sections13() {
  const [active, setActive] = useState(1)
  const step = steps[active]!

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase">How it works</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            From survey to switch-on in about five weeks.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-5 border border-border" role="tablist" aria-label="Process steps">
          {steps.map((item, index) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              className={cn(
                "relative flex flex-col items-center gap-2 border-border px-1 py-4 text-xs transition-colors not-last:border-r sm:items-start sm:px-4",
                active === index ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/50"
              )}
            >
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-0.5 transition-colors",
                  index <= active ? "bg-foreground" : "bg-transparent"
                )}
              />
              <item.icon className="size-4" />
              <span className="hidden font-medium sm:block">{item.title}</span>
              <span className="font-sans text-[10px] sm:hidden">0{index + 1}</span>
            </button>
          ))}
        </div>

        <div key={step.title} role="tabpanel" className="grid gap-8 border-x border-b border-border p-6 md:grid-cols-[1.5fr_1fr] md:p-10">
          <div>
            <p className="font-sans text-xs text-muted-foreground">
              Step 0{active + 1} · {step.duration}
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">{step.body}</p>
          </div>
          <div className="border-t border-border pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <p className="text-xs font-medium">You receive</p>
            <ul className="mt-4 space-y-3">
              {step.outputs.map((output) => (
                <li key={output} className="flex items-center gap-3 text-sm">
                  <span className="size-1.5 bg-foreground" />
                  {output}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
