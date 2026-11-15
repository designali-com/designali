import {
  FileArchiveIcon,
  FileAudioIcon,
  FileCodeIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  FileVideoIcon,
} from "lucide-react"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { cn } from "@workspace/ui/lib/utils"

const files = [
  {
    name: "brief.pdf",
    icon: FileTextIcon,
    tone: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
  {
    name: "budget.xlsx",
    icon: FileSpreadsheetIcon,
    tone: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "intro.mp4",
    icon: FileVideoIcon,
    tone: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    name: "theme.mp3",
    icon: FileAudioIcon,
    tone: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    name: "app.tsx",
    icon: FileCodeIcon,
    tone: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  },
  {
    name: "assets.zip",
    icon: FileArchiveIcon,
    tone: "bg-muted text-muted-foreground",
  },
]

export default function FileThumbnailGrid() {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-3">
      {files.map((file) => (
        <button
          key={file.name}
          type="button"
          className="group flex flex-col gap-1.5 text-start"
        >
          <AspectRatio
            ratio={4 / 3}
            className={cn(
              "border transition-colors group-hover:border-foreground/30",
              file.tone
            )}
          >
            <file.icon className="absolute start-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2" />
          </AspectRatio>
          <span className="truncate text-xs">{file.name}</span>
        </button>
      ))}
    </div>
  )
}
