import {
  FileArchiveIcon,
  FileCodeIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  FileVideoIcon,
  FolderIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const files = [
  { name: "Q3 roadmap.pdf", size: "2.4 MB", icon: FileTextIcon, owner: "MC" },
  { name: "Brand assets", size: "18 items", icon: FolderIcon, owner: "JP" },
  {
    name: "Budget 2026.xlsx",
    size: "840 KB",
    icon: FileSpreadsheetIcon,
    owner: "AL",
  },
  {
    name: "Launch video.mp4",
    size: "128 MB",
    icon: FileVideoIcon,
    owner: "RK",
  },
  {
    name: "Interview notes.md",
    size: "12 KB",
    icon: FileCodeIcon,
    owner: "MC",
  },
  { name: "Archive.zip", size: "56 MB", icon: FileArchiveIcon, owner: "TS" },
]

export default function RecentFilesCarousel() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-md">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-medium">Recent</h3>
        <div className="flex gap-1">
          <CarouselPrevious variant="ghost" className="static translate-none" />
          <CarouselNext variant="ghost" className="static translate-none" />
        </div>
      </div>
      <CarouselContent className="-ms-2">
        {files.map((file) => (
          <CarouselItem key={file.name} className="basis-1/2 ps-2 sm:basis-1/3">
            <button
              type="button"
              className="flex w-full flex-col gap-3 border p-3 text-start transition-colors hover:bg-muted/60"
            >
              <file.icon className="size-6 text-muted-foreground" />
              <div className="min-w-0">
                <p className="truncate text-xs font-medium">{file.name}</p>
                <p className="text-[11px] text-muted-foreground">{file.size}</p>
              </div>
              <Avatar size="sm">
                <AvatarFallback>{file.owner}</AvatarFallback>
              </Avatar>
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
