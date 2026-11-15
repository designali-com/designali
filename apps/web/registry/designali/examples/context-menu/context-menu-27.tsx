"use client"

import * as React from "react"
import {
  CheckIcon,
  CircleCheckIcon,
  LinkIcon,
  PencilIcon,
  ReplyIcon,
  TrashIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

export default function CommentThreadMenu() {
  const [resolved, setResolved] = React.useState(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger
        className={cn(
          "flex w-full max-w-sm flex-col gap-2 border p-3 text-xs",
          resolved && "opacity-60"
        )}
      >
        <div className="flex items-center gap-2">
          <Avatar className="size-6">
            <AvatarFallback className="text-[10px]">PN</AvatarFallback>
          </Avatar>
          <span className="font-medium">Priya Natarajan</span>
          <span className="text-muted-foreground">2h ago</span>
          {resolved ? (
            <Badge variant="secondary" className="ms-auto">
              <CheckIcon />
              Resolved
            </Badge>
          ) : null}
        </div>
        <p className="text-muted-foreground">
          Can we bump the contrast on the secondary button? It fails AA on the
          dark hero.
        </p>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            <ReplyIcon />
            Reply
          </ContextMenuItem>
          <ContextMenuItem>
            <PencilIcon />
            Edit comment
          </ContextMenuItem>
          <ContextMenuItem>
            <LinkIcon />
            Copy link
          </ContextMenuItem>
          <ContextMenuItem onClick={() => setResolved((v) => !v)}>
            <CircleCheckIcon />
            {resolved ? "Reopen thread" : "Resolve thread"}
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            <TrashIcon />
            Delete comment
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
