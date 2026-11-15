import { PlayIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const albums = [
  {
    title: "Low Tide",
    artist: "Harbor Lights",
    tone: "from-cyan-400 to-blue-700",
  },
  {
    title: "Paper Moons",
    artist: "June Avenue",
    tone: "from-pink-300 to-purple-600",
  },
  {
    title: "Static Bloom",
    artist: "Velvet Era",
    tone: "from-lime-300 to-green-700",
  },
  {
    title: "Ember",
    artist: "The Quiet Hours",
    tone: "from-orange-300 to-red-700",
  },
  {
    title: "Northbound",
    artist: "Atlas Choir",
    tone: "from-slate-300 to-slate-700",
  },
  {
    title: "Glasshouse",
    artist: "Mira Sol",
    tone: "from-teal-200 to-teal-600",
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
              <div
                className={cn(
                  "relative aspect-square bg-gradient-to-br",
                  album.tone
                )}
              >
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
