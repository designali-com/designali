"use client"

import * as React from "react"
import {
  DoorClosedIcon,
  FanIcon,
  LightbulbIcon,
  ThermometerIcon,
} from "lucide-react"

import { Toggle } from "@workspace/ui/components/toggle"

const devices = [
  { name: "Living room", icon: LightbulbIcon, on: true },
  { name: "Ceiling fan", icon: FanIcon, on: false },
  { name: "Heating", icon: ThermometerIcon, on: true },
  { name: "Front door", icon: DoorClosedIcon, on: false },
]

export default function SmartHomeDeviceTiles() {
  const [state, setState] = React.useState(devices.map((d) => d.on))

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <p className="text-xs text-muted-foreground">
        {state.filter(Boolean).length} of {devices.length} devices on
      </p>
      <div className="grid grid-cols-2 gap-2">
        {devices.map((d, i) => (
          <Toggle
            key={d.name}
            variant="outline"
            pressed={state[i]}
            onPressedChange={(on) =>
              setState((prev) => prev.map((v, j) => (j === i ? on : v)))
            }
            className="h-auto flex-col items-start gap-3 p-3 aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground"
          >
            <d.icon className="size-5" />
            <span className="flex w-full justify-between">
              <span>{d.name}</span>
              <span className="opacity-70">{state[i] ? "On" : "Off"}</span>
            </span>
          </Toggle>
        ))}
      </div>
    </div>
  )
}
