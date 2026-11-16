"use client"

import * as React from "react"
import {
  ChevronsUpDown,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-[350px] flex-col gap-2"
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">Order #DA-4189</h4>
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="icon" className="size-8">
              <ChevronsUpDown />
              <span className="sr-only">Toggle details</span>
            </Button>
          }
        />
      </div>
      <div className="flex items-center justify-between border px-4 py-2 text-sm">
        <span className="text-muted-foreground">Status</span>
        <span className="font-medium">Delivered</span>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="border px-4 py-2 text-sm">
          <p className="font-medium">Delivered to</p>
          <p className="text-muted-foreground">client@example.com</p>
        </div>
        <div className="border px-4 py-2 text-sm">
          <p className="font-medium">Items</p>
          <p className="text-muted-foreground">1x Designali Pro Template License</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}