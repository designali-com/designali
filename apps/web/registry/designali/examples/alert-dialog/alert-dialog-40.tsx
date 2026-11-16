"use client"

import * as React from "react"
import {
  ArrowLeft as ArrowLeftIcon,
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
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function UnsavedChangesThreeActions() {
  const [name, setName] = React.useState("Acme Field Ops")
  const [saved, setSaved] = React.useState("Acme Field Ops")
  const [open, setOpen] = React.useState(false)
  const dirty = name !== saved

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <Field>
        <FieldLabel htmlFor="team-name">Team name</FieldLabel>
        <Input
          id="team-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <FieldDescription>
          {dirty ? "You have unsaved changes." : "All changes saved."}
        </FieldDescription>
      </Field>
      <Button
        variant="outline"
        onClick={() => (dirty ? setOpen(true) : undefined)}
      >
        <ArrowLeftIcon data-icon="inline-start" />
        Back to teams
      </Button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Save changes before leaving?</AlertDialogTitle>
            <AlertDialogDescription>
              Your edits to this Designali team will be lost if you don&apos;t save them.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="ghost" className="sm:me-auto">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              variant="outline"
              onClick={() => {
                setName(saved)
                setOpen(false)
              }}
            >
              Discard
            </AlertDialogAction>
            <AlertDialogAction
              onClick={() => {
                setSaved(name)
                setOpen(false)
              }}
            >
              Save
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
