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
    name: "Calendly Lite",
    category: "Scheduling",
    initials: "CL",
    on: true,
  },
  {
    id: "chat",
    name: "Chatterbox",
    category: "Messaging",
    initials: "CB",
    on: true,
  },
  {
    id: "crm",
    name: "Pipewise CRM",
    category: "Sales",
    initials: "PW",
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
