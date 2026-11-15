"use client"

import * as React from "react"
import { BellIcon, BellOffIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function NotificationPreferencesMenu() {
  const [muted, setMuted] = React.useState(false)
  const [prefs, setPrefs] = React.useState({
    mentions: true,
    comments: true,
    updates: false,
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        {muted ? (
          <BellOffIcon data-icon="inline-start" />
        ) : (
          <BellIcon data-icon="inline-start" />
        )}
        Notifications
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Notify me about</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={prefs.mentions}
            disabled={muted}
            onCheckedChange={(checked) =>
              setPrefs({ ...prefs, mentions: checked })
            }
          >
            Mentions
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={prefs.comments}
            disabled={muted}
            onCheckedChange={(checked) =>
              setPrefs({ ...prefs, comments: checked })
            }
          >
            Replies to my comments
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={prefs.updates}
            disabled={muted}
            onCheckedChange={(checked) =>
              setPrefs({ ...prefs, updates: checked })
            }
          >
            Product updates
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={muted} onCheckedChange={setMuted}>
          Mute all for 8 hours
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
