"use client"

import * as React from "react"
import { BellIcon, HashIcon, MailIcon, MessageSquareIcon } from "lucide-react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

const channels = [
  { id: "email", label: "Email", icon: MailIcon },
  { id: "push", label: "Push", icon: BellIcon },
  { id: "sms", label: "SMS", icon: MessageSquareIcon },
  { id: "slack", label: "Team chat", icon: HashIcon },
]

export default function NotificationChannelsMenubar() {
  const [enabled, setEnabled] = React.useState<Record<string, boolean>>({
    email: true,
    push: true,
    sms: false,
    slack: false,
  })
  const active = channels.filter((c) => enabled[c.id]).map((c) => c.label)

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Notifications</MenubarTrigger>
          <MenubarContent className="w-48">
            <MenubarGroup>
              <MenubarLabel inset>Deliver via</MenubarLabel>
              {channels.map((c) => (
                <MenubarCheckboxItem
                  key={c.id}
                  closeOnClick={false}
                  checked={enabled[c.id]}
                  onCheckedChange={(checked) =>
                    setEnabled((s) => ({ ...s, [c.id]: checked }))
                  }
                >
                  <c.icon /> {c.label}
                </MenubarCheckboxItem>
              ))}
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Schedule</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Pause for 1 hour</MenubarItem>
              <MenubarItem>Quiet hours...</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <p className="text-xs text-muted-foreground">
        {active.length
          ? "Sending to " + active.join(", ")
          : "All channels are off"}
      </p>
    </div>
  )
}
