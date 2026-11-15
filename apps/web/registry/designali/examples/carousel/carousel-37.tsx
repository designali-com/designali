import { Badge } from "@workspace/ui/components/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const articles = [
  {
    category: "Climate",
    title: "Coastal towns test floating flood barriers",
    read: 6,
  },
  {
    category: "Tech",
    title: "Why small models are winning on-device",
    read: 4,
  },
  {
    category: "Culture",
    title: "The quiet return of the neighborhood cinema",
    read: 8,
  },
  { category: "Science", title: "A new map of the deep ocean floor", read: 5 },
]

export default function NewsHeadlinesCarousel() {
  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full max-w-[15rem] sm:max-w-md"
    >
      <CarouselContent>
        {articles.map((article) => (
          <CarouselItem key={article.title} className="sm:basis-1/2">
            <a
              href="#"
              className="flex h-full flex-col gap-2 border p-4 transition-colors hover:bg-muted/50"
            >
              <Badge variant="secondary">{article.category}</Badge>
              <span className="text-sm leading-snug font-semibold">
                {article.title}
              </span>
              <span className="mt-auto text-xs text-muted-foreground">
                {article.read} min read
              </span>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
