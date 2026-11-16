"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  KeyRound,
  ShieldCheck,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

const ssoDomains: Record<string, { org: string; provider: string }> = {
  "designali.com": { org: "Designali Studio", provider: "Google Workspace" },
  "example.com": { org: "Example Client", provider: "Okta" },
}

export default function Authentication07() {
  const [email, setEmail] = useState("")
  const [stage, setStage] = useState<"email" | "sso" | "password">("email")

  const domain = email.split("@")[1]?.toLowerCase() ?? ""
  const match = ssoDomains[domain]

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-md px-6">
        <div className="flex items-center gap-2 font-semibold">
          <ShieldCheck className="size-5" />
          designali
        </div>

        {stage === "email" && (
          <form
            className="mt-10 space-y-6"
            onSubmit={(event) => {
              event.preventDefault()
              if (!email.includes("@")) return
              setStage(match ? "sso" : "password")
            }}
          >
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Sign in</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Enter your work email. We&apos;ll route you to your company&apos;s sign-in if it uses single sign-on.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="auth-07-email">Work email</Label>
              <Input
                id="auth-07-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@designali.com"
                className="h-11"
              />
              {match && (
                <p className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400">
                  <Building2 className="size-3.5" />
                  {match.org} uses single sign-on
                </p>
              )}
            </div>
            <Button type="submit" size="lg" className="w-full">
              Continue
              <ArrowRight />
            </Button>
            <p className="text-xs text-muted-foreground">
              Try <button type="button" className="underline underline-offset-4" onClick={() => setEmail("ali@designali.com")}>ali@designali.com</button> to see the SSO flow.
            </p>
          </form>
        )}

        {stage === "sso" && match && (
          <div className="mt-10 space-y-6">
            <button type="button" onClick={() => setStage("email")} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="size-4" />
              {email}
            </button>
            <div className="border">
              <div className="flex items-center gap-4 border-b p-5">
                <span className="flex size-12 items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-700 text-sm font-semibold text-white">
                  {match.org.split(" ").map((word) => word[0]).join("")}
                </span>
                <div>
                  <p className="font-medium">{match.org}</p>
                  <p className="text-sm text-muted-foreground">Managed by your IT team</p>
                </div>
              </div>
              <div className="space-y-4 p-5">
                <p className="text-sm text-muted-foreground">
                  You&apos;ll be redirected to {match.provider} to finish signing in. Password login is disabled for this organization.
                </p>
                <Button size="lg" className="w-full">
                  Continue with {match.provider}
                </Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Having trouble? Contact your administrator or <a href="#" className="underline underline-offset-4">read the SSO guide</a>.
            </p>
          </div>
        )}

        {stage === "password" && (
          <form className="mt-10 space-y-6" onSubmit={(event) => event.preventDefault()}>
            <button type="button" onClick={() => setStage("email")} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="size-4" />
              {email}
            </button>
            <h2 className="text-3xl font-semibold tracking-tight">Enter your password</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="auth-07-password">Password</Label>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Forgot?</a>
              </div>
              <Input id="auth-07-password" type="password" className="h-11" autoFocus />
            </div>
            <Button type="submit" size="lg" className="w-full">Sign in</Button>
            <Button type="button" variant="outline" size="lg" className="w-full">
              <KeyRound />
              Use a passkey instead
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
