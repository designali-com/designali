"use client"

import * as React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Label } from "@workspace/ui/components/label"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { Switch } from "@workspace/ui/components/switch"

export default function LoadingToggleSkeleton() {
  const [loading, setLoading] = React.useState(true)
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="skeleton-loading">Simulate loading</Label>
        <Switch
          id="skeleton-loading"
          checked={loading}
          onCheckedChange={setLoading}
        />
      </div>
      <div className="flex items-center gap-3 border p-4" aria-busy={loading}>
        {loading ? (
          <>
            <Skeleton className="size-10 rounded-full" />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-3.5 w-32" />
              <Skeleton className="h-3 w-44" />
            </div>
            <Skeleton className="h-5 w-14" />
          </>
        ) : (
          <>
            <Avatar>
              <AvatarImage src="/ali.jpg" alt="Ali Imam" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium">Ali Imam</span>
              <span className="text-xs text-muted-foreground">
                Design engineer · Designali
              </span>
            </div>
            <Badge variant="secondary">Online</Badge>
          </>
        )}
      </div>
    </div>
  )
}
