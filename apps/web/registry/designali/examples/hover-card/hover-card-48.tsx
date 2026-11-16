import {
  Ban as BanIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const seats = [
  { id: "4A", state: "free" },
  { id: "4B", state: "taken", note: "Already booked by another passenger." },
  { id: "4C", state: "free" },
  {
    id: "5A",
    state: "blocked",
    note: "Exit row: passengers must be 15 or older.",
  },
  { id: "5B", state: "free" },
  { id: "5C", state: "taken", note: "Already booked by another passenger." },
]

export default function DisabledSeatHoverCard() {
  return (
    <div className="grid w-fit grid-cols-3 gap-2">
      {seats.map((seat) =>
        seat.state === "free" ? (
          <Button key={seat.id} variant="outline" size="icon">
            {seat.id}
          </Button>
        ) : (
          <HoverCard key={seat.id}>
            <HoverCardTrigger
              delay={100}
              render={
                <span className="flex size-8 cursor-not-allowed items-center justify-center bg-muted text-xs text-muted-foreground line-through" />
              }
            >
              {seat.id}
            </HoverCardTrigger>
            <HoverCardContent side="right" className="w-48">
              <p className="flex items-center gap-1.5 font-medium">
                <BanIcon className="size-3.5" />
                Seat {seat.id} unavailable
              </p>
              <p className="text-muted-foreground">{seat.note}</p>
            </HoverCardContent>
          </HoverCard>
        )
      )}
    </div>
  )
}
