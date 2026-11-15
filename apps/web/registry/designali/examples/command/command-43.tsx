"use client"

import * as React from "react"
import {
  CloudIcon,
  HardDriveIcon,
  UsersIcon,
  WifiIcon,
  WifiOffIcon,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { Switch } from "@workspace/ui/components/switch"

export default function OfflineDisabledSearch() {
  const [online, setOnline] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between gap-2 border px-3 py-2 text-xs">
        <span className="flex items-center gap-2">
          {online ? (
            <WifiIcon className="size-4" />
          ) : (
            <WifiOffIcon className="size-4 text-destructive" />
          )}
          {online ? "Connected" : "You are offline"}
        </span>
        <Switch
          checked={online}
          onCheckedChange={setOnline}
          aria-label="Toggle connection"
        />
      </div>
      <Command className="border">
        <CommandInput
          disabled={!online}
          placeholder={
            online ? "Search workspace..." : "Search unavailable offline"
          }
        />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="Cloud">
            <CommandItem disabled={!online}>
              <CloudIcon />
              <span>Search shared drives</span>
            </CommandItem>
            <CommandItem disabled={!online}>
              <UsersIcon />
              <span>Search people</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="On this device">
            <CommandItem>
              <HardDriveIcon />
              <span>Downloaded files</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
