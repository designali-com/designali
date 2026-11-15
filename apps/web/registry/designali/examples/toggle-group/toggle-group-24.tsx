"use client"

import * as React from "react"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const rows = [
  { name: "Orbit", score: 82, date: 3 },
  { name: "Juniper", score: 95, date: 1 },
  { name: "Kestrel", score: 71, date: 2 },
]

export default function SortDirectionToggleGroup() {
  const [field, setField] = React.useState<"score" | "date">("score")
  const [dir, setDir] = React.useState("desc")
  const sorted = [...rows].sort((a, b) =>
    dir === "asc" ? a[field] - b[field] : b[field] - a[field]
  )

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <ToggleGroup
          size="sm"
          value={[field]}
          onValueChange={(next) =>
            next[0] && setField(next[0] as "score" | "date")
          }
        >
          <ToggleGroupItem value="score">Score</ToggleGroupItem>
          <ToggleGroupItem value="date">Newest</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup
          size="sm"
          variant="outline"
          spacing={0}
          value={[dir]}
          onValueChange={(next) => next[0] && setDir(next[0])}
        >
          <ToggleGroupItem value="asc" aria-label="Ascending">
            <ArrowUpIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="desc" aria-label="Descending">
            <ArrowDownIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <ol className="flex flex-col divide-y border text-sm">
        {sorted.map((r) => (
          <li key={r.name} className="flex justify-between px-3 py-2">
            {r.name}
            <span className="text-muted-foreground tabular-nums">
              {r.score}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
