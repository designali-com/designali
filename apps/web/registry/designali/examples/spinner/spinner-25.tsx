import {
  Calendar as CalendarIcon,
  Folder as FolderIcon,
  Mail as MailIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/item"
import { Spinner } from "@workspace/ui/components/spinner"

const apps = [
  {
    name: "Calendar",
    description: "Sync events and availability",
    icon: CalendarIcon,
    state: "connected",
  },
  {
    name: "Mailbox",
    description: "Log client emails to hello@designali.com",
    icon: MailIcon,
    state: "connecting",
  },
  {
    name: "Storage",
    description: "Attach Figma and brand files",
    icon: FolderIcon,
    state: "idle",
  },
]

export default function IntegrationConnectingItems() {
  return (
    <ItemGroup className="w-full max-w-sm gap-2">
      {apps.map((app) => (
        <Item key={app.name} variant="outline">
          <ItemMedia variant="icon">
            <app.icon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{app.name}</ItemTitle>
            <ItemDescription>{app.description}</ItemDescription>
          </ItemContent>
          <ItemActions>
            {app.state === "connecting" ? (
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Spinner className="size-3.5" />
                Connecting
              </span>
            ) : app.state === "connected" ? (
              <Badge variant="secondary">Connected</Badge>
            ) : (
              <Button size="sm" variant="outline">
                Connect
              </Button>
            )}
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}
