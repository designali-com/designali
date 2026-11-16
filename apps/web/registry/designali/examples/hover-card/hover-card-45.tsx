import {
  Plane as PlaneIcon,
  PlaneTakeoff as PlaneTakeoffIcon,
} from "@designali/icons"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { Separator } from "@workspace/ui/components/separator"

const flights = [
  {
    code: "SK 1421",
    from: "CPH",
    to: "AMS",
    dep: "07:35",
    arr: "09:05",
    gate: "B14",
    seat: "12A",
  },
  {
    code: "SK 2877",
    from: "AMS",
    to: "LIS",
    dep: "10:40",
    arr: "12:30",
    gate: "D7",
    seat: "8C",
  },
]

export default function FlightSegmentHoverCard() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      {flights.map((f) => (
        <div
          key={f.code}
          className="flex items-center justify-between border px-3 py-2 text-sm"
        >
          <span className="flex items-center gap-2">
            <PlaneIcon className="size-4 text-muted-foreground" />
            {f.from} → {f.to}
          </span>
          <HoverCard>
            <HoverCardTrigger
              href="#"
              className="font-sans text-xs hover:underline"
            >
              {f.code}
            </HoverCardTrigger>
            <HoverCardContent align="end" className="w-60">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{f.dep}</p>
                  <p className="text-muted-foreground">{f.from}</p>
                </div>
                <PlaneTakeoffIcon className="size-4 text-muted-foreground" />
                <div className="text-right">
                  <p className="text-lg font-semibold">{f.arr}</p>
                  <p className="text-muted-foreground">{f.to}</p>
                </div>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between">
                <span>Gate {f.gate}</span>
                <span>Seat {f.seat}</span>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
    </div>
  )
}
