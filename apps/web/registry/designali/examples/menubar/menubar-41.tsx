"use client"

import * as React from "react"
import {
  BadgeCheck as BadgeCheckIcon,
  Ban as BanIcon,
  Copy as CopyIcon,
  Download as DownloadIcon,
  RotateCcw as RotateCcwIcon,
  Send as SendIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"

export default function InvoiceActionsMenubar() {
  const [status, setStatus] = React.useState<
    "Draft" | "Sent" | "Paid" | "Void"
  >("Draft")

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b p-3">
        <div>
          <p className="text-sm font-medium">INV-2026-0187</p>
          <p className="text-xs text-muted-foreground">
            Designali client · $2,340.00
          </p>
        </div>
        <Badge
          variant={
            status === "Void"
              ? "destructive"
              : status === "Paid"
                ? "default"
                : "secondary"
          }
        >
          {status}
        </Badge>
      </div>
      <Menubar className="border-0">
        <MenubarMenu>
          <MenubarTrigger>Invoice</MenubarTrigger>
          <MenubarContent className="w-52">
            <MenubarGroup>
              <MenubarItem
                disabled={status !== "Draft"}
                onClick={() => setStatus("Sent")}
              >
                <SendIcon /> Send to customer
              </MenubarItem>
              <MenubarItem
                disabled={status !== "Sent"}
                onClick={() => setStatus("Paid")}
              >
                <BadgeCheckIcon /> Mark as paid
              </MenubarItem>
              <MenubarItem>
                <CopyIcon /> Duplicate
              </MenubarItem>
              <MenubarItem>
                <DownloadIcon /> Download PDF
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem
                variant="destructive"
                disabled={status === "Void" || status === "Paid"}
                onClick={() => setStatus("Void")}
              >
                <BanIcon /> Void invoice
              </MenubarItem>
              <MenubarItem
                disabled={status === "Draft"}
                onClick={() => setStatus("Draft")}
              >
                <RotateCcwIcon /> Reset demo
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Payments</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Record payment</MenubarItem>
              <MenubarItem>Set up reminders</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
