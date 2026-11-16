"use client"

import * as React from "react"

import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { cn } from "@workspace/ui/lib/utils"

function strength(pw: string) {
  let score = 0
  if (pw.length >= 8) score++
  if (/[A-Z]/.test(pw)) score++
  if (/[0-9]/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++
  return score
}

const levels = ["Too short", "Weak", "Fair", "Good", "Strong"]

export default function PasswordStrengthLabel() {
  const [pw, setPw] = React.useState("Designali7")
  const score = strength(pw)

  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="new-password">New password</Label>
        <span
          className={cn(
            "text-xs font-medium",
            score >= 3
              ? "text-primary dark:text-primary"
              : "text-primary dark:text-primary"
          )}
        >
          {levels[score]}
        </span>
      </div>
      <Input
        id="new-password"
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />
      <div className="grid grid-cols-4 gap-1">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={cn("h-1", i < score ? "bg-foreground" : "bg-muted")}
          />
        ))}
      </div>
    </div>
  )
}
