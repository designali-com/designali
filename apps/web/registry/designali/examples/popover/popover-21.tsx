"use client"

import * as React from "react"
import {
  BellRing as BellRingIcon,
  Hash as HashIcon,
  Mail as MailIcon,
  Smartphone as SmartphoneIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Switch } from "@workspace/ui/components/switch"

const channels = [
  {
    id: "email",
    label: "Email",
    description: "Daily digest at 9 AM",
    icon: MailIcon,
  },
  {
    id: "push",
    label: "Push",
    description: "Mentions and replies",
    icon: SmartphoneIcon,
  },
  {
    id: "slack",
    label: "Chat app",
    description: "Alerts in #designali-alerts",
    icon: HashIcon,
  },
]

export default function NotificationSettingsPopover() {
  const [enabled, setEnabled] = React.useState<Record<string, boolean>>({
    email: true,
    push: true,
    slack: false,
  })

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <BellRingIcon data-icon="inline-start" />
        Alerts
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <PopoverHeader>
          <PopoverTitle>Notify me via</PopoverTitle>
          <PopoverDescription>
            Changes apply to this project only.
          </PopoverDescription>
        </PopoverHeader>
        <div className="flex flex-col gap-3">
          {channels.map((channel) => (
            <div key={channel.id} className="flex items-center gap-2.5">
              <channel.icon className="size-4 text-muted-foreground" />
              <div className="flex flex-1 flex-col">
                <Label htmlFor={"notify-" + channel.id}>{channel.label}</Label>
                <span className="text-[11px] text-muted-foreground">
                  {channel.description}
                </span>
              </div>
              <Switch
                id={"notify-" + channel.id}
                checked={enabled[channel.id]}
                onCheckedChange={(checked) =>
                  setEnabled((prev) => ({ ...prev, [channel.id]: checked }))
                }
              />
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
