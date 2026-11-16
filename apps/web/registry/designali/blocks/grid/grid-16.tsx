"use client"

import { useState } from "react"
import {
  Minus,
  Plus,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const projects = [
  { name: "Designali Agency", sector: "Brand & web", year: "2026", image: "/images/templates/design-agency.jpg", summary: "Brand identity and a production-ready Next.js site for the Designali studio.", results: [["+38%", "Enquiries"], ["100", "Lighthouse"], ["11 wks", "To launch"]] },
  { name: "Portfolio Simple", sector: "Template", year: "2026", image: "/images/templates/portfolio-simple.jpg", summary: "A clean Next.js portfolio template for designers and developers.", results: [["2.1x", "Downloads"], ["-26%", "Setup time"], ["9 wks", "To launch"]] },
  { name: "Dalim Agency", sector: "Branding", year: "2025", image: "/images/templates/dalim-agency-old.jpg", summary: "Brand identity and website for the first Dalim studio by Ali Imam.", results: [["+64%", "Leads"], ["-52%", "Bounce"], ["6 wks", "To launch"]] },
  { name: "Dalim UI", sector: "UI kit", year: "2025", image: "/images/templates/dalim-ui-old.jpg", summary: "A component kit that grew into the 460+ Designali blocks.", results: [["460+", "Blocks"], ["AA", "WCAG"], ["14 wks", "To launch"]] },
  { name: "Dalim Icons", sector: "Icon system", year: "2025", image: "/images/templates/dalim-icons-old.jpg", summary: "An icon set that evolved into 4000+ icons in @designali/icons.", results: [["4000+", "Icons"], ["+3x", "Usage"], ["8 wks", "To launch"]] },
  { name: "Ali Imam", sector: "Portfolio", year: "2024", image: "/images/templates/aliimam-comp.jpg", summary: "Personal portfolio for Ali Imam, designed in Figma and built with Next.js.", results: [["240+", "Pages"], ["-45%", "Load time"], ["10 wks", "To launch"]] },
]

export default function Grid16() {
  const [open, setOpen] = useState<string | null>(projects[0]!.name)

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Selected Designali work</h2>
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
                      background: `linear-gradient(to top, oklch(0 0 0 / 0.55), transparent 60%), url("${project.image}") center / cover`,
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
