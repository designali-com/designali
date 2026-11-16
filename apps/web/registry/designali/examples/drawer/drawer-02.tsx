"use client"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"

export function DrawerSwipeHandle() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="secondary">Designali Blocks</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Designali Blocks</DrawerTitle>
          <DrawerDescription>460+ blocks by Ali Imam. Swipe the handle to close.</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <img src="/images/templates/design-agency.jpg" alt="Designali Design Agency template" className="rounded-2xl bg-muted object-cover group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:h-80 group-data-[swipe-axis=y]/drawer-popup:w-full" />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}