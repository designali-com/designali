"use client"

import * as React from "react"
import {
  CircleIcon,
  HeadphonesIcon,
  LaptopIcon,
  MicIcon,
  PauseIcon,
  SquareIcon,
} from "lucide-react"

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
                <CircleIcon className="fill-red-500 text-red-500" />
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
            recording ? "animate-pulse bg-red-500" : "bg-muted-foreground/40"
          )}
        />
        {recording ? "REC 00:12:48" : "Ready"}
      </span>
    </Menubar>
  )
}
