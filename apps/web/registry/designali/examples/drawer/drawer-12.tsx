import { MegaphoneIcon, WrenchIcon } from "lucide-react"

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
          <div className="flex size-10 shrink-0 items-center justify-center bg-amber-500/15 text-amber-600 dark:text-amber-400">
            <WrenchIcon className="size-5" />
          </div>
          <div className="flex-1">
            <DrawerTitle>Scheduled maintenance on Sunday</DrawerTitle>
            <DrawerDescription>
              The API will be read-only from 02:00 to 03:30 UTC. Webhooks will
              be queued and delivered after.
            </DrawerDescription>
          </div>
          <DrawerClose render={<Button size="sm" />}>Got it</DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
