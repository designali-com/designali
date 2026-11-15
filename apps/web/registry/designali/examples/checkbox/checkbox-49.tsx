"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"

const clauses = [
  "1. You may install the software on up to three devices you own.",
  "2. You may not resell, sublicense, or distribute the software.",
  "3. Updates are provided for twelve months from purchase.",
  "4. We collect anonymous crash reports to improve stability.",
  "5. The software is provided as is, without warranty of any kind.",
  "6. This agreement is governed by the laws of your country of residence.",
  "7. Either party may terminate this agreement with written notice.",
]

export default function ScrollToAcceptAgreement() {
  const [reachedEnd, setReachedEnd] = React.useState(false)
  const [accepted, setAccepted] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div
        className="h-36 overflow-y-auto border bg-muted/30 p-3 text-xs leading-relaxed"
        onScroll={(e) => {
          const el = e.currentTarget
          if (el.scrollTop + el.clientHeight >= el.scrollHeight - 4)
            setReachedEnd(true)
        }}
      >
        <p className="mb-2 font-medium">End user license agreement</p>
        {clauses.map((clause) => (
          <p key={clause} className="mb-2 text-muted-foreground">
            {clause}
          </p>
        ))}
      </div>
      <Field orientation="horizontal" data-disabled={!reachedEnd || undefined}>
        <Checkbox
          id="eula-accept"
          disabled={!reachedEnd}
          checked={accepted}
          onCheckedChange={setAccepted}
        />
        <FieldContent>
          <FieldLabel htmlFor="eula-accept">
            I have read and accept the agreement
          </FieldLabel>
          {!reachedEnd && (
            <FieldDescription>Scroll to the end to continue.</FieldDescription>
          )}
        </FieldContent>
      </Field>
      <Button disabled={!accepted}>Install</Button>
    </div>
  )
}
