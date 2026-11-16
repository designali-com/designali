import {
  ArrowRight as ArrowRightIcon,
} from "@designali/icons"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

export default function PromoBannerUltrawide() {
  return (
    <AspectRatio
      ratio={21 / 9}
      className="w-full max-w-lg overflow-hidden bg-linear-to-r from-chart-2 to-primary"
    >
      <div className="absolute -end-10 -top-10 size-40 rounded-full border-[24px] border-white/10" />
      <div className="absolute end-16 -bottom-12 size-28 rounded-full bg-white/10" />
      <div className="absolute inset-0 flex flex-col items-start justify-center gap-2 p-5 text-white">
        <Badge variant="secondary">Designali sale</Badge>
        <p className="max-w-[60%] text-lg leading-tight font-semibold sm:text-xl">
          30% off Designali templates
        </p>
        <Button size="sm" variant="secondary">
          Claim offer
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </div>
    </AspectRatio>
  )
}
