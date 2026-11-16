"use client"

import * as React from "react"
import {
  Columns3 as Columns3Icon,
  Eye as EyeIcon,
  Maximize as MaximizeIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

type GroupHandle = {
  getLayout: () => { [panelId: string]: number }
  setLayout: (layout: { [panelId: string]: number }) => {
    [panelId: string]: number
  }
}

const presets = [
  {
    label: "Balanced",
    icon: Columns3Icon,
    layout: { files: 25, editor: 50, preview: 25 },
  },
  {
    label: "Focus",
    icon: MaximizeIcon,
    layout: { files: 10, editor: 80, preview: 10 },
  },
  {
    label: "Review",
    icon: EyeIcon,
    layout: { files: 15, editor: 35, preview: 50 },
  },
]

export default function LayoutPresetButtons() {
  const groupRef = React.useRef<GroupHandle | null>(null)
  const [active, setActive] = React.useState("Balanced")

  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
      <div className="flex flex-wrap gap-1">
        {presets.map((preset) => (
          <Button
            key={preset.label}
            size="sm"
            variant={active === preset.label ? "default" : "outline"}
            onClick={() => {
              groupRef.current?.setLayout(preset.layout)
              setActive(preset.label)
            }}
          >
            <preset.icon data-icon="inline-start" />
            {preset.label}
          </Button>
        ))}
      </div>
      <ResizablePanelGroup
        groupRef={groupRef}
        orientation="horizontal"
        className="h-48 border"
      >
        <ResizablePanel id="files" defaultSize="25%" minSize="10%">
          <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
            Files
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel id="editor" defaultSize="50%" minSize="20%">
          <div className="flex h-full items-center justify-center text-xs font-medium">
            Editor
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel id="preview" defaultSize="25%" minSize="10%">
          <div className="flex h-full items-center justify-center bg-muted/40 text-xs text-muted-foreground">
            Preview
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
