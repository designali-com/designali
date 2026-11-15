"use client"

import * as React from "react"
import { RefreshCwIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

export default function RefreshIconButton() {
  const [loading, setLoading] = React.useState(false)
  const [updated, setUpdated] = React.useState("2 minutes ago")

  return (
    <div className="flex items-center gap-2 border py-1 ps-3 pe-1">
      <span className="text-xs text-muted-foreground">Updated {updated}</span>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Refresh"
        disabled={loading}
        onClick={() => {
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
            setUpdated("just now")
          }, 1000)
        }}
      >
        {loading ? <Spinner /> : <RefreshCwIcon />}
      </Button>
    </div>
  )
}
