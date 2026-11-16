"use client"

import { useState } from "react"
import {
  ArrowRight,
  Boxes,
  ChevronDown,
  Code,
  Palette,
  PenTool,
  Sparkles,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const industries = [
  {
    icon: Palette,
    label: "Brand identity",
    blurb: "Logos, type and colour systems that feel unmistakably yours.",
    links: ["Logo design", "Visual identity", "Brand guidelines", "Rebrands"],
    stat: "Guidelines and source files included",
  },
  {
    icon: PenTool,
    label: "UI/UX design",
    blurb: "Interfaces that look great and feel intuitive.",
    links: ["Product design", "Design systems", "Prototypes", "UX audits"],
    stat: "Figma files that match the code",
  },
  {
    icon: Code,
    label: "Web development",
    blurb: "Production-ready websites with Next.js and Tailwind CSS.",
    links: ["Marketing sites", "Landing pages", "Web apps", "CMS setup"],
    stat: "Built on 460+ Designali blocks",
  },
  {
    icon: Boxes,
    label: "CGI, 3D and motion",
    blurb: "Renders, motion design and visuals for launches.",
    links: ["Product renders", "Motion design", "Showreels", "3D illustrations"],
    stat: "Art direction from concept to final frame",
  },
  {
    icon: Sparkles,
    label: "AI workflows",
    blurb: "AI-assisted research, design and development.",
    links: ["Design automation", "Content pipelines", "Prototyping with AI", "Workflow audits"],
    stat: "Faster from idea to launch",
  },
]

export default function Navigation18() {
  const [open, setOpen] = useState(true)
  const [active, setActive] = useState(0)
  const current = industries[active]!

  return (
    <section className="relative w-full bg-background">
      <nav className="relative border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-6">
          <a href="#" className="font-semibold tracking-tight">designali</a>
          <ul className="hidden items-center gap-1 text-sm md:flex">
            <li>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className={cn(
                  "flex h-9 items-center gap-1 px-3 text-muted-foreground hover:text-foreground",
                  open && "text-foreground"
                )}
              >
                Services
                <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
              </button>
            </li>
            {["Templates", "Work", "Pricing"].map((link) => (
              <li key={link}>
                <a href="#" className="flex h-9 items-center px-3 text-muted-foreground hover:text-foreground">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <Button className="ms-auto">Start a project</Button>
        </div>

        {open && (
          <div className="absolute inset-x-0 top-full z-20 border-b bg-background">
            <div className="mx-auto grid max-w-7xl md:grid-cols-[280px_1fr]">
              <ul className="flex overflow-x-auto border-b py-2 md:block md:border-e md:border-b-0 md:py-4">
                {industries.map((industry, index) => (
                  <li key={industry.label} className="shrink-0">
                    <button
                      type="button"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      className={cn(
                        "flex w-full items-center gap-3 px-6 py-3 text-start text-sm transition-colors",
                        active === index ? "bg-muted font-medium" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <industry.icon className="size-4 shrink-0" />
                      <span className="whitespace-nowrap">{industry.label}</span>
                      <ArrowRight
                        className={cn("ms-auto hidden size-3.5 md:block", active !== index && "invisible")}
                      />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="grid gap-8 p-6 md:grid-cols-[1fr_240px] md:p-8">
                <div>
                  <p className="text-lg font-medium">{current.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{current.blurb}</p>
                  <ul className="mt-6 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                    {current.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="group flex items-center justify-between border-b py-3 text-sm">
                          {link}
                          <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#" className="flex flex-col justify-between gap-6 bg-foreground p-6 text-background">
                  <current.icon className="size-6" />
                  <span>
                    <span className="block text-xs tracking-widest text-background/60 uppercase">Includes</span>
                    <span className="mt-1 block font-medium">{current.stat}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-[420px] md:h-80" aria-hidden />
    </section>
  )
}
