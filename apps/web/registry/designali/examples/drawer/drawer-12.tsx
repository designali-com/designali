import {
  Megaphone as MegaphoneIcon,
  Wrench as WrenchIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"

export default function TopAnnouncementDrawer() {
  return (
    <Drawer swipeDirection="up" showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        <MegaphoneIcon data-icon="inline-start" />
        Show announcement
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-lg flex-col gap-3 p-4 sm:flex-row sm:items-center">
          <div className="flex size-10 shrink-0 items-center justify-center bg-primary/15 text-primary dark:text-primary">
            <WrenchIcon className="size-5" />
          </div>
          <div className="flex-1">
            <DrawerTitle>Scheduled maintenance on Sunday</DrawerTitle>
            <DrawerDescription>
              designali.com downloads will be paused from 02:00 to 03:30 UTC. Webhooks will
              be queued and delivered after.
            </DrawerDescription>
          </div>
          <DrawerClose render={<Button size="sm" />}>Got it</DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
