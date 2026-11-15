"use client"

import * as React from "react"
import { CalendarIcon, EyeIcon, EyeOffIcon } from "lucide-react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import { cn } from "@workspace/ui/lib/utils"

const calendars = [
  {
    name: "Work",
    tone: "border-chart-1 data-checked:border-chart-1 data-checked:bg-chart-1",
  },
  {
    name: "Personal",
    tone: "border-chart-2 data-checked:border-chart-2 data-checked:bg-chart-2",
  },
  {
    name: "Team offsite",
    tone: "border-chart-3 data-checked:border-chart-3 data-checked:bg-chart-3",
  },
  {
    name: "Holidays",
    tone: "border-chart-4 data-checked:border-chart-4 data-checked:bg-chart-4",
  },
]

export default function CalendarVisibilityList() {
  const [visible, setVisible] = React.useState<string[]>([
    "Work",
    "Personal",
    "Holidays",
  ])

  return (
    <div className="flex w-full max-w-[14rem] flex-col gap-1">
      <span className="flex items-center gap-2 px-2 py-1 text-xs font-medium text-muted-foreground">
        <CalendarIcon className="size-3.5" />
        My calendars
      </span>
      {calendars.map((calendar) => (
        <label
          key={calendar.name}
          className="group/cal flex cursor-pointer items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted"
        >
          <Checkbox
            checked={visible.includes(calendar.name)}
            onCheckedChange={(checked) =>
              setVisible((list) =>
                checked
                  ? [...list, calendar.name]
                  : list.filter((n) => n !== calendar.name)
              )
            }
            className={cn("data-checked:text-background", calendar.tone)}
          />
          <span className="flex-1">{calendar.name}</span>
          {visible.includes(calendar.name) ? (
            <EyeIcon className="size-3.5 text-muted-foreground opacity-0 group-hover/cal:opacity-100" />
          ) : (
            <EyeOffIcon className="size-3.5 text-muted-foreground" />
          )}
        </label>
      ))}
    </div>
  )
}
