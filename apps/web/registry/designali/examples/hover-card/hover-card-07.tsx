import {
  Globe as GlobeIcon,
} from "@designali/icons"

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
          From Figma to Next.js with Designali
        </HoverCardTrigger>
        <HoverCardContent className="w-72 p-0">
          <div className="h-28 w-full bg-gradient-to-br from-primary via-primary to-primary" />
          <div className="flex flex-col gap-1 p-3">
            <p className="font-medium">From Figma to Next.js with Designali</p>
            <p className="line-clamp-2 text-muted-foreground">
              A practical checklist for turning designs into production-ready
              Designali blocks.
            </p>
            <span className="mt-1 flex items-center gap-1 text-muted-foreground">
              <GlobeIcon className="size-3" />
              engineering.fernhill.dev
            </span>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      before shipping it to designali.com.
    </p>
  )
}
