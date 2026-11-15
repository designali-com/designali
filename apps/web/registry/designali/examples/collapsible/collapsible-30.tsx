"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { cn } from "@workspace/ui/lib/utils"

const events = [
  { time: "09:00", title: "Design standup", color: "bg-sky-500" },
  {
    time: "10:30",
    title: "Customer interview: Halvorsen Labs",
    color: "bg-violet-500",
  },
  { time: "13:00", title: "Lunch with Dana", color: "bg-amber-500" },
  { time: "15:00", title: "Sprint planning", color: "bg-emerald-500" },
  { time: "17:30", title: "Gym", color: "bg-rose-500" },
]

export default function AgendaMoreEvents() {
  const [open, setOpen] = React.useState(false)
  const renderEvent = (event: (typeof events)[number]) => (
    <div key={event.time} className="flex items-center gap-3 py-1.5 text-sm">
      <span className={cn("h-8 w-1", event.color)} />
      <span className="w-12 text-xs text-muted-foreground">{event.time}</span>
      <span className="truncate">{event.title}</span>
    </div>
  )
  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="w-full max-w-xs border p-3"
    >
      <div className="mb-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold">14</span>
        <span className="text-sm text-muted-foreground">Thursday</span>
      </div>
      {events.slice(0, 2).map(renderEvent)}
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        {events.slice(2).map(renderEvent)}
      </CollapsibleContent>
      <CollapsibleTrigger
        render={<Button variant="ghost" size="xs" className="mt-1" />}
      >
        {open ? "Show less" : "+" + (events.length - 2) + " more"}
      </CollapsibleTrigger>
    </Collapsible>
  )
}
