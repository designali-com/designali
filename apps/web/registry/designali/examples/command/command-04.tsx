import {
  Calendar as CalendarIcon,
  FileText as FileTextIcon,
  Kanban as KanbanIcon,
  Mail as MailIcon,
  Plus as PlusIcon,
  UserPlus as UserPlusIcon,
} from "@designali/icons"

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
            <span>Designali Docs</span>
          </CommandItem>
          <CommandItem>
            <KanbanIcon />
            <span>Project boards</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Quick actions">
          <CommandItem>
            <PlusIcon />
            <span>New client brief</span>
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
