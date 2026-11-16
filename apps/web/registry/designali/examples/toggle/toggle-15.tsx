"use client"

import * as React from "react"
import {
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
} from "@designali/icons"

import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Toggle } from "@workspace/ui/components/toggle"

export default function PasswordVisibilityToggle() {
  const [visible, setVisible] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label htmlFor="pw">Password</Label>
      <div className="relative">
        <Input
          id="pw"
          type={visible ? "text" : "password"}
          defaultValue="correct-horse-battery"
          className="pe-10"
        />
        <Toggle
          size="sm"
          pressed={visible}
          onPressedChange={setVisible}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute end-1 top-1/2 -translate-y-1/2 aria-pressed:bg-transparent"
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </Toggle>
      </div>
    </div>
  )
}
