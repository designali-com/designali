"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Field, FieldLabel } from "@workspace/ui/components/field"

export default function ControlledStateReadout() {
  const [checked, setChecked] = React.useState(false)
  const [changes, setChanges] = React.useState(0)

  const update = (value: boolean) => {
    setChecked(value)
    setChanges((c) => c + 1)
  }

  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Field orientation="horizontal">
        <Checkbox
          id="controlled-sync"
          checked={checked}
          onCheckedChange={update}
        />
        <FieldLabel htmlFor="controlled-sync">Sync contacts</FieldLabel>
      </Field>
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => update(true)}
          disabled={checked}
        >
          Check
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => update(false)}
          disabled={!checked}
        >
          Uncheck
        </Button>
        <Button size="sm" variant="ghost" onClick={() => update(!checked)}>
          Toggle
        </Button>
      </div>
      <pre className="bg-muted p-3 font-mono text-xs">
        {JSON.stringify({ checked, changes }, null, 2)}
      </pre>
    </div>
  )
}
