"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

import { BlogTableOfContents } from "./table-of-contents"

export function MobileTOC() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed right-8 bottom-8 z-50 lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              size="icon"
              className="size-12 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              aria-label="Table of contents"
            >
              <Menu className="size-5" />
              <span className="sr-only">Table of contents</span>
            </Button>
          }
        />

        <SheetContent
          side="bottom"
          className="right-4! bottom-4! left-4! h-fit max-h-[60vh] overflow-hidden rounded-2xl border border-border bg-background/60 p-0 shadow-2xl backdrop-blur-xl"
        >
          <SheetHeader className="border-b border-border bg-muted px-6 py-3">
            <SheetTitle className="item-start flex text-left font-semibold">
              On this page
            </SheetTitle>
          </SheetHeader>
          <div className="max-h-[calc(60vh-8rem)] overflow-y-auto bg-card p-6 pt-4">
            <BlogTableOfContents
              className="p-0 [&_a]:transition-colors [&_a:hover]:bg-muted/50 [&_nav]:space-y-2 [&>p]:hidden"
              onLinkClick={() => setOpen(false)}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
