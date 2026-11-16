"use client"

import * as React from "react"
import {
  Eraser as EraserIcon,
  MousePointer2 as MousePointer2Icon,
  PenTool as PenToolIcon,
  Square as SquareIcon,
  Type as TypeIcon,
} from "@designali/icons"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const tools = [
  { value: "select", label: "Select", icon: MousePointer2Icon },
  { value: "pen", label: "Pen", icon: PenToolIcon },
  { value: "shape", label: "Rectangle", icon: SquareIcon },
  { value: "text", label: "Text", icon: TypeIcon },
  { value: "eraser", label: "Eraser", icon: EraserIcon },
]

export default function DrawingToolToggleGroup() {
  const [tool, setTool] = React.useState("pen")

  return (
    <div className="flex w-full max-w-sm gap-3">
      <ToggleGroup
        orientation="vertical"
        spacing={0}
        variant="outline"
        value={[tool]}
        onValueChange={(next) => next[0] && setTool(next[0])}
      >
        {tools.map((t) => (
          <ToggleGroupItem key={t.value} value={t.value} aria-label={t.label}>
            <t.icon />
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex flex-1 items-center justify-center border border-dashed bg-muted/30 text-xs text-muted-foreground">
        {tools.find((t) => t.value === tool)?.label} tool active
      </div>
    </div>
  )
}
