"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function CopyFeedbackTooltip() {
  const [copied, setCopied] = React.useState(false)
  const key = "key_demo_9f2c...a71e"

  return (
    <div className="flex w-full max-w-xs items-center gap-2 border px-3 py-1.5">
      <span className="flex-1 truncate font-mono text-xs">{key}</span>
      <Tooltip onOpenChange={(open) => !open && setCopied(false)}>
        <TooltipTrigger
          closeOnClick={false}
          render={
            <Button variant="ghost" size="icon-sm" aria-label="Copy API key" />
          }
          onClick={() => {
            void navigator.clipboard?.writeText(key)
            setCopied(true)
          }}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {copied ? "Copied!" : "Copy to clipboard"}
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
