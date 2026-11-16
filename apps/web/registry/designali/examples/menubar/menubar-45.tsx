"use client"

import * as React from "react"
import {
  Circle as CircleIcon,
  Headphones as HeadphonesIcon,
  Laptop as LaptopIcon,
  Mic as MicIcon,
  Pause as PauseIcon,
  Square as SquareIcon,
} from "@designali/icons"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import { cn } from "@workspace/ui/lib/utils"

export default function PodcastRecordingMenubar() {
  const [recording, setRecording] = React.useState(false)
  const [device, setDevice] = React.useState("usb")
  const [monitor, setMonitor] = React.useState(true)

  return (
    <Menubar className="w-full max-w-sm">
      <MenubarMenu>
        <MenubarTrigger>Record</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarGroup>
            <MenubarItem onClick={() => setRecording((r) => !r)}>
              {recording ? (
                <SquareIcon />
              ) : (
                <CircleIcon className="fill-destructive text-destructive" />
              )}
              {recording ? "Stop recording" : "Start recording"}
              <MenubarShortcut>R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled={!recording}>
              <PauseIcon /> Pause
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarCheckboxItem checked={monitor} onCheckedChange={setMonitor}>
              Monitor input
            </MenubarCheckboxItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Input</MenubarTrigger>
        <MenubarContent className="w-52">
          <MenubarRadioGroup value={device} onValueChange={setDevice}>
            <MenubarRadioItem value="usb">
              <MicIcon /> USB condenser mic
            </MenubarRadioItem>
            <MenubarRadioItem value="built-in">
              <LaptopIcon /> Built-in microphone
            </MenubarRadioItem>
            <MenubarRadioItem value="headset">
              <HeadphonesIcon /> Wireless headset
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <span className="ms-auto flex items-center gap-1.5 pe-1 text-[11px] text-muted-foreground">
        <span
          className={cn(
            "size-2 rounded-full",
            recording ? "animate-pulse bg-destructive" : "bg-muted-foreground/40"
          )}
        />
        {recording ? "REC 00:12:48" : "Ready"}
      </span>
    </Menubar>
  )
}
