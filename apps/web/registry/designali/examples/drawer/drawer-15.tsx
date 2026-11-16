"use client"

import * as React from "react"
import {
  MessageCircle as MessageCircleIcon,
  Send as SendIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { cn } from "@workspace/ui/lib/utils"

const initialMessages = [
  {
    id: 1,
    from: "agent",
    text: "Hi there! I see your Templates Pro download link expired. Want me to resend it?",
  },
  { id: 2, from: "me", text: "Yes please, it expired yesterday." },
  {
    id: 3,
    from: "agent",
    text: "Done! A fresh link is on its way to your inbox from support@designali.com.",
  },
]

export default function ChatThreadDrawer() {
  const [messages, setMessages] = React.useState(initialMessages)
  const [draft, setDraft] = React.useState("")

  function send() {
    if (!draft.trim()) return
    setMessages((current) => [
      ...current,
      { id: current.length + 1, from: "me", text: draft.trim() },
    ])
    setDraft("")
  }

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button />}>
        <MessageCircleIcon data-icon="inline-start" />
        Chat with support
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex-row items-center gap-3 border-b pb-4">
          <Avatar>
            <AvatarImage src="/ali.jpg" alt="Ali Imam" />
            <AvatarFallback>AI</AvatarFallback>
            <AvatarBadge className="bg-primary" />
          </Avatar>
          <div>
            <DrawerTitle>Ali from Designali</DrawerTitle>
            <DrawerDescription>
              Typically replies in 2 minutes
            </DrawerDescription>
          </div>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "max-w-[80%] px-3 py-2",
                message.from === "me"
                  ? "self-end bg-primary text-primary-foreground"
                  : "self-start bg-muted"
              )}
            >
              {message.text}
            </div>
          ))}
        </div>
        <DrawerFooter className="border-t pt-4">
          <InputGroup>
            <InputGroupInput
              placeholder="Write a reply..."
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && send()}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" aria-label="Send" onClick={send}>
                <SendIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
