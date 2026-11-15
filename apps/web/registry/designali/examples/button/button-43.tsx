"use client"

import * as React from "react"
import { MicIcon, PaperclipIcon, SendIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"

export default function ChatComposerSendButton() {
  const [message, setMessage] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-2">
      <Textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Message #design-crit"
        className="min-h-14 resize-none border-0 p-1 shadow-none focus-visible:ring-0 dark:bg-transparent"
      />
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <Button variant="ghost" size="icon-sm" aria-label="Attach file">
            <PaperclipIcon />
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Record voice note">
            <MicIcon />
          </Button>
        </div>
        <Button
          size="icon-sm"
          aria-label="Send message"
          disabled={!message.trim()}
          onClick={() => setMessage("")}
        >
          <SendIcon />
        </Button>
      </div>
    </div>
  )
}
