"use client"

import * as React from "react"
import {
  ChevronRight as ChevronRightIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@workspace/ui/components/sheet"

const customers = [
  {
    id: "C-301",
    name: "Rosa",
    email: "rosa@example.com",
    spend: "$2,410",
    orders: 18,
    since: "2023",
  },
  {
    id: "C-302",
    name: "Dev",
    email: "dev@example.com",
    spend: "$860",
    orders: 6,
    since: "2024",
  },
  {
    id: "C-303",
    name: "Chiara",
    email: "chiara@example.com",
    spend: "$5,120",
    orders: 41,
    since: "2021",
  },
]

export default function TableRowDetailSheet() {
  const [selected, setSelected] = React.useState<
    (typeof customers)[number] | null
  >(null)
  return (
    <div className="w-full max-w-md border">
      {customers.map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => setSelected(c)}
          className="flex w-full items-center gap-3 border-b px-3 py-2.5 text-start text-xs last:border-b-0 hover:bg-muted"
        >
          <Avatar size="sm">
            <AvatarFallback>
              {c.name
                .split(" ")
                .map((p) => p[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span className="flex-1 font-medium">{c.name}</span>
          <span className="text-muted-foreground tabular-nums">{c.spend}</span>
          <ChevronRightIcon className="size-3.5 text-muted-foreground" />
        </button>
      ))}
      <Sheet
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <SheetContent>
          {selected && (
            <>
              <SheetHeader>
                <SheetTitle>{selected.name}</SheetTitle>
                <SheetDescription>{selected.email}</SheetDescription>
              </SheetHeader>
              <dl className="grid grid-cols-2 gap-y-2 px-4">
                <dt className="text-muted-foreground">Customer ID</dt>
                <dd>{selected.id}</dd>
                <dt className="text-muted-foreground">Lifetime spend</dt>
                <dd>{selected.spend}</dd>
                <dt className="text-muted-foreground">Orders</dt>
                <dd>{selected.orders}</dd>
                <dt className="text-muted-foreground">Customer since</dt>
                <dd>{selected.since}</dd>
              </dl>
              <SheetFooter>
                <Button variant="outline">View all orders</Button>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}
