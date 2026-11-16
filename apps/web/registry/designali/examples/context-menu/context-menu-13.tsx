"use client"

import * as React from "react"
import {
  Columns2 as ColumnsIcon,
  Copy as CopyIcon,
  Tag as TagIcon,
  Trash as TrashIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

const columns = ["Backlog", "In progress", "In review", "Done"]

export default function KanbanCardMenu() {
  const [column, setColumn] = React.useState("In progress")
  const [labels, setLabels] = React.useState({
    frontend: true,
    urgent: false,
    customer: true,
  })

  const toggle = (key: keyof typeof labels) => (checked: boolean) =>
    setLabels((current) => ({ ...current, [key]: checked }))

  return (
    <div className="flex w-full max-w-xs flex-col gap-2 bg-muted/50 p-2">
      <span className="px-1 text-xs font-medium text-muted-foreground">
        {column}
      </span>
      <ContextMenu>
        <ContextMenuTrigger className="flex flex-col gap-2 border bg-background p-3 shadow-xs data-popup-open:ring-2 data-popup-open:ring-ring/40">
          <span className="font-mono text-[11px] text-muted-foreground">
            WEB-219
          </span>
          <span className="text-sm">
            Fix pricing block spacing on mobile Safari
          </span>
          <div className="flex flex-wrap gap-1">
            {labels.frontend ? (
              <Badge variant="secondary">frontend</Badge>
            ) : null}
            {labels.urgent ? <Badge variant="destructive">urgent</Badge> : null}
            {labels.customer ? <Badge variant="outline">customer</Badge> : null}
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <ColumnsIcon />
              Move to
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-40">
              <ContextMenuRadioGroup value={column} onValueChange={setColumn}>
                {columns.map((c) => (
                  <ContextMenuRadioItem key={c} value={c}>
                    {c}
                  </ContextMenuRadioItem>
                ))}
              </ContextMenuRadioGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <TagIcon />
              Labels
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-40">
              <ContextMenuGroup>
                <ContextMenuCheckboxItem
                  checked={labels.frontend}
                  onCheckedChange={toggle("frontend")}
                >
                  frontend
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={labels.urgent}
                  onCheckedChange={toggle("urgent")}
                >
                  urgent
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={labels.customer}
                  onCheckedChange={toggle("customer")}
                >
                  customer
                </ContextMenuCheckboxItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem>
              <CopyIcon />
              Copy issue link
            </ContextMenuItem>
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete issue
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
