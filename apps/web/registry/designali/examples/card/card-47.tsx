import {
  ListPlus as ListPlusIcon,
  Mic as MicIcon,
  Play as PlayIcon,
} from "@designali/icons"

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
      <div className="flex w-28 shrink-0 items-center justify-center bg-gradient-to-b from-primary to-chart-2 sm:w-36">
        <MicIcon className="size-10 text-white/80" strokeWidth={1.5} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3 py-4">
        <CardHeader>
          <CardDescription>Episode 87 · 42 min</CardDescription>
          <CardTitle className="line-clamp-2">
            Design se code tak: shipping a design system with Next.js
          </CardTitle>
        </CardHeader>
        <CardContent className="line-clamp-2 text-muted-foreground">
          Ali Imam talks design tokens, Figma handoff, and turning Designali
          blocks into production-ready code.
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
