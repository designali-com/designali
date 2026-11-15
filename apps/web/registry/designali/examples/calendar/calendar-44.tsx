"use client"

import * as React from "react"
import { format } from "date-fns"

import { Calendar } from "@workspace/ui/components/calendar"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const styles = {
  narrow: { weekday: "EEEEE", caption: "MMM ''yy" },
  short: { weekday: "EEEEEE", caption: "MMMM yyyy" },
  long: { weekday: "EEE", caption: "MMMM, yyyy" },
} as const

type Style = keyof typeof styles

export default function WeekdayFormatOptions() {
  const [style, setStyle] = React.useState<Style>("narrow")
  const current = styles[style]

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <ToggleGroup
        variant="outline"
        size="sm"
        value={[style]}
        onValueChange={(v) => {
          if (v[0]) setStyle(v[0] as Style)
        }}
      >
        <ToggleGroupItem value="narrow">M</ToggleGroupItem>
        <ToggleGroupItem value="short">Mo</ToggleGroupItem>
        <ToggleGroupItem value="long">Mon</ToggleGroupItem>
      </ToggleGroup>
      <Calendar
        mode="single"
        formatters={{
          formatWeekdayName: (d) => format(d, current.weekday),
          formatCaption: (m) => format(m, current.caption),
        }}
        className="border"
      />
    </div>
  )
}
