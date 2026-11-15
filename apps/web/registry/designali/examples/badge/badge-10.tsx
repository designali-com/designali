"use client"

import * as React from "react"
import { XIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

const initial = ["Remote", "Full-time", "Senior", "Design", "Europe"]

export default function RemovableFilterChips() {
  const [filters, setFilters] = React.useState(initial)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex flex-wrap gap-1.5">
        {filters.map((filter) => (
          <Badge key={filter} variant="secondary" className="pe-1">
            {filter}
            <button
              type="button"
              aria-label={"Remove " + filter}
              onClick={() =>
                setFilters((current) =>
                  current.filter((value) => value !== filter)
                )
              }
              className="flex size-3.5 items-center justify-center hover:bg-foreground/10"
            >
              <XIcon className="size-3" />
            </button>
          </Badge>
        ))}
        {filters.length === 0 && (
          <span className="text-xs text-muted-foreground">
            No filters applied
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <Button
          size="xs"
          variant="ghost"
          onClick={() => setFilters([])}
          disabled={filters.length === 0}
        >
          Clear all
        </Button>
        <Button size="xs" variant="ghost" onClick={() => setFilters(initial)}>
          Reset
        </Button>
      </div>
    </div>
  )
}
