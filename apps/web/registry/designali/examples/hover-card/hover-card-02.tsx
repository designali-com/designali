import { Button } from "@workspace/ui/components/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const HOVER_CARD_SIDES = ["left", "top", "bottom", "right"] as const

export function HoverCardSides() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {HOVER_CARD_SIDES.map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger delay={100} closeDelay={100} render={<Button variant="outline" className="capitalize">{side}</Button>} />
          <HoverCardContent side={side}>
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">@designali_com</h4>
              <p>Design se code tak by Ali Imam. This card opens on the {side} side.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}