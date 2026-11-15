import { PlusIcon, VideoIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const meetings = [
  {
    time: "09:00",
    end: "09:15",
    title: "Daily standup",
    room: "Zoom",
    past: true,
  },
  {
    time: "10:30",
    end: "11:30",
    title: "Pricing page critique",
    room: "Room Atlas",
    now: true,
  },
  { time: "13:00", end: "13:30", title: "1:1 with Grace", room: "Zoom" },
  { time: "15:00", end: "16:00", title: "Roadmap review", room: "Room Nova" },
]

export default function TodayScheduleCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Today</CardTitle>
        <CardDescription>Thursday, November 20</CardDescription>
        <CardAction>
          <Button variant="outline" size="icon-sm" aria-label="New event">
            <PlusIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-1">
        {meetings.map((m) => (
          <div
            key={m.title}
            className={cn(
              "flex items-center gap-3 border-s-2 border-transparent p-2",
              m.now && "border-primary bg-muted/60",
              m.past && "opacity-50"
            )}
          >
            <div className="grid w-10 text-muted-foreground tabular-nums">
              <span className="text-foreground">{m.time}</span>
              <span>{m.end}</span>
            </div>
            <div className="grid min-w-0 flex-1">
              <span className="truncate font-medium">{m.title}</span>
              <span className="text-muted-foreground">{m.room}</span>
            </div>
            {m.now ? (
              <Button size="xs">
                <VideoIcon data-icon="inline-start" />
                Join
              </Button>
            ) : null}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
