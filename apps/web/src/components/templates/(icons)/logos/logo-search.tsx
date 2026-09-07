"use client"

import { Search, X } from "lucide-react"
import { Input } from "@workspace/ui/components/input"
import { useLogoFilter } from "./logo-filter-context"

export function LogoSearch() {
  const { query, setQuery, counts } = useLogoFilter()

  return (
    <div className="relative w-80">
      <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
      <Input
        placeholder={`Search ${counts.filtered} logos...`}
        className="pr-10 pl-10"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute top-1/2 right-3 -translate-y-1/2 transform text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
