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
    image: "/images/templates/dalim-agency-old.jpg",
  },
  {
    title: "Dalim Fonts",
    kind: "Type platform",
    year: "Web",
    image: "/images/templates/dalim-fonts-old.jpg",
  },
  {
    title: "Dalim UI",
    kind: "Component library",
    year: "Code",
    image: "/images/templates/dalim-ui-old.jpg",
  },
  {
    title: "Dalim Icons",
    kind: "Icon system",
    year: "Design",
    image: "/images/templates/dalim-icons-old.jpg",
  },
  {
    title: "Dalim Visuals",
    kind: "CGI and motion",
    year: "3D",
    image: "/images/templates/dalim-visuals-old.jpg",
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
                "absolute inset-0 flex flex-col justify-end bg-muted p-6 text-white transition-all duration-500",
                hovered === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
              )}
            >
              <img
                src={entry.image}
                alt={`${entry.title} — Designali case study`}
                className="absolute inset-0 size-full object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <p className="relative text-xs tracking-widest uppercase opacity-70">{entry.kind}</p>
              <p className="relative mt-1 text-2xl font-semibold">{entry.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
