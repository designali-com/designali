"use client"

import * as React from "react"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import {
  RotateCw as RotateCwIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function ResendCountdownTimer() {
  const [seconds, setSeconds] = React.useState(30)

  React.useEffect(() => {
    if (seconds === 0) return
    const id = window.setInterval(
      () => setSeconds((s) => Math.max(0, s - 1)),
      1000
    )
    return () => window.clearInterval(id)
  }, [seconds])

  return (
    <div className="flex flex-col items-center gap-4">
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
      <Button
        variant="outline"
        size="sm"
        disabled={seconds > 0}
        onClick={() => setSeconds(30)}
      >
        <RotateCwIcon data-icon="inline-start" />
        {seconds > 0
          ? "Resend in 0:" + String(seconds).padStart(2, "0")
          : "Resend code"}
      </Button>
    </div>
  )
}
