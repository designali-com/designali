import { UserIcon, UserXIcon, VenetianMaskIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"

const variants = [
  { label: "Guest", icon: UserIcon },
  { label: "Deleted user", icon: UserXIcon },
  { label: "Anonymous", icon: VenetianMaskIcon },
]

export default function GuestIconFallback() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {variants.map((variant) => (
        <div key={variant.label} className="flex flex-col items-center gap-2">
          <Avatar size="lg">
            <AvatarFallback>
              <variant.icon className="size-5" />
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">{variant.label}</span>
        </div>
      ))}
    </div>
  )
}
