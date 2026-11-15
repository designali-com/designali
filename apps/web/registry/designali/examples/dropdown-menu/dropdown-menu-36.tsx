"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  PackageCheckIcon,
  PrinterIcon,
  RotateCcwIcon,
  TruckIcon,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const statusVariant: Record<
  string,
  "secondary" | "default" | "destructive" | "outline"
> = {
  Pending: "outline",
  Shipped: "secondary",
  Delivered: "default",
  Refunded: "destructive",
}

export default function OrderStatusActions() {
  const [status, setStatus] = React.useState("Pending")

  return (
    <div className="flex w-full max-w-md items-center gap-3 border p-3 text-xs">
      <div className="flex-1">
        <p className="font-medium">#10482 · Elena Vasquez</p>
        <p className="text-muted-foreground">3 items · $214.30</p>
      </div>
      <Badge variant={statusVariant[status]}>{status}</Badge>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
          Actions
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Fulfillment</DropdownMenuLabel>
            <DropdownMenuItem
              disabled={status !== "Pending"}
              onClick={() => setStatus("Shipped")}
            >
              <TruckIcon />
              Mark as shipped
            </DropdownMenuItem>
            <DropdownMenuItem
              disabled={status !== "Shipped"}
              onClick={() => setStatus("Delivered")}
            >
              <PackageCheckIcon />
              Mark as delivered
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PrinterIcon />
              Print packing slip
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            variant="destructive"
            disabled={status === "Refunded"}
            onClick={() => setStatus("Refunded")}
          >
            <RotateCcwIcon />
            Refund order
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
