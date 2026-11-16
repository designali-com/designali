"use client"

import * as React from "react"
import {
  Paperclip as PaperclipIcon,
  Send as SendIcon,
} from "@designali/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@workspace/ui/components/input-group"
import { cn } from "@workspace/ui/lib/utils"

export default function ChatComposerTextarea() {
  const [messages, setMessages] = React.useState([
    "Hi Ali! Are we still on for the homepage design review at 4?",
  ])
  const [draft, setDraft] = React.useState("")

  function send() {
    if (!draft.trim()) return
    setMessages([...messages, draft.trim()])
    setDraft("")
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex flex-col gap-1.5">
        {messages.map((m, i) => (
          <p
            key={i}
            className={cn(
              "max-w-[80%] px-3 py-2 text-xs",
              i === 0
                ? "self-start bg-muted"
                : "self-end bg-primary text-primary-foreground"
            )}
          >
            {m}
          </p>
        ))}
      </div>
      <InputGroup>
        <InputGroupTextarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              send()
            }
          }}
          placeholder="Message Ali Imam…"
          className="max-h-32"
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton size="icon-xs" aria-label="Attach file">
            <PaperclipIcon />
          </InputGroupButton>
          <InputGroupButton
            size="icon-xs"
            variant="default"
            className="ms-auto"
            aria-label="Send"
            onClick={send}
            disabled={!draft.trim()}
          >
            <SendIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
