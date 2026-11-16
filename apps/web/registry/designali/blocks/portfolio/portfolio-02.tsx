"use client"

import { useState } from "react"
import {
  ArrowRight,
} from "@designali/icons"

const projects = [
  { name: "Dalim UI", discipline: "Component library", year: "UI", hue: "var(--chart-1)", image: "/images/templates/dalim-ui-old.jpg" },
  { name: "Dalim Agency", discipline: "Brand identity", year: "Brand", hue: "var(--chart-2)", image: "/images/templates/dalim-agency-old.jpg" },
  { name: "Resort", discipline: "Template", year: "Web", hue: "var(--chart-3)", image: "/images/templates/resort.jpg" },
  { name: "Dalim Tools", discipline: "Designer tools", year: "Web", hue: "var(--chart-4)", image: "/images/templates/dalim-tools-old.jpg" },
  { name: "Dalim Works", discipline: "Portfolio website", year: "Web", hue: "var(--chart-5)", image: "/images/templates/dalim-works-old.jpg" },
  { name: "AI Startup", discipline: "Template", year: "Web", hue: "var(--chart-1)", image: "/images/templates/ai.jpg" },
]

export default function Portfolio02() {
  const [hovered, setHovered] = useState(0)
  const current = projects[hovered]

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_380px]">
        <div>
          <p className="mb-6 text-xs tracking-widest text-muted-foreground uppercase">
            Designali projects
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
              className="aspect-[3/4] w-full overflow-hidden transition-colors duration-500"
              style={{
                background: `linear-gradient(160deg, ${current?.hue} 0%, transparent 85%)`,
              }}
            >
              <img
                src={current?.image}
                alt={`${current?.name} by Designali`}
                className="h-full w-full object-cover"
              />
            </div>
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
