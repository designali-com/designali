import {
  Plus as PlusIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { cn } from "@workspace/ui/lib/utils"

const stories = [
  { name: "You", initials: "+", seen: false, add: true },
  { name: "aliimam", initials: "AI", seen: false, add: false },
  { name: "designali", initials: "DA", seen: false, add: false },
  { name: "sara", initials: "SA", seen: true, add: false },
  { name: "omar", initials: "OM", seen: true, add: false },
]

export default function StoryRingAvatars() {
  return (
    <div className="flex w-full max-w-sm gap-3 overflow-x-auto p-1">
      {stories.map((story) => (
        <div
          key={story.name}
          className="flex w-14 shrink-0 flex-col items-center gap-1"
        >
          <div
            className={cn(
              "rounded-full p-0.5",
              story.add
                ? "border border-dashed border-muted-foreground/50"
                : story.seen
                  ? "bg-border"
                  : "bg-gradient-to-tr from-amber-400 via-rose-500 to-fuchsia-600"
            )}
          >
            <Avatar size="lg" className="ring-2 ring-background">
              <AvatarFallback className={cn(story.add && "bg-background")}>
                {story.add ? <PlusIcon className="size-4" /> : story.initials}
              </AvatarFallback>
            </Avatar>
          </div>
          <span className="truncate text-[11px] text-muted-foreground">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  )
}
