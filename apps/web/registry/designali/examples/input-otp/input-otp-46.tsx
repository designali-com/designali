"use client"

import * as React from "react"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import {
  Mail as MailIcon,
  MessageSquare as MessageSquareIcon,
  Phone as PhoneIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"
import { Label } from "@workspace/ui/components/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const methods = [
  { value: "sms", label: "Text message", icon: MessageSquareIcon },
  { value: "call", label: "Voice call", icon: PhoneIcon },
  { value: "email", label: "Email", icon: MailIcon },
]

export default function DeliveryMethodChooser() {
  const [method, setMethod] = React.useState("sms")

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <RadioGroup
        value={method}
        onValueChange={(v) => setMethod(String(v))}
        className="grid grid-cols-3 gap-2"
      >
        {methods.map((m) => (
          <Label
            key={m.value}
            htmlFor={"method-" + m.value}
            className="flex-col gap-2 border p-3 has-data-checked:border-primary has-data-checked:bg-muted"
          >
            <RadioGroupItem
              id={"method-" + m.value}
              value={m.value}
              className="sr-only"
            />
            <m.icon className="size-4" />
            {m.label}
          </Label>
        ))}
      </RadioGroup>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button variant="outline" size="sm" className="self-start">
        Send new code
      </Button>
    </div>
  )
}
