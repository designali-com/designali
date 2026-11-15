"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

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
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Private beta, spring 2027
        </p>
        <h1 className="mt-6 text-5xl font-medium tracking-tight md:text-7xl">
          Notes that write their own follow-ups.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
          Drift listens to your meetings, drafts the recap and files action
          items in the tools your team already uses. Join the waitlist to get
          early access.
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
            placeholder="name@company.com"
            aria-label="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-11 bg-background text-sm"
          />
          <Button type="submit" size="lg" className="h-11" disabled={joined}>
            {joined ? "You're in" : "Join waitlist"}
            {!joined && <ArrowRight />}
          </Button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">
          3,412 people ahead of you. We invite a new group every Friday.
        </p>
      </div>
    </section>
  )
}
