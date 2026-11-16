"use client"

import * as React from "react"
import {
  X as XIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function TagCountLabel() {
  const [tags, setTags] = React.useState(["onboarding", "billing", "urgent"])
  const [draft, setDraft] = React.useState("")

  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="ticket-tags" className="justify-between">
        <span>Tags</span>
        <span className="font-normal text-muted-foreground">
          {tags.length}/5
        </span>
      </Label>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
            <button
              type="button"
              aria-label={"Remove " + tag}
              onClick={() => setTags(tags.filter((t) => t !== tag))}
            >
              <XIcon />
            </button>
          </Badge>
        ))}
      </div>
      <Input
        id="ticket-tags"
        value={draft}
        disabled={tags.length >= 5}
        placeholder="Type a tag and press Enter"
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && draft.trim()) {
            setTags([...tags, draft.trim()])
            setDraft("")
          }
        }}
      />
    </div>
  )
}
