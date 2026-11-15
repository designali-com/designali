import {
  FileJsonIcon,
  FileTextIcon,
  FileVideoIcon,
  PaletteIcon,
  SheetIcon,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const files = [
  {
    name: "Q3 roadmap.pdf",
    path: "Planning / 2026",
    edited: "2m ago",
    icon: FileTextIcon,
  },
  {
    name: "brand-colors.fig",
    path: "Design / Brand",
    edited: "1h ago",
    icon: PaletteIcon,
  },
  {
    name: "revenue-model.xlsx",
    path: "Finance",
    edited: "Yesterday",
    icon: SheetIcon,
  },
  {
    name: "onboarding-flow.mp4",
    path: "Research / Videos",
    edited: "Mon",
    icon: FileVideoIcon,
  },
  {
    name: "api-schema.json",
    path: "Engineering / Specs",
    edited: "Oct 28",
    icon: FileJsonIcon,
  },
]

export default function RecentFilesSearch() {
  return (
    <Command className="w-full max-w-md border shadow-sm">
      <CommandInput placeholder="Search files by name..." />
      <CommandList>
        <CommandEmpty>No files match.</CommandEmpty>
        <CommandGroup heading="Recent files">
          {files.map((file) => (
            <CommandItem key={file.name} value={file.name + " " + file.path}>
              <div className="flex size-8 items-center justify-center bg-muted">
                <file.icon />
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate font-medium">{file.name}</span>
                <span className="truncate text-[11px] text-muted-foreground">
                  {file.path}
                </span>
              </div>
              <span className="ms-auto shrink-0 text-[11px] text-muted-foreground">
                {file.edited}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
