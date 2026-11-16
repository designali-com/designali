"use client"

import * as React from "react"
import {
  CopyPlus as CopyPlusIcon,
  Palette as PaletteIcon,
  Trash as TrashIcon,
} from "@designali/icons"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  { id: "sky", label: "Sky", className: "bg-primary" },
  { id: "emerald", label: "Emerald", className: "bg-primary" },
  { id: "rose", label: "Rose", className: "bg-primary" },
  { id: "amber", label: "Amber", className: "bg-primary" },
]

export default function CalendarEventMenu() {
  const [rsvp, setRsvp] = React.useState("yes")
  const [color, setColor] = React.useState("sky")
  const active = colors.find((c) => c.id === color)!

  return (
    <div className="flex w-full max-w-xs gap-2 border p-2">
      <div className="flex flex-col gap-6 pt-1 text-[11px] text-muted-foreground">
        <span>10 AM</span>
        <span>11 AM</span>
      </div>
      <ContextMenu>
        <ContextMenuTrigger
          className={cn(
            "flex h-20 flex-1 flex-col gap-0.5 border-s-4 bg-muted p-2 text-xs data-popup-open:ring-2 data-popup-open:ring-ring/40",
            rsvp === "no" && "line-through opacity-60"
          )}
        >
          <span className="flex items-center gap-1.5 font-medium">
            <span className={cn("size-2 rounded-full", active.className)} />
            Designali client kickoff
          </span>
          <span className="text-muted-foreground">
            10:00 – 11:30 · Studio call
          </span>
          <span className="text-muted-foreground capitalize">RSVP: {rsvp}</span>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <ContextMenuRadioGroup value={rsvp} onValueChange={setRsvp}>
            <ContextMenuLabel>Going?</ContextMenuLabel>
            <ContextMenuRadioItem value="yes">Yes</ContextMenuRadioItem>
            <ContextMenuRadioItem value="maybe">Maybe</ContextMenuRadioItem>
            <ContextMenuRadioItem value="no">No</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <PaletteIcon />
              Event color
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-36">
              <ContextMenuRadioGroup value={color} onValueChange={setColor}>
                {colors.map((c) => (
                  <ContextMenuRadioItem key={c.id} value={c.id}>
                    <span className={cn("size-3 rounded-full", c.className)} />
                    {c.label}
                  </ContextMenuRadioItem>
                ))}
              </ContextMenuRadioGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuGroup>
            <ContextMenuItem>
              <CopyPlusIcon />
              Duplicate
            </ContextMenuItem>
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete event
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
