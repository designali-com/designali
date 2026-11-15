"use client"

import * as React from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"
import { Progress } from "@workspace/ui/components/progress"

export default function EntryProgressBar() {
  const [value, setValue] = React.useState("")

  return (
    <div className="flex w-fit flex-col gap-3">
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Progress value={(value.length / 6) * 100} />
      <p className="text-center text-xs text-muted-foreground tabular-nums">
        {value.length} of 6 digits
      </p>
    </div>
  )
}
