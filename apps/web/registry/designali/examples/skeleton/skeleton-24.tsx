"use client"

import * as React from "react"
import {
  RefreshCw as RefreshCwIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { cn } from "@workspace/ui/lib/utils"

export default function SimulatedFetchSkeleton() {
  const [loading, setLoading] = React.useState(true)
  const [tick, setTick] = React.useState(0)

  React.useEffect(() => {
    const id = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(id)
  }, [tick])

  return (
    <div className="flex w-full max-w-xs flex-col gap-4 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          Exchange rate
        </span>
        <Button
          variant="ghost"
          size="icon-xs"
          aria-label="Refresh"
          disabled={loading}
          onClick={() => {
            setLoading(true)
            setTick((t) => t + 1)
          }}
        >
          <RefreshCwIcon className={cn(loading && "animate-spin")} />
        </Button>
      </div>
      {loading ? (
        <div className="flex flex-col gap-2">
          <Skeleton className="h-8 w-28" />
          <Skeleton className="h-3 w-36" />
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-semibold">1.0842</span>
          <span className="text-xs text-muted-foreground">
            EUR → USD · updated just now
          </span>
        </div>
      )}
    </div>
  )
}
