"use client"

import * as React from "react"
import {
  Pencil as PencilIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function RenameFileValidationDialog() {
  const [name, setName] = React.useState("brand-guidelines-v2.pdf")
  const error = !name.trim()
    ? "File name can't be empty."
    : /[\\/:*?"<>|]/.test(name)
      ? "Names can't contain special characters."
      : ""

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <PencilIcon data-icon="inline-start" />
        Rename
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename file</DialogTitle>
        </DialogHeader>
        <Field data-invalid={!!error}>
          <FieldLabel htmlFor="file-name">Name</FieldLabel>
          <Input
            id="file-name"
            value={name}
            aria-invalid={!!error}
            onChange={(event) => setName(event.target.value)}
          />
          {error ? (
            <FieldError>{error}</FieldError>
          ) : (
            <FieldDescription>Saved to /Designali/Brand</FieldDescription>
          )}
        </Field>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <DialogClose render={<Button disabled={!!error} />}>
            Rename
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
