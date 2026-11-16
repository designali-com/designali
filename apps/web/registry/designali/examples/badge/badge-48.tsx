"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

function score(value: string) {
  let points = 0
  if (value.length >= 8) points++
  if (/[A-Z]/.test(value) && /[a-z]/.test(value)) points++
  if (/[0-9]/.test(value)) points++
  if (/[^A-Za-z0-9]/.test(value)) points++
  return points
}

export default function PasswordStrengthBadge() {
  const [password, setPassword] = React.useState("")
  const points = score(password)
  const level =
    points <= 1
      ? "Weak"
      : points <= 2
        ? "Fair"
        : points === 3
          ? "Good"
          : "Strong"

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor="new-password" className="text-sm font-medium">
          New password
        </label>
        {password && (
          <Badge
            variant={level === "Weak" ? "destructive" : "secondary"}
            className={cn(
              level === "Fair" &&
                "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
              (level === "Good" || level === "Strong") &&
                "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1"
            )}
          >
            {level}
          </Badge>
        )}
      </div>
      <Input
        id="new-password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="At least 8 characters"
      />
    </div>
  )
}
