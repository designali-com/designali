"use client"

import * as React from "react"
import { CloudIcon, CloudOffIcon } from "lucide-react"

import { Label } from "@workspace/ui/components/label"
import { Progress } from "@workspace/ui/components/progress"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

export default function CloudSyncSwitch() {
  const [sync, setSync] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center gap-3">
        {sync ? (
          <CloudIcon className="size-5" />
        ) : (
          <CloudOffIcon className="size-5 text-muted-foreground" />
        )}
        <div className="flex-1">
          <Label htmlFor="cloud-sync">Sync photos to cloud</Label>
          <p className="text-xs text-muted-foreground">
            {sync ? "Last synced 4 minutes ago" : "Photos stay on this device"}
          </p>
        </div>
        <Switch id="cloud-sync" checked={sync} onCheckedChange={setSync} />
      </div>
      <div className={cn("flex flex-col gap-1.5", !sync && "opacity-50")}>
        <div className="flex justify-between text-xs">
          <span>Storage</span>
          <span className="text-muted-foreground">38.2 of 50 GB</span>
        </div>
        <Progress value={76} aria-label="Storage used" />
      </div>
    </div>
  )
}
