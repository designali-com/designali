"use client"

import * as React from "react"

import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const children = [
  { id: "sound", label: "Play sound" },
  { id: "badge", label: "Show badge count" },
  { id: "preview", label: "Show message preview" },
]

export default function MasterSwitchWithChildren() {
  const [master, setMaster] = React.useState(true)

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between gap-4 border-b p-4">
        <div>
          <Label htmlFor="allow-notifications">Allow notifications</Label>
          <p className="text-xs text-muted-foreground">
            Turn off to silence everything.
          </p>
        </div>
        <Switch
          id="allow-notifications"
          checked={master}
          onCheckedChange={setMaster}
        />
      </div>
      <div
        className={cn("flex flex-col gap-3 p-4 ps-8", !master && "opacity-60")}
      >
        {children.map((child) => (
          <div
            key={child.id}
            className="flex items-center justify-between gap-4"
          >
            <Label htmlFor={child.id} className="font-normal">
              {child.label}
            </Label>
            <Switch id={child.id} size="sm" defaultChecked disabled={!master} />
          </div>
        ))}
      </div>
    </div>
  )
}
