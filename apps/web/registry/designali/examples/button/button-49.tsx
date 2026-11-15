"use client"

import * as React from "react"
import { RefreshCwIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

export default function RefreshDataButton() {
  const [refreshing, setRefreshing] = React.useState(false)
  const [synced, setSynced] = React.useState("5 minutes ago")

  function refresh() {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
      setSynced("just now")
    }, 1000)
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-muted-foreground">
        Last synced {synced}
      </span>
      <Button
        variant="outline"
        size="sm"
        disabled={refreshing}
        onClick={refresh}
      >
        <RefreshCwIcon
          data-icon="inline-start"
          className={cn(refreshing && "animate-spin")}
        />
        Refresh
      </Button>
    </div>
  )
}
