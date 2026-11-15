"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

export default function CopyApiKeyInput() {
  const [copied, setCopied] = React.useState(false)
  const key = "pub_demo_mYb2"

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="api-key">Publishable key</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="api-key"
          readOnly
          value={key}
          className="font-mono"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            aria-label="Copy key"
            onClick={() => {
              navigator.clipboard?.writeText(key)
              setCopied(true)
              setTimeout(() => setCopied(false), 1500)
            }}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Safe to use in client-side code.</FieldDescription>
    </Field>
  )
}
