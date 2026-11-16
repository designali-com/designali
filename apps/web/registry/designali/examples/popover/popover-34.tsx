"use client"

import * as React from "react"
import {
  Clock as ClockIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const hours = Array.from({ length: 12 }, (_, i) => i + 1)
const minutes = ["00", "15", "30", "45"]

export default function TimePickerPopover() {
  const [hour, setHour] = React.useState(9)
  const [minute, setMinute] = React.useState("30")
  const [period, setPeriod] = React.useState("AM")

  return (
    <div className="flex w-full max-w-[12rem] flex-col gap-1.5">
      <Label>Start time</Label>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              className="justify-start font-normal tabular-nums"
            />
          }
        >
          <ClockIcon data-icon="inline-start" />
          {hour}:{minute} {period}
        </PopoverTrigger>
        <PopoverContent className="w-auto flex-row gap-1 p-1.5" align="start">
          <div className="flex h-44 flex-col overflow-y-auto">
            {hours.map((h) => (
              <Button
                key={h}
                size="sm"
                variant={h === hour ? "default" : "ghost"}
                className="tabular-nums"
                onClick={() => setHour(h)}
              >
                {String(h).padStart(2, "0")}
              </Button>
            ))}
          </div>
          <div className="flex flex-col">
            {minutes.map((m) => (
              <Button
                key={m}
                size="sm"
                variant={m === minute ? "default" : "ghost"}
                className="tabular-nums"
                onClick={() => setMinute(m)}
              >
                {m}
              </Button>
            ))}
          </div>
          <div className="flex flex-col">
            {["AM", "PM"].map((p) => (
              <Button
                key={p}
                size="sm"
                variant={p === period ? "default" : "ghost"}
                onClick={() => setPeriod(p)}
              >
                {p}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
