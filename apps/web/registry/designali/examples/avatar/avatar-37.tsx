"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Skeleton } from "@workspace/ui/components/skeleton"

export default function AvatarLoadingSkeleton() {
  const [loading, setLoading] = React.useState(true)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center gap-3 border p-3">
        {loading ? (
          <>
            <Skeleton className="size-10 rounded-full" />
            <div className="flex flex-1 flex-col gap-1.5">
              <Skeleton className="h-3 w-28" />
              <Skeleton className="h-3 w-20" />
            </div>
          </>
        ) : (
          <>
            <Avatar size="lg">
              <AvatarFallback>EV</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">Esme Vance</p>
              <p className="text-xs text-muted-foreground">Joined 3 days ago</p>
            </div>
          </>
        )}
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLoading((value) => !value)}
      >
        {loading ? "Finish loading" : "Show skeleton"}
      </Button>
    </div>
  )
}
