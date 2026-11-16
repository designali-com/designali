"use client"

import { useState } from "react"
import { ArrowUpRight, Plus } from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const projects = [
  {
    name: "Dalim Agency",
    category: "Brand + Website",
    year: "Brand",
    summary:
      "An agency identity and website for the Dalim family of brands. One system for logos, type, colour and every page of the site.",
    facts: [
      { label: "Timeline", value: "8 weeks" },
      { label: "Result", value: "One brand system" },
    ],
    background: "url(/images/templates/dalim-agency-old.jpg) center / cover",
  },
  {
    name: "Dalim Icons",
    category: "Icon system",
    year: "Icons",
    summary:
      "A personal icon set redrawn on one grid and one stroke, then published as @designali/icons for React.",
    facts: [
      { label: "Timeline", value: "Ongoing" },
      { label: "Result", value: "4000+ icons" },
    ],
    background: "url(/images/templates/dalim-icons-old.jpg) center / cover",
  },
  {
    name: "Dalim UI",
    category: "Product design",
    year: "UI",
    summary:
      "A component library for designers who code. Every Figma component paired with production-ready React and Tailwind CSS.",
    facts: [
      { label: "Timeline", value: "Ongoing" },
      { label: "Result", value: "460+ Designali blocks" },
    ],
    background: "url(/images/templates/dalim-ui-old.jpg) center / cover",
  },
  {
    name: "Dalim Visuals",
    category: "CGI + Motion",
    year: "3D",
    summary:
      "CGI, 3D renders and motion loops for brands and launches, from art direction to the final frame.",
    facts: [
      { label: "Timeline", value: "Per project" },
      { label: "Result", value: "Showreel and loops" },
    ],
    background: "url(/images/templates/dalim-visuals-old.jpg) center / cover",
  },
]

export default function Portfolio19() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
            Selected Designali projects
          </h2>
          <span className="font-sans text-xs text-muted-foreground">
            Dalim · Designali
          </span>
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
                  <span className="w-8 shrink-0 font-sans text-xs text-muted-foreground">
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
                  <span className="hidden text-sm text-muted-foreground md:block">
                    {project.category}
                  </span>
                  <span className="hidden w-12 text-right font-sans text-xs text-muted-foreground md:block">
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
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-6 pb-8 md:grid-cols-[1fr_1.2fr] md:pl-12">
                      <div
                        className="aspect-[16/10] border border-border"
                        style={{ background: project.background }}
                      />
                      <div className="flex flex-col">
                        <p className="leading-7 text-muted-foreground">
                          {project.summary}
                        </p>
                        <dl className="mt-6 grid grid-cols-2 gap-4">
                          {project.facts.map((fact) => (
                            <div key={fact.label}>
                              <dt className="text-xs text-muted-foreground">
                                {fact.label}
                              </dt>
                              <dd className="mt-1 text-sm font-medium">
                                {fact.value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                        <div className="mt-6">
                          <Button
                            variant="outline"
                            nativeButton={false}
                            tabIndex={isOpen ? undefined : -1}
                            render={<a href="/work" />}
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
