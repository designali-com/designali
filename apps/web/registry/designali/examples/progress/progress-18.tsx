"use client"

import * as React from "react"

import { Progress } from "@workspace/ui/components/progress"

const paragraphs = [
  "The studio moved into the old print works in early spring, when the skylights still leaked and the floors smelled of ink.",
  "Every desk was built from reclaimed type cases. Drawers that once held lead letters now hold pencils, cables, and sketchbooks.",
  "On Fridays the team pins work in progress to the long wall and walks it together, coffee in hand, asking what could be simpler.",
  "Clients are invited to those walks too. Seeing rough work early, it turns out, builds more trust than any polished presentation.",
  "By autumn the leaks were fixed, but the ritual stayed. It is now the oldest habit the studio has, and the one people miss most when away.",
]

export default function ArticleReadingProgress() {
  const [value, setValue] = React.useState(0)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <Progress value={value} aria-label="Reading progress" className="gap-0" />
      <div
        className="h-56 overflow-y-auto p-4"
        onScroll={(event) => {
          const el = event.currentTarget
          const max = el.scrollHeight - el.clientHeight
          setValue(max > 0 ? Math.round((el.scrollTop / max) * 100) : 100)
        }}
      >
        <h3 className="mb-3 text-base font-semibold">
          A year in the print works
        </h3>
        <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
      <div className="border-t px-4 py-2 text-xs text-muted-foreground tabular-nums">
        {value}% read
      </div>
    </div>
  )
}
