"use client"

import * as React from "react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const emojis = [
  { char: "👍", name: "Thumbs up", keywords: ["like", "approve", "yes"] },
  {
    char: "🎉",
    name: "Party popper",
    keywords: ["celebrate", "tada", "launch"],
  },
  { char: "❤️", name: "Red heart", keywords: ["love", "favorite"] },
  { char: "😂", name: "Tears of joy", keywords: ["funny", "lol", "laugh"] },
  { char: "👀", name: "Eyes", keywords: ["look", "review", "watching"] },
  { char: "🚀", name: "Rocket", keywords: ["ship", "deploy", "fast"] },
  { char: "🔥", name: "Fire", keywords: ["hot", "lit", "trending"] },
  { char: "✅", name: "Check mark", keywords: ["done", "complete"] },
]

export default function EmojiReactionSearch() {
  const [picked, setPicked] = React.useState<string[]>([])

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <div className="flex h-8 items-center gap-1 border px-2 text-sm">
        <span className="text-xs text-muted-foreground">Reactions:</span>
        {picked.map((char, index) => (
          <span key={char + index}>{char}</span>
        ))}
      </div>
      <Command className="border">
        <CommandInput placeholder="Search emoji (try “ship”)" />
        <CommandList className="max-h-56">
          <CommandEmpty>No emoji found.</CommandEmpty>
          <CommandGroup heading="Frequently used">
            {emojis.map((emoji) => (
              <CommandItem
                key={emoji.name}
                value={emoji.name}
                keywords={emoji.keywords}
                onSelect={() =>
                  setPicked((current) => [...current, emoji.char].slice(-8))
                }
              >
                <span className="text-base leading-none">{emoji.char}</span>
                <span>{emoji.name}</span>
                <span className="ms-auto truncate text-[11px] text-muted-foreground">
                  :{emoji.keywords[0]}:
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
