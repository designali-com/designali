"use client"

import * as React from "react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarLabel,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function PanelVisibilityMenubar() {
  const [sidebar, setSidebar] = React.useState(true)
  const [minimap, setMinimap] = React.useState(false)
  const [statusBar, setStatusBar] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarLabel inset>Appearance</MenubarLabel>
              <MenubarCheckboxItem
                checked={sidebar}
                onCheckedChange={setSidebar}
              >
                Primary sidebar
                <MenubarShortcut>⌘B</MenubarShortcut>
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={minimap}
                onCheckedChange={setMinimap}
              >
                Minimap
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={statusBar}
                onCheckedChange={setStatusBar}
              >
                Status bar
              </MenubarCheckboxItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex h-40 flex-col border">
        <div className="flex min-h-0 flex-1">
          {sidebar && <div className="w-16 shrink-0 border-e bg-muted" />}
          <div className="flex-1 space-y-1.5 p-3">
            {[80, 60, 72, 40, 66].map((w, i) => (
              <div
                key={i}
                className="h-1.5 bg-muted-foreground/20"
                style={{ width: w + "%" }}
              />
            ))}
          </div>
          {minimap && <div className="w-8 shrink-0 border-s bg-muted/60" />}
        </div>
        {statusBar && (
          <div className="flex items-center justify-between border-t bg-muted px-2 py-1 text-[10px] text-muted-foreground">
            <span>main</span>
            <span>Ln 12, Col 4</span>
          </div>
        )}
      </div>
    </div>
  )
}
