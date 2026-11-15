"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

export default function ReadMoreDescription() {
  const [open, setOpen] = React.useState(false)
  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="w-full max-w-sm space-y-2"
    >
      <h3 className="text-base font-semibold">Halden desk lamp</h3>
      <p className="text-sm text-muted-foreground">
        A warm, dimmable desk lamp machined from a single block of aluminium,
        with a weighted base that stays put.
      </p>
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            The head pivots 270 degrees and the arm locks at any angle. Three
            colour temperatures let you move from focused work to evening
            reading without swapping bulbs.
          </p>
          <p>Includes a braided USB-C cable and a two-year warranty.</p>
        </div>
      </CollapsibleContent>
      <CollapsibleTrigger
        render={<Button variant="link" className="h-auto px-0" />}
      >
        {open ? "Show less" : "Show more"}
      </CollapsibleTrigger>
    </Collapsible>
  )
}
