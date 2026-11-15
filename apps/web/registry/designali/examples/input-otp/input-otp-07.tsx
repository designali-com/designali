"use client"

import * as React from "react"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { CircleCheckIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"
import { Spinner } from "@workspace/ui/components/spinner"

export default function AutoSubmitOnComplete() {
  const [status, setStatus] = React.useState<"idle" | "verifying" | "done">(
    "idle"
  )

  function handleComplete() {
    setStatus("verifying")
    window.setTimeout(() => setStatus("done"), 1200)
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        disabled={status !== "idle"}
        onComplete={handleComplete}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="flex h-5 items-center gap-1.5 text-xs text-muted-foreground">
        {status === "idle" && "The code submits as soon as it's complete."}
        {status === "verifying" && (
          <>
            <Spinner /> Verifying code...
          </>
        )}
        {status === "done" && (
          <>
            <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
            Verified. Redirecting...
          </>
        )}
      </div>
      {status === "done" && (
        <Button variant="ghost" size="sm" onClick={() => setStatus("idle")}>
          Try again
        </Button>
      )}
    </div>
  )
}
