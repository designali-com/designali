"use client"

import * as React from "react"
import {
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const initial = [
  {
    from: "agent",
    text: "Hi! I see your template download failed last night. Want me to resend it?",
  },
  { from: "me", text: "Yes please, the Design Agency template with Figma files." },
  {
    from: "agent",
    text: "Done. It should land in your inbox within 5 minutes.",
  },
]

export default function SupportChatCard() {
  const [messages, setMessages] = React.useState(initial)
  const [draft, setDraft] = React.useState("")

  return (
    <Card className="w-full max-w-sm gap-0 pb-0">
      <CardHeader className="border-b">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-8">
            <AvatarImage src="/ali.jpg" alt="Ali Imam" />
            <AvatarFallback>AI</AvatarFallback>
            <AvatarBadge className="bg-primary" />
          </Avatar>
          <div className="grid">
            <CardTitle>Ali Imam</CardTitle>
            <CardDescription>
              Designali support · usually replies in 2 min
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex max-h-56 flex-col gap-2 overflow-y-auto py-4">
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
      </CardContent>
      <CardFooter>
        <form
          className="flex w-full gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            if (!draft.trim()) return
            setMessages([...messages, { from: "me", text: draft.trim() }])
            setDraft("")
          }}
        >
          <Input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Write a message..."
          />
          <Button type="submit" size="icon" aria-label="Send">
            <SendIcon />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
