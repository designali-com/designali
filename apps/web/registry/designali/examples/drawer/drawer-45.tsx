"use client"

import * as React from "react"
import {
  Lock as LockIcon,
  WifiHigh as WifiHighIcon,
  Wifi as WifiIcon,
  WifiLow as WifiLowIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const networks = [
  { ssid: "Designali-5G", signal: "high", secured: true },
  { ssid: "Designali-Guest", signal: "medium", secured: false },
  { ssid: "Studio-Lounge", signal: "medium", secured: true },
  { ssid: "Printer-3F", signal: "low", secured: true },
]

export default function WifiNetworksDrawer() {
  const [selected, setSelected] = React.useState<string | null>(null)

  return (
    <Drawer onOpenChange={(open) => !open && setSelected(null)}>
      <DrawerTrigger render={<Button variant="outline" />}>
        <WifiIcon data-icon="inline-start" />
        Wi-Fi
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Choose a network</DrawerTitle>
            <DrawerDescription>
              {networks.length} networks found
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col p-2">
            {networks.map((network) => {
              const Icon =
                network.signal === "high"
                  ? WifiIcon
                  : network.signal === "medium"
                    ? WifiHighIcon
                    : WifiLowIcon
              const isSelected = selected === network.ssid
              return (
                <div
                  key={network.ssid}
                  className={cn("flex flex-col", isSelected && "bg-muted/60")}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setSelected(isSelected ? null : network.ssid)
                    }
                    className="flex items-center gap-3 px-3 py-2.5 text-start hover:bg-muted"
                  >
                    <Icon className="size-4" />
                    <span className="flex-1">{network.ssid}</span>
                    {network.secured && (
                      <LockIcon className="size-3.5 text-muted-foreground" />
                    )}
                  </button>
                  {isSelected && (
                    <div className="flex gap-2 px-3 pb-3">
                      {network.secured && (
                        <Input
                          type="password"
                          placeholder="Password"
                          aria-label={"Password for " + network.ssid}
                          autoFocus
                        />
                      )}
                      <DrawerClose render={<Button />}>Join</DrawerClose>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
