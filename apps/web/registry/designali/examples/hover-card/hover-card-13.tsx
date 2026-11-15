import { FileSpreadsheetIcon, FileTextIcon, FileVideoIcon } from "lucide-react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const files = [
  {
    name: "Q3-forecast.xlsx",
    icon: FileSpreadsheetIcon,
    size: "248 KB",
    owner: "Hana Ito",
    modified: "Today, 9:14 AM",
  },
  {
    name: "brand-guidelines.pdf",
    icon: FileTextIcon,
    size: "12.4 MB",
    owner: "Leo Martins",
    modified: "Mar 2, 2025",
  },
  {
    name: "onboarding-video.mp4",
    icon: FileVideoIcon,
    size: "184 MB",
    owner: "Sara Novak",
    modified: "Feb 18, 2025",
  },
]

export default function FileDetailsHoverCard() {
  return (
    <div className="w-full max-w-xs divide-y border">
      {files.map((file) => (
        <HoverCard key={file.name}>
          <HoverCardTrigger
            delay={300}
            render={
              <div className="flex cursor-default items-center gap-2 px-3 py-2 text-sm hover:bg-muted" />
            }
          >
            <file.icon className="size-4 text-muted-foreground" />
            <span className="truncate">{file.name}</span>
          </HoverCardTrigger>
          <HoverCardContent side="right" className="w-56">
            <p className="mb-2 truncate font-medium">{file.name}</p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
              <dt className="text-muted-foreground">Size</dt>
              <dd>{file.size}</dd>
              <dt className="text-muted-foreground">Owner</dt>
              <dd>{file.owner}</dd>
              <dt className="text-muted-foreground">Modified</dt>
              <dd>{file.modified}</dd>
            </dl>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
