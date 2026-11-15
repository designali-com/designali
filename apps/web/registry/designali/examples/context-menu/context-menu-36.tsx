"use client"

import * as React from "react"
import { CopyPlusIcon, TrashIcon } from "lucide-react"

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
  { id: "yellow", label: "Lemon", className: "bg-yellow-200 text-yellow-950" },
  { id: "pink", label: "Bubblegum", className: "bg-pink-200 text-pink-950" },
  { id: "green", label: "Mint", className: "bg-emerald-200 text-emerald-950" },
  { id: "blue", label: "Sky", className: "bg-sky-200 text-sky-950" },
]

const initialNotes = [
  {
    id: 1,
    text: "Users want CSV export from the reports page",
    color: "yellow",
  },
  { id: 2, text: "Onboarding step 3 is confusing", color: "pink" },
  { id: 3, text: "Dark mode toggle in the header?", color: "blue" },
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
