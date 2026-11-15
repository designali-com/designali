"use client"

import * as React from "react"
import { PlayCircleIcon } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

const chapters = [
  { title: "Introduction", time: "0:00" },
  { title: "Setting up the project", time: "2:14" },
  { title: "Writing the first query", time: "7:40" },
  { title: "Handling errors", time: "13:05" },
  { title: "Deploying", time: "18:22" },
]

export default function VideoChapterJump() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <NativeSelect
        aria-label="Jump to chapter"
        value={String(selected)}
        onChange={(e) => api?.scrollTo(Number(e.target.value))}
        className="w-full"
      >
        {chapters.map((chapter, index) => (
          <NativeSelectOption key={chapter.title} value={String(index)}>
            {chapter.time} · {chapter.title}
          </NativeSelectOption>
        ))}
      </NativeSelect>
      <Carousel setApi={handleApi}>
        <CarouselContent>
          {chapters.map((chapter, index) => (
            <CarouselItem key={chapter.title}>
              <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-muted to-muted-foreground/30">
                <PlayCircleIcon className="size-10 text-foreground/70" />
                <span className="absolute start-2 bottom-2 bg-background/80 px-1.5 py-0.5 font-mono text-[11px]">
                  {chapter.time}
                </span>
                <span className="absolute end-2 top-2 text-[11px] text-foreground/70">
                  Chapter {index + 1}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
