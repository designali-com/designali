"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"

const actions = [
  {
    label: "Trim spaces",
    run: (s: string) =>
      s
        .split("\n")
        .map((l) => l.trim().replace(/\s{2,}/g, " "))
        .join("\n"),
  },
  {
    label: "Remove blank lines",
    run: (s: string) =>
      s
        .split("\n")
        .filter((l) => l.trim())
        .join("\n"),
  },
  { label: "lowercase", run: (s: string) => s.toLowerCase() },
  { label: "UPPERCASE", run: (s: string) => s.toUpperCase() },
]

export default function TextCleanupTextarea() {
  const [text, setText] = React.useState(
    "  Apples   x3\n\n   Pears    x2  \n\nFigs x10"
  )

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="min-h-28 font-mono whitespace-pre"
        aria-label="Text"
      />
      <div className="flex flex-wrap gap-1.5">
        {actions.map((a) => (
          <Button
            key={a.label}
            variant="outline"
            size="xs"
            onClick={() => setText(a.run(text))}
          >
            {a.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
