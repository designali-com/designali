"use client"

import * as React from "react"
import { REGEXP_ONLY_DIGITS } from "input-otp"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"
import { Label } from "@workspace/ui/components/label"
import { Separator } from "@workspace/ui/components/separator"
import { Switch } from "@workspace/ui/components/switch"

export default function ParentalControlsPin() {
  const [enabled, setEnabled] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <Label htmlFor="parental">Client approval lock</Label>
          <p className="mt-1 text-xs text-muted-foreground">
            Require a PIN before Designali files are sent to clients.
          </p>
        </div>
        <Switch id="parental" checked={enabled} onCheckedChange={setEnabled} />
      </div>
      <Separator />
      <Field className="w-fit">
        <FieldLabel htmlFor="parental-pin">Studio PIN</FieldLabel>
        <InputOTP
          id="parental-pin"
          maxLength={4}
          pattern={REGEXP_ONLY_DIGITS}
          disabled={!enabled}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
        <FieldDescription>
          {enabled
            ? "Choose 4 digits you'll remember."
            : "Turn on the lock to set a PIN."}
        </FieldDescription>
      </Field>
    </div>
  )
}
