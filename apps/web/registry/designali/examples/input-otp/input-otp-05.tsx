"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import {
  ShieldCheck as ShieldCheckIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"
import { Label } from "@workspace/ui/components/label"

export default function TwoFactorLoginStep() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5 border bg-background p-6">
      <div className="flex size-10 items-center justify-center bg-muted">
        <ShieldCheckIcon className="size-5" />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold">Two-factor authentication</h3>
        <p className="text-xs text-muted-foreground">
          Open your authenticator app and enter the code for Designali.
        </p>
      </div>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
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
      <div className="flex items-center gap-2">
        <Checkbox id="trust-device" />
        <Label htmlFor="trust-device">Trust this device for 30 days</Label>
      </div>
      <Button>Continue</Button>
    </div>
  )
}
