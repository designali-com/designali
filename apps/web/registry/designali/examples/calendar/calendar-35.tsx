"use client"

import * as React from "react"
import { GlobeIcon } from "lucide-react"

import { Calendar } from "@workspace/ui/components/calendar"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

const zones = [
  { value: "America/Los_Angeles", label: "Los Angeles" },
  { value: "Europe/London", label: "London" },
  { value: "Asia/Tokyo", label: "Tokyo" },
  { value: "Pacific/Auckland", label: "Auckland" },
]

export default function TimeZoneCalendar() {
  const [zone, setZone] = React.useState("Asia/Tokyo")
  const [date, setDate] = React.useState<undefined | Date>()
  const [now] = React.useState(() => new Date())
  const fmt = (d: Date, opts: Intl.DateTimeFormatOptions) =>
    d.toLocaleString("en-US", { timeZone: zone, ...opts })

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-xs font-medium">
          <GlobeIcon className="size-4 text-muted-foreground" />
          Time zone
        </span>
        <NativeSelect
          size="sm"
          value={zone}
          onChange={(e) => setZone(e.target.value)}
          aria-label="Time zone"
        >
          {zones.map((z) => (
            <NativeSelectOption key={z.value} value={z.value}>
              {z.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>
      </div>
      <Calendar
        key={zone}
        mode="single"
        timeZone={zone}
        selected={date}
        onSelect={setDate}
        className="self-center border"
      />
      <p className="text-center text-xs text-muted-foreground">
        It&apos;s{" "}
        {fmt(now, {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        })}{" "}
        in {zones.find((z) => z.value === zone)?.label}
        {date
          ? " · Selected " + fmt(date, { month: "short", day: "numeric" })
          : ""}
      </p>
    </div>
  )
}
