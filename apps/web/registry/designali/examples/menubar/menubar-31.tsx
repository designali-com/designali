"use client"

import * as React from "react"
import {
  AlignCenterHorizontalIcon,
  AlignCenterVerticalIcon,
  AlignEndHorizontalIcon,
  AlignEndVerticalIcon,
  AlignStartHorizontalIcon,
  AlignStartVerticalIcon,
  EyeOffIcon,
  FrameIcon,
  GroupIcon,
  LockIcon,
  SquareIcon,
} from "lucide-react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function DesignArrangeMenubar() {
  const [locked, setLocked] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Object</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem>
                <GroupIcon /> Group selection{" "}
                <MenubarShortcut>⌘G</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <FrameIcon /> Frame selection{" "}
                <MenubarShortcut>⌥⌘G</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarSub>
                <MenubarSubTrigger>
                  <AlignCenterHorizontalIcon /> Align
                </MenubarSubTrigger>
                <MenubarSubContent className="w-44">
                  <MenubarGroup>
                    <MenubarItem>
                      <AlignStartVerticalIcon /> Left{" "}
                      <MenubarShortcut>⌥A</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      <AlignCenterVerticalIcon /> Center{" "}
                      <MenubarShortcut>⌥H</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      <AlignEndVerticalIcon /> Right{" "}
                      <MenubarShortcut>⌥D</MenubarShortcut>
                    </MenubarItem>
                  </MenubarGroup>
                  <MenubarSeparator />
                  <MenubarGroup>
                    <MenubarItem>
                      <AlignStartHorizontalIcon /> Top{" "}
                      <MenubarShortcut>⌥W</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      <AlignEndHorizontalIcon /> Bottom{" "}
                      <MenubarShortcut>⌥S</MenubarShortcut>
                    </MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarCheckboxItem checked={locked} onCheckedChange={setLocked}>
                Lock layer <MenubarShortcut>⇧⌘L</MenubarShortcut>
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked={hidden} onCheckedChange={setHidden}>
                Hide layer <MenubarShortcut>⇧⌘H</MenubarShortcut>
              </MenubarCheckboxItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center gap-2 border px-3 py-2 text-xs">
        <SquareIcon className="size-3.5 text-muted-foreground" />
        <span className="flex-1">Hero card</span>
        {locked && <LockIcon className="size-3.5 text-muted-foreground" />}
        {hidden && <EyeOffIcon className="size-3.5 text-muted-foreground" />}
      </div>
    </div>
  )
}
