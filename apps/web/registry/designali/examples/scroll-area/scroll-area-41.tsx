"use client"

import * as React from "react"
import { FileTextIcon } from "lucide-react"

import { Input } from "@workspace/ui/components/input"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const docs = [
  "Webhook signing secrets and how to rotate them",
  "Retry policy for failed webhook deliveries",
  "Testing webhooks locally with the CLI",
  "Filtering webhook events by type",
  "Webhook payload reference",
  "Troubleshooting webhook timeouts",
  "Migrating from legacy webhook endpoints",
]

function Highlight({ text, query }: { text: string; query: string }) {
  const i = text.toLowerCase().indexOf(query.toLowerCase())
  if (!query || i < 0) return <>{text}</>
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-amber-200 text-foreground dark:bg-amber-500/40">
        {text.slice(i, i + query.length)}
      </mark>
      {text.slice(i + query.length)}
    </>
  )
}

export default function SearchResultsHighlight() {
  const [query, setQuery] = React.useState("webhook")
  const results = docs.filter((d) =>
    d.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search docs"
        aria-label="Search docs"
      />
      <p className="text-xs text-muted-foreground">{results.length} results</p>
      <ScrollArea className="h-56 border">
        <div className="flex flex-col divide-y">
          {results.map((d) => (
            <a
              key={d}
              href="#"
              className="flex items-center gap-2 px-3 py-2.5 text-xs hover:bg-muted/60"
            >
              <FileTextIcon className="size-3.5 shrink-0 text-muted-foreground" />
              <span>
                <Highlight text={d} query={query} />
              </span>
            </a>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
