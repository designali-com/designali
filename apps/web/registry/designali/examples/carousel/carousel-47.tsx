import {
  BugIcon,
  EyeIcon,
  FlameIcon,
  GitCommitHorizontalIcon,
  GraduationCapIcon,
  LockIcon,
  MoonIcon,
} from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const badges = [
  { name: "First commit", icon: GitCommitHorizontalIcon, state: "earned" },
  { name: "7-day streak", icon: FlameIcon, state: "earned" },
  { name: "Bug hunter", icon: BugIcon, state: "earned" },
  { name: "Reviewer", icon: EyeIcon, state: "progress", value: 60 },
  { name: "Mentor", icon: GraduationCapIcon, state: "locked" },
  { name: "Night owl", icon: MoonIcon, state: "locked" },
]

export default function AchievementBadgesRail() {
  return (
    <div className="w-full max-w-sm">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium">Achievements</span>
        <span className="text-xs text-muted-foreground">3 of 6 earned</span>
      </div>
      <Carousel opts={{ dragFree: true, align: "start" }}>
        <CarouselContent className="-ms-2">
          {badges.map((badge) => (
            <CarouselItem
              key={badge.name}
              className="basis-1/3 ps-2 sm:basis-1/4"
            >
              <div
                className={cn(
                  "flex flex-col items-center gap-2 border p-3 text-center",
                  badge.state === "locked" && "opacity-40"
                )}
              >
                <div
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full",
                    badge.state === "earned"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {badge.state === "locked" ? (
                    <LockIcon className="size-4" />
                  ) : (
                    <badge.icon className="size-4" />
                  )}
                </div>
                <span className="text-[11px] leading-tight">{badge.name}</span>
                {badge.state === "progress" && (
                  <Progress
                    value={badge.value ?? null}
                    className="w-full"
                    aria-label={badge.name + " progress"}
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
