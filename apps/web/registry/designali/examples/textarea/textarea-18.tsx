"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

export default function JsonEditorTextarea() {
  const [value, setValue] = React.useState(
    '{\n  "retries": 3,\n  "timeout": 5000\n}'
  )
  const [status, setStatus] = React.useState<{
    ok: boolean
    msg: string
  } | null>(null)

  function validate() {
    try {
      const keys = Object.keys(JSON.parse(value) as object)
      setStatus({ ok: true, msg: "Valid JSON · " + keys.length + " keys" })
    } catch (err) {
      setStatus({ ok: false, msg: (err as Error).message })
    }
  }

  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="ta-json">designali.com webhook config</Label>
      <Textarea
        id="ta-json"
        value={value}
        spellCheck={false}
        aria-invalid={status?.ok === false || undefined}
        onChange={(e) => {
          setValue(e.target.value)
          setStatus(null)
        }}
        className="min-h-28 font-mono"
      />
      <div className="flex items-center justify-between gap-2">
        <span
          className={cn(
            "truncate text-xs",
            status?.ok ? "text-emerald-600" : "text-destructive"
          )}
        >
          {status?.msg}
        </span>
        <Button variant="outline" size="sm" onClick={validate}>
          Validate
        </Button>
      </div>
    </div>
  )
}
