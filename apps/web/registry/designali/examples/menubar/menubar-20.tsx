"use client"

import * as React from "react"
import {
  BellOff as BellOffIcon,
  LogOut as LogOutIcon,
  Search as SearchIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
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
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function ChatConversationMenubar() {
  const [mute, setMute] = React.useState("off")
  const [pinned, setPinned] = React.useState(false)

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center gap-2 border-b p-2">
        <Avatar className="size-7">
          <AvatarFallback>DS</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">#design-systems</p>
          <p className="text-[11px] text-muted-foreground">
            {mute === "off" ? "Notifications on" : "Muted " + mute}
            {pinned && " · Pinned"}
          </p>
        </div>
        <Menubar className="border-0 p-0">
          <MenubarMenu>
            <MenubarTrigger>Conversation</MenubarTrigger>
            <MenubarContent align="end" alignOffset={0}>
              <MenubarGroup>
                <MenubarSub>
                  <MenubarSubTrigger>
                    <BellOffIcon /> Mute
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarRadioGroup value={mute} onValueChange={setMute}>
                      <MenubarRadioItem value="off">
                        Don&apos;t mute
                      </MenubarRadioItem>
                      <MenubarRadioItem value="for 1 hour">
                        For 1 hour
                      </MenubarRadioItem>
                      <MenubarRadioItem value="until tomorrow">
                        Until tomorrow
                      </MenubarRadioItem>
                      <MenubarRadioItem value="forever">
                        Until I turn it back on
                      </MenubarRadioItem>
                    </MenubarRadioGroup>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarCheckboxItem
                  checked={pinned}
                  onCheckedChange={setPinned}
                >
                  Pin to top
                </MenubarCheckboxItem>
                <MenubarItem>
                  <SearchIcon /> Search in conversation
                </MenubarItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarItem variant="destructive">
                  <LogOutIcon /> Leave channel
                </MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="space-y-2 p-3 text-xs">
        <p>
          <span className="font-medium">Ali:</span> Designali tokens are merged, please
          review the spacing scale.
        </p>
        <p>
          <span className="font-medium">Designer:</span> On it after standup.
        </p>
      </div>
    </div>
  )
}
