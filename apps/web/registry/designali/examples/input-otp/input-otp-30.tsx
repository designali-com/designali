"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

const CORRECT = "246810"

export default function AttemptsRemaining() {
  const [value, setValue] = React.useState("")
  const [attempts, setAttempts] = React.useState(3)
  const [invalid, setInvalid] = React.useState(false)

  function handleComplete(code: string) {
    if (code === CORRECT) return
    setInvalid(true)
    setAttempts((a) => Math.max(0, a - 1))
  }

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium">designali.com security code</span>
        <Badge variant={attempts <= 1 ? "destructive" : "secondary"}>
          {attempts} attempts left
        </Badge>
      </div>
      <InputOTP
        maxLength={6}
        value={value}
        disabled={attempts === 0}
        onChange={(next) => {
          setValue(next)
          setInvalid(false)
        }}
        onComplete={handleComplete}
      >
        <InputOTPGroup>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <InputOTPSlot
              key={index}
              index={index}
              aria-invalid={invalid || undefined}
            />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        {invalid
          ? "Incorrect code. Hint: try 246810."
          : "Enter the code from your Designali email."}
      </p>
    </div>
  )
}
