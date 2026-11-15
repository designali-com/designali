"use client"

import * as React from "react"
import { ListIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { cn } from "@workspace/ui/lib/utils"

const outline = [
  {
    title: "Getting started",
    pages: ["Introduction", "Installation", "Quickstart"],
  },
  { title: "Guides", pages: ["Authentication", "Webhooks", "Pagination"] },
  { title: "Reference", pages: ["REST API", "SDKs", "Errors"] },
]

export default function DocsOutlineSheet() {
  const [active, setActive] = React.useState("Webhooks")
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ListIcon data-icon="inline-start" />
        On this site
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>Documentation</SheetTitle>
          <SheetDescription>v4.2</SheetDescription>
        </SheetHeader>
        <ScrollArea className="min-h-0 flex-1">
          <nav className="flex flex-col gap-4 px-4 pb-4">
            {outline.map((section) => (
              <div key={section.title} className="flex flex-col gap-1">
                <span className="font-medium">{section.title}</span>
                {section.pages.map((page) => (
                  <SheetClose
                    key={page}
                    nativeButton={false}
                    render={<a href="#" />}
                    onClick={() => setActive(page)}
                    className={cn(
                      "border-s py-1 ps-3 text-muted-foreground hover:text-foreground",
                      page === active &&
                        "border-primary font-medium text-foreground"
                    )}
                  >
                    {page}
                  </SheetClose>
                ))}
              </div>
            ))}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
