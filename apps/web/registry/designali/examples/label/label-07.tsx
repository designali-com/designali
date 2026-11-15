"use client"

import * as React from "react"

import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

export default function LabelWithCharacterCount() {
  const [bio, setBio] = React.useState(
    "Product designer who loves type and tiny details."
  )
  const max = 160

  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="bio">Bio</Label>
        <span
          className={cn(
            "text-xs text-muted-foreground tabular-nums",
            bio.length > max && "text-destructive"
          )}
        >
          {bio.length}/{max}
        </span>
      </div>
      <Textarea
        id="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="min-h-20"
      />
    </div>
  )
}
