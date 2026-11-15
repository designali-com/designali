import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { cn } from "@workspace/ui/lib/utils"

const messages = [
  { from: "them", text: "Hey! Did the new build fix the export bug?" },
  { from: "me", text: "Yes, CSV and PDF exports both work now." },
  { from: "them", text: "Amazing, shipping it to beta testers tonight." },
]

export default function ChatConversationAvatars() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      {messages.map((message, index) => {
        const mine = message.from === "me"
        return (
          <div
            key={index}
            className={cn("flex items-end gap-2", mine && "flex-row-reverse")}
          >
            <Avatar size="sm">
              <AvatarFallback
                className={cn(mine && "bg-primary text-primary-foreground")}
              >
                {mine ? "ME" : "JR"}
              </AvatarFallback>
            </Avatar>
            <p
              className={cn(
                "max-w-[75%] px-3 py-2 text-sm",
                mine ? "bg-primary text-primary-foreground" : "bg-muted"
              )}
            >
              {message.text}
            </p>
          </div>
        )
      })}
    </div>
  )
}
