"use client"

import * as React from "react"

import { Calendar } from "@workspace/ui/components/calendar"
import { cn } from "@workspace/ui/lib/utils"

const upcoming = [
  { time: "10:00", title: "Standup", tone: "bg-sky-500" },
  { time: "13:30", title: "Hiring sync", tone: "bg-violet-500" },
  { time: "17:00", title: "Release go/no-go", tone: "bg-amber-500" },
]

export default function CompactSidebarCalendar() {
  const [date, setDate] = React.useState<undefined | Date>(() => new Date())

  return (
    <aside className="flex w-full max-w-60 flex-col border bg-sidebar text-sidebar-foreground">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        navLayout="after"
        showOutsideDays={false}
        className="w-full bg-transparent [--cell-size:--spacing(6)] [&_.rdp-day]:text-xs"
      />
      <div className="grid gap-1.5 border-t p-3">
        <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
          Today
        </span>
        {upcoming.map((u) => (
          <div key={u.title} className="flex items-center gap-2 text-xs">
            <span className={cn("size-1.5 rounded-full", u.tone)} />
            <span className="text-muted-foreground tabular-nums">{u.time}</span>
            <span className="truncate">{u.title}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
