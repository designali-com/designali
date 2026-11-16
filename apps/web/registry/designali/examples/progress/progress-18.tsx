"use client"

import * as React from "react"

import { Progress } from "@workspace/ui/components/progress"

const paragraphs = [
  "Designali started with a simple idea: thoughtful design should ship as production-ready code.",
  "Every block begins in Figma. Spacing, type and color are settled there before a single component is written.",
  "Then it moves to code: Next.js, React, TypeScript and Tailwind CSS, built to drop straight into real projects.",
  "Clients see rough work early. Sharing work in progress builds more trust than any polished presentation.",
  "Today the library holds 460+ blocks, 240+ landing pages and 2300+ UI examples, and it keeps growing.",
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
          Design se code tak
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
