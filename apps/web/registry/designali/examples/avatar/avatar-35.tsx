import {
  Calendar as CalendarIcon,
  MessageSquare as MessageSquareIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function KanbanTaskAssignees() {
  return (
    <Card size="sm" className="w-full max-w-xs">
      <CardHeader>
        <div className="flex gap-1">
          <Badge variant="secondary">Design</Badge>
          <Badge variant="outline">P2</Badge>
        </div>
        <CardTitle className="mt-1">Redesign Designali templates page</CardTitle>
        <CardDescription>
          Simplify the grid and add filters for templates, blocks and UI designs.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <AvatarGroup>
          <Avatar size="sm">
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
        </AvatarGroup>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <CalendarIcon className="size-3" /> Oct 4
          </span>
          <span className="flex items-center gap-1">
            <MessageSquareIcon className="size-3" /> 6
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
