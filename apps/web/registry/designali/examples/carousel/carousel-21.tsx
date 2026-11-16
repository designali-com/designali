import {
  FileArchive as FileArchiveIcon,
  FileCode as FileCodeIcon,
  FileSpreadsheet as FileSpreadsheetIcon,
  FileText as FileTextIcon,
  FileVideoCamera as FileVideoIcon,
  Folder as FolderIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const files = [
  { name: "Brand guidelines.pdf", size: "2.4 MB", icon: FileTextIcon, owner: "AI" },
  { name: "Designali logos", size: "18 items", icon: FolderIcon, owner: "AI" },
  {
    name: "Project estimate.xlsx",
    size: "840 KB",
    icon: FileSpreadsheetIcon,
    owner: "DS",
  },
  {
    name: "CGI showreel.mp4",
    size: "128 MB",
    icon: FileVideoIcon,
    owner: "AI",
  },
  {
    name: "hero-block.tsx",
    size: "12 KB",
    icon: FileCodeIcon,
    owner: "DV",
  },
  { name: "designali-icons.zip", size: "56 MB", icon: FileArchiveIcon, owner: "AI" },
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
