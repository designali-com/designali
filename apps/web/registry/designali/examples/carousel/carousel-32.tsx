import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

const tips = [
  {
    title: "Quick search",
    body: "Open search from anywhere to jump to any record.",
  },
  { title: "Command menu", body: "Run actions without leaving the keyboard." },
  {
    title: "Inline editing",
    body: "Press Enter on any cell to start editing.",
  },
  {
    title: "Undo everything",
    body: "Every change in a session can be reverted.",
  },
]

export default function KeyboardHintCarousel() {
  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <Carousel
        tabIndex={0}
        aria-label="Product tips"
        className="w-full outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
      >
        <CarouselContent>
          {tips.map((tip) => (
            <CarouselItem key={tip.title}>
              <div className="flex h-32 flex-col justify-center gap-1 border bg-muted/30 p-4">
                <span className="text-sm font-semibold">{tip.title}</span>
                <span className="text-xs text-muted-foreground">
                  {tip.body}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        Focus and use
        <KbdGroup>
          <Kbd>←</Kbd>
          <Kbd>→</Kbd>
        </KbdGroup>
        to browse
      </p>
    </div>
  )
}
