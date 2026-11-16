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
    title: "Delivery",
    body: "Designali templates and blocks are delivered as instant downloads from your designali.com account.",
  },
  returns: {
    title: "Support",
    body: "Questions about a purchase? Email support@designali.com and Ali's studio will help.",
  },
  sizing: {
    title: "License",
    body: "See designali.com/docs/legal/terms for the full license details.",
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
