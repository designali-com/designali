import { BellOffIcon, CheckCheckIcon, PinIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Switch } from "@workspace/ui/components/switch"

const options = [
  { id: "mute", label: "Mute conversation", icon: BellOffIcon, on: false },
  { id: "pin", label: "Pin to top", icon: PinIcon, on: true },
  {
    id: "receipts",
    label: "Send read receipts",
    icon: CheckCheckIcon,
    on: true,
  },
]

export default function ChatConversationOptions() {
  return (
    <div className="w-full max-w-xs border">
      <div className="flex items-center gap-3 border-b p-4">
        <Avatar>
          <AvatarFallback>DS</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Design Squad</p>
          <p className="text-xs text-muted-foreground">8 members</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-2">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex cursor-pointer items-center gap-3 px-2 py-2 hover:bg-muted/50"
          >
            <option.icon className="size-4 text-muted-foreground" />
            <span className="flex-1 text-sm">{option.label}</span>
            <Switch size="sm" defaultChecked={option.on} />
          </label>
        ))}
      </div>
    </div>
  )
}
