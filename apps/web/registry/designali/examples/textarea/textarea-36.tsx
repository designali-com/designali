"use client"

import * as React from "react"
import { ClockIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

export default function MeetingNotesTimestamp() {
  const ref = React.useRef<null | HTMLTextAreaElement>(null)
  const [notes, setNotes] = React.useState("Weekly sync\n")

  function stamp() {
    const el = ref.current
    const pos = el?.selectionStart ?? notes.length
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
    setNotes(notes.slice(0, pos) + "[" + time + "] " + notes.slice(pos))
    el?.focus()
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="ta-meeting">Notes</Label>
        <Button variant="outline" size="xs" onClick={stamp}>
          <ClockIcon data-icon="inline-start" />
          Timestamp
        </Button>
      </div>
      <Textarea
        id="ta-meeting"
        ref={ref}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="min-h-28"
      />
    </div>
  )
}
