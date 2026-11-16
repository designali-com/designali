"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/item"
import { Switch } from "@workspace/ui/components/switch"

const apps = [
  {
    id: "calendar",
    name: "Designali Calendar",
    category: "Scheduling",
    initials: "DC",
    on: true,
  },
  {
    id: "chat",
    name: "Designali Chat",
    category: "Messaging",
    initials: "DH",
    on: true,
  },
  {
    id: "crm",
    name: "Designali Clients",
    category: "Sales",
    initials: "DL",
    on: false,
  },
]

export default function ConnectedIntegrations() {
  const [connected, setConnected] = React.useState(() =>
    Object.fromEntries(apps.map((a) => [a.id, a.on]))
  )

  return (
    <ItemGroup className="w-full max-w-sm gap-2">
      {apps.map((app) => (
        <Item key={app.id} variant="outline">
          <ItemMedia>
            <Avatar>
              <AvatarFallback>{app.initials}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{app.name}</ItemTitle>
            <ItemDescription>
              {connected[app.id] ? "Connected" : app.category}
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Switch
              checked={connected[app.id]}
              onCheckedChange={(checked) =>
                setConnected((c) => ({ ...c, [app.id]: checked }))
              }
              aria-label={"Connect " + app.name}
            />
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}
