"use client"

import * as React from "react"

import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  { name: "Lemon", className: "bg-primary/10 dark:bg-primary/40" },
  { name: "Mint", className: "bg-primary/10 dark:bg-primary/40" },
  { name: "Rose", className: "bg-primary/10 dark:bg-primary/40" },
]

export default function StickyNoteTextarea() {
  const [color, setColor] = React.useState(colors[0]!)

  return (
    <div
      className={cn(
        "flex w-full max-w-60 flex-col gap-2 p-3 shadow-md",
        color.className
      )}
    >
      <Textarea
        defaultValue="Designali studio retro: bring one thing that went well and one thing to change."
        className="min-h-32 border-0 bg-transparent text-sm focus-visible:ring-0 dark:bg-transparent"
        aria-label="Sticky note"
      />
      <div className="flex gap-1.5">
        {colors.map((c) => (
          <button
            key={c.name}
            type="button"
            aria-label={c.name}
            onClick={() => setColor(c)}
            className={cn(
              "size-4 rounded-full border",
              c.className,
              color.name === c.name && "ring-2 ring-foreground/40"
            )}
          />
        ))}
      </div>
    </div>
  )
}
