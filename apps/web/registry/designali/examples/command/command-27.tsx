import {
  ChartColumn as BarChart3Icon,
  House as HomeIcon,
  Receipt as ReceiptIcon,
  Users as UsersIcon,
} from "@designali/icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { Kbd } from "@workspace/ui/components/kbd"

export default function KeyboardHintFooter() {
  return (
    <Command className="w-full max-w-md border shadow-sm">
      <CommandInput placeholder="Jump to..." />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem>
            <HomeIcon />
            <span>Overview</span>
          </CommandItem>
          <CommandItem>
            <BarChart3Icon />
            <span>Reports</span>
          </CommandItem>
          <CommandItem>
            <UsersIcon />
            <span>Customers</span>
          </CommandItem>
          <CommandItem>
            <ReceiptIcon />
            <span>Invoices</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
      <div className="flex flex-wrap items-center gap-3 border-t px-2 py-1.5 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1">
          <Kbd>↑</Kbd>
          <Kbd>↓</Kbd>
          navigate
        </span>
        <span className="flex items-center gap-1">
          <Kbd>↵</Kbd>
          open
        </span>
        <span className="flex items-center gap-1">
          <Kbd>esc</Kbd>
          close
        </span>
      </div>
    </Command>
  )
}
