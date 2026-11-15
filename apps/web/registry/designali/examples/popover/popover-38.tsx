"use client"

import * as React from "react"
import { CircleCheckIcon, CircleIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { cn } from "@workspace/ui/lib/utils"

const rules = [
  { label: "At least 12 characters", test: (v: string) => v.length >= 12 },
  { label: "One uppercase letter", test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number", test: (v: string) => /[0-9]/.test(v) },
  { label: "One symbol", test: (v: string) => /[^A-Za-z0-9]/.test(v) },
]

export default function PasswordRequirementsPopover() {
  const [value, setValue] = React.useState("")
  const passed = rules.filter((r) => r.test(value)).length

  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor="new-password">New password</Label>
        <Popover>
          <PopoverTrigger render={<Button variant="link" size="xs" />}>
            {passed}/{rules.length} requirements
          </PopoverTrigger>
          <PopoverContent className="w-60" side="right" align="start">
            <PopoverTitle>Password must have</PopoverTitle>
            <ul className="flex flex-col gap-1.5">
              {rules.map((rule) => {
                const ok = rule.test(value)
                return (
                  <li
                    key={rule.label}
                    className={cn(
                      "flex items-center gap-2 text-xs",
                      ok ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {ok ? (
                      <CircleCheckIcon className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <CircleIcon className="size-3.5" />
                    )}
                    {rule.label}
                  </li>
                )
              })}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
      <Input
        id="new-password"
        type="password"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        aria-invalid={value !== "" && passed < rules.length}
      />
    </div>
  )
}
