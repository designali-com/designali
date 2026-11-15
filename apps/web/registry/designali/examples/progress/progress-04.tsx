import { FileIcon } from "lucide-react"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

const files = [
  { name: "brand-guidelines.pdf", size: "4.2 MB", value: 100 },
  { name: "hero-video.mp4", size: "86.1 MB", value: 64 },
  { name: "product-shots.zip", size: "212 MB", value: 18 },
]

export default function FileUploadQueue() {
  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {files.map((file) => (
        <div key={file.name} className="flex items-start gap-3 p-3">
          <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
            <FileIcon className="size-4 text-muted-foreground" />
          </div>
          <Progress value={file.value} className="min-w-0 flex-1 gap-1.5">
            <ProgressLabel className="truncate text-sm font-medium">
              {file.name}
            </ProgressLabel>
            <ProgressValue />
            <span className="w-full text-xs text-muted-foreground">
              {file.value === 100 ? "Uploaded" : file.size}
            </span>
          </Progress>
        </div>
      ))}
    </div>
  )
}
