"use client"

import * as React from "react"
import {
  Hash as HashIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Switch } from "@workspace/ui/components/switch"

const channels = ["#general", "#design", "#engineering", "#random", "#support"]

export default function BulkEnableSwitches() {
  const [enabled, setEnabled] = React.useState<string[]>([
    "#general",
    "#design",
  ])
  const setAll = (on: boolean) => setEnabled(on ? channels : [])

  return (
    <div className="w-full max-w-xs border">
      <div className="flex items-center justify-between border-b px-3 py-2">
        <span className="text-xs text-muted-foreground">
          {enabled.length} of {channels.length} channels
        </span>
        <div className="flex gap-1">
          <Button variant="ghost" size="xs" onClick={() => setAll(true)}>
            All
          </Button>
          <Button variant="ghost" size="xs" onClick={() => setAll(false)}>
            None
          </Button>
        </div>
      </div>
      {channels.map((channel) => (
        <label
          key={channel}
          className="flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-muted/50"
        >
          <span className="flex items-center gap-2 text-sm">
            <HashIcon className="size-3.5 text-muted-foreground" />
            {channel.slice(1)}
          </span>
          <Switch
            size="sm"
            checked={enabled.includes(channel)}
            onCheckedChange={(checked) =>
              setEnabled((list) =>
                checked ? [...list, channel] : list.filter((c) => c !== channel)
              )
            }
          />
        </label>
      ))}
    </div>
  )
}
