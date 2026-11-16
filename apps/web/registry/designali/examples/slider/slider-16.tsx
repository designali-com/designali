"use client"

import * as React from "react"
import {
  Copy as CopyIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Slider } from "@workspace/ui/components/slider"

const charset = "k7Qm#2vR9pX!aL4zT8wN$eB6yH3cJ5uF"

export default function PasswordLengthSlider() {
  const [length, setLength] = React.useState([16])
  const n = length[0]!
  const password = Array.from(
    { length: n },
    (_, i) => charset[(i * 7 + 3) % charset.length]
  ).join("")
  const strength = n < 10 ? "Weak" : n < 16 ? "Good" : "Strong"

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center gap-2 border bg-muted/40 px-3 py-2">
        <code className="min-w-0 flex-1 truncate font-mono text-sm">
          {password}
        </code>
        <Button variant="ghost" size="icon-xs" aria-label="Copy password">
          <CopyIcon />
        </Button>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span>Length: {n}</span>
        <Badge variant={strength === "Weak" ? "destructive" : "secondary"}>
          {strength}
        </Badge>
      </div>
      <Slider
        aria-label="Password length"
        value={length}
        onValueChange={(value) => setLength(value as number[])}
        min={6}
        max={32}
      />
    </div>
  )
}
