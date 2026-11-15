"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function AuthenticatorSetup() {
  return (
    <div className="flex w-full max-w-md flex-col gap-5 border p-5 sm:flex-row">
      <svg
        viewBox="0 0 21 21"
        className="size-28 shrink-0 self-center bg-white p-2 text-black"
        aria-label="QR code"
      >
        <path
          fill="currentColor"
          d="M0 0h7v7H0zM1 1v5h5V1zM2 2h3v3H2zM14 0h7v7h-7zM15 1v5h5V1zM16 2h3v3h-3zM0 14h7v7H0zM1 15v5h5v-5zM2 16h3v3H2zM9 0h2v2H9zM9 3h1v3H9zM11 4h2v2h-2zM8 8h3v2H8zM12 8h2v1h-2zM15 9h3v2h-3zM9 11h2v3H9zM12 12h3v2h-3zM16 13h2v3h-2zM9 16h3v2H9zM13 16h2v5h-2zM18 18h3v3h-3zM0 9h2v2H0zM3 10h3v2H3z"
        />
      </svg>
      <div className="flex flex-1 flex-col gap-3">
        <div className="space-y-1">
          <p className="text-sm font-medium">Scan with your authenticator</p>
          <p className="text-xs text-muted-foreground">
            Or enter key{" "}
            <code className="bg-muted px-1 font-mono">JBSW Y3DP EHPK 3PXP</code>
          </p>
        </div>
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
        <Button size="sm" className="self-start">
          Verify and activate
        </Button>
      </div>
    </div>
  )
}
