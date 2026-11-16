import {
  MicOff as MicOffIcon,
} from "@designali/icons"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { cn } from "@workspace/ui/lib/utils"

const people = [
  {
    name: "Ali Imam",
    tone: "from-chart-3 to-chart-5",
    muted: false,
    speaking: true,
  },
  {
    name: "Sara Khan",
    tone: "from-chart-3 to-chart-5",
    muted: true,
    speaking: false,
  },
  {
    name: "Zaid Ahmed",
    tone: "from-chart-3 to-chart-5",
    muted: false,
    speaking: false,
  },
  {
    name: "Designali client",
    tone: "from-foreground to-foreground",
    muted: true,
    speaking: false,
  },
]

export default function VideoCallTiles() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-1.5">
      {people.map((person) => (
        <AspectRatio
          key={person.name}
          ratio={16 / 9}
          className={cn(
            "overflow-hidden bg-linear-to-br",
            person.tone,
            person.speaking && "ring-2 ring-primary"
          )}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Avatar size="lg">
              <AvatarFallback>
                {person.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
          <span className="absolute start-1.5 bottom-1.5 flex items-center gap-1 bg-black/50 px-1.5 py-0.5 text-[10px] text-white">
            {person.muted && <MicOffIcon className="size-3 text-destructive" />}
            {person.name}
          </span>
        </AspectRatio>
      ))}
    </div>
  )
}
