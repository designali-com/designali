"use client"

import * as React from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const levels = [50, 100, 150, 200]

export default function CanvasZoomMenu() {
  const [zoom, setZoom] = React.useState(100)

  return (
    <div className="flex items-center gap-1 border p-1">
      <Button
        variant="ghost"
        size="icon-xs"
        aria-label="Zoom out"
        onClick={() => setZoom((z) => Math.max(10, z - 10))}
      >
        <MinusIcon />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="xs" className="w-16 tabular-nums" />
          }
        >
          {zoom}%
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-44">
          <DropdownMenuItem
            closeOnClick={false}
            onClick={() => setZoom((z) => z + 10)}
          >
            Zoom in
            <DropdownMenuShortcut>⌘+</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            closeOnClick={false}
            onClick={() => setZoom((z) => Math.max(10, z - 10))}
          >
            Zoom out
            <DropdownMenuShortcut>⌘-</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setZoom(84)}>
            Zoom to fit
            <DropdownMenuShortcut>⇧1</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={String(zoom)}
            onValueChange={(value) => setZoom(Number(value))}
          >
            {levels.map((level) => (
              <DropdownMenuRadioItem key={level} value={String(level)}>
                {level}%
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        variant="ghost"
        size="icon-xs"
        aria-label="Zoom in"
        onClick={() => setZoom((z) => z + 10)}
      >
        <PlusIcon />
      </Button>
    </div>
  )
}
