"use client"

import * as React from "react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const days = [
  { value: "mon", label: "M", name: "Mon" },
  { value: "tue", label: "T", name: "Tue" },
  { value: "wed", label: "W", name: "Wed" },
  { value: "thu", label: "T", name: "Thu" },
  { value: "fri", label: "F", name: "Fri" },
  { value: "sat", label: "S", name: "Sat" },
  { value: "sun", label: "S", name: "Sun" },
]

export default function RecurringWeekdayPicker() {
  const [selected, setSelected] = React.useState<string[]>([
    "mon",
    "wed",
    "fri",
  ])
  const names = days
    .filter((d) => selected.includes(d.value))
    .map((d) => d.name)

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium">Repeat on</span>
      <ToggleGroup
        multiple
        variant="outline"
        spacing={1}
        value={selected}
        onValueChange={setSelected}
      >
        {days.map((d) => (
          <ToggleGroupItem
            key={d.value}
            value={d.value}
            aria-label={d.name}
            className="rounded-full"
          >
            {d.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <span className="text-xs text-muted-foreground">
        {names.length
          ? "Weekly on " + names.join(", ")
          : "Pick at least one day"}
      </span>
    </div>
  )
}
