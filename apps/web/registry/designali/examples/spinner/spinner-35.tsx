import {
  Sparkles as SparklesIcon,
  Square as SquareIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

export default function GeneratingResponseCard() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <SparklesIcon className="size-3.5" />
        Draft a friendly reply to the client brief
      </div>
      <p className="text-sm leading-relaxed">
        Hi there, thanks for reaching out to Designali. I&apos;d love to
        design and build your new site, and
      </p>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-xs text-muted-foreground">
          <Spinner className="size-3.5" />
          Generating
        </span>
        <Button variant="outline" size="xs">
          <SquareIcon data-icon="inline-start" className="fill-current" />
          Stop
        </Button>
      </div>
    </div>
  )
}
