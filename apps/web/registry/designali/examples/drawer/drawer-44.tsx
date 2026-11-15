"use client"

import * as React from "react"
import { ListTreeIcon } from "lucide-react"

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
import { cn } from "@workspace/ui/lib/utils"

const outline = [
  { id: "intro", title: "Introduction", level: 1 },
  { id: "goals", title: "Goals and non-goals", level: 2 },
  { id: "design", title: "Proposed design", level: 1 },
  { id: "api", title: "API surface", level: 2 },
  { id: "storage", title: "Storage model", level: 2 },
  { id: "migration", title: "Migration plan", level: 1 },
  { id: "risks", title: "Risks", level: 2 },
  { id: "open", title: "Open questions", level: 1 },
]

export default function DocumentOutlineDrawer() {
  const [active, setActive] = React.useState("api")

  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button variant="outline" />}>
        <ListTreeIcon data-icon="inline-start" />
        Outline
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>RFC-031: Event sourcing</DrawerTitle>
          <DrawerDescription>8 sections · 14 min read</DrawerDescription>
        </DrawerHeader>
        <nav
          className="flex flex-1 flex-col overflow-y-auto p-2 pt-4"
          aria-label="Document outline"
        >
          {outline.map((item) => (
            <DrawerClose
              key={item.id}
              render={<a href={"#" + item.id} />}
              nativeButton={false}
              onClick={() => setActive(item.id)}
              className={cn(
                "border-s-2 py-1.5 pe-2 hover:bg-muted",
                item.level === 2
                  ? "ps-6 text-muted-foreground"
                  : "ps-3 font-medium",
                item.id === active
                  ? "border-primary bg-muted text-foreground"
                  : "border-transparent"
              )}
            >
              {item.title}
            </DrawerClose>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  )
}
