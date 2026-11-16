"use client"

import * as React from "react"
import {
  Send as SendIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const seed = [
  { me: false, text: "Morning! Is the staging deploy done?" },
  { me: true, text: "Yep, finished ten minutes ago." },
  { me: false, text: "Great, I'll start the QA pass." },
  { me: true, text: "Ping me if anything looks off." },
  { me: false, text: "Pricing block looks good so far." },
  { me: false, text: "Found a typo on the receipt page." },
]

export default function ChatAutoScroll() {
  const [messages, setMessages] = React.useState(seed)
  const [draft, setDraft] = React.useState("")
  const endRef = React.useRef<null | HTMLDivElement>(null)

  React.useEffect(() => {
    const viewport = endRef.current?.closest(
      "[data-slot=scroll-area-viewport]"
    ) as HTMLElement | null | undefined
    viewport?.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" })
  }, [messages])

  const send = (event: React.FormEvent) => {
    event.preventDefault()
    if (!draft.trim()) return
    setMessages((prev) => [...prev, { me: true, text: draft.trim() }])
    setDraft("")
  }

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <ScrollArea className="h-64">
        <div className="flex flex-col gap-2 p-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn(
                "max-w-[80%] px-3 py-2 text-xs",
                m.me
                  ? "self-end bg-primary text-primary-foreground"
                  : "self-start bg-muted"
              )}
            >
              {m.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>
      </ScrollArea>
      <form onSubmit={send} className="flex gap-2 border-t p-2">
        <Input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Type a message"
          aria-label="Message"
        />
        <Button type="submit" size="icon" aria-label="Send">
          <SendIcon />
        </Button>
      </form>
    </div>
  )
}
