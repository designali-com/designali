"use client"

import * as React from "react"

import { Label } from "@workspace/ui/components/label"
import { Separator } from "@workspace/ui/components/separator"
import { Switch } from "@workspace/ui/components/switch"

const items = [
  { id: "p-status", label: "Show online status" },
  { id: "p-read", label: "Send read receipts" },
  { id: "p-typing", label: "Show typing indicator" },
]

export default function PrivacySwitchGroup() {
  const [visible, setVisible] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="p-master" className="text-sm font-medium">
          Activity visible to others
        </Label>
        <Switch id="p-master" checked={visible} onCheckedChange={setVisible} />
      </div>
      <Separator />
      <div className="group flex flex-col gap-3 ps-2" data-disabled={!visible}>
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <Label htmlFor={item.id}>{item.label}</Label>
            <Switch id={item.id} size="sm" defaultChecked disabled={!visible} />
          </div>
        ))}
      </div>
    </div>
  )
}
