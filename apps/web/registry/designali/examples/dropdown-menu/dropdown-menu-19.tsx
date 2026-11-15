"use client"

import * as React from "react"
import { PencilIcon, Trash2Icon, UsersIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function ConfirmDestructiveItem() {
  const [armed, setArmed] = React.useState(false)
  const [deleted, setDeleted] = React.useState(false)

  if (deleted) {
    return (
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        Project deleted.
        <Button variant="link" size="xs" onClick={() => setDeleted(false)}>
          Undo
        </Button>
      </div>
    )
  }

  return (
    <DropdownMenu onOpenChange={(open) => !open && setArmed(false)}>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Project options
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuItem>
          <PencilIcon />
          Rename project
        </DropdownMenuItem>
        <DropdownMenuItem>
          <UsersIcon />
          Transfer ownership
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          closeOnClick={armed}
          onClick={() => (armed ? setDeleted(true) : setArmed(true))}
        >
          <Trash2Icon />
          {armed ? "Click again to confirm" : "Delete project"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
