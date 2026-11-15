"use client"

import * as React from "react"
import {
  BringToFrontIcon,
  CopyIcon,
  EyeOffIcon,
  LayoutTemplateIcon,
  PlusIcon,
  PresentationIcon,
  SendToBackIcon,
  SquareIcon,
} from "lucide-react"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import { cn } from "@workspace/ui/lib/utils"

export default function PresentationMenubar() {
  const [presenting, setPresenting] = React.useState(false)

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Slide</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <PlusIcon /> New slide <MenubarShortcut>⌘M</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <CopyIcon /> Duplicate slide
              </MenubarItem>
              <MenubarItem>
                <EyeOffIcon /> Skip slide
              </MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>
                  <LayoutTemplateIcon /> Apply layout
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarGroup>
                    <MenubarItem>Title only</MenubarItem>
                    <MenubarItem>Title and body</MenubarItem>
                    <MenubarItem>Two columns</MenubarItem>
                    <MenubarItem>Section header</MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Arrange</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <BringToFrontIcon /> Bring to front
              </MenubarItem>
              <MenubarItem>
                <SendToBackIcon /> Send to back
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Present</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem onClick={() => setPresenting((p) => !p)}>
                {presenting ? <SquareIcon /> : <PresentationIcon />}
                {presenting ? "Stop presenting" : "From beginning"}
                <MenubarShortcut>⌘↵</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled={presenting}>Presenter view</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div
        className={cn(
          "flex aspect-video items-center justify-center border text-sm font-medium",
          presenting ? "bg-foreground text-background" : "bg-muted/40"
        )}
      >
        {presenting ? "Presenting · Slide 1 of 14" : "Q4 Product Review"}
      </div>
    </div>
  )
}
