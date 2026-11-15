"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
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

export default function VerificationCodeField() {
  const [seconds, setSeconds] = React.useState(24)

  React.useEffect(() => {
    if (seconds <= 0) return
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(t)
  }, [seconds])

  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="otp-code">Verification code</FieldLabel>
      <FieldDescription>
        We sent a 6-digit code to +1 ••• ••• 4821.
      </FieldDescription>
      <InputOTP id="otp-code" maxLength={6}>
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
      <Button
        variant="link"
        size="xs"
        className="w-fit px-0"
        disabled={seconds > 0}
        onClick={() => setSeconds(30)}
      >
        {seconds > 0 ? "Resend code in " + seconds + "s" : "Resend code"}
      </Button>
    </Field>
  )
}
