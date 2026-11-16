import {
  CircleDot as CircleDotIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

export default function IssueReferenceHoverCard() {
  return (
    <div className="w-full max-w-sm border p-3 font-mono text-xs">
      fix(auth): refresh token before expiry, closes{" "}
      <HoverCard>
        <HoverCardTrigger
          href="#"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          #482
        </HoverCardTrigger>
        <HoverCardContent className="w-72 font-sans">
          <div className="flex items-start gap-2">
            <CircleDotIcon className="mt-0.5 size-4 shrink-0 text-emerald-600" />
            <div className="flex flex-col gap-1.5">
              <p className="font-medium">
                Session expires while editing a long form
              </p>
              <p className="text-muted-foreground">
                #482 opened 3 days ago by designali
              </p>
              <div className="flex flex-wrap gap-1">
                <Badge variant="destructive">bug</Badge>
                <Badge variant="outline">auth</Badge>
                <Badge variant="secondary">p1</Badge>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Avatar size="sm">
                  <AvatarImage src="/ali.jpg" alt="Ali Imam" />
            <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                Assigned to Ali Imam
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
