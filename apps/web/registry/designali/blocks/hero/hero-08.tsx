"use client"

import { useState } from "react"
import {
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

export default function Hero08() {
  const [email, setEmail] = useState("")
  const [joined, setJoined] = useState(false)

  return (
    <section className="relative w-full overflow-hidden bg-background px-6 py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, var(--chart-2) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase">
          Designali newsletter
        </p>
        <h1 className="mt-6 text-5xl font-medium tracking-tight md:text-7xl">
          New templates, blocks and icons in your inbox.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
          Get Ali Imam's notes on design and code, plus early access to new
          Designali templates, blocks and UI kits before they hit designali.com.
        </p>
        <form
          className="mt-10 flex w-full max-w-md flex-col gap-2 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault()
            if (email) setJoined(true)
          }}
        >
          <Input
            type="email"
            required
            placeholder="you@example.com"
            aria-label="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-11 bg-background text-sm"
          />
          <Button type="submit" size="lg" className="h-11" disabled={joined}>
            {joined ? "You're in" : "Subscribe"}
            {!joined && <ArrowRight />}
          </Button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">
          One email when something new ships. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
