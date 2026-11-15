"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const projects = [
  { name: "Orbit Bank", sector: "Fintech", year: "2026", hue: 230, summary: "A mobile-first banking app for freelancers, with invoicing and tax pots built in.", results: [["+38%", "Activation"], ["4.8", "App Store"], ["11 wks", "To launch"]] },
  { name: "Greenhouse Co.", sector: "Retail", year: "2026", hue: 140, summary: "Storefront and subscription flow for a plant delivery service across 40 cities.", results: [["2.1x", "Conversion"], ["-26%", "Churn"], ["9 wks", "To launch"]] },
  { name: "Kiln Studio", sector: "Ceramics", year: "2025", hue: 30, summary: "Brand identity and booking system for a pottery school with three locations.", results: [["+64%", "Bookings"], ["-52%", "No-shows"], ["6 wks", "To launch"]] },
  { name: "Polar Health", sector: "Healthcare", year: "2025", hue: 200, summary: "Patient intake portal that replaced six paper forms with one five-minute flow.", results: [["-70%", "Intake time"], ["AA", "WCAG"], ["14 wks", "To launch"]] },
  { name: "Field Notes FM", sector: "Media", year: "2025", hue: 330, summary: "Podcast network site with episode search, transcripts and a listener membership.", results: [["120k", "Members"], ["+3x", "Session time"], ["8 wks", "To launch"]] },
  { name: "Tessellate", sector: "Developer tools", year: "2024", hue: 280, summary: "Docs platform and marketing site for an open-source geometry engine.", results: [["18k", "GitHub stars"], ["-45%", "Support tickets"], ["10 wks", "To launch"]] },
]

export default function Grid16() {
  const [open, setOpen] = useState<string | null>(projects[0]!.name)

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Selected work</h2>
          <p className="text-sm text-muted-foreground">Tap a project to see the outcome.</p>
        </div>

        <div className="mt-12 grid grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const isOpen = open === project.name
            return (
              <article
                key={project.name}
                className={cn(
                  "overflow-hidden border border-border bg-background transition-colors",
                  isOpen && "sm:col-span-2 border-foreground"
                )}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : project.name)}
                  className={cn("grid w-full text-left", isOpen && "md:grid-cols-2")}
                >
                  <div
                    className={cn("relative", isOpen ? "aspect-[16/10]" : "aspect-[16/9]")}
                    style={{
                      background: `linear-gradient(160deg, oklch(0.82 0.1 ${project.hue}), oklch(0.4 0.15 ${project.hue + 30}))`,
                    }}
                  >
                    <span className="absolute bottom-4 left-4 text-2xl font-semibold tracking-tight text-white">
                      {project.name}
                    </span>
                  </div>
                  <div className="flex flex-col justify-between p-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs text-muted-foreground">
                        {project.sector} · {project.year}
                      </span>
                      <span className="flex size-7 items-center justify-center border border-border">
                        {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                      </span>
                    </div>
                    {isOpen && (
                      <>
                        <p className="mt-4 text-sm leading-6">{project.summary}</p>
                        <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-5">
                          {project.results.map(([value, label]) => (
                            <div key={label}>
                              <dt className="text-xs text-muted-foreground">{label}</dt>
                              <dd className="text-xl font-semibold tracking-tight">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </>
                    )}
                  </div>
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
