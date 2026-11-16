"use client"

import * as React from "react"
import {
  NotebookPen as NotebookPenIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { Textarea } from "@workspace/ui/components/textarea"

export default function NonModalNotesSheet() {
  const [notes, setNotes] = React.useState(
    "Follow up with the client about the brand identity brief."
  )
  return (
    <div className="flex flex-col items-center gap-2">
      <Sheet modal={false}>
        <SheetTrigger render={<Button variant="outline" />}>
          <NotebookPenIcon data-icon="inline-start" />
          Scratchpad
        </SheetTrigger>
        <SheetContent className="w-80 shadow-xl">
          <SheetHeader>
            <SheetTitle>Scratchpad</SheetTitle>
            <SheetDescription>
              Non-modal: keep working on the page while it stays open.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-1 flex-col px-4">
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-48 flex-1"
            />
          </div>
          <SheetFooter>
            <span className="text-muted-foreground">
              {notes.length} characters · saved locally
            </span>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <p className="text-xs text-muted-foreground">
        Notes: {notes.slice(0, 32)}
        {notes.length > 32 ? "…" : ""}
      </p>
    </div>
  )
}
