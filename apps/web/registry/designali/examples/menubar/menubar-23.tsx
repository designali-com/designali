"use client"

import * as React from "react"
import { FileTextIcon } from "lucide-react"

import {
  Menubar,
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

const initialRecent = [
  "Q3 board deck.key",
  "Hiring plan.docx",
  "Pricing model.xlsx",
  "Launch checklist.md",
]

export default function OpenRecentMenubar() {
  const [recent, setRecent] = React.useState(initialRecent)

  return (
    <div className="w-full max-w-xs">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarGroup>
              <MenubarItem>
                New <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Open... <MenubarShortcut>⌘O</MenubarShortcut>
              </MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Open recent</MenubarSubTrigger>
                <MenubarSubContent className="w-52">
                  {recent.length > 0 ? (
                    <MenubarGroup>
                      {recent.map((file) => (
                        <MenubarItem key={file}>
                          <FileTextIcon /> {file}
                        </MenubarItem>
                      ))}
                    </MenubarGroup>
                  ) : (
                    <MenubarGroup>
                      <MenubarItem disabled>No recent files</MenubarItem>
                    </MenubarGroup>
                  )}
                  <MenubarSeparator />
                  <MenubarGroup>
                    <MenubarItem
                      disabled={recent.length === 0}
                      onClick={() => setRecent([])}
                    >
                      Clear menu
                    </MenubarItem>
                    <MenubarItem
                      disabled={recent.length > 0}
                      onClick={() => setRecent(initialRecent)}
                    >
                      Restore list
                    </MenubarItem>
                  </MenubarGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                Close window <MenubarShortcut>⇧⌘W</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
