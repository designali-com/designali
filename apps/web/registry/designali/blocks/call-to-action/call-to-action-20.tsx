"use client"

import { useState } from "react"
import {
  Check,
  Copy,
  Users,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const referral = "designali.com/r/kx42-ali"

export default function CallToAction20() {
  const [joined, setJoined] = useState(false)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`https://${referral}`)
    } catch {
      // clipboard not available
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section className="w-full bg-foreground px-6 py-20 text-background md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 border border-background/20 px-3 py-1 text-xs text-background/70">
          <Users className="size-3.5" />
          12,840 people waiting
        </span>
        <h2 className="mt-6 text-4xl font-medium tracking-tight md:text-6xl">
          Designali Pro opens in March.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-background/70">
          Every template, block and icon pack in one membership. Join the waitlist
          and move up three spots for every friend who signs up.
        </p>

        {!joined ? (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setJoined(true)
            }}
            className="mx-auto mt-10 flex max-w-md flex-col gap-2 sm:flex-row"
          >
            <Input
              type="email"
              required
              placeholder="you@example.com"
              aria-label="Email"
              className="h-11 flex-1 border-background/20 bg-background/5 text-sm text-background placeholder:text-background/40 md:text-sm dark:bg-background/5"
            />
            <Button
              type="submit"
              className="h-11 bg-background text-foreground hover:bg-background/90"
            >
              Join waitlist
            </Button>
          </form>
        ) : (
          <div className="mx-auto mt-10 max-w-md border border-background/20 p-6 text-left">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-background/70">Your position</span>
              <span className="font-mono text-3xl">#12,841</span>
            </div>
            <div className="mt-5 text-xs text-background/60">
              Share your link to jump the queue
            </div>
            <div className="mt-2 flex items-center gap-2 border border-background/20 bg-background/5 py-1 pr-1 pl-3">
              <span className="min-w-0 flex-1 truncate font-mono text-sm">
                {referral}
              </span>
              <Button
                size="sm"
                onClick={copy}
                className="bg-background text-foreground hover:bg-background/90"
              >
                {copied ? <Check data-icon="inline-start" /> : <Copy data-icon="inline-start" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
