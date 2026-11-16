"use client"

import * as React from "react"
import {
  CopyPlus as CopyPlusIcon,
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
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

const swatches = [
  { id: "yellow", label: "Lemon", className: "bg-primary/20 text-chart-5" },
  { id: "pink", label: "Bubblegum", className: "bg-primary/20 text-chart-5" },
  { id: "green", label: "Mint", className: "bg-primary/20 text-chart-5" },
  { id: "blue", label: "Sky", className: "bg-primary/20 text-chart-5" },
]

const initialNotes = [
  {
    id: 1,
    text: "Customers want Figma files with every template",
    color: "yellow",
  },
  { id: 2, text: "Docs install step for @designali/icons is unclear", color: "pink" },
  { id: 3, text: "Dark mode previews on /blocks?", color: "blue" },
]

export default function StickyNoteColorMenu() {
  const [notes, setNotes] = React.useState(initialNotes)

  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-3">
      {notes.map((note) => {
        const swatch = swatches.find((s) => s.id === note.color)!
        return (
          <ContextMenu key={note.id}>
            <ContextMenuTrigger
              className={cn(
                "aspect-square p-3 text-xs shadow-sm data-popup-open:ring-2 data-popup-open:ring-ring/50",
                swatch.className
              )}
            >
              {note.text}
            </ContextMenuTrigger>
            <ContextMenuContent className="w-44">
              <ContextMenuRadioGroup
                value={note.color}
                onValueChange={(color) =>
                  setNotes((list) =>
                    list.map((n) => (n.id === note.id ? { ...n, color } : n))
                  )
                }
              >
                <ContextMenuLabel>Note color</ContextMenuLabel>
                {swatches.map((s) => (
                  <ContextMenuRadioItem key={s.id} value={s.id}>
                    <span
                      className={cn(
                        "size-3.5 ring-1 ring-foreground/10",
                        s.className
                      )}
                    />
                    {s.label}
                  </ContextMenuRadioItem>
                ))}
              </ContextMenuRadioGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem
                  onClick={() =>
                    setNotes((list) => [...list, { ...note, id: Date.now() }])
                  }
                >
                  <CopyPlusIcon />
                  Duplicate
                </ContextMenuItem>
                <ContextMenuItem
                  variant="destructive"
                  onClick={() =>
                    setNotes((list) => list.filter((n) => n.id !== note.id))
                  }
                >
                  <TrashIcon />
                  Delete note
                </ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        )
      })}
    </div>
  )
}
