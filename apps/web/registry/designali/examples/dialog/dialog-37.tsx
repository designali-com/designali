"use client"

import * as React from "react"
import {
  Blocks as BlocksIcon,
  Calendar as CalendarIcon,
  GitBranch as GitBranchIcon,
  HardDrive as HardDriveIcon,
  MessagesSquare as MessagesSquareIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/item"

const apps = [
  {
    id: "calendar",
    name: "Figma",
    description: "Sync designs and components",
    icon: CalendarIcon,
  },
  {
    id: "storage",
    name: "Vercel",
    description: "Deploy previews for every block",
    icon: HardDriveIcon,
  },
  {
    id: "chat",
    name: "Studio Chat",
    description: "Post updates to channels",
    icon: MessagesSquareIcon,
  },
  {
    id: "git",
    name: "GitHub",
    description: "Link commits to tasks",
    icon: GitBranchIcon,
  },
]

export default function IntegrationsDirectoryDialog() {
  const [connected, setConnected] = React.useState<string[]>(["calendar"])

  function toggle(id: string) {
    setConnected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    )
  }

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <BlocksIcon data-icon="inline-start" />
        Integrations
        <Badge variant="secondary" className="ms-1">
          {connected.length}
        </Badge>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Integrations</DialogTitle>
          <DialogDescription>
            Connect the tools Designali builds with.
          </DialogDescription>
        </DialogHeader>
        <ItemGroup className="gap-2">
          {apps.map((app) => {
            const isOn = connected.includes(app.id)
            return (
              <Item key={app.id} variant="outline" size="sm">
                <ItemMedia variant="icon">
                  <app.icon />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{app.name}</ItemTitle>
                  <ItemDescription>{app.description}</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button
                    size="sm"
                    variant={isOn ? "outline" : "default"}
                    onClick={() => toggle(app.id)}
                  >
                    {isOn ? "Disconnect" : "Connect"}
                  </Button>
                </ItemActions>
              </Item>
            )
          })}
        </ItemGroup>
      </DialogContent>
    </Dialog>
  )
}
