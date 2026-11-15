"use client"

import * as React from "react"
import { OTPInputContext } from "input-otp"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { InputOTP, InputOTPGroup } from "@workspace/ui/components/input-otp"

function MaskedSlot({ index }: { index: number }) {
  const context = React.useContext(OTPInputContext)
  const slot = context.slots[index]

  return (
    <div
      data-active={slot?.isActive}
      className="relative flex size-10 items-center justify-center border-y border-e border-input first:border-s data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-1 data-[active=true]:ring-ring/50"
    >
      {slot?.char ? (
        <span className="size-2.5 rounded-full bg-foreground" />
      ) : null}
      {slot?.hasFakeCaret && (
        <span className="h-4 w-px animate-caret-blink bg-foreground" />
      )}
    </div>
  )
}

export default function MaskedPinSlots() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="card-pin">Card PIN</FieldLabel>
      <InputOTP id="card-pin" maxLength={4} inputMode="numeric">
        <InputOTPGroup>
          {[0, 1, 2, 3].map((index) => (
            <MaskedSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <FieldDescription>Digits are hidden as you type.</FieldDescription>
    </Field>
  )
}
