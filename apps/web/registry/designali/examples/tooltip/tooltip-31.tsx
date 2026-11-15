import { HeartIcon, RocketIcon, ThumbsUpIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const reactions = [
  { icon: ThumbsUpIcon, people: ["Ana", "Ben", "Chloe"] },
  { icon: HeartIcon, people: ["Dmitri"] },
  { icon: RocketIcon, people: ["Ana", "Esme", "Farid", "Gus"] },
]

export default function ReactionWhoTooltip() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col gap-2">
        <div className="bg-muted px-3 py-2 text-sm">
          v2.8 is live in all regions.
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
