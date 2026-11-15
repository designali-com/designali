import { VideoIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const durations = ["15", "30", "45", "60"]

export default function MeetingDurationTiles() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>EK</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Intro call with Elena Kovac</p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <VideoIcon className="size-3" />
            Video meeting
          </p>
        </div>
      </div>
      <RadioGroup
        defaultValue="30"
        aria-label="Duration"
        className="grid grid-cols-4 gap-2"
      >
        {durations.map((d) => (
          <label
            key={d}
            htmlFor={"dur-" + d}
            className="flex h-14 cursor-pointer flex-col items-center justify-center border has-focus-visible:ring-2 has-focus-visible:ring-ring/50 has-data-checked:border-primary has-data-checked:bg-primary/5"
          >
            <RadioGroupItem value={d} id={"dur-" + d} className="sr-only" />
            <span className="text-base font-semibold">{d}</span>
            <span className="text-[11px] text-muted-foreground">min</span>
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}
