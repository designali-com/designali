"use client"

import * as React from "react"
import {
  ImageOff as ImageOffIcon,
  RefreshCw as RefreshCwIcon,
} from "@designali/icons"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

export default function MediaErrorFallback() {
  const [loading, setLoading] = React.useState(false)

  function retry() {
    setLoading(true)
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <AspectRatio ratio={16 / 9} className="w-full max-w-sm border bg-muted/50">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <ImageOffIcon className="size-6 text-muted-foreground" />
        <p className="text-sm font-medium">Preview unavailable</p>
        <p className="text-xs text-muted-foreground">
          We couldn&apos;t load this Designali preview. Check your connection.
        </p>
        <Button size="sm" variant="outline" onClick={retry} disabled={loading}>
          {loading ? (
            <Spinner data-icon="inline-start" />
          ) : (
            <RefreshCwIcon data-icon="inline-start" />
          )}
          Retry
        </Button>
      </div>
    </AspectRatio>
  )
}
