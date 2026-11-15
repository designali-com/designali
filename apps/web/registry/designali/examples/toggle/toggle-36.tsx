"use client"

import * as React from "react"
import { EyeOffIcon, GlobeIcon } from "lucide-react"

import { Spinner } from "@workspace/ui/components/spinner"
import { Toggle } from "@workspace/ui/components/toggle"
import { cn } from "@workspace/ui/lib/utils"

function savePreference(on: boolean) {
  return new Promise<void>((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() > 0.3 ? resolve() : reject(new Error(on ? "on" : "off")),
      900
    )
  )
}

export default function OptimisticAsyncToggle() {
  const [pressed, setPressed] = React.useState(false)
  const [saving, setSaving] = React.useState(false)
  const [error, setError] = React.useState(false)

  async function change(next: boolean) {
    setPressed(next)
    setSaving(true)
    setError(false)
    try {
      await savePreference(next)
    } catch {
      setPressed(!next)
      setError(true)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex w-full max-w-xs flex-col gap-2 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm">Public profile</span>
        <Toggle
          variant="outline"
          size="sm"
          pressed={pressed}
          onPressedChange={change}
          disabled={saving}
        >
          {saving ? <Spinner /> : pressed ? <GlobeIcon /> : <EyeOffIcon />}
          {pressed ? "Public" : "Private"}
        </Toggle>
      </div>
      <p
        className={cn(
          "text-xs",
          error ? "text-destructive" : "text-muted-foreground"
        )}
      >
        {error
          ? "Could not save. Your previous setting was restored."
          : saving
            ? "Saving..."
            : "Changes save automatically."}
      </p>
    </div>
  )
}
