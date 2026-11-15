"use client"

import * as React from "react"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function AlphanumericRecoveryCode() {
  const [value, setValue] = React.useState("")

  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="recovery-code">Recovery code</FieldLabel>
      <InputOTP
        id="recovery-code"
        maxLength={8}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        value={value}
        onChange={(next) => setValue(next.toUpperCase())}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} className="font-mono" />
          <InputOTPSlot index={1} className="font-mono" />
          <InputOTPSlot index={2} className="font-mono" />
          <InputOTPSlot index={3} className="font-mono" />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} className="font-mono" />
          <InputOTPSlot index={5} className="font-mono" />
          <InputOTPSlot index={6} className="font-mono" />
          <InputOTPSlot index={7} className="font-mono" />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>
        Use one of the codes you saved when enabling 2FA.
      </FieldDescription>
    </Field>
  )
}
