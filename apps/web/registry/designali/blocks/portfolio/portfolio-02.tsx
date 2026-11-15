"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const projects = [
  { name: "Halcyon Bank", discipline: "Fintech app", year: "2026", hue: "var(--chart-1)" },
  { name: "Orbit Studio", discipline: "Brand identity", year: "2026", hue: "var(--chart-2)" },
  { name: "Wildgrain", discipline: "E-commerce", year: "2025", hue: "var(--chart-3)" },
  { name: "Meridian Labs", discipline: "Developer docs", year: "2025", hue: "var(--chart-4)" },
  { name: "Common Ground", discipline: "Non-profit website", year: "2024", hue: "var(--chart-5)" },
  { name: "Parcel & Co", discipline: "Logistics dashboard", year: "2024", hue: "var(--chart-1)" },
]

export default function Portfolio02() {
  const [hovered, setHovered] = useState(0)
  const current = projects[hovered]

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_380px]">
        <div>
          <p className="mb-6 text-xs tracking-widest text-muted-foreground uppercase">
            Index of projects
          </p>
          <ul className="border-t border-border">
            {projects.map((project, i) => (
              <li key={project.name} className="border-b border-border">
                <a
                  href="#"
                  onMouseEnter={() => setHovered(i)}
                  onFocus={() => setHovered(i)}
                  className="group flex items-center justify-between gap-4 py-5 md:py-6"
                >
                  <span
                    className={`text-2xl font-medium tracking-tight transition-colors md:text-4xl ${
                      hovered === i ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {project.name}
                  </span>
                  <span className="flex shrink-0 items-center gap-4 text-xs text-muted-foreground">
                    <span className="hidden sm:inline">{project.discipline}</span>
                    <span className="font-mono">{project.year}</span>
                    <ArrowRight
                      className={`size-4 transition-transform ${
                        hovered === i ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                      }`}
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24 border border-border bg-muted p-3">
            <div
              className="aspect-[3/4] w-full transition-colors duration-500"
              style={{
                background: `linear-gradient(160deg, ${current?.hue} 0%, transparent 85%)`,
              }}
            />
            <div className="flex items-center justify-between pt-3 text-xs">
              <span className="font-medium">{current?.name}</span>
              <span className="text-muted-foreground">{current?.discipline}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
