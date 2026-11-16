"use client"

import * as React from "react"
import {
  Globe as GlobeIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const zones = [
  { id: "America/Los_Angeles", label: "Pacific Time" },
  { id: "America/New_York", label: "Eastern Time" },
  { id: "Europe/London", label: "London" },
  { id: "Europe/Berlin", label: "Central Europe" },
  { id: "Asia/Kolkata", label: "India" },
  { id: "Asia/Tokyo", label: "Tokyo" },
]

const now = new Date(Date.UTC(2026, 10, 15, 16, 0))
const timeIn = (zone: string) =>
  now.toLocaleTimeString("en-US", {
    timeZone: zone,
    hour: "numeric",
    minute: "2-digit",
  })

export default function TimezonePopover() {
  const [zone, setZone] = React.useState(zones[1]!.id)
  const current = zones.find((z) => z.id === zone)!

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <GlobeIcon data-icon="inline-start" />
        {current.label}
      </PopoverTrigger>
      <PopoverContent className="w-64" align="start">
        <PopoverHeader>
          <PopoverTitle>Timezone</PopoverTitle>
          <PopoverDescription>
            Meeting times are shown in this zone.
          </PopoverDescription>
        </PopoverHeader>
        <RadioGroup
          value={zone}
          onValueChange={(value) => setZone(String(value))}
          className="gap-0"
        >
          {zones.map((z) => (
            <Label
              key={z.id}
              className="flex items-center gap-2 px-1 py-1.5 font-normal hover:bg-muted"
            >
              <RadioGroupItem value={z.id} />
              <span className="flex-1">{z.label}</span>
              <span className="text-[11px] text-muted-foreground tabular-nums">
                {timeIn(z.id)}
              </span>
            </Label>
          ))}
        </RadioGroup>
      </PopoverContent>
    </Popover>
  )
}
