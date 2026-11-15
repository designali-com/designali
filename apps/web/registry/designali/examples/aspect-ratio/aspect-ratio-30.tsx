import { ClockIcon, FlameIcon, UsersIcon } from "lucide-react"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function RecipeCardCover() {
  return (
    <div className="w-full max-w-xs border">
      <AspectRatio
        ratio={4 / 3}
        className="overflow-hidden bg-linear-to-br from-lime-200 to-green-400 dark:from-lime-800 dark:to-green-900"
      >
        <div className="absolute start-1/2 top-1/2 size-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-xl rtl:translate-x-1/2 dark:bg-zinc-200">
          <div className="absolute inset-[18%] rounded-full bg-linear-to-br from-orange-300 to-red-400" />
          <div className="absolute start-[30%] top-[30%] size-[15%] rounded-full bg-green-600" />
          <div className="absolute end-[28%] bottom-[32%] size-[12%] rounded-full bg-yellow-200" />
        </div>
      </AspectRatio>
      <div className="p-3">
        <p className="text-sm font-medium">Roasted tomato & basil soup</p>
        <div className="mt-2 flex gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <ClockIcon className="size-3.5" />
            35 min
          </span>
          <span className="flex items-center gap-1">
            <UsersIcon className="size-3.5" />
            Serves 4
          </span>
          <span className="flex items-center gap-1">
            <FlameIcon className="size-3.5" />
            Easy
          </span>
        </div>
      </div>
    </div>
  )
}
