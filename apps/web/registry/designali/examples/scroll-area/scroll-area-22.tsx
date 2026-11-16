"use client"

import * as React from "react"

import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const sections = [
  { id: "values", title: "Our values" },
  { id: "hours", title: "Working hours" },
  { id: "leave", title: "Time off" },
  { id: "equipment", title: "Equipment" },
  { id: "expenses", title: "Expenses" },
]

export default function TableOfContentsJump() {
  const [active, setActive] = React.useState("values")

  const jump = (id: string) => {
    const target = document.getElementById("handbook-" + id)
    const viewport = target?.closest("[data-slot=scroll-area-viewport]") as
      HTMLElement | null | undefined
    if (target && viewport)
      viewport.scrollTo({ top: target.offsetTop - 8, behavior: "smooth" })
    setActive(id)
  }

  return (
    <div className="flex w-full max-w-md border">
      <nav className="flex w-32 shrink-0 flex-col gap-0.5 border-r p-2 text-xs">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => jump(s.id)}
            className={cn(
              "truncate px-2 py-1 text-left hover:bg-muted",
              active === s.id && "bg-muted font-medium"
            )}
          >
            {s.title}
          </button>
        ))}
      </nav>
      <ScrollArea className="h-64 flex-1">
        <div className="relative flex flex-col gap-6 p-4">
          {sections.map((s) => (
            <section
              key={s.id}
              id={"handbook-" + s.id}
              className="flex flex-col gap-1"
            >
              <h4 className="text-sm font-medium">{s.title}</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Everything you need to know about {s.title.toLowerCase()} at
                Designali, from day one through your first year. Reach out to
                the people team with questions.
              </p>
            </section>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
