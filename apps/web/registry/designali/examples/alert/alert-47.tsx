"use client"

import * as React from "react"
import { CheckIcon, ShieldCheckIcon, ShieldIcon, XIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { cn } from "@workspace/ui/lib/utils"

const rules = [
  { label: "At least 12 characters", test: (v: string) => v.length >= 12 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /\d/.test(v) },
  { label: "One symbol", test: (v: string) => /[^A-Za-z0-9]/.test(v) },
]

export default function AlertPasswordRequirements() {
  const [value, setValue] = React.useState("harbour7")
  const passed = rules.filter((rule) => rule.test(value)).length
  const ok = passed === rules.length

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="new-password">New password</Label>
      <Input
        id="new-password"
        type="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-invalid={!ok}
      />
      <Alert variant={ok ? "success" : "default"}>
        {ok ? <ShieldCheckIcon /> : <ShieldIcon />}
        <AlertTitle>
          {ok
            ? "Strong password"
            : passed + " of " + rules.length + " requirements met"}
        </AlertTitle>
        <AlertDescription>
          <ul className="space-y-0.5">
            {rules.map((rule) => {
              const met = rule.test(value)
              return (
                <li
                  key={rule.label}
                  className={cn(
                    "flex items-center gap-1.5",
                    met && "text-foreground"
                  )}
                >
                  {met ? (
                    <CheckIcon className="size-3" />
                  ) : (
                    <XIcon className="size-3" />
                  )}
                  {rule.label}
                </li>
              )
            })}
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  )
}
