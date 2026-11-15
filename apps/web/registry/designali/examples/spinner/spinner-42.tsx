"use client"

import * as React from "react"

import { Spinner } from "@workspace/ui/components/spinner"

const messages = [
  "Analyzing your spreadsheet",
  "Detecting column types",
  "Matching duplicate rows",
  "Building preview",
]

export default function RotatingStatusMessages() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % messages.length),
      1600
    )
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex w-full max-w-xs items-center gap-3 border px-4 py-3">
      <Spinner className="text-primary" />
      <span
        key={index}
        className="animate-in text-sm fade-in slide-in-from-bottom-1"
      >
        {messages[index]}...
      </span>
      <span className="ml-auto text-xs text-muted-foreground tabular-nums">
        {index + 1}/{messages.length}
      </span>
    </div>
  )
}
