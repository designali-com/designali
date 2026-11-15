"use client"

import * as React from "react"
import { CloudCheckIcon } from "lucide-react"

import { Spinner } from "@workspace/ui/components/spinner"
import { Textarea } from "@workspace/ui/components/textarea"

export default function AutosaveIndicator() {
  const [text, setText] = React.useState(
    "Agenda: review onboarding drop-off, finalize Q4 hiring plan."
  )
  const [saving, setSaving] = React.useState(false)
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined)

  const handleChange = (next: string) => {
    setText(next)
    setSaving(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setSaving(false), 900)
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Weekly sync notes</span>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          {saving ? (
            <Spinner className="size-3" />
          ) : (
            <CloudCheckIcon className="size-3.5" />
          )}
          {saving ? "Saving..." : "Saved"}
        </span>
      </div>
      <Textarea
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        rows={4}
      />
    </div>
  )
}
