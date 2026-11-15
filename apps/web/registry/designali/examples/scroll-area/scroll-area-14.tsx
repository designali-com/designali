"use client"

import * as React from "react"

import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const groups = [
  {
    label: "Smileys",
    items: [
      "😀",
      "😄",
      "😁",
      "😅",
      "😂",
      "🙂",
      "😉",
      "😊",
      "😍",
      "🤩",
      "😎",
      "🤔",
      "😴",
      "🥳",
    ],
  },
  {
    label: "Gestures",
    items: ["👍", "👎", "👏", "🙌", "🙏", "👋", "✌️", "🤞", "💪", "👀"],
  },
  {
    label: "Objects",
    items: [
      "🎉",
      "🔥",
      "✨",
      "💡",
      "📌",
      "📎",
      "🧩",
      "🎯",
      "🚀",
      "⏰",
      "📦",
      "🔒",
    ],
  },
  {
    label: "Nature",
    items: ["🌱", "🌸", "🌊", "⛰️", "🌙", "☀️", "🌈", "❄️", "🍀", "🌵"],
  },
]

export default function EmojiPickerGrid() {
  const [picked, setPicked] = React.useState("👍")

  return (
    <div className="w-full max-w-xs border">
      <div className="flex items-center gap-2 border-b px-3 py-2 text-xs">
        <span className="text-lg">{picked}</span>
        <span className="text-muted-foreground">Selected reaction</span>
      </div>
      <ScrollArea className="h-56">
        <div className="flex flex-col gap-3 p-3">
          {groups.map((g) => (
            <div key={g.label} className="flex flex-col gap-1">
              <span className="text-[10px] font-medium text-muted-foreground uppercase">
                {g.label}
              </span>
              <div className="grid grid-cols-7 gap-1">
                {g.items.map((e) => (
                  <button
                    key={e}
                    onClick={() => setPicked(e)}
                    aria-label={"React with " + e}
                    className={cn(
                      "flex aspect-square items-center justify-center text-lg hover:bg-muted",
                      picked === e && "bg-muted ring-1 ring-ring"
                    )}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
