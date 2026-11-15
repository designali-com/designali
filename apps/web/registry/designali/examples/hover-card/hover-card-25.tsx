import { TimerIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const presets = [
  { label: "Instant", delay: 0, closeDelay: 0 },
  { label: "Standard", delay: 600, closeDelay: 300 },
  { label: "Deliberate", delay: 1200, closeDelay: 600 },
]

export default function DelayPresetsHoverCard() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {presets.map((p) => (
        <HoverCard key={p.label}>
          <HoverCardTrigger
            delay={p.delay}
            closeDelay={p.closeDelay}
            render={<Button variant="secondary" />}
          >
            <TimerIcon data-icon="inline-start" />
            {p.label}
          </HoverCardTrigger>
          <HoverCardContent className="w-52">
            <p className="font-medium">{p.label}</p>
            <p className="text-muted-foreground">
              Opens after {p.delay}ms, closes after {p.closeDelay}ms.
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
