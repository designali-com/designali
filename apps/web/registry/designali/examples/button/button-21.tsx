"use client"

import * as React from "react"
import {
  Heart as HeartIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

export default function LikeCounterButton() {
  const [liked, setLiked] = React.useState(false)
  const count = 248 + (liked ? 1 : 0)

  return (
    <Button
      variant="outline"
      aria-pressed={liked}
      onClick={() => setLiked(!liked)}
      className={cn(
        liked && "border-rose-500/40 text-rose-600 dark:text-rose-400"
      )}
    >
      <HeartIcon
        data-icon="inline-start"
        className={cn(liked && "fill-current")}
      />
      <span className="tabular-nums">{count}</span>
    </Button>
  )
}
