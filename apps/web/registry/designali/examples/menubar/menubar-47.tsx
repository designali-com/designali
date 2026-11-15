"use client"

import * as React from "react"
import {
  BookOpenIcon,
  CircleHelpIcon,
  KeyboardIcon,
  LifeBuoyIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function ControlledOpenMenubar() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col items-start gap-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu open={open} onOpenChange={setOpen}>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <BookOpenIcon /> Documentation
              </MenubarItem>
              <MenubarItem>
                <KeyboardIcon /> Keyboard shortcuts{" "}
                <MenubarShortcut>⌘/</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <LifeBuoyIcon /> Contact support
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
          <CircleHelpIcon data-icon="inline-start" />
          Need help?
        </Button>
        <span className="text-xs text-muted-foreground">
          Help menu is {open ? "open" : "closed"}
        </span>
      </div>
    </div>
  )
}
