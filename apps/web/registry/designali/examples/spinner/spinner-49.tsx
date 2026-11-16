"use client"

import * as React from "react"
import {
  Send as SendIcon,
} from "@designali/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Spinner } from "@workspace/ui/components/spinner"

export default function SendMessageButton() {
  const [value, setValue] = React.useState(
    "Running 10 minutes late, start without me"
  )
  const [sending, setSending] = React.useState(false)

  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupInput
        aria-label="Message"
        value={value}
        disabled={sending}
        onChange={(e) => setValue(e.target.value)}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          size="icon-xs"
          variant="default"
          aria-label="Send message"
          disabled={sending || !value}
          onClick={() => {
            setSending(true)
            setTimeout(() => {
              setSending(false)
              setValue("")
            }, 1000)
          }}
        >
          {sending ? <Spinner /> : <SendIcon />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
