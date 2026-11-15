"use client"

import * as React from "react"

import { Calendar } from "@workspace/ui/components/calendar"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const layouts = [
  { value: "label", label: "Label" },
  { value: "dropdown", label: "Both" },
  { value: "dropdown-months", label: "Month" },
  { value: "dropdown-years", label: "Year" },
] as const

type Layout = (typeof layouts)[number]["value"]

export default function CaptionLayoutSwitcher() {
  const [layout, setLayout] = React.useState<Layout>("dropdown")
  const year = new Date().getFullYear()

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <ToggleGroup
        variant="outline"
        size="sm"
        value={[layout]}
        onValueChange={(value) => {
          if (value[0]) setLayout(value[0] as Layout)
        }}
      >
        {layouts.map((item) => (
          <ToggleGroupItem key={item.value} value={item.value}>
            {item.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Calendar
        mode="single"
        animate
        captionLayout={layout}
        startMonth={new Date(year - 10, 0)}
        endMonth={new Date(year + 5, 11)}
        className="border"
      />
    </div>
  )
}
