"use client"

import * as React from "react"
import {
  MessageCircle as MessageCircleIcon,
  Send as SendIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { cn } from "@workspace/ui/lib/utils"

export default function SupportChatSheet() {
  const [messages, setMessages] = React.useState([
    { from: "agent", text: "Hi! I'm Mira from Designali support. How can I help today?" },
    { from: "me", text: "My template download link has expired." },
    { from: "agent", text: "I can fix that. Which template did you buy?" },
  ])
  const [draft, setDraft] = React.useState("")

  function send(event: React.FormEvent) {
    event.preventDefault()
    if (!draft.trim()) return
    setMessages((prev) => [...prev, { from: "me", text: draft.trim() }])
    setDraft("")
  }

  return (
    <Sheet>
      <SheetTrigger render={<Button />}>
        <MessageCircleIcon data-icon="inline-start" />
        Chat with us
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <div>
              <SheetTitle>Mira · Designali Support</SheetTitle>
              <SheetDescription>
                Typically replies in 2 minutes
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn(
                "max-w-[80%] px-3 py-2",
                m.from === "me"
                  ? "self-end bg-primary text-primary-foreground"
                  : "self-start bg-muted"
              )}
            >
              {m.text}
            </div>
          ))}
        </div>
        <form onSubmit={send} className="flex gap-2 border-t p-4">
          <Input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Type a message…"
          />
          <Button type="submit" size="icon" aria-label="Send">
            <SendIcon />
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}
