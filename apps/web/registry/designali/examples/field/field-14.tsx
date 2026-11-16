"use client"

import * as React from "react"
import {
  X as XIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function SkillTagsField() {
  const [tags, setTags] = React.useState([
    "Figma",
    "Prototyping",
    "User research",
  ])
  const [draft, setDraft] = React.useState("")
  const full = tags.length >= 5

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="skill-input">Skills</FieldLabel>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="gap-1 pe-1">
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
        id="skill-input"
        value={draft}
        disabled={full}
        placeholder={full ? "Maximum reached" : "Type a skill and press Enter"}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && draft.trim()) {
            e.preventDefault()
            if (!tags.includes(draft.trim())) setTags([...tags, draft.trim()])
            setDraft("")
          }
        }}
      />
      <FieldDescription>{tags.length}/5 skills added.</FieldDescription>
    </Field>
  )
}
