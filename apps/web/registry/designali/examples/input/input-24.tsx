"use client"

import * as React from "react"
import { FileTextIcon, PencilIcon } from "lucide-react"

import { Input } from "@workspace/ui/components/input"

export default function InlineEditTitleInput() {
  const [title, setTitle] = React.useState("Q2 hiring plan")
  const [editing, setEditing] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <FileTextIcon className="size-4 shrink-0 text-muted-foreground" />
      {editing ? (
        <Input
          autoFocus
          aria-label="Document title"
          defaultValue={title}
          className="h-7 text-sm font-medium md:text-sm"
          onFocus={(e) => e.target.select()}
          onBlur={(e) => {
            setTitle(e.target.value.trim() || title)
            setEditing(false)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.currentTarget.blur()
            if (e.key === "Escape") setEditing(false)
          }}
        />
      ) : (
        <button
          type="button"
          className="flex h-7 items-center gap-2 px-1 text-sm font-medium hover:bg-muted"
          onClick={() => setEditing(true)}
        >
          {title}
          <PencilIcon className="size-3 text-muted-foreground" />
        </button>
      )}
    </div>
  )
}
