"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"

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

export default function StripDashesOnPaste() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="otp-paste">Paste your code</FieldLabel>
      <InputOTP
        id="otp-paste"
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        pasteTransformer={(pasted) => pasted.replace(/[^0-9]/g, "")}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>
        Dashes and spaces are removed automatically, e.g. 482-913.
      </FieldDescription>
    </Field>
  )
}
