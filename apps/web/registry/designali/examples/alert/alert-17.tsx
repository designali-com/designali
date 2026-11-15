"use client"

import * as React from "react"
import { WifiIcon, WifiOffIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

export default function AlertOfflineStatus() {
  const [online, setOnline] = React.useState(false)

  return (
    <div className="w-full max-w-md space-y-3">
      <div className="flex items-center gap-2">
        <Switch id="network" checked={online} onCheckedChange={setOnline} />
        <Label htmlFor="network">Simulate network connection</Label>
      </div>
      {online ? (
        <Alert variant="success">
          <WifiIcon />
          <AlertTitle>Back online</AlertTitle>
          <AlertDescription>3 queued changes were synced.</AlertDescription>
        </Alert>
      ) : (
        <Alert variant="warning">
          <WifiOffIcon />
          <AlertTitle>You&apos;re offline</AlertTitle>
          <AlertDescription>
            Edits are saved on this device and will sync when you reconnect.
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
