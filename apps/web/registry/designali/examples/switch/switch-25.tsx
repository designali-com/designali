"use client"

import * as React from "react"
import {
  Construction as ConstructionIcon,
} from "@designali/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

export default function MaintenanceModeSwitch() {
  const [maintenance, setMaintenance] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {maintenance && (
        <Alert variant="warning">
          <ConstructionIcon />
          <AlertTitle>designali.com is in maintenance mode</AlertTitle>
          <AlertDescription>
            Visitors see a &quot;back soon&quot; page.
          </AlertDescription>
        </Alert>
      )}
      <div className="flex items-center justify-between gap-4 border p-4">
        <div>
          <Label htmlFor="maintenance">Maintenance mode</Label>
          <p className="text-xs text-muted-foreground">
            Only admins can access the Designali store.
          </p>
        </div>
        <Switch
          id="maintenance"
          checked={maintenance}
          onCheckedChange={setMaintenance}
        />
      </div>
    </div>
  )
}
