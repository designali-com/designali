"use client"

import { useState } from "react"
import {
  Check,
  Eye,
  EyeOff,
  KeyRound,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { cn } from "@workspace/ui/lib/utils"

const rules = [
  { label: "At least 10 characters", test: (value: string) => value.length >= 10 },
  { label: "One uppercase letter", test: (value: string) => /[A-Z]/.test(value) },
  { label: "One number", test: (value: string) => /\d/.test(value) },
  { label: "One symbol", test: (value: string) => /[^A-Za-z0-9]/.test(value) },
]

const strengthLabels = ["Too weak", "Weak", "Fair", "Good", "Strong"]

export default function Authentication05() {
  const [password, setPassword] = useState("")
  const [visible, setVisible] = useState(false)
  const passed = rules.filter((rule) => rule.test(password)).length

  return (
    <section className="flex min-h-[680px] w-full items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-sm">
        <KeyRound className="size-6" />
        <h2 className="mt-6 text-3xl font-semibold tracking-tight">Set a new password</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Choose something you haven&apos;t used on your Designali account before.
        </p>

        <form className="mt-8 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="auth-05-password">New password</Label>
            <div className="relative">
              <Input
                id="auth-05-password"
                type={visible ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-10 pe-10"
              />
              <button
                type="button"
                onClick={() => setVisible(!visible)}
                aria-label={visible ? "Hide password" : "Show password"}
                className="absolute end-0 top-0 flex h-10 w-10 items-center justify-center text-muted-foreground hover:text-foreground"
              >
                {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-4 gap-1">
              {rules.map((rule, index) => (
                <span
                  key={rule.label}
                  className={cn("h-1 transition-colors", index < passed ? "bg-foreground" : "bg-muted")}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Strength: <span className="text-foreground">{strengthLabels[passed]}</span>
            </p>
          </div>

          <ul className="space-y-2 border-y py-4">
            {rules.map((rule) => {
              const ok = rule.test(password)
              return (
                <li
                  key={rule.label}
                  className={cn("flex items-center gap-2 text-sm", ok ? "text-foreground" : "text-muted-foreground")}
                >
                  <span
                    className={cn(
                      "flex size-4 items-center justify-center border",
                      ok && "border-foreground bg-foreground text-background"
                    )}
                  >
                    {ok && <Check className="size-3" />}
                  </span>
                  {rule.label}
                </li>
              )
            })}
          </ul>

          <Button type="submit" size="lg" className="w-full" disabled={passed < rules.length}>
            Update password
          </Button>
        </form>
      </div>
    </section>
  )
}
