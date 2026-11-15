import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const slides = [
  { title: "Plan", className: "from-sky-400 to-indigo-600" },
  { title: "Build", className: "from-emerald-400 to-teal-700" },
  { title: "Launch", className: "from-orange-400 to-rose-600" },
]

export default function AspectRatioCarousel() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={slide.title}>
            <AspectRatio
              ratio={16 / 9}
              className={cn("bg-linear-to-br", slide.className)}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="font-mono text-xs opacity-70">
                  0{index + 1}
                </span>
                <span className="text-xl font-semibold">{slide.title}</span>
              </div>
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
