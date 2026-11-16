import {
  FileArchive as FileArchiveIcon,
  FileMusic as FileAudioIcon,
  FileCode as FileCodeIcon,
  FileSpreadsheet as FileSpreadsheetIcon,
  FileText as FileTextIcon,
  FileVideoCamera as FileVideoIcon,
} from "@designali/icons"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { cn } from "@workspace/ui/lib/utils"

const files = [
  {
    name: "designali-brief.pdf",
    icon: FileTextIcon,
    tone: "bg-destructive/10 text-destructive dark:text-destructive",
  },
  {
    name: "project-budget.xlsx",
    icon: FileSpreadsheetIcon,
    tone: "bg-primary/10 text-primary dark:text-primary",
  },
  {
    name: "cgi-showreel.mp4",
    icon: FileVideoIcon,
    tone: "bg-primary/10 text-primary dark:text-primary",
  },
  {
    name: "motion-theme.mp3",
    icon: FileAudioIcon,
    tone: "bg-primary/10 text-primary dark:text-primary",
  },
  {
    name: "designali-block.tsx",
    icon: FileCodeIcon,
    tone: "bg-primary/10 text-primary dark:text-primary",
  },
  {
    name: "designali-icons.zip",
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
