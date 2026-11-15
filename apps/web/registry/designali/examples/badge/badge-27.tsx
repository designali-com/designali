import { GemIcon, UsersIcon, ZapIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"

export default function PlanTierBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge variant="outline">Free</Badge>
      <Badge>
        <ZapIcon data-icon="inline-start" />
        Pro
      </Badge>
      <Badge className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white">
        <UsersIcon data-icon="inline-start" />
        Team
      </Badge>
      <Badge className="bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-white">
        <GemIcon data-icon="inline-start" />
        Enterprise
      </Badge>
    </div>
  )
}
