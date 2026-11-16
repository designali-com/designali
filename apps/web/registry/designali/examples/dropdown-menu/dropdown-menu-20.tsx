"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function ControlledOpenState() {
  const [open, setOpen] = React.useState(false)
  const [last, setLast] = React.useState("Nothing yet")

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            Designali actions
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            {["New template", "New block", "New icon set"].map((action) => (
              <DropdownMenuItem key={action} onClick={() => setLast(action)}>
                {action}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Open from outside
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Menu is {open ? "open" : "closed"} · Last action: {last}
      </p>
    </div>
  )
}
