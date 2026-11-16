"use client"

import * as React from "react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { cn } from "@workspace/ui/lib/utils"

const sizes: Record<string, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
}

export default function ReaderFontSizeToggleGroup() {
  const [size, setSize] = React.useState("md")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Text size</span>
        <ToggleGroup
          size="sm"
          value={[size]}
          onValueChange={(next) => next[0] && setSize(next[0])}
        >
          <ToggleGroupItem value="sm" className="text-[10px]">
            A
          </ToggleGroupItem>
          <ToggleGroupItem value="md" className="text-xs">
            A
          </ToggleGroupItem>
          <ToggleGroupItem value="lg" className="text-sm">
            A
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <p className={cn("leading-relaxed text-muted-foreground", sizes[size])}>
        Where thoughtful design meets production-ready code. Designali designs
        and builds digital experiences that look great and feel intuitive.
      </p>
    </div>
  )
}
