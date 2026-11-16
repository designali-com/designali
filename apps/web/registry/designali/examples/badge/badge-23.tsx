import {
  BadgeCheck as BadgeCheckIcon,
  ShieldCheck as ShieldCheckIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"

export default function VerifiedNameBadge() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold">Ali Imam</span>
        <Badge className="bg-primary text-white">
          <BadgeCheckIcon data-icon="inline-start" />
          Verified
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold">Designali Studio</span>
        <Badge variant="outline">
          <ShieldCheckIcon data-icon="inline-start" />
          Staff
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold">designali_com</span>
        <Badge variant="secondary" className="size-5 p-0" aria-label="Verified">
          <BadgeCheckIcon />
        </Badge>
      </div>
    </div>
  )
}
