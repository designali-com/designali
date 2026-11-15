import { CalendarIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

export default function KanbanTaskHoverCard() {
  const done = 3
  const total = 5

  return (
    <div className="w-full max-w-[16rem] bg-muted/50 p-2">
      <p className="mb-2 px-1 text-xs font-medium text-muted-foreground">
        IN PROGRESS · 1
      </p>
      <HoverCard>
        <HoverCardTrigger
          render={
            <div className="cursor-grab border bg-background p-3 text-sm shadow-xs" />
          }
        >
          <p className="font-medium">Migrate invoices to new PDF engine</p>
          <p className="mt-1 text-xs text-muted-foreground">FIN-218</p>
        </HoverCardTrigger>
        <HoverCardContent
          side="right"
          align="start"
          className="flex w-60 flex-col gap-2"
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">FIN-218</span>
            <Badge variant="destructive">High</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            Chloé Laurent
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarIcon className="size-3.5" />
            Due Friday, Apr 11
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtasks</span>
              <span>
                {done}/{total}
              </span>
            </div>
            <div className="h-1.5 bg-muted">
              <div
                className="h-full bg-primary"
                style={{ width: (done / total) * 100 + "%" }}
              />
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
