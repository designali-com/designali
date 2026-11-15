"use client"

import * as React from "react"
import { SendIcon } from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
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
    text: "Hi Noor! I see your export failed last night. Want me to re-run it?",
  },
  { from: "me", text: "Yes please, the Q3 report for the finance workspace." },
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
            <AvatarFallback>EV</AvatarFallback>
            <AvatarBadge className="bg-emerald-500" />
          </Avatar>
          <div className="grid">
            <CardTitle>Elliot Vance</CardTitle>
            <CardDescription>
              Support · usually replies in 2 min
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
