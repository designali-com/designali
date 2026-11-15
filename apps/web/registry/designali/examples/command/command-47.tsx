import {
  CircleDotIcon,
  FilePenIcon,
  FolderKanbanIcon,
  NotebookTabsIcon,
  RefreshCwIcon,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@workspace/ui/components/command"
import { Kbd } from "@workspace/ui/components/kbd"

const creatables = [
  {
    label: "Issue",
    hint: "Track a bug or task",
    icon: CircleDotIcon,
    key: "C",
  },
  {
    label: "Document",
    hint: "Write a spec or note",
    icon: FilePenIcon,
    key: "D",
  },
  {
    label: "Project",
    hint: "Group related work",
    icon: FolderKanbanIcon,
    key: "P",
  },
  {
    label: "Cycle",
    hint: "Plan a two-week sprint",
    icon: RefreshCwIcon,
    key: "Y",
  },
  {
    label: "Meeting notes",
    hint: "Start from a template",
    icon: NotebookTabsIcon,
    key: "M",
  },
]

export default function QuickCreateMenu() {
  return (
    <Command className="w-full max-w-xs border shadow-md">
      <CommandInput placeholder="Create new..." />
      <CommandList>
        <CommandEmpty>Nothing to create.</CommandEmpty>
        <CommandGroup heading="Create">
          {creatables.map((item) => (
            <CommandItem
              key={item.label}
              value={item.label}
              keywords={[item.hint]}
            >
              <item.icon />
              <div className="flex flex-col">
                <span>{item.label}</span>
                <span className="text-[11px] text-muted-foreground">
                  {item.hint}
                </span>
              </div>
              <CommandShortcut>
                <Kbd>{item.key}</Kbd>
              </CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
