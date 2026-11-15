import { Trash2Icon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"

export default function ConfirmDeleteBottomDrawer() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="destructive" />}>
        <Trash2Icon data-icon="inline-start" />
        Delete playlist
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-2 p-4 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <Trash2Icon className="size-5" />
          </div>
          <DrawerTitle className="text-base">
            Delete &quot;Late Night Drives&quot;?
          </DrawerTitle>
          <DrawerDescription>
            42 songs will be removed from your library. Followers will lose
            access.
          </DrawerDescription>
          <div className="mt-3 flex w-full flex-col gap-2">
            <DrawerClose render={<Button variant="destructive" />}>
              Delete playlist
            </DrawerClose>
            <DrawerClose render={<Button variant="outline" />}>
              Cancel
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
