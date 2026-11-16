"use client"

import * as React from "react"
import {
  ChevronRight as ChevronRightIcon,
  ChevronsDownUp as ChevronsDownUpIcon,
  ChevronsUpDown as ChevronsUpDownIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const sections = [
  {
    id: "overview",
    title: "Overview",
    body: "Kickoff with the client and Ali Imam is scheduled for March 3.",
  },
  {
    id: "scope",
    title: "Scope",
    body: "Covers brand identity, UI/UX design and a Next.js website.",
  },
  {
    id: "risks",
    title: "Risks",
    body: "Content delivery from the client may slip by one week.",
  },
]

export default function ExpandAllSections() {
  const [open, setOpen] = React.useState<string[]>(["overview"])
  const allOpen = open.length === sections.length
  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Project brief</h3>
        <Button
          variant="ghost"
          size="xs"
          onClick={() => setOpen(allOpen ? [] : sections.map((s) => s.id))}
        >
          {allOpen ? <ChevronsDownUpIcon /> : <ChevronsUpDownIcon />}
          {allOpen ? "Collapse all" : "Expand all"}
        </Button>
      </div>
      <div className="divide-y border">
        {sections.map((section) => (
          <Collapsible
            key={section.id}
            open={open.includes(section.id)}
            onOpenChange={(next) =>
              setOpen((prev) =>
                next
                  ? [...prev, section.id]
                  : prev.filter((id) => id !== section.id)
              )
            }
          >
            <CollapsibleTrigger
              render={
                <Button variant="ghost" className="w-full justify-start">
                  <ChevronRightIcon className="transition-transform group-data-panel-open/button:rotate-90" />
                  {section.title}
                </Button>
              }
            />
            <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
              <p className="px-4 pb-3 pl-10 text-sm text-muted-foreground">
                {section.body}
              </p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  )
}
