"use client"

import * as React from "react"
import {
  BellOff as BellOffIcon,
  Calendar as CalendarIcon,
  CheckCheck as CheckCheckIcon,
  GitPullRequest as GitPullRequestIcon,
  MessageSquare as MessageSquareIcon,
  Settings as SettingsIcon,
  X as XIcon,
} from "@designali/icons"

import {
  ContextMenu,
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

const items = [
  {
    id: 1,
    icon: GitPullRequestIcon,
    text: "Ali requested your review on Blocks #1284",
    time: "4m",
  },
  {
    id: 2,
    icon: MessageSquareIcon,
    text: "A client replied in Brand identity feedback",
    time: "1h",
  },
  {
    id: 3,
    icon: CalendarIcon,
    text: "Designali design crit moved to 3:30 PM",
    time: "3h",
  },
]

export default function NotificationItemMenu() {
  const [list, setList] = React.useState(items)
  const [frequency, setFrequency] = React.useState("all")

  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {list.map((n) => (
        <ContextMenu key={n.id}>
          <ContextMenuTrigger className="flex items-start gap-3 px-3 py-2.5 text-xs data-popup-open:bg-muted">
            <n.icon className="mt-0.5 size-4 text-muted-foreground" />
            <span className="flex-1">{n.text}</span>
            <span className="text-muted-foreground">{n.time}</span>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-52">
            <ContextMenuGroup>
              <ContextMenuItem>
                <CheckCheckIcon />
                Mark as read
              </ContextMenuItem>
              <ContextMenuItem>
                <BellOffIcon />
                Mute this thread
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>
                  <SettingsIcon />
                  Notify me about
                </ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-44">
                  <ContextMenuRadioGroup
                    value={frequency}
                    onValueChange={setFrequency}
                  >
                    <ContextMenuRadioItem value="all">
                      All activity
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="mentions">
                      Mentions only
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="none">
                      Nothing
                    </ContextMenuRadioItem>
                  </ContextMenuRadioGroup>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                onClick={() => setList((l) => l.filter((x) => x.id !== n.id))}
              >
                <XIcon />
                Dismiss
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
      {list.length === 0 ? (
        <p className="p-6 text-center text-xs text-muted-foreground">
          You&apos;re all caught up.
        </p>
      ) : null}
    </div>
  )
}
