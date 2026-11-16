"use client"

import { useState } from "react"
import {
  Check,
  X,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { cn } from "@workspace/ui/lib/utils"

const rules = [
  { label: "At least 12 characters", test: (v: string) => v.length >= 12 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /\d/.test(v) },
  { label: "One symbol", test: (v: string) => /[^A-Za-z0-9]/.test(v) },
]

const strengthLabels = ["Too weak", "Weak", "Fair", "Good", "Strong"]

export default function Forms08() {
  const [password, setPassword] = useState("Designali2026")
  const passed = rules.filter((rule) => rule.test(password)).length

  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1.1fr]">
        <div className="relative flex flex-col justify-between gap-16 overflow-hidden bg-muted p-8 md:p-12">
          <div
            className="absolute -top-24 -right-24 size-80 rounded-full bg-gradient-to-br from-chart-1/60 to-primary/40 blur-3xl dark:from-primary/30 dark:to-chart-2/20"
            aria-hidden
          />
          <p className="relative text-sm font-semibold">designali</p>
          <figure className="relative">
            <blockquote className="text-2xl leading-snug font-medium tracking-tight md:text-3xl">
              &ldquo;Where thoughtful design meets production-ready code. I
              design and build digital experiences that look great, feel
              intuitive, and work beautifully.&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center bg-foreground text-xs font-medium text-background">
                AI
              </span>
              <span className="text-sm">
                <span className="block font-medium">Ali Imam</span>
                <span className="text-muted-foreground">Founder, Designali</span>
              </span>
            </figcaption>
          </figure>
        </div>

        <form className="space-y-6 p-8 md:p-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Create your Designali account</h2>
            <p className="mt-2 text-sm text-muted-foreground">Get access to free blocks, templates and icons.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="f8-first">First name</Label>
              <Input id="f8-first" placeholder="First name" className="h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="f8-last">Last name</Label>
              <Input id="f8-last" placeholder="Last name" className="h-10" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="f8-email">Work email</Label>
            <Input id="f8-email" type="email" placeholder="you@example.com" className="h-10" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="f8-password">Password</Label>
            <Input
              id="f8-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="h-10"
            />
            <div className="flex gap-1 pt-1" aria-hidden>
              {Array.from({ length: 4 }, (_, index) => (
                <span
                  key={index}
                  className={cn(
                    "h-1 flex-1 bg-muted transition-colors",
                    index < passed &&
                      (passed <= 1
                        ? "bg-destructive"
                        : passed <= 2
                          ? "bg-primary"
                          : passed <= 3
                            ? "bg-primary"
                            : "bg-primary")
                  )}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground" aria-live="polite">
              Strength: <span className="text-foreground">{strengthLabels[passed]}</span>
            </p>
            <ul className="grid gap-1.5 pt-2 sm:grid-cols-2">
              {rules.map((rule) => {
                const ok = rule.test(password)
                return (
                  <li
                    key={rule.label}
                    className={cn(
                      "flex items-center gap-2 text-xs",
                      ok ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {ok ? (
                      <Check className="size-3.5 text-primary dark:text-primary" />
                    ) : (
                      <X className="size-3.5" />
                    )}
                    {rule.label}
                  </li>
                )
              })}
            </ul>
          </div>
          <Button type="submit" size="lg" className="w-full" disabled={passed < 4}>
            Create account
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Already have an account?{" "}
            <a href="#" className="text-foreground underline underline-offset-4">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </section>
  )
}
