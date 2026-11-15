import { BellIcon, InboxIcon, SettingsIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

export default function EmptyInboxDialog() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline" size="icon" aria-label="Notifications" />
        }
      >
        <BellIcon />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Notifications</DialogTitle>
        </DialogHeader>
        <Empty className="border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <InboxIcon />
            </EmptyMedia>
            <EmptyTitle>You&apos;re all caught up</EmptyTitle>
            <EmptyDescription>
              New mentions, assignments and replies will show up here.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline" size="sm">
              <SettingsIcon data-icon="inline-start" />
              Notification settings
            </Button>
          </EmptyContent>
        </Empty>
      </DialogContent>
    </Dialog>
  )
}
