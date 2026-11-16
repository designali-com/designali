"use client"

import * as React from "react"
import {
  Trash2 as Trash2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

const projectName = "designali-website"

export default function TypeToConfirmDeleteDialog() {
  const [value, setValue] = React.useState("")
  const matches = value === projectName

  return (
    <Dialog onOpenChange={(open) => !open && setValue("")}>
      <DialogTrigger render={<Button variant="destructive" />}>
        <Trash2Icon data-icon="inline-start" />
        Delete project
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete project</DialogTitle>
          <DialogDescription>
            This permanently removes deployments, domains and environment
            variables for{" "}
            <span className="font-medium text-foreground">{projectName}</span>.
          </DialogDescription>
        </DialogHeader>
        <Field>
          <FieldLabel htmlFor="confirm-project">
            Type <span className="font-mono">{projectName}</span> to confirm
          </FieldLabel>
          <Input
            id="confirm-project"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            autoComplete="off"
          />
        </Field>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <DialogClose
            render={<Button variant="destructive" disabled={!matches} />}
          >
            I understand, delete
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
