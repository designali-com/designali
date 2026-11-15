"use client"

import * as React from "react"
import { BellIcon, BellOffIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Toggle } from "@workspace/ui/components/toggle"

export default function ControlledToggleStatus() {
  const [pressed, setPressed] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <Toggle
          variant="outline"
          pressed={pressed}
          onPressedChange={setPressed}
          aria-label="Do not disturb"
        >
          {pressed ? <BellOffIcon /> : <BellIcon />}
          Do not disturb
        </Toggle>
        <Badge variant={pressed ? "default" : "secondary"}>
          {pressed ? "On" : "Off"}
        </Badge>
      </div>
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          className="flex-1"
          onClick={() => setPressed(true)}
        >
          Turn on
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="flex-1"
          onClick={() => setPressed(false)}
        >
          Turn off
        </Button>
      </div>
    </div>
  )
}
