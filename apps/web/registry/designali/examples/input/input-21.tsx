"use client"

import * as React from "react"
import { XIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function TagEntryInput() {
  const [tags, setTags] = React.useState(["design", "roadmap"])
  const [draft, setDraft] = React.useState("")

  const commit = () => {
    const t = draft.trim().toLowerCase()
    if (t && !tags.includes(t)) setTags([...tags, t])
    setDraft("")
  }

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="tag-input">Topics</FieldLabel>
      <div className="flex min-h-8 flex-wrap items-center gap-1 border border-input px-1.5 py-1 focus-within:border-ring focus-within:ring-1 focus-within:ring-ring/50">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="gap-1">
            {tag}
            <button
              type="button"
              aria-label={"Remove " + tag}
              onClick={() => setTags(tags.filter((t) => t !== tag))}
            >
              <XIcon className="size-3" />
            </button>
          </Badge>
        ))}
        <Input
          id="tag-input"
          value={draft}
          placeholder={tags.length ? "" : "Add a topic"}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault()
              commit()
            } else if (e.key === "Backspace" && !draft) {
              setTags(tags.slice(0, -1))
            }
          }}
          className="h-6 min-w-20 flex-1 border-0 px-1 focus-visible:ring-0 dark:bg-transparent"
        />
      </div>
      <FieldDescription>Press Enter or comma to add.</FieldDescription>
    </Field>
  )
}
