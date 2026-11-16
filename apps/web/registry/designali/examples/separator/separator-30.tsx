import {
  Sparkle as SparkleIcon,
} from "@designali/icons"

import { Separator } from "@workspace/ui/components/separator"

export default function IconCenteredDivider() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 text-center">
      <p className="text-sm text-muted-foreground italic">
        &ldquo;I design and build digital experiences that look great, feel
        intuitive, and work beautifully.&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <SparkleIcon className="size-4 text-muted-foreground" />
        <Separator className="flex-1" />
      </div>
      <span className="text-xs text-muted-foreground">
        Ali Imam, Founder of Designali
      </span>
    </div>
  )
}
