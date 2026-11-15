"use client"

import * as React from "react"
import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { cn } from "@workspace/ui/lib/utils"

export default function TextFormattingToggleGroup() {
  const [marks, setMarks] = React.useState<string[]>(["bold"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <ToggleGroup
        multiple
        variant="outline"
        spacing={0}
        value={marks}
        onValueChange={setMarks}
      >
        <ToggleGroupItem value="bold" aria-label="Bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <UnderlineIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="strike" aria-label="Strikethrough">
          <StrikethroughIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <p
        className={cn(
          "border bg-muted/30 p-3 text-sm",
          marks.includes("bold") && "font-semibold",
          marks.includes("italic") && "italic",
          marks.includes("underline") && "underline",
          marks.includes("strike") && "line-through"
        )}
      >
        The quarterly review moves to Thursday at 10:00.
      </p>
    </div>
  )
}
