"use client"

import { useRef } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const projects = [
  {
    client: "Saltmarsh Wines",
    title: "Label system for a coastal vineyard",
    tag: "Packaging",
    year: "2026",
    background: "linear-gradient(160deg, oklch(0.55 0.12 20), oklch(0.82 0.06 60))",
  },
  {
    client: "Quillfeather",
    title: "Writing app for long-form journalists",
    tag: "Product",
    year: "2026",
    background: "linear-gradient(200deg, oklch(0.45 0.1 260), oklch(0.78 0.08 220))",
  },
  {
    client: "Brightwater Trust",
    title: "Donation flow that doubled monthly givers",
    tag: "Web",
    year: "2025",
    background: "linear-gradient(140deg, oklch(0.5 0.1 170), oklch(0.85 0.08 130))",
  },
  {
    client: "Hollow Oak Games",
    title: "Studio identity and launch trailer kit",
    tag: "Brand",
    year: "2025",
    background: "linear-gradient(180deg, oklch(0.35 0.08 300), oklch(0.7 0.14 340))",
  },
  {
    client: "Copperline Rail",
    title: "Wayfinding for twelve regional stations",
    tag: "Environmental",
    year: "2024",
    background: "linear-gradient(120deg, oklch(0.55 0.13 50), oklch(0.88 0.07 90))",
  },
]

export default function Portfolio06() {
  const track = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" })
  }

  return (
    <section className="w-full overflow-hidden bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Recent work
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-tight md:text-5xl">
              Five projects from the last two years
            </h2>
          </div>
          <div className="flex shrink-0 gap-2">
            <Button variant="outline" size="icon-lg" aria-label="Previous project" onClick={() => scroll(-1)}>
              <ArrowLeft />
            </Button>
            <Button variant="outline" size="icon-lg" aria-label="Next project" onClick={() => scroll(1)}>
              <ArrowRight />
            </Button>
          </div>
        </div>

        <div
          ref={track}
          className="mt-10 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, i) => (
            <a
              key={project.client}
              href="#"
              className="group w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-border">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: project.background }}
                />
                <span className="absolute top-4 left-4 font-mono text-xs text-white/90">
                  {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
                <span className="absolute top-4 right-4 bg-background/90 px-2 py-0.5 text-[11px] backdrop-blur">
                  {project.tag}
                </span>
                <span className="absolute right-4 bottom-4 flex size-10 items-center justify-center bg-background transition-transform group-hover:-translate-y-1">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <p className="text-sm text-muted-foreground">{project.client}</p>
                <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
              </div>
              <h3 className="mt-1 text-lg leading-snug font-medium">{project.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
