"use client"

import * as React from "react"
import { REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function BackupCodeToggle() {
  const [mode, setMode] = React.useState<"app" | "backup">("app")
  const length = mode === "app" ? 6 : 10

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="space-y-1">
        <p className="text-sm font-medium">
          {mode === "app" ? "Authenticator code" : "Backup code"}
        </p>
        <p className="text-xs text-muted-foreground">
          {mode === "app"
            ? "Enter the 6-digit Designali code from your app."
            : "Enter one of your 10-character designali.com backup codes."}
        </p>
      </div>
      <InputOTP
        key={mode}
        maxLength={length}
        pattern={
          mode === "app" ? REGEXP_ONLY_DIGITS : REGEXP_ONLY_DIGITS_AND_CHARS
        }
      >
        {mode === "app" ? (
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        ) : (
          <>
            <InputOTPGroup>
              <InputOTPSlot index={0} className="w-7 font-sans uppercase" />
              <InputOTPSlot index={1} className="w-7 font-sans uppercase" />
              <InputOTPSlot index={2} className="w-7 font-sans uppercase" />
              <InputOTPSlot index={3} className="w-7 font-sans uppercase" />
              <InputOTPSlot index={4} className="w-7 font-sans uppercase" />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={5} className="w-7 font-sans uppercase" />
              <InputOTPSlot index={6} className="w-7 font-sans uppercase" />
              <InputOTPSlot index={7} className="w-7 font-sans uppercase" />
              <InputOTPSlot index={8} className="w-7 font-sans uppercase" />
              <InputOTPSlot index={9} className="w-7 font-sans uppercase" />
            </InputOTPGroup>
          </>
        )}
      </InputOTP>
      <Button
        variant="link"
        size="sm"
        className="self-start px-0"
        onClick={() => setMode(mode === "app" ? "backup" : "app")}
      >
        {mode === "app" ? "Use a backup code instead" : "Use authenticator app"}
      </Button>
    </div>
  )
}
