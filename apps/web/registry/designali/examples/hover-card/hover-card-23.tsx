import { Button } from "@workspace/ui/components/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const aligns = ["start", "center", "end"] as const

export default function AlignmentOptionsHoverCard() {
  return (
    <div className="flex flex-col items-center gap-2">
      {aligns.map((align) => (
        <HoverCard key={align}>
          <HoverCardTrigger
            render={<Button variant="outline" className="w-48 capitalize" />}
          >
            Align {align}
          </HoverCardTrigger>
          <HoverCardContent side="right" align={align} className="w-44">
            <p className="font-medium">Designali Blocks</p>
            <p className="text-muted-foreground">
              460+ blocks, aligned to the {align} edge of the trigger.
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
