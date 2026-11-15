"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@workspace/ui/components/drawer"

const panels = {
  shipping: {
    title: "Shipping policy",
    body: "Orders ship within 2 business days. Free standard shipping on orders over $75.",
  },
  returns: {
    title: "Returns",
    body: "Return unworn items within 30 days for a full refund. Return labels are free.",
  },
  sizing: {
    title: "Size guide",
    body: "Our knitwear runs true to size. If you're between sizes, size up for a relaxed fit.",
  },
}

type PanelKey = keyof typeof panels

export default function ControlledExternalDrawer() {
  const [panel, setPanel] = React.useState<PanelKey | null>(null)
  const content = panel ? panels[panel] : null

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {(Object.keys(panels) as PanelKey[]).map((key) => (
        <Button
          key={key}
          variant="outline"
          size="sm"
          onClick={() => setPanel(key)}
        >
          {panels[key].title}
        </Button>
      ))}
      <Drawer
        open={panel !== null}
        onOpenChange={(open) => !open && setPanel(null)}
        swipeDirection="right"
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{content?.title}</DrawerTitle>
            <DrawerDescription>Last updated Oct 2026</DrawerDescription>
          </DrawerHeader>
          <p className="flex-1 p-4 leading-relaxed">{content?.body}</p>
          <DrawerFooter>
            <DrawerClose render={<Button variant="outline" />}>
              Close
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
