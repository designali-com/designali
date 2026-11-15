import { GlobeIcon } from "lucide-react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

export default function LinkPreviewHoverCard() {
  return (
    <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
      For the rollout plan, follow the guide in{" "}
      <HoverCard>
        <HoverCardTrigger
          href="#"
          className="text-foreground underline underline-offset-4"
        >
          Shipping feature flags safely
        </HoverCardTrigger>
        <HoverCardContent className="w-72 p-0">
          <div className="h-28 w-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-400" />
          <div className="flex flex-col gap-1 p-3">
            <p className="font-medium">Shipping feature flags safely</p>
            <p className="line-clamp-2 text-muted-foreground">
              A practical checklist for gradual rollouts, kill switches, and
              cleaning up stale flags.
            </p>
            <span className="mt-1 flex items-center gap-1 text-muted-foreground">
              <GlobeIcon className="size-3" />
              engineering.fernhill.dev
            </span>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      before enabling it for everyone.
    </p>
  )
}
