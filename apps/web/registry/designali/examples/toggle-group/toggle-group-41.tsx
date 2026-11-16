"use client"

import * as React from "react"
import {
  Columns2 as Columns2Icon,
  Columns3 as Columns3Icon,
  Square as SquareIcon,
} from "@designali/icons"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { cn } from "@workspace/ui/lib/utils"

const tiles = [
  "from-chart-1 to-primary/20",
  "from-chart-1 to-primary/20",
  "from-chart-1 to-primary/20",
  "from-chart-1 to-primary/20",
  "from-chart-1 to-primary/20",
  "from-chart-1 to-primary/20",
]
const cols: Record<string, string> = {
  "1": "grid-cols-1",
  "2": "grid-cols-2",
  "3": "grid-cols-3",
}

export default function GalleryColumnsToggleGroup() {
  const [columns, setColumns] = React.useState("3")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <ToggleGroup
        size="sm"
        variant="outline"
        spacing={0}
        value={[columns]}
        onValueChange={(next) => next[0] && setColumns(next[0])}
        className="self-end"
      >
        <ToggleGroupItem value="1" aria-label="One column">
          <SquareIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="2" aria-label="Two columns">
          <Columns2Icon />
        </ToggleGroupItem>
        <ToggleGroupItem value="3" aria-label="Three columns">
          <Columns3Icon />
        </ToggleGroupItem>
      </ToggleGroup>
      <div
        className={cn("grid max-h-56 gap-1.5 overflow-y-auto", cols[columns])}
      >
        {tiles.map((t) => (
          <div key={t} className={cn("aspect-video bg-gradient-to-br", t)} />
        ))}
      </div>
    </div>
  )
}
