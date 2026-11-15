import { ListPlusIcon, MicIcon, PlayIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function HorizontalPodcastCard() {
  return (
    <Card className="w-full max-w-md flex-row gap-0 py-0">
      <div className="flex w-28 shrink-0 items-center justify-center bg-gradient-to-b from-orange-400 to-rose-600 sm:w-36">
        <MicIcon className="size-10 text-white/80" strokeWidth={1.5} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3 py-4">
        <CardHeader>
          <CardDescription>Episode 87 · 42 min</CardDescription>
          <CardTitle className="line-clamp-2">
            Designing for the second time a user opens your app
          </CardTitle>
        </CardHeader>
        <CardContent className="line-clamp-2 text-muted-foreground">
          Adaeze and Tom talk retention loops, empty states that teach, and why
          the first week matters more than the first minute.
        </CardContent>
        <div className="flex items-center gap-2 px-(--card-spacing)">
          <Button size="sm">
            <PlayIcon data-icon="inline-start" />
            Play
          </Button>
          <Button size="icon-sm" variant="ghost" aria-label="Add to queue">
            <ListPlusIcon />
          </Button>
        </div>
      </div>
    </Card>
  )
}
