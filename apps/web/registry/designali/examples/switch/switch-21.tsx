"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Copy as CopyIcon,
  FileText as FileTextIcon,
  Link2 as Link2Icon,
} from "@designali/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

export default function ShareLinkSwitch() {
  const [shared, setShared] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <FileTextIcon className="size-5 text-muted-foreground" />
        <div className="flex-1">
          <p className="text-sm font-medium">designali-brand-guide.pdf</p>
          <p className="text-xs text-muted-foreground">2.4 MB</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="share-link" className="flex items-center gap-2">
          <Link2Icon className="size-4" />
          Anyone with the link
        </Label>
        <Switch
          id="share-link"
          checked={shared}
          onCheckedChange={(v) => {
            setShared(v)
            setCopied(false)
          }}
        />
      </div>
      {shared && (
        <InputGroup>
          <InputGroupInput
            readOnly
            value="https://www.designali.com/s/k39xQ"
            aria-label="Share link"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              onClick={() => setCopied(true)}
              aria-label="Copy link"
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      )}
    </div>
  )
}
