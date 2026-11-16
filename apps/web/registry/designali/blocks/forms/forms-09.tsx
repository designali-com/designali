"use client"

import { useEffect, useState } from "react"
import {
  ArrowLeft,
  ShieldCheck,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function Forms09() {
  const [code, setCode] = useState("")
  const [seconds, setSeconds] = useState(45)

  useEffect(() => {
    if (seconds <= 0) return
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [seconds])

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto flex max-w-lg flex-col items-center px-6 text-center">
        <div className="flex size-14 items-center justify-center border border-border bg-muted">
          <ShieldCheck className="size-6" />
        </div>
        <h2 className="mt-8 text-3xl font-semibold tracking-tight">Check your email</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          We sent a 6-digit code to{" "}
          <span className="font-medium text-foreground">a•••@designali.com</span>.
          It expires in 10 minutes.
        </p>

        <form className="mt-10 flex w-full flex-col items-center gap-8">
          <InputOTP maxLength={6} value={code} onChange={setCode} aria-label="Verification code">
            <InputOTPGroup>
              {[0, 1, 2].map((index) => (
                <InputOTPSlot key={index} index={index} className="size-11 text-base sm:size-12" />
              ))}
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              {[3, 4, 5].map((index) => (
                <InputOTPSlot key={index} index={index} className="size-11 text-base sm:size-12" />
              ))}
            </InputOTPGroup>
          </InputOTP>

          <Button type="submit" size="lg" className="w-full max-w-xs" disabled={code.length < 6}>
            Verify and continue
          </Button>
        </form>

        <div className="mt-6 text-xs text-muted-foreground">
          {seconds > 0 ? (
            <span>
              Resend code in <span className="font-mono text-foreground">0:{String(seconds).padStart(2, "0")}</span>
            </span>
          ) : (
            <button
              type="button"
              onClick={() => setSeconds(45)}
              className="text-foreground underline underline-offset-4"
            >
              Resend code
            </button>
          )}
        </div>

        <div className="mt-12 w-full border-t border-border pt-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Use a different verification method
          </a>
        </div>
      </div>
    </section>
  )
}
