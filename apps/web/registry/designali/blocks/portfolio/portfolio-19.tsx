"use client"

import { useState } from "react"
import { ArrowUpRight, Plus } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const projects = [
  {
    name: "Bramble Bikes",
    category: "Brand + E-commerce",
    year: "2026",
    summary:
      "A cargo bike maker selling to families, not cyclists. We cut the jargon, photographed real school runs and rebuilt the configurator around how people actually ride.",
    facts: [
      { label: "Timeline", value: "16 weeks" },
      { label: "Result", value: "+64% test rides booked" },
    ],
    background: "linear-gradient(120deg, oklch(0.6 0.14 140), oklch(0.85 0.1 100))",
  },
  {
    name: "Calder Archive",
    category: "Digital collection",
    year: "2025",
    summary:
      "Forty thousand drawings, letters and photographs put online with a search that understands dates, places and people rather than file names.",
    facts: [
      { label: "Timeline", value: "9 months" },
      { label: "Result", value: "1.2M visits in year one" },
    ],
    background: "linear-gradient(120deg, oklch(0.35 0.03 60), oklch(0.75 0.05 70))",
  },
  {
    name: "Overture Health",
    category: "Product design",
    year: "2025",
    summary:
      "A symptom tracker for people with chronic migraine, co-designed with a patient panel who used every prototype for a fortnight.",
    facts: [
      { label: "Timeline", value: "20 weeks" },
      { label: "Result", value: "62% 90-day retention" },
    ],
    background: "linear-gradient(120deg, oklch(0.55 0.15 300), oklch(0.82 0.08 340))",
  },
  {
    name: "Kiln Street Market",
    category: "Identity + Signage",
    year: "2024",
    summary:
      "A weekend market in a former brickworks. The identity uses the stamp marks from the original bricks, now pressed into every sign and stall flag.",
    facts: [
      { label: "Timeline", value: "8 weeks" },
      { label: "Result", value: "96 traders onboarded" },
    ],
    background: "linear-gradient(120deg, oklch(0.55 0.15 35), oklch(0.8 0.1 60))",
  },
]

export default function Portfolio19() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">Selected projects</h2>
          <span className="font-mono text-xs text-muted-foreground">2024–2026</span>
        </div>

        <ul className="mt-10 border-t border-border">
          {projects.map((project, i) => {
            const isOpen = open === i
            return (
              <li key={project.name} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 py-6 text-left"
                >
                  <span className="w-8 shrink-0 font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xl font-medium tracking-tight md:text-3xl">
                      {project.name}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground md:hidden">
                      {project.category}
                    </span>
                  </span>
                  <span className="hidden text-sm text-muted-foreground md:block">{project.category}</span>
                  <span className="hidden w-12 text-right font-mono text-xs text-muted-foreground md:block">
                    {project.year}
                  </span>
                  <Plus
                    className={cn(
                      "size-5 shrink-0 transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-6 pb-8 md:grid-cols-[1fr_1.2fr] md:pl-12">
                      <div className="aspect-[16/10] border border-border" style={{ background: project.background }} />
                      <div className="flex flex-col">
                        <p className="leading-7 text-muted-foreground">{project.summary}</p>
                        <dl className="mt-6 grid grid-cols-2 gap-4">
                          {project.facts.map((fact) => (
                            <div key={fact.label}>
                              <dt className="text-xs text-muted-foreground">{fact.label}</dt>
                              <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
                            </div>
                          ))}
                        </dl>
                        <div className="mt-6">
                          <Button
                            variant="outline"
                            nativeButton={false}
                            tabIndex={isOpen ? undefined : -1}
                            render={<a href="#" />}
                          >
                            View project
                            <ArrowUpRight />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
