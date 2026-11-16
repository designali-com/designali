"use client"

import * as React from "react"
import {
  ArrowUpDown as ArrowUpDownIcon,
  Copy as CopyIcon,
  Scissors as ScissorsIcon,
} from "@designali/icons"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

const rows = [
  ["Product", "Q3", "Q4"],
  ["Templates", "$42k", "$51k"],
  ["Blocks", "$38k", "$36k"],
  ["Icons", "$57k", "$64k"],
]

export default function SpreadsheetCellMenu() {
  const [active, setActive] = React.useState("B2")

  return (
    <div className="w-full max-w-sm overflow-hidden border text-xs">
      <div className="border-b bg-muted/40 px-2 py-1 font-mono text-[11px]">
        {active}
      </div>
      <div className="grid grid-cols-3">
        {rows.map((row, r) =>
          row.map((cell, c) => {
            const ref = String.fromCharCode(65 + c) + (r + 1)
            return (
              <ContextMenu key={ref}>
                <ContextMenuTrigger
                  onContextMenu={() => setActive(ref)}
                  className={cn(
                    "border-e border-b px-2 py-1.5",
                    r === 0 && "bg-muted/60 font-medium",
                    active === ref &&
                      "outline-2 -outline-offset-2 outline-primary"
                  )}
                >
                  {cell}
                </ContextMenuTrigger>
                <ContextMenuContent className="w-52">
                  <ContextMenuGroup>
                    <ContextMenuLabel>Cell {ref}</ContextMenuLabel>
                    <ContextMenuItem>
                      <ScissorsIcon />
                      Cut
                      <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <CopyIcon />
                      Copy
                      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                    </ContextMenuItem>
                  </ContextMenuGroup>
                  <ContextMenuSeparator />
                  <ContextMenuGroup>
                    <ContextMenuItem>Insert row above</ContextMenuItem>
                    <ContextMenuItem>Insert row below</ContextMenuItem>
                    <ContextMenuItem>Insert column left</ContextMenuItem>
                  </ContextMenuGroup>
                  <ContextMenuSeparator />
                  <ContextMenuSub>
                    <ContextMenuSubTrigger>
                      <ArrowUpDownIcon />
                      Sort column
                    </ContextMenuSubTrigger>
                    <ContextMenuSubContent className="w-36">
                      <ContextMenuGroup>
                        <ContextMenuItem>A → Z</ContextMenuItem>
                        <ContextMenuItem>Z → A</ContextMenuItem>
                      </ContextMenuGroup>
                    </ContextMenuSubContent>
                  </ContextMenuSub>
                  <ContextMenuGroup>
                    <ContextMenuItem variant="destructive">
                      Delete row {r + 1}
                    </ContextMenuItem>
                  </ContextMenuGroup>
                </ContextMenuContent>
              </ContextMenu>
            )
          })
        )}
      </div>
    </div>
  )
}
