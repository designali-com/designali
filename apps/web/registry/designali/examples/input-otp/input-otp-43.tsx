"use client"

import * as React from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"
import { cn } from "@workspace/ui/lib/utils"

export default function FilledSlotHighlight() {
  const [value, setValue] = React.useState("38")

  return (
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup className="gap-1.5">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <InputOTPSlot
            key={index}
            index={index}
            className={cn(
              "size-10 border text-base",
              value[index] &&
                "border-primary/40 bg-primary/10 dark:bg-primary/15"
            )}
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  )
}
