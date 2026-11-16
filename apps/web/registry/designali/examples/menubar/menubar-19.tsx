"use client"

import * as React from "react"
import {
  Bookmark as BookmarkIcon,
  Copy as CopyIcon,
  Scissors as ScissorsIcon,
  Unlink as UnlinkIcon,
} from "@designali/icons"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarShortcut,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function VideoTimelineMenubar() {
  const [speed, setSpeed] = React.useState("1")

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Clip</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <ScissorsIcon /> Split at playhead{" "}
                <MenubarShortcut>S</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <CopyIcon /> Duplicate clip
              </MenubarItem>
              <MenubarItem>
                <UnlinkIcon /> Detach audio
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Marker</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <BookmarkIcon /> Add marker <MenubarShortcut>M</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>Next marker</MenubarItem>
              <MenubarItem>Clear all markers</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Playback</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarLabel inset>Speed</MenubarLabel>
              <MenubarRadioGroup value={speed} onValueChange={setSpeed}>
                {["0.5", "1", "1.5", "2"].map((s) => (
                  <MenubarRadioItem key={s} value={s}>
                    {s}×
                  </MenubarRadioItem>
                ))}
              </MenubarRadioGroup>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <span className="ms-auto pe-1 text-[11px] text-muted-foreground tabular-nums">
          {speed}× · 00:42
        </span>
      </Menubar>
      <div className="relative flex h-10 gap-0.5 border bg-muted/40 p-1">
        <div className="w-1/3 bg-primary/70" />
        <div className="w-1/4 bg-primary/70" />
        <div className="flex-1 bg-primary/70" />
        <div className="absolute inset-y-0 start-[42%] w-px bg-foreground" />
      </div>
    </div>
  )
}
