"use client"

import * as React from "react"
import {
  Bell as BellIcon,
  BellOff as BellOffIcon,
} from "@designali/icons"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const reminders = [
  { label: "At time of due date", value: "0" },
  { label: "15 minutes before", value: "15" },
  { label: "1 hour before", value: "60" },
  { label: "1 day before", value: "1440" },
  { label: "No reminder", value: "none" },
]

export default function ReminderSelectWithBadge() {
  const [reminder, setReminder] = React.useState<string | null>("60")

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3">
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-sm font-medium">
          Send project proposal to Designali client
        </span>
        <span className="text-xs text-muted-foreground">
          Due Friday, 4:00 PM
        </span>
      </div>
      <Select items={reminders} value={reminder} onValueChange={setReminder}>
        <SelectTrigger size="sm" aria-label="Reminder">
          {reminder === "none" ? (
            <BellOffIcon className="text-muted-foreground" />
          ) : (
            <BellIcon className="text-muted-foreground" />
          )}
          <SelectValue className="hidden sm:flex" />
        </SelectTrigger>
        <SelectContent
          align="end"
          alignItemWithTrigger={false}
          className="min-w-48"
        >
          {reminders.slice(0, 4).map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
          <SelectSeparator />
          <SelectItem value="none" className="text-destructive">
            No reminder
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
