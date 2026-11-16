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
      <h3 className="text-base font-semibold">Designali Portfolio template</h3>
      <p className="text-sm text-muted-foreground">
        A clean, production-ready portfolio template built with Next.js,
        React, TypeScript and Tailwind CSS.
      </p>
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            Every section is composed from Designali blocks, so you can swap
            the hero, work grid and contact page without touching the layout.
            Icons come from @designali/icons and deploy to Vercel in one click.
          </p>
          <p>Includes the Figma source file and free lifetime updates.</p>
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
