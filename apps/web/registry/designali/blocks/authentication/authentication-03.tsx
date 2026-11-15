"use client"

import { useRef, useState } from "react"
import { ShieldCheck } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const LENGTH = 6

export default function Authentication03() {
  const [code, setCode] = useState<string[]>(Array(LENGTH).fill(""))
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  function update(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1)
    const next = [...code]
    next[index] = digit
    setCode(next)
    if (digit && index < LENGTH - 1) inputs.current[index + 1]?.focus()
  }

  function onKeyDown(index: number, event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const complete = code.every(Boolean)

  return (
    <section className="flex min-h-[640px] w-full items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-md text-center">
        <span className="mx-auto flex size-12 items-center justify-center border">
          <ShieldCheck className="size-5" />
        </span>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight">Check your inbox</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We sent a 6-digit code to <span className="text-foreground">m.chen@harbor.io</span>.
          It expires in 10 minutes.
        </p>

        <form className="mt-10 space-y-6" onSubmit={(event) => event.preventDefault()}>
          <div className="flex justify-center gap-2">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(element) => {
                  inputs.current[index] = element
                }}
                value={digit}
                onChange={(event) => update(index, event.target.value)}
                onKeyDown={(event) => onKeyDown(index, event)}
                inputMode="numeric"
                aria-label={`Digit ${index + 1}`}
                className="size-12 border bg-background text-center font-mono text-xl outline-none focus:border-foreground sm:size-14 dark:bg-input/30"
              />
            ))}
          </div>
          <Button type="submit" size="lg" disabled={!complete} className="w-full">
            Verify and continue
          </Button>
        </form>

        <p className="mt-6 text-sm text-muted-foreground">
          Didn&apos;t get it?{" "}
          <button type="button" className="font-medium text-foreground underline-offset-4 hover:underline">
            Resend code
          </button>
        </p>
      </div>
    </section>
  )
}
