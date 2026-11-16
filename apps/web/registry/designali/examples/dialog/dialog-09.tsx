"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog"

export default function ControlledOpenStateDialog() {
  const [open, setOpen] = React.useState(false)
  const [opens, setOpens] = React.useState(0)

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3 border p-4">
      <p className="text-muted-foreground">
        Dialog is{" "}
        <span className="font-medium text-foreground">
          {open ? "open" : "closed"}
        </span>{" "}
        · opened {opens} {opens === 1 ? "time" : "times"}
      </p>
      <Button
        onClick={() => {
          setOpen(true)
          setOpens((count) => count + 1)
        }}
      >
        Open Designali preview
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Designali template preview</DialogTitle>
            <DialogDescription>
              The Portfolio Simple template from designali.com. The parent owns
              the open state, so any button or event can open or close it.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close preview
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
