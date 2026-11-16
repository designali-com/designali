"use client"

import * as React from "react"
import {
  Bookmark as BookmarkIcon,
  Ellipsis as EllipsisIcon,
  Heart as HeartIcon,
  MessageCircle as MessageCircleIcon,
  Send as SendIcon,
} from "@designali/icons"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

export default function FeedPostPortrait() {
  const [liked, setLiked] = React.useState(false)

  return (
    <div className="w-full max-w-xs border">
      <div className="flex items-center gap-2 p-2.5">
        <Avatar size="sm">
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <span className="text-xs font-medium">designali.code</span>
        <EllipsisIcon className="ms-auto size-4 text-muted-foreground" />
      </div>
      <AspectRatio
        ratio={4 / 5}
        className="bg-linear-to-b from-chart-1 via-primary/20 to-primary dark:from-chart-4 dark:via-chart-4 dark:to-chart-5"
        onDoubleClick={() => setLiked(true)}
      />
      <div className="flex items-center gap-1 p-1.5">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Like"
          onClick={() => setLiked((value) => !value)}
        >
          <HeartIcon className={cn(liked && "fill-destructive text-destructive")} />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Comment">
          <MessageCircleIcon />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Share">
          <SendIcon />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Save"
          className="ms-auto"
        >
          <BookmarkIcon />
        </Button>
      </div>
      <p className="px-3 pb-3 text-xs">
        <span className="font-medium">{liked ? "1,205" : "1,204"} likes</span>
      </p>
    </div>
  )
}
