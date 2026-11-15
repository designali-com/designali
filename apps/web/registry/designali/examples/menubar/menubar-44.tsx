"use client"

import * as React from "react"
import { LayersIcon, MapPinIcon, NavigationIcon } from "lucide-react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import { cn } from "@workspace/ui/lib/utils"

export default function MapLayersMenubar() {
  const [base, setBase] = React.useState("streets")
  const [traffic, setTraffic] = React.useState(true)
  const [transit, setTransit] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <LayersIcon className="me-1.5 size-3.5" /> Layers
          </MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarGroup>
              <MenubarLabel inset>Base map</MenubarLabel>
              <MenubarRadioGroup value={base} onValueChange={setBase}>
                <MenubarRadioItem value="streets">Streets</MenubarRadioItem>
                <MenubarRadioItem value="satellite">Satellite</MenubarRadioItem>
                <MenubarRadioItem value="terrain">Terrain</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarLabel inset>Overlays</MenubarLabel>
              <MenubarCheckboxItem
                checked={traffic}
                onCheckedChange={setTraffic}
              >
                Traffic
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={transit}
                onCheckedChange={setTransit}
              >
                Transit lines
              </MenubarCheckboxItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <NavigationIcon className="me-1.5 size-3.5" /> Directions
          </MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>From my location</MenubarItem>
              <MenubarItem>Saved places</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div
        className={cn(
          "relative h-36 overflow-hidden border",
          base === "streets" && "bg-slate-100 dark:bg-slate-800",
          base === "satellite" &&
            "bg-gradient-to-br from-emerald-900 to-stone-700",
          base === "terrain" &&
            "bg-gradient-to-br from-lime-100 to-amber-200 dark:from-lime-900 dark:to-amber-900"
        )}
      >
        <div className="absolute inset-x-0 top-1/2 h-1.5 bg-white/80 dark:bg-white/30" />
        <div className="absolute inset-y-0 start-1/3 w-1.5 bg-white/80 dark:bg-white/30" />
        {traffic && (
          <div className="absolute inset-x-6 top-1/2 h-1.5 bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500" />
        )}
        {transit && (
          <div className="absolute inset-y-4 start-2/3 w-1 bg-violet-500" />
        )}
        <MapPinIcon className="absolute start-1/3 top-1/2 size-5 -translate-x-1/2 -translate-y-full text-red-500" />
      </div>
    </div>
  )
}
