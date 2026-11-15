import { BadgeCheckIcon, ShieldCheckIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

export default function VerifiedNameBadge() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold">Ophelia Brandt</span>
        <Badge className="bg-sky-500 text-white">
          <BadgeCheckIcon data-icon="inline-start" />
          Verified
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold">Cyril Mendez</span>
        <Badge variant="outline">
          <ShieldCheckIcon data-icon="inline-start" />
          Staff
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold">Tilda Rowe</span>
        <Badge variant="secondary" className="size-5 p-0" aria-label="Verified">
          <BadgeCheckIcon />
        </Badge>
      </div>
    </div>
  )
}
