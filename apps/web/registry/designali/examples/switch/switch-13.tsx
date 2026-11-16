"use client"

import * as React from "react"
import {
  Check as CheckIcon,
} from "@designali/icons"

import { Label } from "@workspace/ui/components/label"
import { Spinner } from "@workspace/ui/components/spinner"
import { Switch } from "@workspace/ui/components/switch"

export default function AsyncSavingSwitch() {
  const [checked, setChecked] = React.useState(false)
  const [saving, setSaving] = React.useState(false)
  const [savedAt, setSavedAt] = React.useState<string | null>(null)

  function handleChange(next: boolean) {
    setSaving(true)
    setTimeout(() => {
      setChecked(next)
      setSaving(false)
      setSavedAt(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      )
    }, 1200)
  }

  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4 border p-4">
      <div>
        <Label htmlFor="public-profile">Public profile</Label>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          {saving ? (
            <>
              <Spinner className="size-3" /> Saving...
            </>
          ) : savedAt ? (
            <>
              <CheckIcon className="size-3" /> Saved at {savedAt}
            </>
          ) : (
            "Anyone can view your designali.com profile."
          )}
        </p>
      </div>
      <Switch
        id="public-profile"
        checked={checked}
        onCheckedChange={handleChange}
        disabled={saving}
      />
    </div>
  )
}
