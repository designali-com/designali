import {
  FileSpreadsheet as FileSpreadsheetIcon,
  FileText as FileTextIcon,
  FileVideoCamera as FileVideoIcon,
} from "@designali/icons"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const files = [
  {
    name: "designali-roadmap.xlsx",
    icon: FileSpreadsheetIcon,
    size: "248 KB",
    owner: "Ali Imam",
    modified: "Today, 9:14 AM",
  },
  {
    name: "designali-brand-guidelines.pdf",
    icon: FileTextIcon,
    size: "12.4 MB",
    owner: "Ali Imam",
    modified: "Mar 2, 2025",
  },
  {
    name: "colorful-spheres.mp4",
    icon: FileVideoIcon,
    size: "184 MB",
    owner: "Designali",
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
