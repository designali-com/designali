"use client"

import * as React from "react"
import {
  Database as DatabaseIcon,
  Trash2 as Trash2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const NAME = "designali-staging"

export default function ConfirmDeletePopover() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [deleted, setDeleted] = React.useState(false)

  if (deleted) {
    return (
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Trash2Icon className="size-3.5" /> {NAME} was deleted.
      </p>
    )
  }

  return (
    <div className="flex w-full max-w-sm items-center justify-between border p-3">
      <div className="flex items-center gap-2 text-xs">
        <DatabaseIcon className="size-4 text-muted-foreground" />
        <span className="font-sans">{NAME}</span>
      </div>
      <Popover
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          setValue("")
        }}
      >
        <PopoverTrigger render={<Button variant="destructive" size="sm" />}>
          Delete
        </PopoverTrigger>
        <PopoverContent className="w-64" align="end">
          <PopoverHeader>
            <PopoverTitle>Delete database?</PopoverTitle>
            <PopoverDescription>
              Type <span className="font-sans text-foreground">{NAME}</span> to
              confirm. This cannot be undone.
            </PopoverDescription>
          </PopoverHeader>
          <Input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            aria-label="Confirm name"
            className="h-8"
          />
          <Button
            variant="destructive"
            size="sm"
            disabled={value !== NAME}
            onClick={() => setDeleted(true)}
          >
            Delete permanently
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}
