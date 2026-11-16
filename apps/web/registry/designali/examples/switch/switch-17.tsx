"use client"

import * as React from "react"
import {
  Fan as FanIcon,
  Heater as HeaterIcon,
  Lamp as LampIcon,
  Tv as TvIcon,
} from "@designali/icons"

import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const devices = [
  {
    id: "lamp",
    name: "Desk lamp",
    room: "Designali studio",
    icon: LampIcon,
    on: true,
  },
  { id: "fan", name: "Ceiling fan", room: "Meeting room", icon: FanIcon, on: false },
  {
    id: "tv",
    name: "Review display",
    room: "Design room",
    icon: TvIcon,
    on: false,
  },
  {
    id: "heater",
    name: "Space heater",
    room: "Office",
    icon: HeaterIcon,
    on: true,
  },
]

export default function SmartHomeDevices() {
  const [power, setPower] = React.useState(() =>
    Object.fromEntries(devices.map((device) => [device.id, device.on]))
  )
  const activeCount = Object.values(power).filter(Boolean).length

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <p className="text-xs text-muted-foreground">
        {activeCount} of {devices.length} devices on
      </p>
      {devices.map((device) => (
        <div key={device.id} className="flex items-center gap-3 border p-3">
          <div
            className={cn(
              "flex size-9 items-center justify-center",
              power[device.id]
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            <device.icon className="size-4" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{device.name}</p>
            <p className="text-xs text-muted-foreground">{device.room}</p>
          </div>
          <Switch
            checked={power[device.id]}
            onCheckedChange={(checked) =>
              setPower((p) => ({ ...p, [device.id]: checked }))
            }
            aria-label={device.name}
          />
        </div>
      ))}
    </div>
  )
}
