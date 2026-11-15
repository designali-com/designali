"use client"

import * as React from "react"
import { TagIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
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

export default function NestedSheets() {
  const [label, setLabel] = React.useState("Priority")
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Edit issue
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit issue</SheetTitle>
          <SheetDescription>Labels open in a stacked sheet.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <Field>
            <FieldLabel htmlFor="issue-title">Title</FieldLabel>
            <Input
              id="issue-title"
              defaultValue="Billing page crashes on Safari 17"
            />
          </Field>
          <div className="flex items-center justify-between">
            <span>
              Label: <Badge variant="secondary">{label}</Badge>
            </span>
            <Sheet>
              <SheetTrigger render={<Button variant="outline" size="sm" />}>
                <TagIcon data-icon="inline-start" />
                Change
              </SheetTrigger>
              <SheetContent className="w-64">
                <SheetHeader>
                  <SheetTitle>Choose label</SheetTitle>
                  <SheetDescription>
                    Applies to this issue only.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-1 px-2">
                  {["Priority", "Bug", "Design", "Backend", "Needs triage"].map(
                    (l) => (
                      <SheetClose
                        key={l}
                        render={
                          <Button
                            variant={l === label ? "secondary" : "ghost"}
                            className="justify-start"
                          />
                        }
                        onClick={() => setLabel(l)}
                      >
                        {l}
                      </SheetClose>
                    )
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button />}>Save issue</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
