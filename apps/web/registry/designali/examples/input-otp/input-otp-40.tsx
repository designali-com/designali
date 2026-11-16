"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import {
  Clock as ClockIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function PayoutSecurityCode() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-5">
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          Withdraw to Checking •• 2201
        </p>
        <p className="text-3xl font-semibold tabular-nums">$12,800.00</p>
      </div>
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        containerClassName="justify-center"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} className="size-10" />
          <InputOTPSlot index={1} className="size-10" />
          <InputOTPSlot index={2} className="size-10" />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} className="size-10" />
          <InputOTPSlot index={4} className="size-10" />
          <InputOTPSlot index={5} className="size-10" />
        </InputOTPGroup>
      </InputOTP>
      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <ClockIcon className="size-3.5" />
        Funds arrive in 1-2 business days
      </p>
      <Button>Confirm payout</Button>
    </div>
  )
}
