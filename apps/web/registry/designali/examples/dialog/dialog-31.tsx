"use client"

import * as React from "react"
import { CircleAlertIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Textarea } from "@workspace/ui/components/textarea"

const initial =
  "Launch the spring collection with a two-week early access window for members."

export default function UnsavedChangesGuardDialog() {
  const [open, setOpen] = React.useState(false)
  const [text, setText] = React.useState(initial)
  const [confirming, setConfirming] = React.useState(false)
  const dirty = text !== initial

  function discard() {
    setText(initial)
    setConfirming(false)
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next && dirty) {
          setConfirming(true)
          return
        }
        setOpen(next)
      }}
    >
      <DialogTrigger render={<Button variant="outline" />}>
        Edit summary
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Campaign summary</DialogTitle>
          <DialogDescription>
            {dirty ? "You have unsaved changes." : "No changes yet."}
          </DialogDescription>
        </DialogHeader>
        <Textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="min-h-28"
        />
        {confirming ? (
          <Alert>
            <CircleAlertIcon />
            <AlertTitle>Discard your changes?</AlertTitle>
            <AlertDescription>
              <div className="mt-2 flex gap-2">
                <Button size="sm" variant="destructive" onClick={discard}>
                  Discard
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setConfirming(false)}
                >
                  Keep editing
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        ) : (
          <DialogFooter>
            <Button disabled={!dirty} onClick={() => setOpen(false)}>
              Save
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
