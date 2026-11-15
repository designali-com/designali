"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@workspace/ui/components/sheet"

export default function ControlledSheet() {
  const [open, setOpen] = React.useState(false)
  const [opened, setOpened] = React.useState(0)

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        <Button
          onClick={() => {
            setOpen(true)
            setOpened((n) => n + 1)
          }}
        >
          Open programmatically
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        State:{" "}
        <span className="font-medium text-foreground">
          {open ? "open" : "closed"}
        </span>{" "}
        · opened {opened} times
      </p>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Controlled sheet</SheetTitle>
            <SheetDescription>
              This sheet&apos;s visibility lives in parent state, so other parts
              of the page can open or close it.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button onClick={() => setOpen(false)}>Close from state</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
