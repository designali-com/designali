import {
  Users as UsersIcon,
} from "@designali/icons"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const spaces = [
  { name: "Brand identity", seats: 8, src: "/img/ask/ask1.jpg" },
  { name: "UI/UX design", seats: 2, src: "/img/ask/ask2.jpg" },
  { name: "Web development", seats: 14, src: "/img/ask/ask3.jpg" },
  { name: "Design systems", seats: 1, src: "/img/ask/ask4.jpg" },
  { name: "CGI/3D & motion", seats: 20, src: "/img/ask/ask5.jpg" },
  { name: "AI workflows", seats: 10, src: "/img/ask/ask6.jpg" },
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
            <div className="relative flex aspect-[3/4] flex-col justify-end gap-0.5 overflow-hidden bg-muted p-3">
              <img
                src={space.src}
                alt={space.name + " by Designali"}
                className="absolute inset-0 size-full object-cover opacity-40"
              />
              <span className="relative text-sm font-medium">{space.name}</span>
              <span className="relative flex items-center gap-1 text-xs text-muted-foreground">
                <UsersIcon className="size-3" />
                {space.seats} clients
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
