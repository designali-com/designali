"use client"

import * as React from "react"
import { FolderIcon } from "lucide-react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import { Progress, ProgressLabel } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const folders = [
  { name: "Documents", gb: 12.4 },
  { name: "Photos", gb: 48.9 },
  { name: "Projects", gb: 21.3 },
  { name: "Downloads", gb: 9.8 },
  { name: "Music", gb: 6.1 },
]
const QUOTA = 100

export default function BackupFolderPicker() {
  const [picked, setPicked] = React.useState<string[]>([
    "Documents",
    "Projects",
  ])
  const used = folders
    .filter((f) => picked.includes(f.name))
    .reduce((s, f) => s + f.gb, 0)
  const over = used > QUOTA * 0.8

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex flex-col gap-1 border">
        {folders.map((folder) => (
          <label
            key={folder.name}
            className="flex cursor-pointer items-center gap-3 px-3 py-2 hover:bg-muted/50"
          >
            <Checkbox
              checked={picked.includes(folder.name)}
              onCheckedChange={(checked) =>
                setPicked((list) =>
                  checked
                    ? [...list, folder.name]
                    : list.filter((n) => n !== folder.name)
                )
              }
            />
            <FolderIcon className="size-4 text-muted-foreground" />
            <span className="flex-1 text-sm">{folder.name}</span>
            <span className="text-xs text-muted-foreground tabular-nums">
              {folder.gb} GB
            </span>
          </label>
        ))}
      </div>
      <Progress value={(used / QUOTA) * 100} aria-label="Backup storage">
        <ProgressLabel className="text-xs">Cloud storage</ProgressLabel>
        <span
          className={cn(
            "ms-auto text-xs tabular-nums",
            over ? "text-destructive" : "text-muted-foreground"
          )}
        >
          {used.toFixed(1)} / {QUOTA} GB
        </span>
      </Progress>
    </div>
  )
}
