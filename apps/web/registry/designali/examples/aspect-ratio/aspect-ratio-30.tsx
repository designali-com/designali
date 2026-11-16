import {
  Clock as ClockIcon,
  Flame as FlameIcon,
  Users as UsersIcon,
} from "@designali/icons"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function RecipeCardCover() {
  return (
    <div className="w-full max-w-xs border">
      <AspectRatio
        ratio={4 / 3}
        className="overflow-hidden bg-linear-to-br from-primary/20 to-primary dark:from-chart-4 dark:to-chart-5"
      >
        <div className="absolute start-1/2 top-1/2 size-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl rtl:translate-x-1/2 dark:bg-foreground">
          <div className="absolute inset-[18%] rounded-full bg-linear-to-br from-chart-1 to-destructive" />
          <div className="absolute start-[30%] top-[30%] size-[15%] rounded-full bg-chart-2" />
          <div className="absolute end-[28%] bottom-[32%] size-[12%] rounded-full bg-primary/20" />
        </div>
      </AspectRatio>
      <div className="p-3">
        <p className="text-sm font-medium">Designali workshop: Figma to Next.js</p>
        <div className="mt-2 flex gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <ClockIcon className="size-3.5" />
            35 min
          </span>
          <span className="flex items-center gap-1">
            <UsersIcon className="size-3.5" />
            4 lessons
          </span>
          <span className="flex items-center gap-1">
            <FlameIcon className="size-3.5" />
            Beginner
          </span>
        </div>
      </div>
    </div>
  )
}
