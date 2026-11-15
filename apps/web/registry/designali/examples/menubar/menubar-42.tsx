"use client"

import * as React from "react"
import { Columns2Icon, Grid2x2Icon, SquareIcon } from "lucide-react"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import { cn } from "@workspace/ui/lib/utils"

const layouts: Record<string, string> = {
  single: "grid-cols-1",
  split: "grid-cols-2",
  quad: "grid-cols-2 grid-rows-2",
}

export default function WindowTilingMenubar() {
  const [layout, setLayout] = React.useState("split")
  const panes = layout === "single" ? 1 : layout === "split" ? 2 : 4

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Window</MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarGroup>
              <MenubarLabel inset>Tiling</MenubarLabel>
              <MenubarRadioGroup value={layout} onValueChange={setLayout}>
                <MenubarRadioItem value="single">
                  <SquareIcon /> Single
                </MenubarRadioItem>
                <MenubarRadioItem value="split">
                  <Columns2Icon /> Split
                </MenubarRadioItem>
                <MenubarRadioItem value="quad">
                  <Grid2x2Icon /> Quad
                </MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className={cn("grid h-36 gap-1 border p-1", layouts[layout])}>
        {Array.from({ length: panes }, (_, i) => (
          <div
            key={i}
            className="flex items-center justify-center bg-muted text-[11px] text-muted-foreground"
          >
            Pane {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
