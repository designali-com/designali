"use client"

import * as React from "react"
import { SquareIcon } from "lucide-react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import { cn } from "@workspace/ui/lib/utils"

export default function NotesFormatMenubar() {
  const [block, setBlock] = React.useState("body")
  const [size, setSize] = React.useState("md")
  const [checklist, setChecklist] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Format</MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarRadioGroup value={block} onValueChange={setBlock}>
              <MenubarRadioItem value="title">
                Title <MenubarShortcut>⇧⌘T</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="heading">
                Heading <MenubarShortcut>⇧⌘H</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="body">
                Body <MenubarShortcut>⇧⌘B</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarCheckboxItem
                checked={checklist}
                onCheckedChange={setChecklist}
              >
                Checklist <MenubarShortcut>⇧⌘L</MenubarShortcut>
              </MenubarCheckboxItem>
              <MenubarSub>
                <MenubarSubTrigger inset>Font size</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarRadioGroup value={size} onValueChange={setSize}>
                    <MenubarRadioItem value="sm">Small</MenubarRadioItem>
                    <MenubarRadioItem value="md">Medium</MenubarRadioItem>
                    <MenubarRadioItem value="lg">Large</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="border p-3">
        <p
          className={cn(
            "flex items-center gap-2",
            block === "title" && "text-lg font-semibold",
            block === "heading" && "font-semibold",
            size === "sm" && "text-xs",
            size === "lg" && "text-base"
          )}
        >
          {checklist && (
            <SquareIcon className="size-3.5 shrink-0 text-muted-foreground" />
          )}
          Pick up film from the lab on Friday
        </p>
      </div>
    </div>
  )
}
