"use client"

import * as React from "react"
import { Trash2Icon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

const NAME = "orbit-analytics"

export default function DeleteAccountConfirmField() {
  const [value, setValue] = React.useState("")

  return (
    <div className="w-full max-w-sm border border-destructive/40 p-4">
      <FieldSet>
        <FieldLegend className="text-destructive">Delete workspace</FieldLegend>
        <FieldDescription>
          This permanently removes all projects, files, and billing history.
        </FieldDescription>
        <Field>
          <FieldLabel htmlFor="confirm-delete" className="font-normal">
            Type <code className="bg-muted px-1 font-mono">{NAME}</code> to
            confirm
          </FieldLabel>
          <Input
            id="confirm-delete"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete="off"
          />
        </Field>
        <Button
          variant="destructive"
          disabled={value !== NAME}
          className="w-fit"
        >
          <Trash2Icon data-icon="inline-start" />
          Delete forever
        </Button>
      </FieldSet>
    </div>
  )
}
