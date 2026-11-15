"use client"

import * as React from "react"
import {
  ArchiveIcon,
  CreditCardIcon,
  DownloadIcon,
  FolderPlusIcon,
  KeyboardIcon,
  LifeBuoyIcon,
  LogOutIcon,
  MoonIcon,
  SearchIcon,
  UploadIcon,
  UserPlusIcon,
} from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const commands = [
  { label: "Create project", icon: FolderPlusIcon },
  { label: "Invite teammate", icon: UserPlusIcon },
  { label: "Open billing", icon: CreditCardIcon },
  { label: "Toggle dark mode", icon: MoonIcon },
  { label: "View shortcuts", icon: KeyboardIcon },
  { label: "Export data", icon: DownloadIcon },
  { label: "Import CSV", icon: UploadIcon },
  { label: "Archive workspace", icon: ArchiveIcon },
  { label: "Contact support", icon: LifeBuoyIcon },
  { label: "Sign out", icon: LogOutIcon },
]

export default function FilterableCommandList() {
  const [query, setQuery] = React.useState("")
  const results = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="w-full max-w-sm border">
      <InputGroup className="border-0 border-b">
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search commands..."
        />
      </InputGroup>
      <ScrollArea className="h-56">
        <div className="flex flex-col p-1">
          {results.map((c) => (
            <button
              key={c.label}
              className="flex items-center gap-2 px-2 py-1.5 text-left text-xs hover:bg-muted"
            >
              <c.icon className="size-3.5 text-muted-foreground" />
              {c.label}
            </button>
          ))}
          {results.length === 0 && (
            <p className="py-8 text-center text-xs text-muted-foreground">
              No commands match &quot;{query}&quot;
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
