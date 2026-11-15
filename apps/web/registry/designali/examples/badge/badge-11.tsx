"use client"

import * as React from "react"
import { XIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

export default function TagInputBadges() {
  const [tags, setTags] = React.useState(["onboarding", "billing"])
  const [draft, setDraft] = React.useState("")

  function addTag() {
    const value = draft.trim().toLowerCase()
    if (value && !tags.includes(value)) setTags([...tags, value])
    setDraft("")
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <label htmlFor="ticket-tags" className="text-sm font-medium">
        Ticket tags
      </label>
      <div className="flex flex-wrap items-center gap-1.5 border px-2 py-1.5 focus-within:ring-1 focus-within:ring-ring">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="pe-1">
            #{tag}
            <button
              type="button"
              aria-label={"Remove " + tag}
              onClick={() => setTags(tags.filter((value) => value !== tag))}
            >
              <XIcon className="size-3" />
            </button>
          </Badge>
        ))}
        <input
          id="ticket-tags"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault()
              addTag()
            }
          }}
          placeholder="Add tag..."
          className="min-w-20 flex-1 bg-transparent text-sm outline-none"
        />
      </div>
      <p className="text-xs text-muted-foreground">Press Enter to add a tag.</p>
    </div>
  )
}
