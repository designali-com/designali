"use client"

import * as React from "react"
import { ArrowUpIcon, CheckIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const thread = [
  {
    author: "Maya Chen",
    body: "Can this headline be one line on mobile?",
    time: "10:24",
  },
  {
    author: "Leo Varga",
    body: "Trimmed it to 32 characters, check now.",
    time: "10:31",
  },
]

export default function CommentPinPopover() {
  const [replies, setReplies] = React.useState(thread)
  const [draft, setDraft] = React.useState("")

  return (
    <div className="relative aspect-video w-full max-w-sm border bg-gradient-to-br from-muted to-background">
      <div className="absolute inset-x-6 top-6 flex flex-col gap-2">
        <div className="h-3 w-3/4 bg-foreground/15" />
        <div className="h-2 w-1/2 bg-foreground/10" />
      </div>
      <Popover>
        <PopoverTrigger
          render={
            <button
              type="button"
              aria-label="Open comment thread"
              className="absolute top-4 left-[70%] flex size-7 items-center justify-center rounded-full rounded-bl-none bg-primary text-[10px] font-semibold text-primary-foreground shadow"
            />
          }
        >
          MC
        </PopoverTrigger>
        <PopoverContent side="right" align="start" className="w-64">
          <div className="flex flex-col gap-2.5">
            {replies.map((reply, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="text-xs font-medium">
                  {reply.author}{" "}
                  <span className="font-normal text-muted-foreground">
                    {reply.time}
                  </span>
                </span>
                <p className="text-xs text-muted-foreground">{reply.body}</p>
              </div>
            ))}
          </div>
          <form
            className="flex gap-1.5"
            onSubmit={(event) => {
              event.preventDefault()
              if (!draft.trim()) return
              setReplies((prev) => [
                ...prev,
                { author: "You", body: draft.trim(), time: "now" },
              ])
              setDraft("")
            }}
          >
            <Input
              placeholder="Reply"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="h-7 flex-1"
            />
            <Button
              type="submit"
              size="icon-sm"
              aria-label="Send reply"
              disabled={!draft.trim()}
            >
              <ArrowUpIcon />
            </Button>
          </form>
          <Button variant="ghost" size="xs" className="self-start">
            <CheckIcon data-icon="inline-start" /> Resolve
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}
