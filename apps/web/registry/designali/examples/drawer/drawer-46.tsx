"use client"

import * as React from "react"
import {
  Bluetooth as BluetoothIcon,
  Moon as MoonIcon,
  Plane as PlaneIcon,
  SlidersVertical as SlidersVerticalIcon,
  Sun as SunIcon,
  Wifi as WifiIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { Slider } from "@workspace/ui/components/slider"
import { cn } from "@workspace/ui/lib/utils"

const controls = [
  { id: "wifi", label: "Wi-Fi", icon: WifiIcon, on: true },
  { id: "bt", label: "Bluetooth", icon: BluetoothIcon, on: true },
  { id: "focus", label: "Focus", icon: MoonIcon, on: false },
  { id: "air", label: "Airplane", icon: PlaneIcon, on: false },
]

export default function FloatingInsetDrawer() {
  const [state, setState] = React.useState(controls)
  const [brightness, setBrightness] = React.useState(70)

  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>
        <SlidersVerticalIcon data-icon="inline-start" />
        Quick settings
      </DrawerTrigger>
      <DrawerContent className="border [--drawer-inset:0.75rem] data-[swipe-direction=down]:border sm:mx-auto sm:max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Quick settings</DrawerTitle>
          <DrawerDescription className="sr-only">
            Toggle connectivity and display
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 p-4">
          <div className="grid grid-cols-4 gap-2">
            {state.map((control) => (
              <button
                key={control.id}
                type="button"
                aria-pressed={control.on}
                onClick={() =>
                  setState((current) =>
                    current.map((item) =>
                      item.id === control.id ? { ...item, on: !item.on } : item
                    )
                  )
                }
                className={cn(
                  "flex flex-col items-center gap-1.5 p-2",
                  control.on ? "bg-primary text-primary-foreground" : "bg-muted"
                )}
              >
                <control.icon className="size-5" />
                <span className="text-[11px]">{control.label}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <SunIcon className="size-4 text-muted-foreground" />
            <Slider
              value={[brightness]}
              onValueChange={(value) =>
                setBrightness(
                  typeof value === "number" ? value : (value[0] ?? 0)
                )
              }
              aria-label="Brightness"
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
