"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Label } from "@workspace/ui/components/label"

export default function CopyableKeyLabel() {
  const [copied, setCopied] = React.useState(false)
  const secret = "whk_demo_8vR1"

  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="webhook-secret">Signing secret</Label>
      <InputGroup>
        <InputGroupInput
          id="webhook-secret"
          readOnly
          value={secret}
          className="font-mono"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            aria-label="Copy secret"
            onClick={() => {
              void navigator.clipboard?.writeText(secret)
              setCopied(true)
            }}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
