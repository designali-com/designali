"use client"

import * as React from "react"
import {
  Paperclip as PaperclipIcon,
  Send as SendIcon,
  Smile as SmileIcon,
} from "@designali/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

export default function ChatComposerInput() {
  const [message, setMessage] = React.useState("")

  return (
    <InputGroup className="h-10 w-full max-w-md">
      <InputGroupAddon>
        <InputGroupButton size="icon-xs" aria-label="Attach file">
          <PaperclipIcon />
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupInput
        aria-label="Message"
        placeholder="Message #design-crit"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label="Insert emoji">
          <SmileIcon />
        </InputGroupButton>
        <InputGroupButton
          size="icon-xs"
          variant="default"
          aria-label="Send"
          disabled={!message.trim()}
          onClick={() => setMessage("")}
        >
          <SendIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
