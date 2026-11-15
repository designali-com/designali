"use client"

import * as React from "react"
import { HeartIcon } from "lucide-react"

import { Toggle } from "@workspace/ui/components/toggle"

export default function FavoriteHeartToggle() {
  const [liked, setLiked] = React.useState(false)
  const count = 128 + (liked ? 1 : 0)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <p className="text-sm">
        Sunrise over the Dolomites, shot on a 45mm at f/8.
      </p>
      <div className="flex items-center gap-2">
        <Toggle
          pressed={liked}
          onPressedChange={setLiked}
          aria-label="Like post"
          className="aria-pressed:text-rose-500"
        >
          <HeartIcon className="group-aria-pressed/toggle:fill-current" />
          <span className="tabular-nums">{count}</span>
        </Toggle>
        <span className="text-xs text-muted-foreground">
          {liked ? "You and 128 others" : "128 likes"}
        </span>
      </div>
    </div>
  )
}
