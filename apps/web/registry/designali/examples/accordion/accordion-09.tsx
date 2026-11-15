"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

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
    title: "Installing the CLI",
    body: "Run the installer for your platform, then restart your terminal so the binary is on your PATH.",
  },
  {
    value: "auth",
    title: "Authenticating",
    body: "Run the login command and paste the one-time code shown in your browser.",
  },
  {
    value: "deploy",
    title: "Your first deploy",
    body: "From your project folder, run deploy. The CLI detects the framework and uploads a build.",
  },
  {
    value: "rollback",
    title: "Rolling back",
    body: "Open Deployments, pick a previous build and choose Promote to production.",
  },
]

export default function AccordionExpandCollapseAll() {
  const [open, setOpen] = React.useState<string[]>(["install"])
  const allOpen = open.length === topics.length

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Getting started</p>
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
