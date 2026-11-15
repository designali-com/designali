"use client"

import * as React from "react"
import {
  MailIcon,
  MessageCircleIcon,
  PhoneIcon,
  StarIcon,
  UserXIcon,
  VideoIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

export default function ContactCardMenu() {
  const [favorite, setFavorite] = React.useState(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-full max-w-xs items-center gap-3 border p-3 data-popup-open:bg-muted/50">
        <Avatar className="size-10">
          <AvatarFallback>NH</AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-col text-xs">
          <span className="flex items-center gap-1 font-medium">
            Noor Haddad
            {favorite ? (
              <StarIcon className="size-3 fill-amber-400 text-amber-400" />
            ) : null}
          </span>
          <span className="text-muted-foreground">
            Customer Success · Lisbon
          </span>
          <span className="text-muted-foreground">+351 912 345 678</span>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            <PhoneIcon />
            Call
          </ContextMenuItem>
          <ContextMenuItem>
            <MessageCircleIcon />
            Send message
          </ContextMenuItem>
          <ContextMenuItem>
            <VideoIcon />
            Start video call
          </ContextMenuItem>
          <ContextMenuItem>
            <MailIcon />
            Email
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuCheckboxItem
            checked={favorite}
            onCheckedChange={setFavorite}
          >
            Favorite
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            <UserXIcon />
            Block contact
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
