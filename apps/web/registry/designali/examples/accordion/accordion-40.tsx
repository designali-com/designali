"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Skeleton } from "@workspace/ui/components/skeleton"

const sections = [
  {
    value: "activity",
    title: "Recent activity",
    rows: [
      "Ava Moreno commented on Q4 plan",
      "Jonah Pike moved Launch checklist to Done",
      "Rhea Kapoor joined the workspace",
    ],
  },
  {
    value: "files",
    title: "Shared files",
    rows: ["brand-guidelines.pdf", "pricing-model.xlsx"],
  },
]

export default function AccordionLazyLoadingPanel() {
  const [loaded, setLoaded] = React.useState<string[]>([])

  const load = (value: string, open: boolean) => {
    if (!open || loaded.includes(value)) return
    setTimeout(() => setLoaded((prev) => [...prev, value]), 1200)
  }

  return (
    <Accordion className="w-full max-w-md border px-3">
      {sections.map((section) => (
        <AccordionItem
          key={section.value}
          value={section.value}
          onOpenChange={(open) => load(section.value, open)}
        >
          <AccordionTrigger>
            {section.title}
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent>
            {loaded.includes(section.value) ? (
              <ul className="space-y-2">
                {section.rows.map((row) => (
                  <li key={row} className="text-muted-foreground">
                    {row}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="space-y-2" aria-busy="true">
                <Skeleton className="h-3 w-4/5" />
                <Skeleton className="h-3 w-3/5" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
