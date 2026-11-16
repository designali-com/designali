"use client"

import * as React from "react"
import {
  Printer as PrinterIcon,
  Truck as TruckIcon,
  Undo as UndoIcon,
  User as UserIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

const initialOrders = [
  {
    id: "#48211",
    customer: "Designali Templates",
    total: "$84.00",
    status: "Unfulfilled",
  },
  { id: "#48212", customer: "Designali Blocks", total: "$129.50", status: "Shipped" },
  {
    id: "#48213",
    customer: "Icons Pro",
    total: "$42.25",
    status: "Unfulfilled",
  },
]

export default function OrderFulfillmentMenu() {
  const [orders, setOrders] = React.useState(initialOrders)
  const setStatus = (id: string, status: string) =>
    setOrders((list) => list.map((o) => (o.id === id ? { ...o, status } : o)))

  return (
    <div className="flex w-full max-w-md flex-col divide-y border text-xs">
      {orders.map((order) => (
        <ContextMenu key={order.id}>
          <ContextMenuTrigger className="grid grid-cols-[4rem_1fr_auto_auto] items-center gap-3 px-3 py-2 data-popup-open:bg-muted">
            <span className="font-mono">{order.id}</span>
            <span className="truncate">{order.customer}</span>
            <span className="tabular-nums">{order.total}</span>
            <Badge
              variant={
                order.status === "Refunded"
                  ? "destructive"
                  : order.status === "Shipped"
                    ? "secondary"
                    : "outline"
              }
            >
              {order.status}
            </Badge>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuLabel>Order {order.id}</ContextMenuLabel>
              <ContextMenuItem
                disabled={order.status !== "Unfulfilled"}
                onClick={() => setStatus(order.id, "Shipped")}
              >
                <TruckIcon />
                Mark as shipped
              </ContextMenuItem>
              <ContextMenuItem>
                <PrinterIcon />
                Print shipping label
              </ContextMenuItem>
              <ContextMenuItem>
                <UserIcon />
                View customer
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                variant="destructive"
                disabled={order.status === "Refunded"}
                onClick={() => setStatus(order.id, "Refunded")}
              >
                <UndoIcon />
                Refund order
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}
