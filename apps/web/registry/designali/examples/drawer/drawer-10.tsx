import {
  Copy as CopyIcon,
  EllipsisVertical as EllipsisVerticalIcon,
  EyeOff as EyeOffIcon,
  FolderPlus as FolderPlusIcon,
  Pencil as PencilIcon,
  Trash2 as Trash2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"

const actions = [
  { label: "Edit photo details", icon: PencilIcon },
  { label: "Add to album", icon: FolderPlusIcon },
  { label: "Duplicate", icon: CopyIcon },
  { label: "Hide from library", icon: EyeOffIcon },
]

export default function ActionSheetDrawer() {
  return (
    <Drawer>
      <DrawerTrigger
        render={
          <Button variant="outline" size="icon" aria-label="More actions" />
        }
      >
        <EllipsisVerticalIcon />
      </DrawerTrigger>
      <DrawerContent className="bg-transparent [--drawer-bleed-background:transparent] data-[swipe-direction=down]:border-t-0">
        <div className="mx-auto flex w-full max-w-sm flex-col gap-2 p-3">
          <div className="flex flex-col overflow-hidden border bg-popover">
            <DrawerHeader className="border-b pb-3">
              <DrawerTitle>designali-hero.jpg</DrawerTitle>
              <DrawerDescription>Taken Oct 3 · 4.1 MB</DrawerDescription>
            </DrawerHeader>
            {actions.map((action) => (
              <DrawerClose
                key={action.label}
                render={<button type="button" />}
                className="flex items-center gap-3 border-b px-4 py-3 text-start last:border-b-0 hover:bg-muted"
              >
                <action.icon className="size-4 text-muted-foreground" />
                {action.label}
              </DrawerClose>
            ))}
            <DrawerClose
              render={<button type="button" />}
              className="flex items-center gap-3 border-t px-4 py-3 text-start text-destructive hover:bg-destructive/10"
            >
              <Trash2Icon className="size-4" />
              Delete photo
            </DrawerClose>
          </div>
          <DrawerClose
            render={<Button variant="outline" className="h-11 bg-popover" />}
          >
            Cancel
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
