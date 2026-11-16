import {
  ArrowUpRight as ArrowUpRightIcon,
} from "@designali/icons"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

export default function HoverZoomCard() {
  return (
    <a href="#" className="group block w-full max-w-xs">
      <AspectRatio ratio={4 / 3} className="overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-chart-1 transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute end-3 bottom-3 flex size-8 items-center justify-center bg-background opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRightIcon className="size-4" />
        </div>
      </AspectRatio>
      <p className="mt-2 text-sm font-medium group-hover:underline">
        Dalim Works archive
      </p>
      <p className="text-xs text-muted-foreground">24 case studies</p>
    </a>
  )
}
