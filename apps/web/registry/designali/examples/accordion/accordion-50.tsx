"use client"

import * as React from "react"
import { ChevronDownIcon, CircleCheckIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

const sections = [
  { value: "contacts", title: "Contacts", count: "2,481" },
  { value: "deals", title: "Deals", count: "318" },
  { value: "notes", title: "Notes", count: "1,067" },
]

export default function AccordionFullyDisabled() {
  const [syncing, setSyncing] = React.useState(true)

  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-xs text-muted-foreground">
          {syncing ? (
            <Spinner className="size-3.5" />
          ) : (
            <CircleCheckIcon className="size-3.5" />
          )}
          {syncing ? "Importing from your CRM..." : "Import complete"}
        </span>
        <Button
          size="xs"
          variant="outline"
          onClick={() => setSyncing((s) => !s)}
        >
          {syncing ? "Finish import" : "Run again"}
        </Button>
      </div>
      <Accordion disabled={syncing} className="border px-3">
        {sections.map((section) => (
          <AccordionItem key={section.value} value={section.value}>
            <AccordionTrigger className="items-center">
              {section.title}
              <span className="ms-auto me-2 font-normal text-muted-foreground">
                {section.count}
              </span>
              <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-aria-expanded/accordion-trigger:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {section.count} records imported. Duplicates were merged by email
              address.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
