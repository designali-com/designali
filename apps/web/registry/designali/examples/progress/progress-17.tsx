"use client"

import * as React from "react"
import { CircleCheckIcon, UploadIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

export default function SimulatedUploadButton() {
  const [value, setValue] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (value === null || value >= 100) return
    const id = setTimeout(
      () => setValue((v) => Math.min(100, (v ?? 0) + 8)),
      200
    )
    return () => clearTimeout(id)
  }, [value])

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      {value === null ? (
        <Button onClick={() => setValue(0)}>
          <UploadIcon data-icon="inline-start" />
          Upload invoice.pdf
        </Button>
      ) : value < 100 ? (
        <Progress value={value}>
          <ProgressLabel>Uploading invoice.pdf</ProgressLabel>
          <ProgressValue />
        </Progress>
      ) : (
        <div className="flex items-center justify-between gap-2 text-sm">
          <span className="flex items-center gap-1.5">
            <CircleCheckIcon className="size-4 text-primary" />
            Upload complete
          </span>
          <Button variant="ghost" size="sm" onClick={() => setValue(null)}>
            Reset
          </Button>
        </div>
      )}
    </div>
  )
}
