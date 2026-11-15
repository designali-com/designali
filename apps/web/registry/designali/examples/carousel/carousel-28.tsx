import { CircleCheckIcon, LockIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
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
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const lessons = [
  { title: "Foundations of color", progress: 100 },
  { title: "Building a palette", progress: 100 },
  { title: "Contrast and accessibility", progress: 45 },
  { title: "Color in data viz", progress: 0, locked: true },
  { title: "Theming systems", progress: 0, locked: true },
]

export default function CourseLessonsCarousel() {
  return (
    <Carousel
      opts={{ align: "start", startIndex: 2 }}
      className="w-full max-w-[16rem] sm:max-w-md"
    >
      <CarouselContent>
        {lessons.map((lesson, index) => (
          <CarouselItem key={lesson.title} className="sm:basis-1/2">
            <Card size="sm" className={cn(lesson.locked && "opacity-60")}>
              <CardHeader>
                <CardDescription>Lesson {index + 1}</CardDescription>
                <CardTitle className="flex items-start justify-between gap-2">
                  {lesson.title}
                  {lesson.locked ? (
                    <LockIcon className="size-3.5 shrink-0 text-muted-foreground" />
                  ) : lesson.progress === 100 ? (
                    <CircleCheckIcon className="size-3.5 shrink-0 text-primary" />
                  ) : null}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Progress
                  value={lesson.progress}
                  aria-label={lesson.title + " progress"}
                />
                <Button
                  size="xs"
                  variant={
                    lesson.progress > 0 && lesson.progress < 100
                      ? "default"
                      : "outline"
                  }
                  disabled={lesson.locked}
                >
                  {lesson.progress === 100
                    ? "Review"
                    : lesson.progress > 0
                      ? "Continue"
                      : "Start"}
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
