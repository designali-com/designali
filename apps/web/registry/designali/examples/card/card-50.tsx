import {
  Calendar as CalendarIcon,
  Ellipsis as EllipsisIcon,
  MessageSquare as MessageSquareIcon,
  SignalHigh as SignalHighIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function KanbanTaskCard() {
  return (
    <div className="w-full max-w-72 bg-muted/50 p-2">
      <div className="flex items-center justify-between px-1 pb-2 text-xs font-medium">
        <span>In review</span>
        <span className="text-muted-foreground">3</span>
      </div>
      <Card
        size="sm"
        className="cursor-grab transition-shadow hover:ring-foreground/25 active:cursor-grabbing"
      >
        <CardHeader>
          <div className="flex gap-1">
            <Badge
              variant="secondary"
              className="bg-primary/15 text-chart-3 dark:text-chart-1"
            >
              Design
            </Badge>
            <Badge
              variant="secondary"
              className="bg-primary/15 text-chart-3 dark:text-chart-1"
            >
              Web
            </Badge>
          </div>
          <CardTitle className="mt-1">
            Redesign empty states for Designali blocks
          </CardTitle>
          <CardAction>
            <Button variant="ghost" size="icon-xs" aria-label="Task options">
              <EllipsisIcon />
            </Button>
          </CardAction>
        </CardHeader>
        <CardFooter className="justify-between text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-primary dark:text-primary">
              <SignalHighIcon className="size-3.5" /> High
            </span>
            <span className="flex items-center gap-1">
              <CalendarIcon className="size-3.5" /> Nov 21
            </span>
            <span className="flex items-center gap-1">
              <MessageSquareIcon className="size-3.5" /> 4
            </span>
          </div>
          <AvatarGroup>
            <Avatar size="sm">
              <AvatarImage src="/ali.jpg" alt="Ali Imam" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </CardFooter>
      </Card>
    </div>
  )
}
