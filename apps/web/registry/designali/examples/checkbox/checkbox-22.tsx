"use client"

import * as React from "react"
import {
  FileAudioIcon,
  FileCodeIcon,
  FileImageIcon,
  FileTextIcon,
  FolderIcon,
  SheetIcon,
} from "lucide-react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import { cn } from "@workspace/ui/lib/utils"

const files = [
  { name: "Invoice-0412.pdf", icon: FileTextIcon },
  { name: "Moodboard.fig", icon: FileImageIcon },
  { name: "Q4 forecast.xlsx", icon: SheetIcon },
  { name: "Recording.mp3", icon: FileAudioIcon },
  { name: "Readme.md", icon: FileCodeIcon },
  { name: "Assets", icon: FolderIcon },
]

export default function FileGridSelection() {
  const [selected, setSelected] = React.useState<string[]>(["Moodboard.fig"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <p className="text-xs text-muted-foreground">
        {selected.length
          ? selected.length + " selected"
          : "Hover a file to select it"}
      </p>
      <div className="grid grid-cols-3 gap-2">
        {files.map((file) => {
          const checked = selected.includes(file.name)
          return (
            <label
              key={file.name}
              className={cn(
                "group/file relative flex cursor-pointer flex-col items-center gap-2 border p-3 transition-colors hover:bg-muted/50",
                checked && "border-primary bg-primary/5"
              )}
            >
              <Checkbox
                aria-label={"Select " + file.name}
                checked={checked}
                onCheckedChange={(value) =>
                  setSelected((list) =>
                    value
                      ? [...list, file.name]
                      : list.filter((n) => n !== file.name)
                  )
                }
                className={cn(
                  "absolute start-2 top-2 bg-background transition-opacity",
                  !checked &&
                    "opacity-0 group-hover/file:opacity-100 focus-visible:opacity-100"
                )}
              />
              <file.icon className="size-7 text-muted-foreground" />
              <span className="w-full truncate text-center text-[11px]">
                {file.name}
              </span>
            </label>
          )
        })}
      </div>
    </div>
  )
}
