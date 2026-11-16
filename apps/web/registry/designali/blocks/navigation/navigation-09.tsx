"use client"

import { useState } from "react"
import {
  ChevronRight,
  Search,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const tree = [
  {
    title: "Getting started",
    pages: ["Introduction", "Installation", "Quickstart", "Project structure"],
  },
  {
    title: "Core concepts",
    pages: ["Blocks", "Theming", "Icons", "Logos"],
  },
  {
    title: "Guides",
    pages: ["Deploy to Vercel", "Dark mode", "Using with Figma"],
  },
  {
    title: "Packages",
    pages: ["@designali/icons", "@designali/logos", "@designali/vectors"],
  },
]

const toc = ["Semantic tokens", "Brand colour", "Dark mode", "Next steps"]

export default function Navigation09() {
  const [openGroups, setOpenGroups] = useState<string[]>(["Getting started", "Core concepts"])
  const [page, setPage] = useState("Theming")

  function toggle(title: string) {
    setOpenGroups((current) =>
      current.includes(title) ? current.filter((item) => item !== title) : [...current, title]
    )
  }

  return (
    <section className="w-full border-y bg-background">
      <div className="mx-auto grid max-w-7xl md:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr_200px]">
        <aside className="border-b p-6 md:border-e md:border-b-0">
          <label className="flex h-9 items-center gap-2 border px-3 text-sm text-muted-foreground">
            <Search className="size-4" />
            <input
              placeholder="Search docs"
              className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
            />
          </label>
          <nav className="mt-6 space-y-1 text-sm">
            {tree.map((group) => {
              const isOpen = openGroups.includes(group.title)
              return (
                <div key={group.title}>
                  <button
                    type="button"
                    onClick={() => toggle(group.title)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-1.5 py-1.5 font-medium"
                  >
                    <ChevronRight
                      className={cn("size-3.5 transition-transform", isOpen && "rotate-90")}
                    />
                    {group.title}
                  </button>
                  {isOpen && (
                    <ul className="ms-[7px] mb-2 border-s">
                      {group.pages.map((item) => (
                        <li key={item}>
                          <button
                            type="button"
                            onClick={() => setPage(item)}
                            className={cn(
                              "-ms-px block w-full border-s py-1.5 ps-4 text-start transition-colors",
                              page === item
                                ? "border-foreground text-foreground"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </nav>
        </aside>

        <article className="min-w-0 p-6 md:p-10">
          <p className="text-sm text-muted-foreground">Designali docs</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">{page}</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every Designali block uses semantic design tokens like bg-background
            and text-primary, so you can rebrand a whole site by changing a few
            CSS variables. Light and dark mode come for free.
          </p>
          <pre className="mt-6 overflow-x-auto border bg-muted/50 p-4 font-mono text-xs leading-relaxed">
            {`import { ArrowRight } from "@designali/icons"
import { Button } from "@workspace/ui/components/button"

export function Cta() {
  return <Button>Start a project <ArrowRight /></Button>
}`}
          </pre>
          <div className="mt-10 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:justify-between">
            <a href="#" className="border p-4 text-sm hover:bg-muted/50 sm:w-64">
              <span className="block text-xs text-muted-foreground">Previous</span>
              Blocks
            </a>
            <a href="#" className="border p-4 text-end text-sm hover:bg-muted/50 sm:w-64">
              <span className="block text-xs text-muted-foreground">Next</span>
              Icons
            </a>
          </div>
        </article>

        <aside className="hidden border-s p-6 xl:block">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            On this page
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {toc.map((item, index) => (
              <li key={item}>
                <a
                  href="#"
                  className={cn(
                    "hover:text-foreground",
                    index === 0 ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
