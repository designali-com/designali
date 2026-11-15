import * as React from "react"
import { FileIcon, Share2Icon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"

const meta = [
  { label: "Type", value: "Figma file" },
  { label: "Size", value: "12.4 MB" },
  { label: "Modified", value: "Yesterday, 18:02" },
  { label: "Owner", value: "Ada Kowalski" },
]

export default function FileDetailsPanel() {
  return (
    <div className="flex w-full max-w-60 flex-col gap-3 border p-3">
      <div className="flex aspect-video items-center justify-center bg-linear-to-br from-violet-500/30 to-sky-500/30">
        <FileIcon className="size-8 text-muted-foreground" />
      </div>
      <span className="truncate text-sm font-medium">
        Onboarding flow v4.fig
      </span>
      <Separator />
      <dl className="grid grid-cols-2 gap-y-1.5 text-xs">
        {meta.map((item) => (
          <React.Fragment key={item.label}>
            <dt className="text-muted-foreground">{item.label}</dt>
            <dd className="truncate text-end">{item.value}</dd>
          </React.Fragment>
        ))}
      </dl>
      <Separator />
      <Button variant="outline" size="sm">
        <Share2Icon data-icon="inline-start" />
        Share
      </Button>
    </div>
  )
}
