"use client"

import * as React from "react"
import {
  Pencil as PencilIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

export default function ControlledRenamePopover() {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState("Dalim Agency Redesign")
  const [draft, setDraft] = React.useState(name)

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">{name}</span>
      <Popover
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (next) setDraft(name)
        }}
      >
        <PopoverTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Rename project"
            />
          }
        >
          <PencilIcon />
        </PopoverTrigger>
        <PopoverContent className="w-64" align="start">
          <form
            className="flex flex-col gap-2.5"
            onSubmit={(event) => {
              event.preventDefault()
              if (!draft.trim()) return
              setName(draft.trim())
              setOpen(false)
            }}
          >
            <Label htmlFor="project-name">Project name</Label>
            <Input
              id="project-name"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              autoFocus
            />
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" size="sm" disabled={!draft.trim()}>
                Save
              </Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  )
}
