import {
  Check as CheckIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@workspace/ui/components/avatar"

export default function VerifiedCreatorAvatar() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="lg">
        <AvatarFallback className="bg-primary/10 text-chart-4 dark:bg-primary/10 dark:text-chart-1">
          AI
        </AvatarFallback>
        <AvatarBadge className="bg-primary text-white">
          <CheckIcon />
        </AvatarBadge>
      </Avatar>
      <div>
        <p className="flex items-center gap-1 text-sm font-medium">
          Ali Imam
        </p>
        <p className="text-xs text-muted-foreground">
          Verified creator · Founder of Designali
        </p>
      </div>
    </div>
  )
}
