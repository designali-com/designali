import { CheckIcon } from "lucide-react"

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
          PV
        </AvatarFallback>
        <AvatarBadge className="bg-sky-500 text-white">
          <CheckIcon />
        </AvatarBadge>
      </Avatar>
      <div>
        <p className="flex items-center gap-1 text-sm font-medium">
          Pablo Vega
        </p>
        <p className="text-xs text-muted-foreground">
          Verified creator · 84k subscribers
        </p>
      </div>
    </div>
  )
}
