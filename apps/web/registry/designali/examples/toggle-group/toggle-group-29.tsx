"use client"

import * as React from "react"
import { BikeIcon, BusIcon, CarIcon, FootprintsIcon } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const modes = [
  { value: "car", icon: CarIcon, eta: "18 min", distance: "9.4 km" },
  { value: "transit", icon: BusIcon, eta: "31 min", distance: "2 transfers" },
  { value: "bike", icon: BikeIcon, eta: "27 min", distance: "8.1 km" },
  {
    value: "walk",
    icon: FootprintsIcon,
    eta: "1 h 42 min",
    distance: "7.8 km",
  },
]

export default function TravelModeToggleGroup() {
  const [mode, setMode] = React.useState("transit")
  const active = modes.find((m) => m.value === mode)!

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <ToggleGroup
        spacing={1}
        value={[mode]}
        onValueChange={(next) => next[0] && setMode(next[0])}
      >
        {modes.map((m) => (
          <ToggleGroupItem
            key={m.value}
            value={m.value}
            aria-label={m.value}
            className="capitalize"
          >
            <m.icon />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex items-baseline justify-between">
        <span className="text-xl font-semibold">{active.eta}</span>
        <span className="text-xs text-muted-foreground">{active.distance}</span>
      </div>
      <span className="text-xs text-muted-foreground">
        Harbor St to Lindell Market
      </span>
    </div>
  )
}
