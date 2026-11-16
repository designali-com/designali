"use client"

import * as React from "react"
import {
  Trash2 as Trash2Icon,
  TriangleAlert as TriangleAlertIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const projectName = "dalim-works"

export default function DeleteProjectSheet() {
  const [value, setValue] = React.useState("")
  return (
    <Sheet onOpenChange={() => setValue("")}>
      <SheetTrigger render={<Button variant="destructive" />}>
        <Trash2Icon data-icon="inline-start" />
        Delete project
      </SheetTrigger>
      <SheetContent side="bottom" className="mx-auto max-w-md">
        <SheetHeader>
          <div className="mb-1 flex size-9 items-center justify-center bg-destructive/10 text-destructive">
            <TriangleAlertIcon className="size-4" />
          </div>
          <SheetTitle>Delete {projectName}?</SheetTitle>
          <SheetDescription>
            This permanently removes 3 environments, 128 deployments, and all
            analytics. This cannot be undone.
          </SheetDescription>
        </SheetHeader>
        <div className="px-4">
          <Field>
            <FieldLabel htmlFor="confirm-name">
              Type <span className="font-sans">{projectName}</span> to confirm
            </FieldLabel>
            <Input
              id="confirm-name"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoComplete="off"
            />
          </Field>
        </div>
        <SheetFooter className="flex-row">
          <SheetClose render={<Button variant="outline" className="flex-1" />}>
            Cancel
          </SheetClose>
          <Button
            variant="destructive"
            className="flex-1"
            disabled={value !== projectName}
          >
            Delete forever
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
