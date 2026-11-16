"use client"

import { useState } from "react"
import {
  ArrowUpRight,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const entries = [
  {
    title: "Dalim Agency",
    kind: "Agency identity",
    year: "Brand",
    gradient: "from-primary/20 via-chart-1 to-primary",
  },
  {
    title: "Dalim Fonts",
    kind: "Type platform",
    year: "Web",
    gradient: "from-primary/20 via-chart-1 to-primary",
  },
  {
    title: "Dalim UI",
    kind: "Component library",
    year: "Code",
    gradient: "from-border via-muted-foreground to-foreground",
  },
  {
    title: "Dalim Icons",
    kind: "Icon system",
    year: "Design",
    gradient: "from-primary/20 via-chart-1 to-primary",
  },
  {
    title: "Dalim Visuals",
    kind: "CGI and motion",
    year: "3D",
    gradient: "from-primary/20 via-primary to-chart-2",
  },
]

export default function Navigation20() {
  const [hovered, setHovered] = useState(0)

  return (
    <section className="w-full bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_380px]">
        <nav aria-label="Selected work">
          <div className="flex items-end justify-between border-b border-background/20 pb-4">
            <p className="text-xs tracking-widest text-background/60 uppercase">Index</p>
            <p className="text-xs text-background/60 tabular-nums">{entries.length} projects</p>
          </div>
          <ul>
            {entries.map((entry, index) => (
              <li key={entry.title} className="border-b border-background/20">
                <a
                  href="#"
                  onMouseEnter={() => setHovered(index)}
                  onFocus={() => setHovered(index)}
                  className="group grid grid-cols-[2rem_1fr_auto] items-baseline gap-4 py-5 md:grid-cols-[3rem_1fr_200px_4rem]"
                >
                  <span className="font-sans text-xs text-background/50 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "text-2xl font-semibold tracking-tight transition-colors md:text-4xl",
                      hovered === index ? "text-background" : "text-background/40"
                    )}
                  >
                    {entry.title}
                  </span>
                  <span className="hidden text-sm text-background/60 md:block">{entry.kind}</span>
                  <span className="flex items-center justify-end gap-1 text-sm text-background/60 tabular-nums">
                    <span className="hidden sm:inline">{entry.year}</span>
                    <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative hidden aspect-[4/5] overflow-hidden lg:block">
          {entries.map((entry, index) => (
            <div
              key={entry.title}
              className={cn(
                "absolute inset-0 flex flex-col justify-end bg-gradient-to-br p-6 text-foreground transition-all duration-500",
                entry.gradient,
                hovered === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
              )}
            >
              <span className="absolute top-6 left-6 size-24 rounded-full border-2 border-foreground/30" />
              <span className="absolute top-20 right-8 h-40 w-16 bg-foreground/10" />
              <p className="text-xs tracking-widest uppercase opacity-70">{entry.kind}</p>
              <p className="mt-1 text-2xl font-semibold">{entry.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
