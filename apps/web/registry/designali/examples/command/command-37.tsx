"use client"

import * as React from "react"
import {
  BracesIcon,
  DownloadIcon,
  RocketIcon,
  SearchIcon,
  WebhookIcon,
} from "lucide-react"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

export default function NavbarSearchTrigger() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-md items-center gap-3 border px-3 py-2">
      <span className="text-sm font-semibold">Fieldnote Docs</span>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="ms-auto flex h-8 w-full max-w-48 items-center gap-2 border bg-muted/50 px-2 text-xs text-muted-foreground hover:bg-muted"
      >
        <SearchIcon className="size-3.5" />
        Search docs
        <KbdGroup className="ms-auto">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search documentation"
        description="Search guides, API reference, and changelog"
        showCloseButton
      >
        <Command>
          <CommandInput placeholder="Search documentation..." />
          <CommandList>
            <CommandEmpty>No pages found.</CommandEmpty>
            <CommandGroup heading="Getting started">
              <CommandItem onSelect={() => setOpen(false)}>
                <RocketIcon />
                <span>Quickstart</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <DownloadIcon />
                <span>Installation</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="API reference">
              <CommandItem onSelect={() => setOpen(false)}>
                <BracesIcon />
                <span>REST endpoints</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <WebhookIcon />
                <span>Webhook events</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
