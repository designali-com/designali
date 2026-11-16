import {
  Mic as MicIcon,
  MicOff as MicOffIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { cn } from "@workspace/ui/lib/utils"

const participants = [
  { name: "Ali Imam", initials: "AI", muted: false, speaking: true },
  { name: "Sara", initials: "SA", muted: true, speaking: false },
  { name: "Client", initials: "CL", muted: false, speaking: false },
  { name: "You", initials: "ME", muted: true, speaking: false },
]

export default function VideoCallParticipants() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-2">
      {participants.map((person) => (
        <div
          key={person.name}
          className={cn(
            "relative flex aspect-video items-center justify-center bg-muted",
            person.speaking && "ring-2 ring-emerald-500"
          )}
        >
          <Avatar className="size-14">
            <AvatarFallback className="bg-background text-lg">
              {person.initials}
            </AvatarFallback>
          </Avatar>
          <div className="absolute start-2 bottom-2 flex items-center gap-1 bg-background/80 px-1.5 py-0.5 text-[11px]">
            {person.muted ? (
              <MicOffIcon className="size-3 text-destructive" />
            ) : (
              <MicIcon className="size-3" />
            )}
            {person.name}
          </div>
        </div>
      ))}
    </div>
  )
}
