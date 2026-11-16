"use client"

import * as React from "react"
import {
  BookOpen as BookOpenIcon,
} from "@designali/icons"

import { Toggle } from "@workspace/ui/components/toggle"
import { cn } from "@workspace/ui/lib/utils"

export default function ReadingModeToggle() {
  const [reader, setReader] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="flex items-center justify-between border-b px-3 py-1.5">
        <span className="truncate text-xs text-muted-foreground">
          field-notes.example/slow-mornings
        </span>
        <Toggle
          size="sm"
          pressed={reader}
          onPressedChange={setReader}
          aria-label="Reader mode"
        >
          <BookOpenIcon />
        </Toggle>
      </div>
      <article
        className={cn(
          "p-4 transition-colors",
          reader &&
            "bg-amber-50 font-serif text-amber-950 dark:bg-amber-950/30 dark:text-amber-100"
        )}
      >
        <h3 className={cn("font-semibold", reader ? "text-lg" : "text-sm")}>
          Design se code tak
        </h3>
        <p
          className={cn(
            "mt-1 leading-relaxed",
            reader ? "text-base" : "text-xs text-muted-foreground"
          )}
        >
          Where thoughtful design meets production-ready code. I design and
          build digital experiences that look great and work beautifully.
        </p>
      </article>
    </div>
  )
}
