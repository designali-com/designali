import {
  Plus as PlusIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const stories = [
  { name: "You", add: true },
  { name: "Ali Imam", unseen: true },
  { name: "Designali", unseen: true },
  { name: "Templates" },
  { name: "Blocks", unseen: true },
  { name: "Icons" },
  { name: "Logos" },
  { name: "Motion", unseen: true },
  { name: "CGI 3D" },
]

export default function StoriesAvatarRail() {
  return (
    <Carousel
      opts={{ dragFree: true, align: "start" }}
      className="w-full max-w-sm"
    >
      <CarouselContent className="-ms-3">
        {stories.map((story) => (
          <CarouselItem key={story.name} className="basis-auto ps-3">
            <button
              type="button"
              className="flex w-16 flex-col items-center gap-1.5"
            >
              <span
                className={cn(
                  "relative rounded-full p-0.5",
                  story.unseen
                    ? "bg-gradient-to-tr from-primary to-primary"
                    : "bg-border"
                )}
              >
                <Avatar size="lg" className="ring-2 ring-background">
                  {story.name === "Ali Imam" ? (
              <AvatarImage src="/ali.jpg" alt="Ali Imam" />
            ) : null}
            <AvatarFallback>
                    {story.add ? (
                      <PlusIcon className="size-4" />
                    ) : (
                      story.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")
                    )}
                  </AvatarFallback>
                </Avatar>
              </span>
              <span className="w-full truncate text-center text-[11px] text-muted-foreground">
                {story.add ? "Add story" : story.name.split(" ")[0]}
              </span>
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
