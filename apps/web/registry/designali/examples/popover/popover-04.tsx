"use client"

import * as React from "react"
import { CheckIcon, CopyIcon, Share2Icon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

export default function ShareLinkPopover() {
  const [copied, setCopied] = React.useState(false)
  const url = "https://app.example.com/d/roadmap-q1"

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <Share2Icon data-icon="inline-start" />
        Share
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <PopoverHeader>
          <PopoverTitle>Share this doc</PopoverTitle>
          <PopoverDescription>
            Anyone in Lumen Labs with the link can view.
          </PopoverDescription>
        </PopoverHeader>
        <div className="flex gap-2">
          <Input
            readOnly
            value={url}
            aria-label="Share link"
            className="h-8 flex-1"
          />
          <Button
            size="icon"
            variant="outline"
            aria-label="Copy link"
            onClick={() => {
              void navigator.clipboard?.writeText(url)
              setCopied(true)
              window.setTimeout(() => setCopied(false), 1500)
            }}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
