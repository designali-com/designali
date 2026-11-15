import { UsersIcon } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const spaces = [
  { name: "Studio loft", seats: 8 },
  { name: "Quiet room", seats: 2 },
  { name: "Board room", seats: 14 },
  { name: "Phone booth", seats: 1 },
  { name: "Workshop", seats: 20 },
  { name: "Lounge", seats: 10 },
]

export default function EdgeFadeOverlayControls() {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-md">
      <CarouselContent className="-ms-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {spaces.map((space) => (
          <CarouselItem
            key={space.name}
            className="basis-1/2 ps-2 sm:basis-1/3"
          >
            <div className="flex aspect-[3/4] flex-col justify-end gap-0.5 bg-muted p-3">
              <span className="text-sm font-medium">{space.name}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <UsersIcon className="size-3" />
                {space.seats} seats
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant="secondary"
        size="icon"
        className="start-2 rounded-full shadow-sm"
      />
      <CarouselNext
        variant="secondary"
        size="icon"
        className="end-2 rounded-full shadow-sm"
      />
    </Carousel>
  )
}
