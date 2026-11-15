"use client"

import * as React from "react"
import { RepeatIcon } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const repeats = [
  { label: "Does not repeat", value: "none" },
  { label: "Every day", value: "daily" },
  { label: "Every weekday", value: "weekdays" },
  { label: "Every week", value: "weekly" },
  { label: "Every month", value: "monthly" },
]

export default function EventRepeatSelect() {
  const [repeat, setRepeat] = React.useState<string | null>("weekly")

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center gap-2 text-sm font-medium">
        <span className="size-2.5 bg-emerald-500" />
        Team standup
      </div>
      <Select items={repeats} value={repeat} onValueChange={setRepeat}>
        <SelectTrigger className="w-full" aria-label="Repeat">
          <RepeatIcon className="text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {repeats.map((item, index) => (
            <React.Fragment key={item.value}>
              {index === 1 && <SelectSeparator />}
              <SelectItem value={item.value}>{item.label}</SelectItem>
            </React.Fragment>
          ))}
        </SelectContent>
      </Select>
      {repeat !== "none" && (
        <p className="text-xs text-muted-foreground">
          Repeats until you end the series. You can edit single occurrences
          later.
        </p>
      )}
    </div>
  )
}
