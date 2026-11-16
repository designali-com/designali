"use client"

import * as React from "react"
import {
  ShoppingBag as ShoppingBagIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function ToastStackLimit() {
  const count = React.useRef(0)

  return (
    <Toaster toastManager={notify} limit={3}>
      <div className="flex w-full max-w-xs flex-col items-center gap-2 border p-4 text-center">
        <p className="text-sm text-muted-foreground">
          Click a few times. Older toasts are hidden once more than three are
          open.
        </p>
        <Button
          onClick={() => {
            count.current += 1
            notify.add({
              title: "New template order #" + (1040 + count.current),
              description: "Paid via Apple Pay",
            })
          }}
        >
          <ShoppingBagIcon data-icon="inline-start" />
          Simulate order
        </Button>
      </div>
    </Toaster>
  )
}
