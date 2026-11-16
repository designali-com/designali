"use client"

import * as React from "react"
import {
  Scan as ScanIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
} from "@designali/icons"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function ZoomLevelMenubar() {
  const [zoom, setZoom] = React.useState(100)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarGroup>
              <MenubarItem
                closeOnClick={false}
                disabled={zoom >= 200}
                onClick={() => setZoom((z) => Math.min(200, z + 25))}
              >
                <ZoomInIcon /> Zoom in <MenubarShortcut>⌘+</MenubarShortcut>
              </MenubarItem>
              <MenubarItem
                closeOnClick={false}
                disabled={zoom <= 25}
                onClick={() => setZoom((z) => Math.max(25, z - 25))}
              >
                <ZoomOutIcon /> Zoom out <MenubarShortcut>⌘-</MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={() => setZoom(100)}>
                <ScanIcon /> Actual size <MenubarShortcut>⌘0</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Layout</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Fit to width</MenubarItem>
              <MenubarItem>Fit page</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <span className="ms-auto pe-1 font-mono text-[11px] text-muted-foreground">
          {zoom}%
        </span>
      </Menubar>
      <div className="flex h-32 items-center justify-center overflow-hidden border bg-muted/40">
        <div
          className="size-12 bg-gradient-to-br from-indigo-500 to-cyan-400"
          style={{ transform: "scale(" + zoom / 100 + ")" }}
        />
      </div>
    </div>
  )
}
