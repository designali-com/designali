"use client"

import * as React from "react"
import {
  BluetoothIcon,
  PlaneIcon,
  RadioTowerIcon,
  WifiIcon,
} from "lucide-react"

import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const tiles = [
  { id: "wifi", label: "Wi-Fi", icon: WifiIcon, on: true, detail: "Home_5G" },
  {
    id: "bluetooth",
    label: "Bluetooth",
    icon: BluetoothIcon,
    on: true,
    detail: "2 devices",
  },
  {
    id: "airplane",
    label: "Airplane",
    icon: PlaneIcon,
    on: false,
    detail: "Off",
  },
  {
    id: "hotspot",
    label: "Hotspot",
    icon: RadioTowerIcon,
    on: false,
    detail: "Off",
  },
]

export default function QuickSettingsTiles() {
  const [state, setState] = React.useState(() =>
    Object.fromEntries(tiles.map((tile) => [tile.id, tile.on]))
  )

  return (
    <div className="grid w-full max-w-xs grid-cols-2 gap-2">
      {tiles.map((tile) => (
        <label
          key={tile.id}
          className={cn(
            "flex cursor-pointer flex-col gap-3 border p-3 transition-colors",
            state[tile.id] ? "border-primary/40 bg-primary/5" : "bg-background"
          )}
        >
          <div className="flex items-center justify-between">
            <tile.icon className="size-4" />
            <Switch
              size="sm"
              checked={state[tile.id]}
              onCheckedChange={(checked) =>
                setState((s) => ({ ...s, [tile.id]: checked }))
              }
            />
          </div>
          <div>
            <p className="text-sm font-medium">{tile.label}</p>
            <p className="text-xs text-muted-foreground">
              {state[tile.id] ? tile.detail.replace("Off", "On") : "Off"}
            </p>
          </div>
        </label>
      ))}
    </div>
  )
}
