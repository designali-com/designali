"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"

export default function CommentBoxWithAvatar() {
  const [text, setText] = React.useState("")

  return (
    <div className="flex w-full max-w-md gap-3">
      <Avatar>
        <AvatarFallback>MB</AvatarFallback>
      </Avatar>
      <div className="flex flex-1 flex-col gap-2">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment on this Designali block…"
          aria-label="Comment"
        />
        <div className="flex justify-end gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setText("")}
            disabled={!text}
          >
            Cancel
          </Button>
          <Button size="sm" disabled={!text.trim()}>
            Comment
          </Button>
        </div>
      </div>
    </div>
  )
}
