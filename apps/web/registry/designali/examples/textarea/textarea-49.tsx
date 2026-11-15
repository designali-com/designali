"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

export default function PromptVariablesTextarea() {
  const [template, setTemplate] = React.useState(
    "Write a {{tone}} reply to {{customer}} about their {{topic}}."
  )
  const vars = [
    ...new Set([...template.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]!)),
  ]

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="grid gap-1.5">
        <Label htmlFor="ta-template">Prompt template</Label>
        <Textarea
          id="ta-template"
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          className="font-mono"
        />
      </div>
      <div className="grid gap-2">
        {vars.map((v) => (
          <div key={v} className="flex items-center gap-2">
            <Badge variant="outline" className="w-20 justify-center font-mono">
              {v}
            </Badge>
            <Input placeholder={"Value for " + v} aria-label={v} />
          </div>
        ))}
      </div>
    </div>
  )
}
