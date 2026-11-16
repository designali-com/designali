"use client"

import { useState } from "react"
import {
  Check,
  Copy,
  Download,
  Smartphone,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const SIZE = 25

function isFinder(x: number, y: number) {
  const inBox = (ox: number, oy: number) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7
  return inBox(0, 0) || inBox(SIZE - 7, 0) || inBox(0, SIZE - 7)
}

function QrCode() {
  const cells: { x: number; y: number }[] = []
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (isFinder(x, y)) continue
      if (((x * 7 + y * 13 + x * y * 3) % 5) < 2) cells.push({ x, y })
    }
  }
  const finders = [
    [0, 0],
    [SIZE - 7, 0],
    [0, SIZE - 7],
  ] as const
  return (
    <svg viewBox={`-1 -1 ${SIZE + 2} ${SIZE + 2}`} className="size-full" aria-label="Authenticator QR code">
      <rect x={-1} y={-1} width={SIZE + 2} height={SIZE + 2} fill="white" />
      {cells.map((cell) => (
        <rect key={`${cell.x}-${cell.y}`} x={cell.x} y={cell.y} width={1} height={1} fill="black" />
      ))}
      {finders.map(([fx, fy]) => (
        <g key={`${fx}-${fy}`}>
          <rect x={fx + 0.5} y={fy + 0.5} width={6} height={6} fill="none" stroke="black" strokeWidth={1} />
          <rect x={fx + 2} y={fy + 2} width={3} height={3} fill="black" />
        </g>
      ))}
    </svg>
  )
}

const secret = "JBSW Y3DP EHPK 3PXP"
const backupCodes = ["8f3k-2m9q", "p7xd-41ac", "zq62-mn8r", "c4vw-0t5e", "h9ly-3bks", "u2fj-7rpn"]

export default function Authentication06() {
  const [step, setStep] = useState(0)
  const [copied, setCopied] = useState(false)
  const [code, setCode] = useState("")

  const steps = ["Scan", "Verify", "Save codes"]

  return (
    <section className="flex min-h-[720px] w-full items-center justify-center bg-muted/40 px-6 py-16">
      <div className="w-full max-w-lg border bg-background">
        <ol className="grid grid-cols-3 border-b text-xs">
          {steps.map((label, index) => (
            <li
              key={label}
              className={cn(
                "flex items-center justify-center gap-2 border-e py-3 last:border-e-0",
                index === step ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <span
                className={cn(
                  "flex size-5 items-center justify-center border text-[10px]",
                  index < step && "border-foreground bg-foreground text-background",
                  index === step && "border-foreground"
                )}
              >
                {index < step ? <Check className="size-3" /> : index + 1}
              </span>
              {label}
            </li>
          ))}
        </ol>

        <div className="p-6 sm:p-8">
          {step === 0 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Set up two-factor authentication</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Scan this code with an authenticator app like 1Password, Authy or your phone&apos;s built-in passwords app.
                </p>
              </div>
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <div className="size-44 shrink-0 border p-2">
                  <QrCode />
                </div>
                <div className="w-full space-y-3 text-sm">
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Smartphone className="size-4" />
                    Can&apos;t scan? Enter this key manually.
                  </p>
                  <div className="flex items-center justify-between gap-2 border bg-muted/50 px-3 py-2">
                    <code className="font-mono text-sm tracking-wider">{secret}</code>
                    <button
                      type="button"
                      aria-label="Copy setup key"
                      onClick={() => setCopied(true)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">Account: ali@designali.com &middot; Designali</p>
                </div>
              </div>
              <Button className="w-full" onClick={() => setStep(1)}>
                I&apos;ve scanned the code
              </Button>
            </div>
          )}

          {step === 1 && (
            <form
              className="space-y-6"
              onSubmit={(event) => {
                event.preventDefault()
                if (code.length === 6) setStep(2)
              }}
            >
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Enter the 6-digit code</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Type the code your authenticator app shows for Designali.
                </p>
              </div>
              <Input
                inputMode="numeric"
                autoComplete="one-time-code"
                value={code}
                onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="000000"
                className="h-14 text-center font-mono text-2xl tracking-[0.5em]"
              />
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep(0)}>
                  Back
                </Button>
                <Button type="submit" className="flex-1" disabled={code.length !== 6}>
                  Verify and enable
                </Button>
              </div>
            </form>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Save your backup codes</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Each code works once. Store them somewhere safe in case you lose your device.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-px border bg-border font-mono text-sm">
                {backupCodes.map((item) => (
                  <li key={item} className="bg-muted/40 px-4 py-3 text-center tracking-wider">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="outline" className="flex-1">
                  <Download />
                  Download .txt
                </Button>
                <Button className="flex-1">Done</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
