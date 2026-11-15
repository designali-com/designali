"use client"

import * as React from "react"
import { CheckIcon, MessageSquareIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { Textarea } from "@workspace/ui/components/textarea"

const initial = [
  {
    name: "Ines Duarte",
    text: "Can we tighten the intro? It runs long on mobile.",
    when: "10:02",
  },
  {
    name: "Kwame Asante",
    text: "Agreed — I'll cut the second paragraph.",
    when: "10:15",
  },
]

export default function CommentsThreadSheet() {
  const [comments, setComments] = React.useState(initial)
  const [reply, setReply] = React.useState("")
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <MessageSquareIcon data-icon="inline-start" />
        {comments.length} comments
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b">
          <SheetTitle>Comments</SheetTitle>
          <SheetDescription>
            On &quot;Launch blog post — draft 3&quot;
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          <blockquote className="border-s-2 ps-3 text-muted-foreground italic">
            Today we&apos;re introducing a faster way to plan your week…
          </blockquote>
          {comments.map((c, i) => (
            <div key={i} className="flex gap-2">
              <Avatar size="sm">
                <AvatarFallback>
                  {c.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span>
                  <span className="font-medium">{c.name}</span>{" "}
                  <span className="text-muted-foreground">{c.when}</span>
                </span>
                <span>{c.text}</span>
              </div>
            </div>
          ))}
        </div>
        <SheetFooter className="border-t">
          <Textarea
            rows={2}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Reply…"
          />
          <div className="flex justify-between">
            <Button variant="ghost" size="sm">
              <CheckIcon data-icon="inline-start" />
              Resolve
            </Button>
            <Button
              size="sm"
              disabled={!reply.trim()}
              onClick={() => {
                setComments((prev) => [
                  ...prev,
                  { name: "You", text: reply.trim(), when: "now" },
                ])
                setReply("")
              }}
            >
              Reply
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
