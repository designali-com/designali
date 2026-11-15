import { CalendarSyncIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/item"
import { Spinner } from "@workspace/ui/components/spinner"

export default function CalendarSyncItem() {
  return (
    <Item variant="muted" className="w-full max-w-sm">
      <ItemMedia variant="icon">
        <CalendarSyncIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Work calendar</ItemTitle>
        <ItemDescription>Last synced 14 minutes ago</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm" disabled>
          <Spinner data-icon="inline-start" />
          Syncing
        </Button>
      </ItemActions>
    </Item>
  )
}
