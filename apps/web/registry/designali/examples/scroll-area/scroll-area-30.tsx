"use client"

import * as React from "react"
import { FileIcon, FolderOpenIcon } from "lucide-react"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"
import { Label } from "@workspace/ui/components/label"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Switch } from "@workspace/ui/components/switch"

const files = [
  "brand-guide.pdf",
  "q3-forecast.xlsx",
  "hero-v4.fig",
  "onboarding.mp4",
  "contract-signed.pdf",
  "logo-pack.zip",
  "team-photo-alt.txt",
  "launch-plan.md",
]

export default function EmptyOrPopulatedList() {
  const [hasFiles, setHasFiles] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Shared files</span>
        <Label className="flex items-center gap-2 text-xs">
          Demo data
          <Switch checked={hasFiles} onCheckedChange={setHasFiles} />
        </Label>
      </div>
      <ScrollArea className="h-60 border">
        {hasFiles ? (
          <div className="flex flex-col divide-y">
            {files.map((f) => (
              <div
                key={f}
                className="flex items-center gap-2 px-3 py-2 text-xs"
              >
                <FileIcon className="size-3.5 text-muted-foreground" />
                {f}
              </div>
            ))}
          </div>
        ) : (
          <Empty className="h-60">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FolderOpenIcon />
              </EmptyMedia>
              <EmptyTitle>No files yet</EmptyTitle>
              <EmptyDescription>
                Files shared in this channel will appear here.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
      </ScrollArea>
    </div>
  )
}
