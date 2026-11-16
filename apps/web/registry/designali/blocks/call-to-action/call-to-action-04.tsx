"use client"

import { useState } from "react"
import {
  Check,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

const perks = [
  "One practical design essay every Thursday",
  "Early access to new templates and blocks",
  "Unsubscribe in one click, no questions",
]

export default function CallToAction04() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="w-full bg-muted/40 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 border border-border bg-background p-8 md:grid-cols-2 md:p-14">
        <div>
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            The Designali Brief
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Join designers and engineers who get a short, useful note from
            Ali Imam on design, code and new Designali releases every week.
          </p>
          <ul className="mt-8 space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                {perk}
              </li>
            ))}
          </ul>
        </div>
        <form
          className="flex flex-col justify-center gap-3"
          onSubmit={(event) => {
            event.preventDefault()
            if (email) setSubmitted(true)
          }}
        >
          <label htmlFor="cta-04-email" className="text-xs text-muted-foreground">
            Work email
          </label>
          <Input
            id="cta-04-email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-11 text-sm"
          />
          <Button type="submit" size="lg" disabled={submitted}>
            {submitted ? "You're on the list" : "Subscribe"}
          </Button>
          <p className="text-xs text-muted-foreground">
            We send one email a week. Read past issues in the archive.
          </p>
        </form>
      </div>
    </section>
  )
}
