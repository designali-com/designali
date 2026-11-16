import {
  Heart as HeartIcon,
  Rocket as RocketIcon,
  ThumbsUp as ThumbsUpIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const reactions = [
  { icon: ThumbsUpIcon, people: ["Ali", "Designer", "Developer"] },
  { icon: HeartIcon, people: ["Client"] },
  { icon: RocketIcon, people: ["Ali", "Designer", "Developer", "Client"] },
]

export default function ReactionWhoTooltip() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col gap-2">
        <div className="bg-muted px-3 py-2 text-sm">
          Designali v2.8 is live: 460+ blocks.
        </div>
        <div className="flex gap-1">
          {reactions.map((r, i) => (
            <Tooltip key={i}>
              <TooltipTrigger
                render={
                  <Button
                    variant="outline"
                    size="xs"
                    className="rounded-full"
                  />
                }
              >
                <r.icon data-icon="inline-start" />
                {r.people.length}
              </TooltipTrigger>
              <TooltipContent>Reacted by {r.people.join(", ")}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  )
}
