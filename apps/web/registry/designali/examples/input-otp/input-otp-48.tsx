"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Copy as CopyIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function ReadOnlyPairingCodeDisplay() {
  const [copied, setCopied] = React.useState(false)
  const code = "829304"

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3 border p-4 text-center">
      <p className="text-xs text-muted-foreground">
        Enter this code on your other device
      </p>
      <InputOTP
        maxLength={6}
        value={code}
        disabled
        containerClassName="has-disabled:opacity-100"
      >
        <InputOTPGroup>
          <InputOTPSlot
            index={0}
            className="size-10 bg-muted text-base font-semibold"
          />
          <InputOTPSlot
            index={1}
            className="size-10 bg-muted text-base font-semibold"
          />
          <InputOTPSlot
            index={2}
            className="size-10 bg-muted text-base font-semibold"
          />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot
            index={3}
            className="size-10 bg-muted text-base font-semibold"
          />
          <InputOTPSlot
            index={4}
            className="size-10 bg-muted text-base font-semibold"
          />
          <InputOTPSlot
            index={5}
            className="size-10 bg-muted text-base font-semibold"
          />
        </InputOTPGroup>
      </InputOTP>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => {
          void navigator.clipboard?.writeText(code)
          setCopied(true)
        }}
      >
        {copied ? (
          <CheckIcon data-icon="inline-start" />
        ) : (
          <CopyIcon data-icon="inline-start" />
        )}
        {copied ? "Copied" : "Copy code"}
      </Button>
    </div>
  )
}
