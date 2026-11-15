"use client"

import * as React from "react"
import { KanbanIcon, LayoutGridIcon, ListIcon } from "lucide-react"

import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const views = [
  { value: "list", label: "List", icon: ListIcon },
  { value: "grid", label: "Grid", icon: LayoutGridIcon },
  { value: "board", label: "Board", icon: KanbanIcon },
]

export default function SegmentedViewSwitcher() {
  const [view, setView] = React.useState("grid")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <RadioGroup
        value={view}
        onValueChange={(v) => setView(v as string)}
        aria-label="View"
        className="flex w-fit gap-0 border p-0.5"
      >
        {views.map((v) => (
          <label
            key={v.value}
            htmlFor={"view-" + v.value}
            className="flex cursor-pointer items-center gap-1.5 px-3 py-1.5 text-sm text-muted-foreground has-focus-visible:ring-2 has-focus-visible:ring-ring/50 has-data-checked:bg-muted has-data-checked:text-foreground"
          >
            <RadioGroupItem
              value={v.value}
              id={"view-" + v.value}
              className="sr-only"
            />
            <v.icon className="size-4" />
            {v.label}
          </label>
        ))}
      </RadioGroup>
      <p className="text-xs text-muted-foreground">
        Showing 42 assets in {view} view.
      </p>
    </div>
  )
}
