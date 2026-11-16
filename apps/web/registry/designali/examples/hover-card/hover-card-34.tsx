import {
  Bug as BugIcon,
  GraduationCap as GraduationCapIcon,
  Rocket as RocketIcon,
} from "@designali/icons"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { cn } from "@workspace/ui/lib/utils"

const badges = [
  {
    name: "First Ship",
    icon: RocketIcon,
    earned: "Jan 4, 2025",
    how: "Shipped your first Designali template to production.",
    tone: "bg-primary/15 text-primary",
  },
  {
    name: "Bug Hunter",
    icon: BugIcon,
    earned: "Feb 19, 2025",
    how: "Closed 25 bug reports in a single month.",
    tone: "bg-primary/15 text-primary",
  },
  {
    name: "Mentor",
    icon: GraduationCapIcon,
    earned: "Mar 2, 2025",
    how: "Reviewed 50 pull requests from new teammates.",
    tone: "bg-primary/15 text-primary",
  },
]

export default function AchievementBadgeHoverCard() {
  return (
    <div className="flex gap-3">
      {badges.map((b) => (
        <HoverCard key={b.name}>
          <HoverCardTrigger
            render={
              <span
                className={cn(
                  "flex size-12 cursor-default items-center justify-center rounded-full",
                  b.tone
                )}
              />
            }
          >
            <b.icon className="size-5" />
          </HoverCardTrigger>
          <HoverCardContent side="top" className="w-52 text-center">
            <p className="font-medium">{b.name}</p>
            <p className="text-muted-foreground">{b.how}</p>
            <p className="mt-2 text-[10px] tracking-wide text-muted-foreground uppercase">
              Earned {b.earned}
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
