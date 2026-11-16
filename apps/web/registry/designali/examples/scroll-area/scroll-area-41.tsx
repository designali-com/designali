"use client"

import * as React from "react"
import {
  FileText as FileTextIcon,
} from "@designali/icons"

import { Input } from "@workspace/ui/components/input"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const docs = [
  "Installing @designali/icons",
  "Using @designali/logos in Next.js",
  "Customizing blocks with Tailwind CSS",
  "Theming blocks with semantic tokens",
  "Apple device mockups reference",
  "Troubleshooting icons imports",
  "Migrating from Dalim UI to designali",
]

function Highlight({ text, query }: { text: string; query: string }) {
  const i = text.toLowerCase().indexOf(query.toLowerCase())
  if (!query || i < 0) return <>{text}</>
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-primary/20 text-foreground dark:bg-primary/40">
        {text.slice(i, i + query.length)}
      </mark>
      {text.slice(i + query.length)}
    </>
  )
}

export default function SearchResultsHighlight() {
  const [query, setQuery] = React.useState("icons")
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
