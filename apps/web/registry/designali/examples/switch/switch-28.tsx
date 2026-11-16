"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

export default function FormDataSwitches() {
  const [result, setResult] = React.useState<string | null>(null)

  return (
    <form
      className="flex w-full max-w-xs flex-col gap-3 border p-4"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        setResult(
          JSON.stringify({
            newsletter: data.get("newsletter") === "on",
            beta: data.get("beta") === "on",
          })
        )
      }}
    >
      <div className="flex items-center justify-between">
        <Label htmlFor="form-newsletter">Designali newsletter</Label>
        <Switch id="form-newsletter" name="newsletter" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="form-beta">Join beta program</Label>
        <Switch id="form-beta" name="beta" />
      </div>
      <Button type="submit" size="sm">
        Save preferences
      </Button>
      {result && (
        <pre className="overflow-x-auto bg-muted p-2 font-mono text-xs">
          {result}
        </pre>
      )}
    </form>
  )
}
