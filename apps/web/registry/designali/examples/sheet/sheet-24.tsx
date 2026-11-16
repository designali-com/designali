import {
  Bookmark as BookmarkIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

export default function SavedItemsEmptySheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <BookmarkIcon data-icon="inline-start" />
        Saved
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Saved items</SheetTitle>
          <SheetDescription>
            Bookmarks sync across your devices.
          </SheetDescription>
        </SheetHeader>
        <Empty className="flex-1">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <BookmarkIcon />
            </EmptyMedia>
            <EmptyTitle>Nothing saved yet</EmptyTitle>
            <EmptyDescription>
              Tap the bookmark on any article to read it later.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <SheetClose render={<Button size="sm" />}>
              Browse articles
            </SheetClose>
          </EmptyContent>
        </Empty>
      </SheetContent>
    </Sheet>
  )
}
