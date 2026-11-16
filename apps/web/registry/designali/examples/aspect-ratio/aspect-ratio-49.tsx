"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Copy as CopyIcon,
  CirclePlay as PlayCircleIcon,
} from "@designali/icons"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Button } from "@workspace/ui/components/button"

export default function EmbedCodeSnippet() {
  const [copied, setCopied] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <AspectRatio
        ratio={16 / 9}
        className="bg-linear-to-br from-foreground to-foreground"
      >
        <div className="absolute inset-0 flex items-center justify-center gap-2 text-white">
          <PlayCircleIcon className="size-8" />
          <span className="text-sm font-medium">Designali showreel</span>
        </div>
      </AspectRatio>
      <div className="flex items-center gap-2 border bg-muted/40 p-2">
        <code className="min-w-0 flex-1 truncate font-mono text-[10px] text-muted-foreground">
          &lt;div style=&quot;aspect-ratio:16/9&quot;&gt;&lt;iframe
          src=&quot;https://www.designali.com/vid/colorful-spheres.mp4&quot; /&gt;&lt;/div&gt;
        </code>
        <Button size="xs" variant="outline" onClick={() => setCopied(true)}>
          {copied ? (
            <CheckIcon data-icon="inline-start" />
          ) : (
            <CopyIcon data-icon="inline-start" />
          )}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
    </div>
  )
}
