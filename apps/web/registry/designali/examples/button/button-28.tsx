"use client"

import * as React from "react"
import { DownloadIcon, FolderOpenIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

export default function DownloadProgressButton() {
  const [progress, setProgress] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (progress === null || progress >= 100) return
    const id = setTimeout(
      () => setProgress((p) => Math.min((p ?? 0) + 8, 100)),
      120
    )
    return () => clearTimeout(id)
  }, [progress])

  const downloading = progress !== null && progress < 100

  return (
    <Button
      variant="outline"
      className="relative w-52 overflow-hidden"
      disabled={downloading}
      onClick={() => setProgress(progress === 100 ? null : 0)}
    >
      {progress !== null && (
        <span
          className="absolute inset-y-0 left-0 bg-primary/15 transition-[width]"
          style={{ width: progress + "%" }}
        />
      )}
      <span className="relative flex items-center gap-1.5">
        {progress === null && <DownloadIcon className="size-4" />}
        {downloading && <Spinner />}
        {progress === 100 && <FolderOpenIcon className="size-4" />}
        {progress === null && "Download report (4.2 MB)"}
        {downloading && "Downloading " + progress + "%"}
        {progress === 100 && "Show in folder"}
      </span>
    </Button>
  )
}
