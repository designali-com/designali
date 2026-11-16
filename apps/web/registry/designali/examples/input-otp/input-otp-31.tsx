"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import {
  Gift as GiftIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function GiftCardPin() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-5">
      <div className="flex h-24 flex-col justify-between bg-gradient-to-br from-primary to-primary p-3 text-white">
        <GiftIcon className="size-5" />
        <span className="font-sans text-xs tracking-widest">
          6011 •••• •••• 3307
        </span>
      </div>
      <Field>
        <FieldLabel htmlFor="gift-pin">Scratch-off PIN</FieldLabel>
        <InputOTP id="gift-pin" maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </Field>
      <Button>Redeem $50.00</Button>
    </div>
  )
}
