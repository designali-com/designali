import {
  CircleCheckIcon,
  GitPullRequestIcon,
  MessageSquareIcon,
  UserPlusIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const activity = [
  {
    icon: GitPullRequestIcon,
    tone: "text-violet-500",
    who: "Iris Chen",
    what: "opened PR #482 Add usage alerts",
    when: "4m",
  },
  {
    icon: MessageSquareIcon,
    tone: "text-sky-500",
    who: "Marco Bianchi",
    what: "commented on Billing page redesign",
    when: "38m",
  },
  {
    icon: CircleCheckIcon,
    tone: "text-emerald-500",
    who: "Deploy bot",
    what: "shipped v2.14.0 to production",
    when: "2h",
  },
  {
    icon: UserPlusIcon,
    tone: "text-amber-500",
    who: "Hana Sato",
    what: "joined the Platform team",
    when: "1d",
  },
]

export default function ActivityFeedCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Recent activity</CardTitle>
        <CardAction>
          <Button variant="ghost" size="xs">
            View all
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ol className="relative grid gap-4 before:absolute before:inset-y-2 before:start-3 before:w-px before:bg-border">
          {activity.map((a) => (
            <li key={a.what} className="relative flex gap-3">
              <span className="z-10 flex size-6 shrink-0 items-center justify-center border bg-card">
                <a.icon className={cn("size-3.5", a.tone)} />
              </span>
              <p className="flex-1 pt-0.5">
                <span className="font-medium">{a.who}</span>{" "}
                <span className="text-muted-foreground">{a.what}</span>
              </p>
              <span className="pt-0.5 text-muted-foreground tabular-nums">
                {a.when}
              </span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
