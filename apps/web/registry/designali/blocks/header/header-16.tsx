"use client"

import { useState } from "react"
import {
  Check,
  ChevronsUpDown,
  GitBranch,
  Rocket,
  Slash,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Logo } from "@/src/components/logo"

const projects = ["designali-web", "portfolio-template", "dalim-ui"]
const tabs = ["Overview", "Deployments", "Logs", "Analytics", "Settings"]

export default function Header16() {
  const [project, setProject] = useState(projects[0]!)
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState(tabs[0]!)

  return (
    <section className="w-full bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-6">
          <a href="#" aria-label="Designali home" className="flex size-7 shrink-0 items-center justify-center bg-foreground">
            <Logo className="size-5" />
          </a>
          <Slash className="size-4 shrink-0 -rotate-12 text-muted-foreground/50" />
          <a href="#" className="hidden items-center gap-2 text-sm sm:flex">
            <span className="flex size-5 items-center justify-center rounded-full bg-gradient-to-br from-chart-2 to-chart-4 text-[9px] font-medium text-white">
              DS
            </span>
            Designali Studio
          </a>
          <Slash className="hidden size-4 shrink-0 -rotate-12 text-muted-foreground/50 sm:block" />
          <div className="relative min-w-0">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="flex min-w-0 items-center gap-1.5 px-1.5 py-1 text-sm font-medium hover:bg-muted"
            >
              <span className="truncate">{project}</span>
              <ChevronsUpDown className="size-3.5 shrink-0 text-muted-foreground" />
            </button>
            {open && (
              <ul className="absolute start-0 top-full z-30 mt-1 w-56 border bg-background p-1 shadow-lg">
                <li className="px-2 py-1.5 text-xs text-muted-foreground">Projects</li>
                {projects.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => {
                        setProject(item)
                        setOpen(false)
                      }}
                      className="flex w-full items-center justify-between px-2 py-1.5 text-start text-sm hover:bg-muted"
                    >
                      {item}
                      {item === project && <Check className="size-3.5" />}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <span className="ms-1 hidden items-center gap-1.5 border px-2 py-0.5 font-mono text-[11px] text-muted-foreground md:flex">
            <GitBranch className="size-3" />
            main
          </span>
          <span className="hidden items-center gap-1.5 text-xs text-muted-foreground lg:flex">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Ready, 4m ago
          </span>
          <div className="ms-auto flex shrink-0 items-center gap-2">
            <a href="#" className="hidden text-sm text-muted-foreground hover:text-foreground md:block">
              Feedback
            </a>
            <Button size="md">
              <Rocket />
              <span className="hidden sm:inline">Deploy</span>
            </Button>
            <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-chart-1 to-chart-5 text-[10px] font-medium text-white">
              AI
            </span>
          </div>
        </div>
        <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4">
          {tabs.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={
                item === tab
                  ? "shrink-0 border-b-2 border-foreground px-3 py-2.5 text-sm"
                  : "shrink-0 border-b-2 border-transparent px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground"
              }
            >
              {item}
            </button>
          ))}
        </nav>
      </header>
    </section>
  )
}
