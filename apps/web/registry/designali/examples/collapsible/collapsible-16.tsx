"use client"

import * as React from "react"
import {
  Copy as CopyIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const lines = [
  "import { createClient } from './client'",
  "",
  "const client = createClient({",
  "  apiKey: process.env.DESIGNALI_KEY,",
  "  region: 'eu-west',",
  "})",
  "",
  "const invoices = await client.invoices.list({",
  "  status: 'open',",
  "  limit: 20,",
  "})",
  "",
  "console.log(invoices.data.length)",
]

export default function CodeSnippetExpand() {
  const [open, setOpen] = React.useState(false)
  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="w-full max-w-md border bg-muted/40"
    >
      <div className="flex items-center justify-between border-b px-3 py-2 text-xs">
        <span className="font-sans">list-invoices.ts</span>
        <Button variant="ghost" size="icon-xs" aria-label="Copy code">
          <CopyIcon />
        </Button>
      </div>
      <div className="relative">
        <pre className="overflow-x-auto px-3 pt-3 font-mono text-xs leading-5">
          {lines.slice(0, 4).join("\n")}
        </pre>
        <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
          <pre className="overflow-x-auto px-3 font-mono text-xs leading-5">
            {lines.slice(4).join("\n")}
          </pre>
        </CollapsibleContent>
        {!open && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent" />
        )}
      </div>
      <CollapsibleTrigger
        render={<Button variant="ghost" size="sm" className="w-full" />}
      >
        {open ? "Collapse" : "Expand " + lines.length + " lines"}
      </CollapsibleTrigger>
    </Collapsible>
  )
}
