"use client"

import * as React from "react"
import {
  FileSignatureIcon,
  LockIcon,
  MessageSquareIcon,
  PencilIcon,
  SendIcon,
} from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

export default function LockedDocumentMenu() {
  const [locked, setLocked] = React.useState(true)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between gap-2 text-xs">
        <Label htmlFor="doc-lock">Lock for e-signature</Label>
        <Switch id="doc-lock" checked={locked} onCheckedChange={setLocked} />
      </div>
      <ContextMenu disabled={locked}>
        <ContextMenuTrigger
          className={cn(
            "flex flex-col gap-1 border p-4 text-xs",
            locked && "bg-muted/50"
          )}
        >
          <span className="flex items-center gap-1.5 font-medium">
            {locked ? (
              <LockIcon className="size-3.5" />
            ) : (
              <FileSignatureIcon className="size-3.5" />
            )}
            Master services agreement
          </span>
          <span className="text-muted-foreground">
            {locked
              ? "Editing is locked until all parties sign."
              : "Right-click to edit this document."}
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-44">
          <ContextMenuGroup>
            <ContextMenuItem>
              <PencilIcon />
              Edit clauses
            </ContextMenuItem>
            <ContextMenuItem>
              <MessageSquareIcon />
              Add comment
            </ContextMenuItem>
            <ContextMenuItem>
              <SendIcon />
              Send for signature
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
