import {
  Heart as HeartIcon,
} from "@designali/icons"

import { Toggle } from "@workspace/ui/components/toggle"

export default function WishlistProductToggle() {
  return (
    <div className="w-full max-w-[240px] border">
      <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-primary dark:from-chart-4 dark:to-chart-5">
        <Toggle
          size="sm"
          aria-label="Add to wishlist"
          className="absolute end-2 top-2 bg-background/80 backdrop-blur hover:bg-background aria-pressed:bg-background aria-pressed:text-primary"
        >
          <HeartIcon className="group-aria-pressed/toggle:fill-current" />
        </Toggle>
      </div>
      <div className="p-3">
        <p className="text-sm font-medium">Merino crew sweater</p>
        <p className="text-sm text-muted-foreground">$89.00</p>
      </div>
    </div>
  )
}
