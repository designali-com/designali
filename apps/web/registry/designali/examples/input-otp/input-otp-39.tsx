"use client"

import * as React from "react"
import { EyeOffIcon, KeyRoundIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function RevealApiSecret() {
  const [revealed, setRevealed] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium">Production secret key</span>
        <Badge variant="outline">Live</Badge>
      </div>
      <div className="flex items-center gap-2 bg-muted px-3 py-2 font-mono text-xs">
        <KeyRoundIcon className="size-3.5 shrink-0" />
        <span className="truncate">
          {revealed
            ? "key_demo_aZr4"
            : "key_demo_••••••••••••••••••"}
        </span>
      </div>
      {!revealed && (
        <>
          <p className="text-xs text-muted-foreground">
            Enter your 2FA code to reveal this key.
          </p>
          <InputOTP maxLength={6} onComplete={() => setRevealed(true)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} className="size-7" />
              <InputOTPSlot index={1} className="size-7" />
              <InputOTPSlot index={2} className="size-7" />
              <InputOTPSlot index={3} className="size-7" />
              <InputOTPSlot index={4} className="size-7" />
              <InputOTPSlot index={5} className="size-7" />
            </InputOTPGroup>
          </InputOTP>
        </>
      )}
      {revealed && (
        <Button variant="outline" size="sm" onClick={() => setRevealed(false)}>
          <EyeOffIcon data-icon="inline-start" />
          Hide key
        </Button>
      )}
    </div>
  )
}
