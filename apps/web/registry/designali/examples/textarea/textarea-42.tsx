"use client"

import * as React from "react"
import {
  Pencil as PencilIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"

export default function InlineEditTextarea() {
  const [text, setText] = React.useState(
    "Quarterly planning for the Designali studio. New templates, blocks and icons."
  )
  const [draft, setDraft] = React.useState(text)
  const [editing, setEditing] = React.useState(false)

  return (
    <div className="w-full max-w-sm border p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-medium">Description</p>
        {!editing && (
          <Button
            variant="ghost"
            size="icon-xs"
            aria-label="Edit description"
            onClick={() => {
              setDraft(text)
              setEditing(true)
            }}
          >
            <PencilIcon />
          </Button>
        )}
      </div>
      {editing ? (
        <div className="flex flex-col gap-2">
          <Textarea
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            aria-label="Description"
          />
          <div className="flex justify-end gap-2">
            <Button variant="ghost" size="xs" onClick={() => setEditing(false)}>
              Cancel
            </Button>
            <Button
              size="xs"
              onClick={() => {
                setText(draft)
                setEditing(false)
              }}
            >
              Save
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-xs text-muted-foreground">{text}</p>
      )}
    </div>
  )
}
