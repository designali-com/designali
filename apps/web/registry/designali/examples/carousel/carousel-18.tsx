"use client"

import * as React from "react"
import {
  Bookmark as BookmarkIcon,
  Code as CodeIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardDescription,
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

const recipes = [
  {
    title: "Portfolio Simple",
    time: "Next.js",
    level: "Free",
    src: "/images/templates/portfolio-simple.jpg",
  },
  {
    title: "Design Agency",
    time: "Next.js",
    level: "Pro",
    src: "/images/templates/design-agency.jpg",
  },
  {
    title: "AI Startup",
    time: "Next.js",
    level: "Pro",
    src: "/images/templates/ai.jpg",
  },
  {
    title: "Resort",
    time: "Next.js",
    level: "Pro",
    src: "/images/templates/resort.jpg",
  },
]

export default function RecipeCardsCarousel() {
  const [saved, setSaved] = React.useState<string[]>(["AI Startup"])

  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full max-w-[16rem] sm:max-w-md"
    >
      <CarouselContent>
        {recipes.map((recipe) => {
          const isSaved = saved.includes(recipe.title)
          return (
            <CarouselItem key={recipe.title} className="sm:basis-1/2">
              <Card className="pt-0">
                <div className="relative h-28 overflow-hidden bg-muted">
                  <img
                    src={recipe.src}
                    alt={recipe.title + " template"}
                    className="absolute inset-0 size-full object-cover"
                  />
                  <Button
                    size="icon-sm"
                    variant="secondary"
                    aria-label={isSaved ? "Remove from saved" : "Save template"}
                    className="absolute end-2 top-2"
                    onClick={() =>
                      setSaved((list) =>
                        isSaved
                          ? list.filter((t) => t !== recipe.title)
                          : [...list, recipe.title]
                      )
                    }
                  >
                    <BookmarkIcon className={cn(isSaved && "fill-current")} />
                  </Button>
                </div>
                <CardHeader>
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <CodeIcon className="size-3" /> {recipe.time}
                    <Badge variant="outline">{recipe.level}</Badge>
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
