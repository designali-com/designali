"use client"

import * as React from "react"
import {
  FileAudioIcon,
  FileTextIcon,
  FileVideoIcon,
  ImageIcon,
} from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const files = [
  { name: "Q3-report.pdf", type: "doc", size: "2.4 MB" },
  { name: "hero-banner.png", type: "image", size: "840 KB" },
  { name: "onboarding.mp4", type: "video", size: "48 MB" },
  { name: "brand-sting.wav", type: "audio", size: "3.1 MB" },
  { name: "roadmap.docx", type: "doc", size: "112 KB" },
]

export default function FileTypeFilterToggleGroup() {
  const [types, setTypes] = React.useState<string[]>(["doc", "image"])
  const shown = files.filter((f) => types.includes(f.type))

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <ToggleGroup
        multiple
        size="sm"
        variant="outline"
        spacing={0}
        value={types}
        onValueChange={setTypes}
      >
        <ToggleGroupItem value="doc" aria-label="Documents">
          <FileTextIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="image" aria-label="Images">
          <ImageIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="video" aria-label="Videos">
          <FileVideoIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="audio" aria-label="Audio">
          <FileAudioIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="flex flex-col divide-y border text-sm">
        {shown.length ? (
          shown.map((f) => (
            <div key={f.name} className="flex justify-between px-3 py-2">
              <span className="truncate">{f.name}</span>
              <span className="text-xs text-muted-foreground">{f.size}</span>
            </div>
          ))
        ) : (
          <p className="px-3 py-6 text-center text-xs text-muted-foreground">
            No file types selected.
          </p>
        )}
      </div>
    </div>
  )
}
