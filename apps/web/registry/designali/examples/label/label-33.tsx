"use client"

import * as React from "react"
import { RotateCcwIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function LabelWithResetAction() {
  const [value, setValue] = React.useState("45")
  const isDefault = value === "30"

  return (
    <div className="grid w-full max-w-xs gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="session-timeout">Session timeout (minutes)</Label>
        <Button
          variant="ghost"
          size="xs"
          disabled={isDefault}
          onClick={() => setValue("30")}
        >
          <RotateCcwIcon data-icon="inline-start" />
          Reset
        </Button>
      </div>
      <Input
        id="session-timeout"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
