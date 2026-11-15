import { BadgeCheckIcon, StarIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const reviews = [
  {
    name: "Kara M.",
    rating: 5,
    title: "Worth every penny",
    body: "Comfortable from day one and the battery easily lasts a week.",
  },
  {
    name: "Devin L.",
    rating: 4,
    title: "Great, minor quirks",
    body: "Sound is excellent. The case is a little bulky for small pockets.",
  },
  {
    name: "Ruth A.",
    rating: 5,
    title: "My daily driver",
    body: "Pairs instantly with my laptop and phone. No more fiddling.",
  },
  {
    name: "Sam P.",
    rating: 3,
    title: "Good but pricey",
    body: "Solid build. I wish the app had more equalizer presets.",
  },
]

export default function ProductReviewsCarousel() {
  return (
    <div className="w-full max-w-[15rem] sm:max-w-md">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-2xl font-semibold">4.3</span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              className={cn(
                "size-4",
                i < 4 ? "fill-current" : "text-muted-foreground"
              )}
            />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">218 reviews</span>
      </div>
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.name} className="sm:basis-1/2">
              <Card size="sm" className="h-full">
                <CardHeader>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        className={cn(
                          "size-3",
                          i < review.rating
                            ? "fill-current"
                            : "text-muted-foreground/40"
                        )}
                      />
                    ))}
                  </div>
                  <CardTitle>{review.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <p className="text-xs text-muted-foreground">{review.body}</p>
                  <span className="flex items-center gap-1 text-[11px]">
                    {review.name}
                    <BadgeCheckIcon className="size-3 text-primary" />
                    Verified
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
