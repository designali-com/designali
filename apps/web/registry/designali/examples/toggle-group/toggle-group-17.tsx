"use client"

import * as React from "react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  { value: "graphite", label: "Graphite", className: "bg-foreground" },
  { value: "sand", label: "Sand", className: "bg-primary/20" },
  { value: "sage", label: "Sage", className: "bg-chart-1" },
  { value: "ocean", label: "Ocean", className: "bg-primary" },
]

export default function ProductColorSwatches() {
  const [color, setColor] = React.useState("sage")

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm">
        Color:{" "}
        <span className="font-medium">
          {colors.find((c) => c.value === color)?.label}
        </span>
      </span>
      <ToggleGroup
        spacing={2}
        value={[color]}
        onValueChange={(next) => next[0] && setColor(next[0])}
      >
        {colors.map((c) => (
          <ToggleGroupItem
            key={c.value}
            value={c.value}
            aria-label={c.label}
            className="size-9 rounded-full p-1 data-pressed:ring-2 data-pressed:ring-ring"
          >
            <span
              className={cn("size-full rounded-full border", c.className)}
            />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
