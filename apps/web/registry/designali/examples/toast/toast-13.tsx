"use client"

import * as React from "react"
import {
  ShoppingCart as ShoppingCartIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function AddToCartToast() {
  const [cart, setCart] = React.useState(0)

  return (
    <Toaster toastManager={notify}>
      <div className="w-full max-w-xs border">
        <div className="aspect-[4/3] bg-gradient-to-br from-amber-200 via-orange-300 to-rose-400 dark:from-amber-700 dark:via-orange-800 dark:to-rose-900" />
        <div className="flex flex-col gap-3 p-4">
          <div>
            <p className="text-sm font-medium">Ceramic pour-over set</p>
            <p className="text-sm text-muted-foreground">$64.00</p>
          </div>
          <Button
            onClick={() => {
              setCart((c) => c + 1)
              notify.add({
                type: "success",
                title: "Added to cart",
                description: "Portfolio Simple template x1",
                actionProps: { children: "View cart (" + (cart + 1) + ")" },
              })
            }}
          >
            <ShoppingCartIcon data-icon="inline-start" />
            Add to cart
          </Button>
        </div>
      </div>
    </Toaster>
  )
}
