"use client"

import * as React from "react"

import { Calendar } from "@workspace/ui/components/calendar"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

const options = [
  { value: "0", label: "Sunday", region: "United States, Canada" },
  { value: "1", label: "Monday", region: "Europe, ISO 8601" },
  { value: "6", label: "Saturday", region: "Middle East" },
]

export default function WeekStartSwitcher() {
  const [start, setStart] = React.useState("1")
  const current = options.find((o) => o.value === start)!

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <div className="grid">
          <span className="text-xs font-medium">Week starts on</span>
          <span className="text-xs text-muted-foreground">
            {current.region}
          </span>
        </div>
        <NativeSelect
          size="sm"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          aria-label="Week starts on"
        >
          {options.map((o) => (
            <NativeSelectOption key={o.value} value={o.value}>
              {o.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      </div>
      <Calendar
        mode="single"
        weekStartsOn={Number(start) as 0 | 1 | 6}
        className="self-center border"
      />
    </div>
  )
}
