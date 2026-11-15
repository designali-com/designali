"use client"

import * as React from "react"
import {
  BookmarkIcon,
  EllipsisIcon,
  HeartIcon,
  MessageCircleIcon,
  SendIcon,
} from "lucide-react"

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
          <AvatarFallback>MW</AvatarFallback>
        </Avatar>
        <span className="text-xs font-medium">mira.walks</span>
        <EllipsisIcon className="ms-auto size-4 text-muted-foreground" />
      </div>
      <AspectRatio
        ratio={4 / 5}
        className="bg-linear-to-b from-sky-300 via-orange-200 to-amber-500 dark:from-sky-800 dark:via-orange-800 dark:to-amber-900"
        onDoubleClick={() => setLiked(true)}
      />
      <div className="flex items-center gap-1 p-1.5">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Like"
          onClick={() => setLiked((value) => !value)}
        >
          <HeartIcon className={cn(liked && "fill-red-500 text-red-500")} />
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
