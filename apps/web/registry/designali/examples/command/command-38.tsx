"use client"

import * as React from "react"
import {
  AtSign as AtSignIcon,
  Link as LinkIcon,
  Pipette as PipetteIcon,
  Terminal as TerminalIcon,
  TextInitial as TextIcon,
} from "@designali/icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const clips = [
  { id: 1, text: "support@designali.com", kind: "Email", pinned: true },
  { id: 2, text: "#00A8FF", kind: "Color", pinned: true },
  {
    id: 3,
    text: "https://www.designali.com/blogs",
    kind: "Link",
    pinned: false,
  },
  { id: 4, text: "pnpm add @designali/icons", kind: "Code", pinned: false },
  {
    id: 5,
    text: "Thanks Ali, the new brand identity looks great!",
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
