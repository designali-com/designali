"use client"

import * as React from "react"
import {
  CopyPlusIcon,
  FileOutputIcon,
  RotateCcwIcon,
  RotateCwIcon,
  TrashIcon,
} from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

export default function PdfPageThumbnailMenu() {
  const [pages, setPages] = React.useState([
    { id: 1, rotation: 0 },
    { id: 2, rotation: 0 },
    { id: 3, rotation: 90 },
    { id: 4, rotation: 0 },
  ])

  const rotate = (id: number, delta: number) =>
    setPages((list) =>
      list.map((p) =>
        p.id === id ? { ...p, rotation: (p.rotation + delta + 360) % 360 } : p
      )
    )

  return (
    <div className="grid w-full max-w-sm grid-cols-4 gap-3">
      {pages.map((page, index) => (
        <ContextMenu key={page.id}>
          <ContextMenuTrigger className="flex flex-col items-center gap-1 text-[11px] text-muted-foreground">
            <div
              className="flex aspect-[3/4] w-full flex-col gap-1 border bg-background p-1.5 shadow-xs transition-transform data-popup-open:ring-2"
              style={{ transform: "rotate(" + page.rotation + "deg)" }}
            >
              <span className="h-1 w-3/4 bg-muted-foreground/30" />
              <span className="h-1 w-full bg-muted" />
              <span className="h-1 w-full bg-muted" />
              <span className="h-1 w-2/3 bg-muted" />
            </div>
            {index + 1}
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuLabel>Page {index + 1}</ContextMenuLabel>
              <ContextMenuItem onClick={() => rotate(page.id, 90)}>
                <RotateCwIcon />
                Rotate clockwise
              </ContextMenuItem>
              <ContextMenuItem onClick={() => rotate(page.id, -90)}>
                <RotateCcwIcon />
                Rotate counterclockwise
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                onClick={() =>
                  setPages((list) => [
                    ...list.slice(0, index + 1),
                    { id: Date.now(), rotation: page.rotation },
                    ...list.slice(index + 1),
                  ])
                }
              >
                <CopyPlusIcon />
                Duplicate page
              </ContextMenuItem>
              <ContextMenuItem>
                <FileOutputIcon />
                Extract as new PDF
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                variant="destructive"
                disabled={pages.length === 1}
                onClick={() =>
                  setPages((list) => list.filter((p) => p.id !== page.id))
                }
              >
                <TrashIcon />
                Delete page
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}
