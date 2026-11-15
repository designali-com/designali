import { BotIcon, SparklesIcon } from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@workspace/ui/components/avatar"

export default function AssistantBotAvatar() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex gap-3">
        <Avatar>
          <AvatarFallback className="bg-foreground text-background">
            <BotIcon className="size-4" />
          </AvatarFallback>
          <AvatarBadge className="bg-violet-500 text-white">
            <SparklesIcon />
          </AvatarBadge>
        </Avatar>
        <div className="flex-1 border bg-muted/40 p-3 text-sm">
          <p className="mb-1 text-xs font-medium text-muted-foreground">
            Assistant
          </p>
          I found 3 invoices overdue by more than 30 days. Want me to draft
          reminder emails?
        </div>
      </div>
      <div className="flex flex-row-reverse gap-3">
        <Avatar>
          <AvatarFallback>SJ</AvatarFallback>
        </Avatar>
        <p className="bg-primary px-3 py-2 text-sm text-primary-foreground">
          Yes, please.
        </p>
      </div>
    </div>
  )
}
