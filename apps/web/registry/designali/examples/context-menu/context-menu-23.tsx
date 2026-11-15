"use client"

import * as React from "react"
import {
  CopyIcon,
  MapPinIcon,
  MapPinPlusIcon,
  NavigationIcon,
  RulerIcon,
} from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

export default function MapPinDropMenu() {
  const [point, setPoint] = React.useState({ x: 50, y: 50 })
  const [pins, setPins] = React.useState<{ x: number; y: number }[]>([])
  const lat = (45.55 - point.y * 0.001).toFixed(4)
  const lng = (-122.7 + point.x * 0.001).toFixed(4)

  return (
    <ContextMenu>
      <ContextMenuTrigger
        onContextMenu={(event) => {
          const rect = event.currentTarget.getBoundingClientRect()
          setPoint({
            x: Math.round(((event.clientX - rect.left) / rect.width) * 100),
            y: Math.round(((event.clientY - rect.top) / rect.height) * 100),
          })
        }}
        className="relative h-56 w-full max-w-md overflow-hidden border bg-emerald-50 dark:bg-emerald-950/30"
      >
        <svg
          className="absolute inset-0 size-full text-emerald-200 dark:text-emerald-900"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 Q 30 40 55 62 T 100 50"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
          />
          <path
            d="M40 0 L 48 100"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
        </svg>
        {pins.map((pin, index) => (
          <MapPinIcon
            key={index}
            className="absolute size-5 -translate-x-1/2 -translate-y-full fill-red-500 text-red-700"
            style={{ left: pin.x + "%", top: pin.y + "%" }}
          />
        ))}
        <span className="absolute start-2 bottom-2 bg-background/80 px-1.5 py-0.5 text-[11px]">
          {pins.length} pins
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuLabel className="font-mono">
            {lat}, {lng}
          </ContextMenuLabel>
          <ContextMenuItem onClick={() => setPins((p) => [...p, point])}>
            <MapPinPlusIcon />
            Drop pin here
          </ContextMenuItem>
          <ContextMenuItem>
            <NavigationIcon />
            Directions from here
          </ContextMenuItem>
          <ContextMenuItem>
            <RulerIcon />
            Measure distance
          </ContextMenuItem>
          <ContextMenuItem>
            <CopyIcon />
            Copy coordinates
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem disabled={!pins.length} onClick={() => setPins([])}>
            Clear all pins
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
