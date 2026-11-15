"use client"

import * as React from "react"
import {
  ClipboardPasteIcon,
  Columns2Icon,
  CopyIcon,
  EraserIcon,
  Rows2Icon,
  SquareIcon,
} from "lucide-react"

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
  "✓ Compiled /dashboard in 412ms",
  "GET /api/health 200 in 8ms",
]

export default function TerminalPaneMenu() {
  const [lines, setLines] = React.useState(initialLines)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-40 w-full max-w-md flex-col gap-0.5 overflow-hidden border bg-zinc-950 p-3 font-mono text-[11px] text-zinc-200">
        {lines.map((line, index) => (
          <span
            key={index}
            className={line.startsWith("$") ? "text-emerald-400" : undefined}
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
