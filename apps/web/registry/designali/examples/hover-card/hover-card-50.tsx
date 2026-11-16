"use client"

import * as React from "react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { Skeleton } from "@workspace/ui/components/skeleton"

export default function LoadingPreviewHoverCard() {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <HoverCard
      onOpenChange={(open) => {
        if (open) {
          setLoaded(false)
          setTimeout(() => setLoaded(true), 900)
        }
      }}
    >
      <HoverCardTrigger
        href="#"
        className="text-sm underline underline-offset-4"
      >
        designali.com/docs/installation
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        {loaded ? (
          <div className="flex flex-col gap-1">
            <p className="font-medium">Installation · Designali Docs</p>
            <p className="text-muted-foreground">
              Add Designali blocks, icons and logos to your Next.js project
              in a few minutes.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3.5 w-2/3" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  )
}
