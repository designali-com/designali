"use client"

import { useState } from "react"
import {
  Check,
  Terminal,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

import { Macbook } from "@/registry/designali/ui/apple/macbook"

function formatCode(value: string) {
  const clean = value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8)
  return clean.length > 4 ? `${clean.slice(0, 4)}-${clean.slice(4)}` : clean
}

export default function Authentication17() {
  const [code, setCode] = useState("")
  const [stage, setStage] = useState<"enter" | "confirm" | "done">("enter")

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Macbook variant="macbook-pro" color="black" size="sm" className="max-w-full">
            <div className="h-full bg-black text-[10px] text-white/70">
              <div className="border-b border-white/10 px-3 py-1.5 text-white/50">~/projects/designali</div>
              <div className="space-y-1 overflow-x-auto p-3 leading-relaxed">
                <p><span className="text-primary">$</span> designali login</p>
                <p className="text-white/50">Opening browser to authorize this device...</p>
                <p>
                  Your one-time code: <span className="bg-white px-1 py-0.5 text-black">WDJB-MJHT</span>
                </p>
                <p className="text-white/50">Waiting for confirmation (expires in 15:00)</p>
                {stage === "done" ? (
                  <>
                    <p className="text-primary">Authenticated as ali@designali.com</p>
                    <p className="text-primary">Token saved to ~/.designali/credentials</p>
                    <p><span className="text-primary">$</span> <span className="animate-pulse">_</span></p>
                  </>
                ) : (
                  <p className="animate-pulse">|</p>
                )}
              </div>
            </div>
          </Macbook>
        </div>

        <div className="flex flex-col justify-center">
          <span className="flex size-11 items-center justify-center border">
            <Terminal className="size-5" />
          </span>

          {stage === "enter" && (
            <form
              className="mt-6 space-y-6"
              onSubmit={(event) => {
                event.preventDefault()
                if (code.length === 9) setStage("confirm")
              }}
            >
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Connect the Designali CLI</h2>
                <p className="mt-2 text-sm text-muted-foreground">Enter the code shown in your terminal.</p>
              </div>
              <input
                aria-label="Device code"
                value={code}
                onChange={(event) => setCode(formatCode(event.target.value))}
                placeholder="XXXX-XXXX"
                autoComplete="off"
                spellCheck={false}
                className="h-14 w-full border bg-transparent text-center font-sans text-2xl tracking-[0.3em] uppercase outline-none placeholder:text-muted-foreground/50 focus:border-foreground"
              />
              <Button type="submit" size="lg" className="w-full" disabled={code.length !== 9}>
                Continue
              </Button>
              <button type="button" onClick={() => setCode("WDJB-MJHT")} className="text-xs text-muted-foreground underline underline-offset-4">
                Fill example code
              </button>
            </form>
          )}

          {stage === "confirm" && (
            <div className="mt-6 space-y-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Authorize this device?</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Only continue if you just ran <code className="bg-muted px-1">designali login</code> yourself.
                </p>
              </div>
              <dl className="divide-y border text-sm">
                {[
                  ["Device", "MacBook Pro, macOS 15"],
                  ["Location", "Bengaluru, IN (approx.)"],
                  ["Access", "Install blocks, icons and templates"],
                ].map(([term, value]) => (
                  <div key={term} className="flex justify-between gap-4 p-3">
                    <dt className="text-muted-foreground">{term}</dt>
                    <dd className="text-end">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex gap-3">
                <Button variant="outline" size="lg" onClick={() => setStage("enter")}>Deny</Button>
                <Button size="lg" className="flex-1" onClick={() => setStage("done")}>Authorize device</Button>
              </div>
            </div>
          )}

          {stage === "done" && (
            <div className="mt-6 space-y-4">
              <h2 className="flex items-center gap-2 text-3xl font-semibold tracking-tight">
                <Check className="size-7 text-primary dark:text-primary" />
                Device connected
              </h2>
              <p className="text-sm text-muted-foreground">You can close this window and return to your terminal.</p>
              <Button variant="ghost" className="-ms-4" onClick={() => { setStage("enter"); setCode("") }}>
                Start over
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
