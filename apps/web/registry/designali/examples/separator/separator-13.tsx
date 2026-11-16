import * as React from "react"

import { Separator } from "@workspace/ui/components/separator"

const messages = [
  { author: "Kai", text: "Pushed the new pricing block to staging.", unread: false },
  { author: "Mira", text: "Looks good on my end.", unread: false },
  { author: "Kai", text: "designali.com deploy to Vercel starts in 10.", unread: true },
  {
    author: "Leo",
    text: "Heads up, the icons build takes a minute.",
    unread: true,
  },
]

export default function UnreadMessagesDivider() {
  const firstUnread = messages.findIndex((message) => message.unread)

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          {index === firstUnread && (
            <div className="flex items-center gap-2 py-1">
              <Separator className="flex-1 bg-destructive" />
              <span className="text-[11px] font-medium text-destructive">
                New messages
              </span>
            </div>
          )}
          <div className="flex gap-2">
            <span className="w-10 shrink-0 font-medium">{message.author}</span>
            <span className="text-muted-foreground">{message.text}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
