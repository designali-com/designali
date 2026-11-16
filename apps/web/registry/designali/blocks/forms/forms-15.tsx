"use client"

import { useState } from "react"
import {
  ArrowRight,
  Check,
  Copy,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

const initials = ["AK", "LM", "RT", "SO", "BW"]

export default function Forms15() {
  const [email, setEmail] = useState("")
  const [joined, setJoined] = useState(false)
  const [copied, setCopied] = useState(false)

  return (
    <section className="relative w-full overflow-hidden bg-background py-28">
      <div
        className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(60%_50%_at_50%_0%,var(--muted),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <span className="border border-border bg-background px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
          Early access · New templates
        </span>
        <h2 className="mt-8 text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
          Be first to get new Designali templates.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
          New templates, blocks and icon packs from Ali Imam land here first.
          Join the list for early access.
        </p>

        {joined ? (
          <div className="mt-10 w-full max-w-md border border-border bg-card p-6 text-left" aria-live="polite">
            <p className="flex items-center gap-2 text-sm font-medium">
              <Check className="size-4 text-emerald-600 dark:text-emerald-400" />
              You are #2,418 on the list
            </p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Move up 100 spots for every friend who joins with your link.
            </p>
            <div className="mt-4 flex">
              <span className="flex h-10 min-w-0 flex-1 items-center truncate border border-r-0 border-border bg-muted px-3 font-mono text-xs">
                designali.com/r/k7f2q
              </span>
              <Button
                variant="outline"
                onClick={() => {
                  setCopied(true)
                  setTimeout(() => setCopied(false), 1500)
                }}
              >
                {copied ? <Check /> : <Copy />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>
        ) : (
          <form
            className="mt-10 flex w-full max-w-md flex-col gap-2 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault()
              if (email.includes("@")) setJoined(true)
            }}
          >
            <Label htmlFor="f15-email" className="sr-only">Email</Label>
            <Input
              id="f15-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="h-12 bg-background"
            />
            <Button type="submit" size="lg">
              Join waitlist
              <ArrowRight />
            </Button>
          </form>
        )}

        <div className="mt-10 flex items-center gap-3">
          <div className="flex -space-x-2">
            {initials.map((item) => (
              <span
                key={item}
                className="flex size-8 items-center justify-center border-2 border-background bg-muted text-[10px] font-medium"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="text-foreground">2,417 people</span> already waiting
          </p>
        </div>
      </div>
    </section>
  )
}
