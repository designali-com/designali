"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  X as XIcon,
} from "@designali/icons"

import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const rules = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "An uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "A number", test: (v: string) => /\d/.test(v) },
  { label: "A symbol", test: (v: string) => /[^A-Za-z0-9]/.test(v) },
]
const labels = ["Too weak", "Weak", "Fair", "Good", "Strong"]

export default function PasswordStrengthMeter() {
  const [password, setPassword] = React.useState("")
  const score = rules.filter((rule) => rule.test(password)).length

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Label htmlFor="pw-strength">New password</Label>
      <Input
        id="pw-strength"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Create a password"
      />
      <Progress
        value={score}
        max={rules.length}
        aria-label="Password strength"
        className={cn(
          score <= 1 && "[&_[data-slot=progress-indicator]]:bg-destructive",
          score === 2 && "[&_[data-slot=progress-indicator]]:bg-amber-500",
          score >= 3 && "[&_[data-slot=progress-indicator]]:bg-emerald-500"
        )}
      >
        <span className="text-xs font-medium">{labels[score]}</span>
      </Progress>
      <ul className="flex flex-col gap-1 text-xs">
        {rules.map((rule) => (
          <li
            key={rule.label}
            className={cn(
              "flex items-center gap-1.5",
              rule.test(password) ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {rule.test(password) ? (
              <CheckIcon className="size-3" />
            ) : (
              <XIcon className="size-3" />
            )}
            {rule.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
