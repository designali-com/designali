import {
  Play as PlayIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const albums = [
  {
    title: "Dalim Works",
    artist: "Showreel",
    src: "/images/templates/dalim-works-old.jpg",
  },
  {
    title: "Dalim Visuals",
    artist: "CGI & 3D",
    src: "/images/templates/dalim-visuals-old.jpg",
  },
  {
    title: "Dalim Graphic",
    artist: "Brand identity",
    src: "/images/templates/dalim-graphic-old.jpg",
  },
  {
    title: "Dalim Agency",
    artist: "Motion design",
    src: "/images/templates/dalim-agency-old.jpg",
  },
  {
    title: "Dalim UI",
    artist: "UI/UX design",
    src: "/images/templates/dalim-ui-old.jpg",
  },
  {
    title: "Ali Imam",
    artist: "Portfolio",
    src: "/images/templates/aliimam-old.jpg",
  },
]

export default function AlbumCoversCarousel() {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="w-full max-w-[14rem] sm:max-w-md"
    >
      <CarouselContent className="-ms-3">
        {albums.map((album) => (
          <CarouselItem
            key={album.title}
            className="basis-1/2 ps-3 sm:basis-1/3"
          >
            <div className="group/album flex flex-col gap-1.5">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={album.src}
                  alt={album.title + " project"}
                  className="absolute inset-0 size-full object-cover"
                />
                <Button
                  size="icon"
                  aria-label={"Play " + album.title}
                  className="absolute end-2 bottom-2 translate-y-1 opacity-0 transition-all group-hover/album:translate-y-0 group-hover/album:opacity-100"
                >
                  <PlayIcon className="fill-current" />
                </Button>
              </div>
              <span className="truncate text-xs font-medium">
                {album.title}
              </span>
              <span className="truncate text-[11px] text-muted-foreground">
                {album.artist}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
