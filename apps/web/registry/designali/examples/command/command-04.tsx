import {
  CalendarIcon,
  FileTextIcon,
  KanbanIcon,
  MailIcon,
  PlusIcon,
  UserPlusIcon,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@workspace/ui/components/command"

export default function InlineAppLauncher() {
  return (
    <Command className="w-full max-w-sm border shadow-sm">
      <CommandInput placeholder="Search apps and actions..." />
      <CommandList>
        <CommandEmpty>No apps match your search.</CommandEmpty>
        <CommandGroup heading="Apps">
          <CommandItem>
            <MailIcon />
            <span>Mail</span>
          </CommandItem>
          <CommandItem>
            <CalendarIcon />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <FileTextIcon />
            <span>Docs</span>
          </CommandItem>
          <CommandItem>
            <KanbanIcon />
            <span>Boards</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Quick actions">
          <CommandItem>
            <PlusIcon />
            <span>New document</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <UserPlusIcon />
            <span>Invite teammate</span>
            <CommandShortcut>⌘I</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
