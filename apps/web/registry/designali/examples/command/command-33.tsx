import {
  BanIcon,
  HistoryIcon,
  KeyRoundIcon,
  ShieldCheckIcon,
  VenetianMaskIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@workspace/ui/components/command"

export default function AdminUserActions() {
  return (
    <Command className="w-full max-w-sm border">
      <div className="flex items-center gap-3 border-b p-3">
        <Avatar>
          <AvatarFallback>RK</AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-col">
          <span className="text-sm font-medium">Rina Kowalski</span>
          <span className="truncate text-xs text-muted-foreground">
            rina@fieldnote.io · Admin
          </span>
        </div>
        <Badge variant="outline" className="ms-auto">
          Active
        </Badge>
      </div>
      <CommandInput placeholder="Run an action on this user..." />
      <CommandList>
        <CommandEmpty>No action found.</CommandEmpty>
        <CommandGroup heading="Account">
          <CommandItem>
            <VenetianMaskIcon />
            <span>Impersonate user</span>
          </CommandItem>
          <CommandItem>
            <KeyRoundIcon />
            <span>Send password reset</span>
          </CommandItem>
          <CommandItem>
            <ShieldCheckIcon />
            <span>Reset two-factor auth</span>
          </CommandItem>
          <CommandItem>
            <HistoryIcon />
            <span>View audit log</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Danger zone">
          <CommandItem className="text-destructive data-selected:text-destructive data-selected:*:[svg]:text-destructive">
            <BanIcon />
            <span>Suspend account</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
