"use client"

import * as React from "react"
import { MapPinIcon } from "lucide-react"

import { Label } from "@workspace/ui/components/label"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

export default function LocationSharingDuration() {
  const [sharing, setSharing] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <MapPinIcon className="size-4 text-muted-foreground" />
        <Label htmlFor="share-location" className="flex-1">
          Share live location
        </Label>
        <Switch
          id="share-location"
          checked={sharing}
          onCheckedChange={setSharing}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label
          htmlFor="share-duration"
          className={cn("text-xs", !sharing && "text-muted-foreground")}
        >
          Share for
        </Label>
        <NativeSelect id="share-duration" disabled={!sharing} defaultValue="1h">
          <NativeSelectOption value="15m">15 minutes</NativeSelectOption>
          <NativeSelectOption value="1h">1 hour</NativeSelectOption>
          <NativeSelectOption value="8h">Until end of day</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  )
}
