"use client"

import * as React from "react"
import { CalendarClockIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

export default function ScheduledPublishSwitch() {
  const [scheduled, setScheduled] = React.useState(true)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="schedule-post" className="flex items-center gap-2">
          <CalendarClockIcon className="size-4" />
          Schedule for later
        </Label>
        <Switch
          id="schedule-post"
          checked={scheduled}
          onCheckedChange={setScheduled}
        />
      </div>
      {scheduled && (
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="date"
            defaultValue="2026-12-01"
            aria-label="Publish date"
          />
          <Input type="time" defaultValue="08:30" aria-label="Publish time" />
        </div>
      )}
      <Button size="sm">{scheduled ? "Schedule post" : "Publish now"}</Button>
    </div>
  )
}
