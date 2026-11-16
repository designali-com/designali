"use client"

import * as React from "react"
import {
  Copy as CopyIcon,
  Pin as PinIcon,
  Reply as ReplyIcon,
  SmilePlus as SmilePlusIcon,
  Trash as TrashIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

const reactions = ["👍", "❤️", "😂", "🎉", "👀"]

export default function ChatMessageMenu() {
  const [reaction, setReaction] = React.useState<string | null>(null)
  const [pinned, setPinned] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm items-start gap-2">
      <Avatar className="size-8">
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">
          Ali Imam · 10:42 AM {pinned ? "· Pinned" : ""}
        </span>
        <ContextMenu>
          <ContextMenuTrigger className="w-fit max-w-64 bg-muted px-3 py-2 text-sm data-popup-open:ring-2 data-popup-open:ring-ring/40">
            The designali.com preview deploy is green. Can someone review the
            new blocks before 2pm?
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuItem>
                <ReplyIcon />
                Reply
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <SmilePlusIcon />
                  React
                </ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuGroup className="flex">
                    {reactions.map((emoji) => (
                      <ContextMenuItem
                        key={emoji}
                        className="text-base"
                        onClick={() => setReaction(emoji)}
                      >
                        {emoji}
                      </ContextMenuItem>
                    ))}
                  </ContextMenuGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuItem>
                <CopyIcon />
                Copy text
              </ContextMenuItem>
              <ContextMenuItem onClick={() => setPinned((v) => !v)}>
                <PinIcon />
                {pinned ? "Unpin message" : "Pin message"}
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Delete message
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
        {reaction ? (
          <span className="w-fit border bg-background px-1.5 text-xs">
            {reaction} 1
          </span>
        ) : null}
      </div>
    </div>
  )
}
