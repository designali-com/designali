"use client"

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

export default function LicenseKeyActivation() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="license-key">License key</FieldLabel>
      <InputOTP
        id="license-key"
        maxLength={12}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} className="size-6 font-sans uppercase" />
          <InputOTPSlot index={1} className="size-6 font-sans uppercase" />
          <InputOTPSlot index={2} className="size-6 font-sans uppercase" />
          <InputOTPSlot index={3} className="size-6 font-sans uppercase" />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} className="size-6 font-sans uppercase" />
          <InputOTPSlot index={5} className="size-6 font-sans uppercase" />
          <InputOTPSlot index={6} className="size-6 font-sans uppercase" />
          <InputOTPSlot index={7} className="size-6 font-sans uppercase" />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={8} className="size-6 font-sans uppercase" />
          <InputOTPSlot index={9} className="size-6 font-sans uppercase" />
          <InputOTPSlot index={10} className="size-6 font-sans uppercase" />
          <InputOTPSlot index={11} className="size-6 font-sans uppercase" />
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>
        Find it in your purchase receipt from Designali Templates Pro.
      </FieldDescription>
    </Field>
  )
}
