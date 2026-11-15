"use client"

import * as React from "react"
import { BookmarkIcon, ClockIcon } from "lucide-react"

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
    title: "Charred corn tacos",
    time: "25 min",
    level: "Easy",
    tone: "from-yellow-300 to-orange-500",
  },
  {
    title: "Miso glazed salmon",
    time: "35 min",
    level: "Medium",
    tone: "from-orange-300 to-rose-500",
  },
  {
    title: "Herb lentil salad",
    time: "20 min",
    level: "Easy",
    tone: "from-lime-300 to-emerald-600",
  },
  {
    title: "Slow roasted ragù",
    time: "3 hr",
    level: "Hard",
    tone: "from-red-400 to-red-800",
  },
]

export default function RecipeCardsCarousel() {
  const [saved, setSaved] = React.useState<string[]>(["Herb lentil salad"])

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
                <div
                  className={cn("relative h-28 bg-gradient-to-br", recipe.tone)}
                >
                  <Button
                    size="icon-sm"
                    variant="secondary"
                    aria-label={isSaved ? "Remove from saved" : "Save recipe"}
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
                    <ClockIcon className="size-3" /> {recipe.time}
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
