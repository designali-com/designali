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
    category: "Design",
    title: "How I build a brand identity from scratch",
    read: 6,
  },
  {
    category: "Code",
    title: "From Figma to Next.js: design se code tak",
    read: 4,
  },
  {
    category: "Motion",
    title: "Adding CGI and 3D to a product launch",
    read: 8,
  },
  { category: "AI", title: "AI-assisted workflows at Designali", read: 5 },
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
              href="/blogs"
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
