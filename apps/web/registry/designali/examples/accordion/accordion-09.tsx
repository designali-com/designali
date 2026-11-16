"use client"

import * as React from "react"
import {
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"

const topics = [
  {
    value: "install",
    title: "Installing a Designali block",
    body: "Copy the install command from designali.com/blocks and run it inside your Next.js project.",
  },
  {
    value: "auth",
    title: "Adding icons",
    body: "Install @designali/icons and import any of the 4000+ icons by name.",
  },
  {
    value: "deploy",
    title: "Your first deploy",
    body: "Push to GitHub and import the repo on Vercel — Next.js is detected automatically.",
  },
  {
    value: "rollback",
    title: "Rolling back",
    body: "Open Deployments on Vercel, pick a previous build and choose Promote to production.",
  },
]

export default function AccordionExpandCollapseAll() {
  const [open, setOpen] = React.useState<string[]>(["install"])
  const allOpen = open.length === topics.length

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Getting started with Designali</p>
        <div className="flex gap-1">
          <Button
            size="xs"
            variant="outline"
            disabled={allOpen}
            onClick={() => setOpen(topics.map((t) => t.value))}
          >
            Expand all
          </Button>
          <Button
            size="xs"
            variant="ghost"
            disabled={open.length === 0}
            onClick={() => setOpen([])}
          >
            Collapse all
          </Button>
        </div>
      </div>
      <Accordion
        multiple
        value={open}
        onValueChange={(value) => setOpen(value as string[])}
        className="border px-3"
      >
        {topics.map((topic) => (
          <AccordionItem key={topic.value} value={topic.value}>
            <AccordionTrigger>
              {topic.title}
              <ChevronDownIcon
                data-slot="accordion-trigger-icon"
                className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
              />
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {topic.body}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="text-xs text-muted-foreground">
        {open.length} of {topics.length} sections open
      </p>
    </div>
  )
}
