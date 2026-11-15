"use client"

import * as React from "react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const topics = [
  "Design",
  "Engineering",
  "Product",
  "Marketing",
  "Data",
  "Sales",
  "Support",
]
const MAX = 3

export default function LimitedSelectionToggleGroup() {
  const [picked, setPicked] = React.useState<string[]>(["Design"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Pick up to {MAX} topics</span>
        <span className="text-xs text-muted-foreground tabular-nums">
          {picked.length}/{MAX}
        </span>
      </div>
      <ToggleGroup
        multiple
        variant="outline"
        spacing={2}
        value={picked}
        onValueChange={(next) => next.length <= MAX && setPicked(next)}
        className="flex-wrap"
      >
        {topics.map((t) => (
          <ToggleGroupItem
            key={t}
            value={t}
            disabled={picked.length >= MAX && !picked.includes(t)}
          >
            {t}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
