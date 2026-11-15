"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Spinner } from "@workspace/ui/components/spinner"

export default function AutosaveStatusLabel() {
  const [title, setTitle] = React.useState("Q4 roadmap review")
  const [saving, setSaving] = React.useState(false)
  const timer = React.useRef<number | undefined>(undefined)

  function handleChange(value: string) {
    setTitle(value)
    setSaving(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setSaving(false), 800)
  }

  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="doc-title">Document title</Label>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          {saving ? (
            <Spinner className="size-3" />
          ) : (
            <CheckIcon className="size-3" />
          )}
          {saving ? "Saving..." : "Saved"}
        </span>
      </div>
      <Input
        id="doc-title"
        value={title}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}
