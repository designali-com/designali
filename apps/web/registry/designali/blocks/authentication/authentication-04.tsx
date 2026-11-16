"use client"

import { useState } from "react"
import {
  ArrowLeft,
  FingerprintPattern as Fingerprint,
  Mail,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"

export default function Authentication04() {
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl border md:grid-cols-2">
        <div className="flex flex-col justify-between gap-12 border-b p-8 md:border-e md:border-b-0 md:p-12">
          <p className="font-sans text-xs text-muted-foreground">DESIGNALI / SIGN IN</p>
          <h2 className="text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
            No passwords.
            <br />
            <span className="text-muted-foreground">Just you.</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Sign in to designali.com with a passkey stored on this device, or get
            a one-time link sent to your email.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
          {sent ? (
            <div className="space-y-4">
              <Mail className="size-6" />
              <h3 className="text-xl font-medium">Magic link sent</h3>
              <p className="text-sm text-muted-foreground">
                Open the email we sent to {email || "your inbox"} and tap the
                link to continue. You can close this tab.
              </p>
              <Button variant="ghost" onClick={() => setSent(false)} className="-ms-4">
                <ArrowLeft />
                Use a different email
              </Button>
            </div>
          ) : (
            <>
              <Button size="lg" className="w-full">
                <Fingerprint />
                Continue with passkey
              </Button>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                or
                <span className="h-px flex-1 bg-border" />
              </div>
              <form
                className="space-y-3"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSent(true)
                }}
              >
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="h-12 text-sm"
                />
                <Button type="submit" variant="outline" size="lg" className="w-full">
                  Email me a sign-in link
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
