"use client"

import * as React from "react"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarShortcut,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import { cn } from "@workspace/ui/lib/utils"

const profiles: Record<string, string> = {
  midnight: "bg-foreground text-background",
  forest: "bg-chart-5 text-chart-1",
  dusk: "bg-chart-5 text-chart-1",
}

export default function TerminalAppMenubar() {
  const [profile, setProfile] = React.useState("midnight")

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Shell</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                New tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Split pane <MenubarShortcut>⌘D</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Export text as... <MenubarShortcut>⌘S</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Profile</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={profile} onValueChange={setProfile}>
              <MenubarRadioItem value="midnight">Midnight</MenubarRadioItem>
              <MenubarRadioItem value="forest">Forest</MenubarRadioItem>
              <MenubarRadioItem value="dusk">Dusk</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Window</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Select next tab</MenubarItem>
              <MenubarItem>Select previous tab</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div
        className={cn(
          "p-3 font-sans text-[11px] leading-relaxed",
          profiles[profile]
        )}
      >
        <p>~/projects/designali $ pnpm test</p>
        <p className="opacity-70">✓ 128 tests passed in 4.2s</p>
        <p>~/projects/designali $ _</p>
      </div>
    </div>
  )
}
