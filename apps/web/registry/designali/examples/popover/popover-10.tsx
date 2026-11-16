"use client"

import * as React from "react"
import {
  SmilePlus as SmilePlusIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const emojis = ["👍", "❤️", "😂", "🎉", "😮", "😢", "🔥", "👀"]

export default function EmojiReactionPopover() {
  const [reactions, setReactions] = React.useState<Record<string, number>>({
    "🎉": 2,
  })
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-3">
      <div className="flex gap-2">
        <Avatar size="sm">
          <AvatarImage src="/ali.jpg" alt="Ali Imam" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-medium">Ali Imam</span>
          <p className="text-xs text-muted-foreground">
            460+ new blocks are live on designali.com!
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-1 ps-8">
        {Object.entries(reactions).map(([emoji, count]) => (
          <Badge key={emoji} variant="outline">
            {emoji} {count}
          </Badge>
        ))}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Add reaction"
              />
            }
          >
            <SmilePlusIcon />
          </PopoverTrigger>
          <PopoverContent className="w-auto p-1.5" side="top" align="start">
            <div className="grid grid-cols-4 gap-0.5">
              {emojis.map((emoji) => (
                <Button
                  key={emoji}
                  variant="ghost"
                  size="icon"
                  className="text-base"
                  onClick={() => {
                    setReactions((prev) => ({
                      ...prev,
                      [emoji]: (prev[emoji] ?? 0) + 1,
                    }))
                    setOpen(false)
                  }}
                >
                  {emoji}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
