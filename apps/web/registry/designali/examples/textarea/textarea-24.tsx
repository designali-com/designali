"use client"

import * as React from "react"

import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import { Textarea } from "@workspace/ui/components/textarea"

export default function KeyboardSubmitNotes() {
  const [notes, setNotes] = React.useState<string[]>([
    "Ask design for the empty state",
  ])
  const [draft, setDraft] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && draft.trim()) {
            e.preventDefault()
            setNotes([draft.trim(), ...notes])
            setDraft("")
          }
        }}
        placeholder="Jot something down"
        aria-label="New note"
      />
      <p className="flex items-center gap-1 text-xs text-muted-foreground">
        Press{" "}
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>Enter</Kbd>
        </KbdGroup>{" "}
        to add
      </p>
      <ul className="divide-y border text-xs">
        {notes.map((n, i) => (
          <li key={i} className="px-3 py-2">
            {n}
          </li>
        ))}
      </ul>
    </div>
  )
}
