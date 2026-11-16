"use client"

import * as React from "react"

import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

export default function AccessibilityPreview() {
  const [largeText, setLargeText] = React.useState(false)
  const [highContrast, setHighContrast] = React.useState(false)
  const [underlineLinks, setUnderlineLinks] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div
        className={cn(
          "border p-3",
          highContrast ? "bg-foreground text-background" : "bg-muted/50"
        )}
      >
        <p className={cn("font-medium", largeText ? "text-lg" : "text-sm")}>
          Your Designali template is ready
        </p>
        <p
          className={cn(
            largeText ? "text-base" : "text-xs",
            !highContrast && "text-muted-foreground"
          )}
        >
          Track it from the{" "}
          <span
            className={cn(
              "font-medium",
              underlineLinks && "underline underline-offset-2"
            )}
          >
            downloads page
          </span>
          .
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="a11y-large">Larger text</Label>
        <Switch
          id="a11y-large"
          checked={largeText}
          onCheckedChange={setLargeText}
        />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="a11y-contrast">High contrast</Label>
        <Switch
          id="a11y-contrast"
          checked={highContrast}
          onCheckedChange={setHighContrast}
        />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="a11y-links">Underline links</Label>
        <Switch
          id="a11y-links"
          checked={underlineLinks}
          onCheckedChange={setUnderlineLinks}
        />
      </div>
    </div>
  )
}
