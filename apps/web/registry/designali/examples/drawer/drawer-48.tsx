"use client"

import * as React from "react"
import {
  Ticket as TicketIcon,
  TicketPercent as TicketPercentIcon,
} from "@designali/icons"

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

const coupons = [
  {
    code: "DESIGNALI20",
    title: "20% off Templates Pro",
    expires: "Ends Nov 30",
    expired: false,
  },
  {
    code: "ICONSFREE",
    title: "Free Icons Pro upgrade",
    expires: "Ends Dec 15",
    expired: false,
  },
  {
    code: "LOYAL15",
    title: "$15 off orders over $100",
    expires: "Expired Nov 1",
    expired: true,
  },
]

export default function CouponWalletDrawer() {
  const [applied, setApplied] = React.useState<string | null>(null)

  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>
        <TicketIcon data-icon="inline-start" />
        {applied ? applied + " applied" : "Apply a coupon"}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Your coupons</DrawerTitle>
            <DrawerDescription>One coupon per order.</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-2 p-4">
            {coupons.map((coupon) => (
              <div
                key={coupon.code}
                className={cn(
                  "flex items-center gap-3 border border-dashed p-3",
                  coupon.expired && "opacity-50"
                )}
              >
                <div className="flex size-10 shrink-0 items-center justify-center bg-muted">
                  <TicketPercentIcon className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{coupon.title}</p>
                  <p className="text-muted-foreground">
                    <span className="font-mono">{coupon.code}</span> ·{" "}
                    {coupon.expires}
                  </p>
                </div>
                <DrawerClose
                  render={
                    <Button
                      size="sm"
                      variant={
                        applied === coupon.code ? "secondary" : "outline"
                      }
                      disabled={coupon.expired}
                    />
                  }
                  onClick={() => setApplied(coupon.code)}
                >
                  {applied === coupon.code ? "Applied" : "Apply"}
                </DrawerClose>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
