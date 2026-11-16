"use client"

import * as React from "react"
import {
  Trash2 as Trash2Icon,
} from "@designali/icons"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Field, FieldLabel } from "@workspace/ui/components/field"

export default function DontAskAgainCheckbox() {
  const [open, setOpen] = React.useState(false)
  const [skip, setSkip] = React.useState(false)
  const [remember, setRemember] = React.useState(false)
  const [moved, setMoved] = React.useState(0)

  function moveToTrash() {
    setMoved((count) => count + 1)
    setOpen(false)
    if (remember) setSkip(true)
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        variant="outline"
        onClick={() => (skip ? moveToTrash() : setOpen(true))}
      >
        <Trash2Icon data-icon="inline-start" />
        Move to Trash
      </Button>
      <p className="text-xs text-muted-foreground">
        {moved} item{moved === 1 ? "" : "s"} moved{" "}
        {skip && "- confirmation skipped"}
      </p>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Move to Trash?</AlertDialogTitle>
            <AlertDialogDescription>
              You can restore it from Trash for 30 days.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Field orientation="horizontal">
            <Checkbox
              id="dont-ask"
              checked={remember}
              onCheckedChange={(checked) => setRemember(checked === true)}
            />
            <FieldLabel htmlFor="dont-ask" className="font-normal">
              Don&apos;t ask me again
            </FieldLabel>
          </Field>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={moveToTrash}>Move</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
