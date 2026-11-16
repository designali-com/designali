"use client"

import * as React from "react"
import {
  Copy as CopyIcon,
  Ellipsis as MoreHorizontalIcon,
  Pin as PinIcon,
  Reply as ReplyIcon,
  Trash2 as Trash2Icon,
} from "@designali/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const reactions = ["👍", "❤️", "😂", "🎉", "👀"]

export default function ChatMessageActions() {
  const [reaction, setReaction] = React.useState<string | null>(null)

  return (
    <div className="group flex w-full max-w-sm items-start gap-2">
      <Avatar size="sm">
        <AvatarImage src="/ali.jpg" alt="Ali Imam" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-medium">Ali Imam</span>
          <span className="text-muted-foreground">10:42</span>
        </div>
        <p className="mt-1 bg-muted px-3 py-2 text-xs">
          The new Designali blocks are live on staging. Can someone run through
          them before lunch?
        </p>
        {reaction && (
          <span className="mt-1 inline-flex border px-1.5 text-xs">
            {reaction} 1
          </span>
        )}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="ghost"
              size="icon-xs"
              aria-label="Message actions"
              className="opacity-0 group-hover:opacity-100 data-popup-open:opacity-100"
            />
          }
        >
          <MoreHorizontalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <div className="flex justify-between px-1 py-1">
            {reactions.map((emoji) => (
              <DropdownMenuItem
                key={emoji}
                className="size-8 justify-center p-0 text-base"
                onClick={() => setReaction(emoji)}
              >
                {emoji}
              </DropdownMenuItem>
            ))}
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <ReplyIcon />
            Reply in thread
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Copy text
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PinIcon />
            Pin to channel
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <Trash2Icon />
            Delete message
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
