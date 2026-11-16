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
        <AvatarFallback className="bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
          AI
        </AvatarFallback>
        <AvatarBadge className="bg-sky-500 text-white">
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
