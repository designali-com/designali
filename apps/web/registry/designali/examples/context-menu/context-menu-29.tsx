"use client"

import * as React from "react"
import {
  ClipboardPaste as ClipboardPasteIcon,
  Columns2 as Columns2Icon,
  Copy as CopyIcon,
  Eraser as EraserIcon,
  Rows2 as Rows2Icon,
  Square as SquareIcon,
} from "@designali/icons"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

const initialLines = [
  "$ pnpm dev",
  "▲ Next.js ready on http://localhost:3000",
  "✓ Compiled /templates in 412ms",
  "GET /api/health 200 in 8ms",
]

export default function TerminalPaneMenu() {
  const [lines, setLines] = React.useState(initialLines)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full max-w-md flex-col gap-0.5 overflow-hidden border bg-foreground p-3 font-sans text-[11px] text-background">
        {lines.map((line, index) => (
          <span
            key={index}
            className={line.startsWith("$") ? "text-primary" : undefined}
          >
            {line}
          </span>
        ))}
        <span className="animate-pulse">▍</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuGroup>
          <ContextMenuItem>
            <CopyIcon />
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <ClipboardPasteIcon />
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem onClick={() => setLines([])}>
            <EraserIcon />
            Clear
            <ContextMenuShortcut>⌘K</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <Columns2Icon />
            Split right
            <ContextMenuShortcut>⌘D</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Rows2Icon />
            Split down
            <ContextMenuShortcut>⇧⌘D</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem
            variant="destructive"
            onClick={() => setLines(["Process exited with code 130"])}
          >
            <SquareIcon />
            Kill process
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
