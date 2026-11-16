"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Copy as CopyIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
} from "@designali/icons"

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

export default function ReadOnlyApiKeyField() {
  const [show, setShow] = React.useState(false)
  const [copied, setCopied] = React.useState(false)
  const key = "pub_demo_93mV"

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="api-key">Publishable key</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="api-key"
          readOnly
          value={show ? key : "pub_demo_••••••••••••••"}
          className="font-sans"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            aria-label={show ? "Hide key" : "Show key"}
            onClick={() => setShow(!show)}
          >
            {show ? <EyeOffIcon /> : <EyeIcon />}
          </InputGroupButton>
          <InputGroupButton
            size="icon-xs"
            aria-label="Copy key"
            onClick={() => setCopied(true)}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Safe to use in client-side code.</FieldDescription>
    </Field>
  )
}
