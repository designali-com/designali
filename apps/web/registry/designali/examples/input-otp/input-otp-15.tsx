"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import {
  Smartphone as SmartphoneIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function PhoneSmsVerification() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-start gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
          <SmartphoneIcon className="size-4" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Enter the code we texted you</p>
          <p className="text-xs text-muted-foreground">
            Sent to +1 ••• ••• 4821.{" "}
            <a
              href="#"
              className="text-foreground underline underline-offset-4"
            >
              Change number
            </a>
          </p>
        </div>
      </div>
      <InputOTP
        maxLength={4}
        pattern={REGEXP_ONLY_DIGITS}
        autoComplete="one-time-code"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} className="size-11 text-lg" />
          <InputOTPSlot index={1} className="size-11 text-lg" />
          <InputOTPSlot index={2} className="size-11 text-lg" />
          <InputOTPSlot index={3} className="size-11 text-lg" />
        </InputOTPGroup>
      </InputOTP>
      <Button>Verify phone</Button>
    </div>
  )
}
