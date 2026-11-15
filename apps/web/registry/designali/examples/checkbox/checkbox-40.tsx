"use client"

import * as React from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Spinner } from "@workspace/ui/components/spinner"

export default function AsyncSavingCheckbox() {
  const [checked, setChecked] = React.useState(false)
  const [saving, setSaving] = React.useState(false)
  const [savedAt, setSavedAt] = React.useState<string | null>(null)

  const handleChange = (value: boolean) => {
    setChecked(value)
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      setSavedAt(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      )
    }, 1200)
  }

  return (
    <Field
      orientation="horizontal"
      className="w-full max-w-xs"
      data-disabled={saving || undefined}
    >
      <Checkbox
        id="weekly-digest"
        checked={checked}
        disabled={saving}
        onCheckedChange={handleChange}
      />
      <FieldContent>
        <FieldLabel htmlFor="weekly-digest">Weekly digest email</FieldLabel>
        <FieldDescription className="flex items-center gap-1.5">
          {saving ? (
            <>
              <Spinner className="size-3" /> Saving...
            </>
          ) : savedAt ? (
            "Saved at " + savedAt
          ) : (
            "Changes save automatically."
          )}
        </FieldDescription>
      </FieldContent>
    </Field>
  )
}
