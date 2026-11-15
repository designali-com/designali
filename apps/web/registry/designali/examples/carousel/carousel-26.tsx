import { GiftIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
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

const releases = [
  {
    version: "v3.2",
    date: "Nov 4",
    title: "Saved views",
    body: "Pin your favourite filters and share them with a link.",
  },
  {
    version: "v3.1",
    date: "Oct 18",
    title: "Bulk edit",
    body: "Update status, owner, and due date on many rows at once.",
  },
  {
    version: "v3.0",
    date: "Sep 30",
    title: "New editor",
    body: "Faster typing, slash commands, and inline comments.",
  },
]

export default function ReleaseNotesCarousel() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GiftIcon className="size-4" />
          What&apos;s new
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel>
          <CarouselContent>
            {releases.map((release) => (
              <CarouselItem key={release.version}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Badge>{release.version}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {release.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold">{release.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {release.body}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-4 flex justify-end gap-1">
            <CarouselPrevious className="static translate-none" />
            <CarouselNext className="static translate-none" />
          </div>
        </Carousel>
      </CardContent>
    </Card>
  )
}
