"use client"

import * as React from "react"

import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

export default function TextareaCharacterCount() {
  const [value, setValue] = React.useState("")
  const max = 280

  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="ta-count">Status update</Label>
      <Textarea
        id="ta-count"
        value={value}
        maxLength={max}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What are you designing at Designali today?"
      />
      <p
        className={cn(
          "text-end text-xs tabular-nums",
          value.length > max - 20 ? "text-destructive" : "text-muted-foreground"
        )}
      >
        {value.length}/{max}
      </p>
    </div>
  )
}
