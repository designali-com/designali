"use client"

import * as React from "react"
import { Link2Icon, Link2OffIcon } from "lucide-react"

import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Toggle } from "@workspace/ui/components/toggle"

export default function AspectRatioLockToggle() {
  const [locked, setLocked] = React.useState(true)
  const [size, setSize] = React.useState({ w: 1600, h: 900 })
  const ratio = 16 / 9

  return (
    <div className="flex w-full max-w-xs items-end gap-2 border p-4">
      <div className="flex flex-1 flex-col gap-1.5">
        <Label htmlFor="w">Width</Label>
        <Input
          id="w"
          type="number"
          value={size.w}
          onChange={(e) => {
            const w = Number(e.target.value)
            setSize((s) => ({ w, h: locked ? Math.round(w / ratio) : s.h }))
          }}
        />
      </div>
      <Toggle
        variant="outline"
        pressed={locked}
        onPressedChange={setLocked}
        aria-label={locked ? "Unlock aspect ratio" : "Lock aspect ratio"}
        className="h-10 min-w-10"
      >
        {locked ? <Link2Icon /> : <Link2OffIcon />}
      </Toggle>
      <div className="flex flex-1 flex-col gap-1.5">
        <Label htmlFor="h">Height</Label>
        <Input
          id="h"
          type="number"
          value={size.h}
          onChange={(e) => {
            const h = Number(e.target.value)
            setSize((s) => ({ h, w: locked ? Math.round(h * ratio) : s.w }))
          }}
        />
      </div>
    </div>
  )
}
