"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const works = [
  { title: "Interval No. 3", artist: "Mara Lindqvist", medium: "Oil on linen", year: "2024", price: "$8,400", gradient: "linear-gradient(135deg, var(--chart-1), var(--chart-5))" },
  { title: "Field Recording", artist: "Tomas Ehrle", medium: "Cyanotype", year: "2023", price: "$2,100", gradient: "linear-gradient(200deg, var(--chart-2), var(--chart-3))" },
  { title: "A Room Facing North", artist: "Odile Marchetti", medium: "Gouache", year: "2025", price: "$3,650", gradient: "linear-gradient(60deg, var(--chart-4), var(--chart-2))" },
  { title: "Soft Infrastructure", artist: "Kenji Arao", medium: "Archival pigment print", year: "2024", price: "$1,800", gradient: "linear-gradient(170deg, var(--chart-3), var(--chart-1))" },
  { title: "Untitled (Ochre)", artist: "Femi Adeyemi", medium: "Acrylic on panel", year: "2025", price: "$5,900", gradient: "linear-gradient(300deg, var(--chart-5), var(--chart-4))" },
]

export default function Gallery15() {
  const [hover, setHover] = useState(0)
  const active = works[hover]!

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Available works
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Spring catalogue
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">Gallery Sorrel - 5 works</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ul className="divide-y divide-border">
            {works.map((work, i) => (
              <li key={work.title}>
                <a
                  href="#"
                  onMouseEnter={() => setHover(i)}
                  onFocus={() => setHover(i)}
                  className={`group grid grid-cols-[3.5rem_1fr_auto] items-center gap-4 py-5 transition-colors md:grid-cols-[2rem_1fr_10rem_5rem_auto] ${i === hover ? "text-foreground" : "text-muted-foreground"}`}
                >
                  <div className="aspect-square border border-border md:hidden" style={{ background: work.gradient }} />
                  <span className="hidden font-mono text-xs md:block">0{i + 1}</span>
                  <div className="min-w-0">
                    <p className="truncate text-lg font-medium text-foreground">{work.title}</p>
                    <p className="truncate text-sm">{work.artist}</p>
                  </div>
                  <span className="hidden text-sm md:block">{work.medium}</span>
                  <span className="hidden text-sm tabular-nums md:block">{work.year}</span>
                  <span className="flex items-center gap-2 text-sm font-medium text-foreground tabular-nums">
                    {work.price}
                    <ArrowRight className="size-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden pt-6 lg:block">
            <div className="sticky top-20">
              <div
                key={active.title}
                className="aspect-[4/5] w-full border border-border animate-in fade-in duration-300"
                style={{ background: active.gradient }}
              />
              <div className="mt-4 flex items-baseline justify-between text-sm">
                <span className="font-medium">{active.title}</span>
                <span className="text-muted-foreground">{active.medium}, {active.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
