import {
  Gem as GemIcon,
  Users as UsersIcon,
  Zap as ZapIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"

export default function PlanTierBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge variant="outline">Free</Badge>
      <Badge>
        <ZapIcon data-icon="inline-start" />
        Pro
      </Badge>
      <Badge className="bg-gradient-to-r from-primary to-chart-2 text-white">
        <UsersIcon data-icon="inline-start" />
        Team
      </Badge>
      <Badge className="bg-gradient-to-r from-primary via-primary to-primary text-white">
        <GemIcon data-icon="inline-start" />
        Enterprise
      </Badge>
    </div>
  )
}
