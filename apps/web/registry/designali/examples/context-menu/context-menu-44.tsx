"use client"

import * as React from "react"
import {
  Bell as BellIcon,
  BellOff as BellOffIcon,
  CheckCheck as CheckCheckIcon,
  Hash as HashIcon,
  LogOut as LogOutIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

const initialChannels = [
  { name: "studio", unread: 4, muted: false, level: "all" },
  { name: "design-crit", unread: 0, muted: false, level: "mentions" },
  { name: "templates", unread: 12, muted: true, level: "none" },
]

export default function ChatChannelMenu() {
  const [channels, setChannels] = React.useState(initialChannels)
  const patch = (
    name: string,
    changes: Partial<(typeof initialChannels)[number]>
  ) =>
    setChannels((list) =>
      list.map((c) => (c.name === name ? { ...c, ...changes } : c))
    )

  return (
    <div className="flex w-full max-w-56 flex-col gap-0.5 border p-2">
      <span className="px-2 pb-1 text-[11px] font-medium text-muted-foreground">
        Channels
      </span>
      {channels.map((channel) => (
        <ContextMenu key={channel.name}>
          <ContextMenuTrigger
            className={cn(
              "flex items-center gap-2 px-2 py-1.5 text-xs hover:bg-muted data-popup-open:bg-muted",
              channel.muted && "text-muted-foreground"
            )}
          >
            <HashIcon className="size-3.5" />
            <span
              className={cn(
                "flex-1",
                channel.unread > 0 && !channel.muted && "font-semibold"
              )}
            >
              {channel.name}
            </span>
            {channel.muted ? <BellOffIcon className="size-3" /> : null}
            {channel.unread > 0 && !channel.muted ? (
              <Badge className="h-4 px-1.5">{channel.unread}</Badge>
            ) : null}
          </ContextMenuTrigger>
          <ContextMenuContent className="w-52">
            <ContextMenuGroup>
              <ContextMenuItem
                onClick={() => patch(channel.name, { unread: 0 })}
              >
                <CheckCheckIcon />
                Mark as read
              </ContextMenuItem>
              <ContextMenuCheckboxItem
                checked={channel.muted}
                onCheckedChange={(muted) => patch(channel.name, { muted })}
              >
                Mute channel
              </ContextMenuCheckboxItem>
            </ContextMenuGroup>
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <BellIcon />
                Notifications
              </ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-44">
                <ContextMenuRadioGroup
                  value={channel.level}
                  onValueChange={(level) => patch(channel.name, { level })}
                >
                  <ContextMenuRadioItem value="all">
                    Every message
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="mentions">
                    @mentions only
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="none">
                    Nothing
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                variant="destructive"
                onClick={() =>
                  setChannels((l) => l.filter((c) => c.name !== channel.name))
                }
              >
                <LogOutIcon />
                Leave #{channel.name}
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}
