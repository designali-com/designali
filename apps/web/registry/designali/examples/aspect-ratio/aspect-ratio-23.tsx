"use client"

import * as React from "react"
import {
  Heart as HeartIcon,
} from "@designali/icons"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

export default function RealEstateListing() {
  const [saved, setSaved] = React.useState(false)

  return (
    <div className="w-full max-w-xs">
      <AspectRatio
        ratio={4 / 3}
        className="overflow-hidden bg-linear-to-t from-emerald-700 via-sky-300 to-sky-100"
      >
        <div className="absolute start-[15%] bottom-[20%] h-[40%] w-[45%] bg-stone-100 dark:bg-stone-300">
          <div className="absolute start-0 -top-6 h-0 w-full border-x-[4.5rem] border-b-[1.5rem] border-x-transparent border-b-stone-500" />
        </div>
        <Badge className="absolute start-2 top-2">New template</Badge>
        <Button
          size="icon-sm"
          variant="secondary"
          aria-label={saved ? "Remove from saved" : "Save template"}
          className="absolute end-2 top-2 rounded-full"
          onClick={() => setSaved((value) => !value)}
        >
          <HeartIcon className={cn(saved && "fill-red-500 text-red-500")} />
        </Button>
        <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={cn(
                "size-1.5 rounded-full bg-white/60",
                i === 0 && "bg-white"
              )}
            />
          ))}
        </div>
      </AspectRatio>
      <div className="mt-2 flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold">Resort template - $59</p>
          <p className="text-xs text-muted-foreground">
            12 pages - Next.js - Figma file
          </p>
          <p className="text-xs text-muted-foreground">
            designali.com/templates
          </p>
        </div>
      </div>
    </div>
  )
}
