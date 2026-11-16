"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

const initial = { autoplay: true, captions: false, hd: true }
type Prefs = typeof initial

const labels: Record<keyof Prefs, string> = {
  autoplay: "Autoplay next Designali tutorial",
  captions: "Always show captions",
  hd: "Stream in HD",
}

export default function UnsavedChangesSwitches() {
  const [saved, setSaved] = React.useState<Prefs>(initial)
  const [draft, setDraft] = React.useState<Prefs>(initial)
  const dirty = (Object.keys(draft) as (keyof Prefs)[]).some(
    (k) => draft[k] !== saved[k]
  )

  return (
    <div className="w-full max-w-sm border">
      <div className="flex flex-col gap-3 p-4">
        {(Object.keys(labels) as (keyof Prefs)[]).map((key) => (
          <div key={key} className="flex items-center justify-between">
            <Label htmlFor={"pref-" + key}>
              {labels[key]}
              {draft[key] !== saved[key] && (
                <span className="size-1.5 rounded-full bg-primary" />
              )}
            </Label>
            <Switch
              id={"pref-" + key}
              checked={draft[key]}
              onCheckedChange={(v) => setDraft((d) => ({ ...d, [key]: v }))}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t bg-muted/40 px-4 py-2">
        <span className="text-xs text-muted-foreground">
          {dirty ? "Unsaved changes" : "All changes saved"}
        </span>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            disabled={!dirty}
            onClick={() => setDraft(saved)}
          >
            Reset
          </Button>
          <Button size="sm" disabled={!dirty} onClick={() => setSaved(draft)}>
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
