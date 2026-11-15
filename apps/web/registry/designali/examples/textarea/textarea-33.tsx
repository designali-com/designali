import { CornerDownLeftIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"

export default function ThreadReplyTextarea() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-3">
      <div className="flex gap-2">
        <Avatar size="sm">
          <AvatarFallback>RV</AvatarFallback>
        </Avatar>
        <div className="text-xs">
          <p>
            <span className="font-medium">Rosa Vidal</span>{" "}
            <span className="text-muted-foreground">· 2h</span>
          </p>
          <p className="text-muted-foreground">
            Should we push the launch to Monday so support is fully staffed?
          </p>
        </div>
      </div>
      <div className="flex items-end gap-2 border-s-2 ps-3">
        <Textarea
          rows={1}
          className="min-h-8"
          placeholder="Reply in thread…"
          aria-label="Reply"
        />
        <Button size="icon-sm" aria-label="Send reply">
          <CornerDownLeftIcon />
        </Button>
      </div>
    </div>
  )
}
