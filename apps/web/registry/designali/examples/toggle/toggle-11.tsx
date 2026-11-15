"use client"

import * as React from "react"
import { PinIcon, PinOffIcon } from "lucide-react"

import { Toggle } from "@workspace/ui/components/toggle"

const initialNotes = [
  {
    id: 1,
    title: "Grocery run",
    body: "Oat milk, lemons, basil",
    pinned: false,
  },
  {
    id: 2,
    title: "Wi-Fi guest",
    body: "Network: Lantern / pass: amber-42",
    pinned: true,
  },
  {
    id: 3,
    title: "Book club",
    body: "Finish chapter 9 by Friday",
    pinned: false,
  },
]

export default function PinnedNotesToggle() {
  const [notes, setNotes] = React.useState(initialNotes)
  const sorted = [...notes].sort((a, b) => Number(b.pinned) - Number(a.pinned))

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {sorted.map((n) => (
        <div key={n.id} className="flex items-start gap-3 border p-3">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium">{n.title}</p>
            <p className="truncate text-xs text-muted-foreground">{n.body}</p>
          </div>
          <Toggle
            size="sm"
            pressed={n.pinned}
            onPressedChange={(pinned) =>
              setNotes((prev) =>
                prev.map((x) => (x.id === n.id ? { ...x, pinned } : x))
              )
            }
            aria-label={n.pinned ? "Unpin note" : "Pin note"}
          >
            {n.pinned ? <PinIcon className="fill-current" /> : <PinOffIcon />}
          </Toggle>
        </div>
      ))}
    </div>
  )
}
