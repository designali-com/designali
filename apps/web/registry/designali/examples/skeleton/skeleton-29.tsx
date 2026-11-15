"use client"

import * as React from "react"
import { FileTextIcon, SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Skeleton } from "@workspace/ui/components/skeleton"

const pages = [
  "Quarterly planning template",
  "Quality assurance checklist",
  "Quick start for new hires",
]

export default function SearchResultsSkeleton() {
  const [query, setQuery] = React.useState("")
  const [pending, setPending] = React.useState(false)

  React.useEffect(() => {
    if (!query) return
    const id = setTimeout(() => setPending(false), 700)
    return () => clearTimeout(id)
  }, [query])

  const results = pages.filter((p) =>
    p.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setPending(e.target.value.length > 0)
          }}
          placeholder="Type to search, e.g. qu"
        />
      </InputGroup>
      <div className="flex flex-col gap-1 border p-2" aria-busy={pending}>
        {!query && (
          <p className="p-2 text-xs text-muted-foreground">
            Start typing to search pages.
          </p>
        )}
        {query &&
          pending &&
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2 p-2">
              <Skeleton className="size-4" />
              <Skeleton className="h-3 flex-1" />
            </div>
          ))}
        {query &&
          !pending &&
          results.map((r) => (
            <div
              key={r}
              className="flex items-center gap-2 p-2 text-xs hover:bg-muted"
            >
              <FileTextIcon className="size-4 text-muted-foreground" />
              {r}
            </div>
          ))}
        {query && !pending && results.length === 0 && (
          <p className="p-2 text-xs text-muted-foreground">No pages found.</p>
        )}
      </div>
    </div>
  )
}
