"use client"

import * as React from "react"
import {
  Play as PlayIcon,
  RotateCcw as RotateCcwIcon,
  Square as SquareIcon,
} from "@designali/icons"

import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import { cn } from "@workspace/ui/lib/utils"

export default function DebuggerMenubar() {
  const [running, setRunning] = React.useState(false)
  const [pauseOnExceptions, setPauseOnExceptions] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Debug</MenubarTrigger>
          <MenubarContent className="w-56">
            <MenubarGroup>
              <MenubarItem onClick={() => setRunning((r) => !r)}>
                {running ? <SquareIcon /> : <PlayIcon />}
                {running ? "Stop" : "Start"}
                <Kbd className="ms-auto">{running ? "⇧F5" : "F5"}</Kbd>
              </MenubarItem>
              <MenubarItem disabled={!running}>
                <RotateCcwIcon /> Restart
                <KbdGroup className="ms-auto">
                  <Kbd>⇧</Kbd>
                  <Kbd>⌘</Kbd>
                  <Kbd>F5</Kbd>
                </KbdGroup>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarCheckboxItem
                checked={pauseOnExceptions}
                onCheckedChange={setPauseOnExceptions}
              >
                Pause on exceptions
              </MenubarCheckboxItem>
              <MenubarItem inset>Remove all breakpoints</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu disabled={!running}>
          <MenubarTrigger className="data-disabled:opacity-50">
            Step
          </MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                Step over <Kbd className="ms-auto">F10</Kbd>
              </MenubarItem>
              <MenubarItem>
                Step into <Kbd className="ms-auto">F11</Kbd>
              </MenubarItem>
              <MenubarItem>
                Step out <Kbd className="ms-auto">⇧F11</Kbd>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <span
          className={cn(
            "size-2 rounded-full",
            running ? "bg-emerald-500" : "bg-muted-foreground/40"
          )}
        />
        {running ? "Debugging api-server" : "Not running"}
      </p>
    </div>
  )
}
