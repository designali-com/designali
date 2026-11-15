"use client"

import * as React from "react"
import { CheckIcon, XIcon } from "lucide-react"

import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"

export default function PasswordRulesTooltip() {
  const [value, setValue] = React.useState("")
  const rules = [
    { label: "At least 12 characters", ok: value.length >= 12 },
    { label: "One number", ok: /\d/.test(value) },
    { label: "One symbol", ok: /[^A-Za-z0-9]/.test(value) },
  ]

  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label htmlFor="new-password">New password</Label>
      <Tooltip>
        <TooltipTrigger
          render={
            <Input
              id="new-password"
              type="password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          }
        />
        <TooltipContent
          side="right"
          className="flex-col items-start gap-1 py-2"
        >
          {rules.map((r) => (
            <span
              key={r.label}
              className={cn(
                "flex items-center gap-1.5",
                r.ok && "line-through opacity-60"
              )}
            >
              {r.ok ? (
                <CheckIcon className="size-3" />
              ) : (
                <XIcon className="size-3" />
              )}
              {r.label}
            </span>
          ))}
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
