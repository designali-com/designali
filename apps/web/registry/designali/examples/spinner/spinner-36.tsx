"use client"

import * as React from "react"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Spinner } from "@workspace/ui/components/spinner"
import { Switch } from "@workspace/ui/components/switch"

export default function SwitchApplyingSetting() {
  const [enabled, setEnabled] = React.useState(false)
  const [applying, setApplying] = React.useState(false)

  return (
    <Field orientation="horizontal" className="w-full max-w-sm border p-4">
      <FieldContent>
        <FieldLabel htmlFor="two-factor">
          Require two-factor authentication
        </FieldLabel>
        <FieldDescription>
          {applying
            ? "Updating 42 member accounts..."
            : "Applies to everyone in the workspace."}
        </FieldDescription>
      </FieldContent>
      <div className="flex items-center gap-2">
        {applying && <Spinner className="text-muted-foreground" />}
        <Switch
          id="two-factor"
          checked={enabled}
          disabled={applying}
          onCheckedChange={(checked) => {
            setApplying(true)
            setTimeout(() => {
              setEnabled(checked)
              setApplying(false)
            }, 1200)
          }}
        />
      </div>
    </Field>
  )
}
