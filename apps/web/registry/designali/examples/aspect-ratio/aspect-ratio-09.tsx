import { MapPinIcon, NavigationIcon } from "lucide-react"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Button } from "@workspace/ui/components/button"

export default function MapEmbedPlaceholder() {
  return (
    <div className="w-full max-w-sm border">
      <AspectRatio ratio={4 / 3} className="overflow-hidden bg-muted">
        <svg
          viewBox="0 0 400 300"
          className="absolute inset-0 size-full text-border"
          aria-hidden="true"
        >
          <rect
            x="40"
            y="30"
            width="90"
            height="70"
            className="fill-emerald-500/15"
          />
          <rect
            x="250"
            y="180"
            width="120"
            height="90"
            className="fill-sky-500/15"
          />
          <g stroke="currentColor" strokeWidth="10" fill="none">
            <path d="M0 140 H400" />
            <path d="M190 0 V300" />
            <path d="M0 260 L400 40" strokeWidth="6" />
          </g>
          <g stroke="currentColor" strokeWidth="3" fill="none" opacity="0.7">
            <path d="M0 70 H400" />
            <path d="M0 210 H400" />
            <path d="M90 0 V300" />
            <path d="M300 0 V300" />
          </g>
        </svg>
        <div className="absolute start-1/2 top-[46%] flex -translate-x-1/2 -translate-y-full flex-col items-center rtl:translate-x-1/2">
          <MapPinIcon className="size-8 fill-primary text-primary-foreground" />
        </div>
      </AspectRatio>
      <div className="flex items-center justify-between gap-2 p-3">
        <div>
          <p className="text-sm font-medium">Fern & Ember Coffee</p>
          <p className="text-xs text-muted-foreground">
            218 Alder Street - 0.4 mi
          </p>
        </div>
        <Button size="sm" variant="outline">
          <NavigationIcon data-icon="inline-start" />
          Directions
        </Button>
      </div>
    </div>
  )
}
