"use client"

import * as React from "react"
import {
  AtSignIcon,
  LinkIcon,
  PipetteIcon,
  TerminalIcon,
  TextIcon,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const clips = [
  { id: 1, text: "support@fieldnote.io", kind: "Email", pinned: true },
  { id: 2, text: "#4F46E5", kind: "Color", pinned: true },
  {
    id: 3,
    text: "https://fieldnote.io/changelog/2026-11",
    kind: "Link",
    pinned: false,
  },
  { id: 4, text: "pnpm dlx shadcn add command", kind: "Code", pinned: false },
  {
    id: 5,
    text: "Thanks for the quick turnaround on this!",
    kind: "Text",
    pinned: false,
  },
]

const icons = {
  Email: AtSignIcon,
  Color: PipetteIcon,
  Link: LinkIcon,
  Code: TerminalIcon,
  Text: TextIcon,
}

export default function ClipboardHistory() {
  const [copied, setCopied] = React.useState<number | null>(null)

  return (
    <Command className="w-full max-w-sm border">
      <CommandInput placeholder="Search clipboard history..." />
      <CommandList>
        <CommandEmpty>Nothing copied matches.</CommandEmpty>
        {[true, false].map((pinned) => (
          <CommandGroup
            key={String(pinned)}
            heading={pinned ? "Pinned" : "Recent"}
          >
            {clips
              .filter((clip) => clip.pinned === pinned)
              .map((clip) => {
                const Icon = icons[clip.kind as keyof typeof icons]
                return (
                  <CommandItem
                    key={clip.id}
                    value={clip.text}
                    onSelect={() => setCopied(clip.id)}
                  >
                    <Icon />
                    <span className="truncate">{clip.text}</span>
                    <span className="ms-auto shrink-0 text-[11px] text-muted-foreground">
                      {copied === clip.id ? "Copied" : clip.kind}
                    </span>
                  </CommandItem>
                )
              })}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  )
}
