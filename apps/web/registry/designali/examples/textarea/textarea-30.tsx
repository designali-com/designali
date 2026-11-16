"use client"

import * as React from "react"

import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

export default function EnvVariablesTextarea() {
  const [raw, setRaw] = React.useState(
    "DATABASE_URL=postgres://localhost/designali\nPAYMENTS_KEY=key_demo_123\n# comment\nPORT=3000"
  )
  const vars = raw
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map(
      (l) => [l.slice(0, l.indexOf("=")), l.slice(l.indexOf("=") + 1)] as const
    )

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Label htmlFor="ta-env">Environment variables</Label>
      <Textarea
        id="ta-env"
        value={raw}
        onChange={(e) => setRaw(e.target.value)}
        spellCheck={false}
        className="min-h-24 font-mono"
      />
      <p className="text-xs text-muted-foreground">
        {vars.length} variables detected
      </p>
      <div className="divide-y border font-mono text-xs">
        {vars.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-3 px-2.5 py-1.5">
            <span className="font-medium">{k}</span>
            <span className="truncate text-muted-foreground">
              {k.includes("KEY") ? "••••••" : v}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
