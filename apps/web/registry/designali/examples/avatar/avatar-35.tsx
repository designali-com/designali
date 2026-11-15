import { CalendarIcon, MessageSquareIcon } from "lucide-react"

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
        <CardTitle className="mt-1">Redesign onboarding checklist</CardTitle>
        <CardDescription>
          Simplify steps and add progress hints for new teams.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <AvatarGroup>
          <Avatar size="sm">
            <AvatarFallback>VP</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback>CE</AvatarFallback>
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
