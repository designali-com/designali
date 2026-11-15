"use client"

import * as React from "react"
import { ShoppingCartIcon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"

export default function CartRemoveItem() {
  const [removed, setRemoved] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      {removed ? (
        <p className="py-4 text-center text-sm text-muted-foreground">
          Your cart is empty.
        </p>
      ) : (
        <div className="flex items-center gap-3">
          <div className="size-14 shrink-0 bg-linear-to-br from-orange-300 to-rose-400" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium">Ceramic pour-over set</p>
            <p className="text-xs text-muted-foreground">Sand - Qty 1</p>
            <p className="mt-1 text-sm font-semibold">$64.00</p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="ghost" size="sm" />}>
              Remove
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogMedia>
                  <ShoppingCartIcon />
                </AlertDialogMedia>
                <AlertDialogTitle>Remove from cart?</AlertDialogTitle>
                <AlertDialogDescription>
                  Only 3 left in stock.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep</AlertDialogCancel>
                <AlertDialogAction
                  variant="destructive"
                  onClick={() => setRemoved(true)}
                >
                  Remove
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
      <Button disabled={removed} className="w-full">
        Checkout
      </Button>
    </div>
  )
}
