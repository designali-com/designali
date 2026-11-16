import {
  Star as StarIcon,
} from "@designali/icons"

import { Toggle } from "@workspace/ui/components/toggle"

const sizes = ["sm", "default", "lg"] as const

export default function ToggleSizeScale() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-3">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Toggle size={size} variant="outline" aria-label={"Star, " + size}>
            <StarIcon className="group-aria-pressed/toggle:fill-current" />
            Star
          </Toggle>
          <span className="text-xs text-muted-foreground">{size}</span>
        </div>
      ))}
    </div>
  )
}
