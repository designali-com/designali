"use client"

import { useState } from "react"
import {
  ArrowRight,
  CircleCheck as CheckCircle2,
  Mail,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

export default function CallToAction08() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl border border-border bg-card p-8 text-center md:p-14">
        <div className="mx-auto flex size-12 items-center justify-center border border-border bg-muted">
          <Mail className="size-5" />
        </div>
        <h2 className="mt-6 text-3xl font-medium tracking-tight md:text-4xl">
          The Designali Build Notes
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
          One email a week with the layouts we shipped, the experiments that
          failed, and the numbers behind both. Written by Ali Imam.
        </p>
        {submitted ? (
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 border border-chart-2/30 bg-primary/5 px-4 py-4 text-sm text-chart-4 dark:bg-primary/40 dark:text-chart-1">
            <CheckCircle2 className="size-4 shrink-0" />
            <span>
              Check {email || "your inbox"} to confirm your subscription.
            </span>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
            className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-label="Email address"
              className="h-10 flex-1 text-sm md:text-sm"
            />
            <Button type="submit" className="h-10">
              Subscribe
              <ArrowRight data-icon="inline-end" />
            </Button>
          </form>
        )}
        <p className="mt-4 text-xs text-muted-foreground">
          No spam. Unsubscribe in one click, any time.
        </p>
      </div>
    </section>
  )
}
