"use client"

import * as React from "react"
import {
  Package as PackageIcon,
  RotateCcw as RotateCcwIcon,
  Search as SearchIcon,
  TrendingUp as TrendingUpIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

export default function MobileSearchSheet() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            className="w-full max-w-xs justify-start text-muted-foreground"
          />
        }
      >
        <SearchIcon data-icon="inline-start" />
        Search designali.com...
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[70vh] gap-0 p-0">
        <SheetHeader className="border-b">
          <SheetTitle>Search</SheetTitle>
          <SheetDescription>
            Find templates, blocks, orders, and help articles.
          </SheetDescription>
        </SheetHeader>
        <Command className="flex-1">
          <CommandInput placeholder="Templates, icons, order #..." />
          <CommandList className="max-h-none flex-1">
            <CommandEmpty>No results.</CommandEmpty>
            <CommandGroup heading="Trending">
              <CommandItem onSelect={() => setOpen(false)}>
                <TrendingUpIcon />
                <span>Portfolio templates</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <TrendingUpIcon />
                <span>Designali icon pack</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Your orders">
              <CommandItem onSelect={() => setOpen(false)}>
                <PackageIcon />
                <span>Order #48213</span>
                <span className="ms-auto text-[11px] text-muted-foreground">
                  Ready to download
                </span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Help">
              <CommandItem onSelect={() => setOpen(false)}>
                <RotateCcwIcon />
                <span>Request a refund</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </SheetContent>
    </Sheet>
  )
}
