"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import {
  ArrowLeft as ArrowLeftIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"
import { Progress } from "@workspace/ui/components/progress"

export default function OnboardingVerifyStep() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Step 2 of 3</span>
          <span>Verify email</span>
        </div>
        <Progress value={66} />
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-semibold">Confirm it&apos;s you</h3>
        <p className="text-xs text-muted-foreground">
          Enter the code we sent to hello@designali.com
        </p>
      </div>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} className="size-10 text-sm" />
          <InputOTPSlot index={1} className="size-10 text-sm" />
          <InputOTPSlot index={2} className="size-10 text-sm" />
          <InputOTPSlot index={3} className="size-10 text-sm" />
          <InputOTPSlot index={4} className="size-10 text-sm" />
          <InputOTPSlot index={5} className="size-10 text-sm" />
        </InputOTPGroup>
      </InputOTP>
      <div className="flex justify-between">
        <Button variant="ghost">
          <ArrowLeftIcon data-icon="inline-start" />
          Back
        </Button>
        <Button>Next</Button>
      </div>
    </div>
  )
}
