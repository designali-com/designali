"use client"

import {
  TrendingDown as TrendingDownIcon,
  TrendingUp as TrendingUpIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Toast,
  ToastClose,
  ToastContent,
  ToastPortal,
  ToastProvider,
  ToastViewport,
  createToastManager,
  useToastManager,
} from "@workspace/ui/components/toast"
import { cn } from "@workspace/ui/lib/utils"

const notify = createToastManager<{
  symbol: string
  price: number
  change: number
}>()

function PriceToasts() {
  const { toasts } = useToastManager<{
    symbol: string
    price: number
    change: number
  }>()
  return toasts.map((t) => {
    const d = t.data
    const up = (d?.change ?? 0) >= 0
    return (
      <Toast key={t.id} toast={t}>
        <ToastContent>
          <div
            className={cn(
              "flex size-9 shrink-0 items-center justify-center",
              up
                ? "bg-primary/15 text-primary"
                : "bg-destructive/15 text-destructive"
            )}
          >
            {up ? (
              <TrendingUpIcon className="size-4" />
            ) : (
              <TrendingDownIcon className="size-4" />
            )}
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="text-sm font-medium">
              {d?.symbol} hit your alert
            </span>
            <span className="text-xs text-muted-foreground tabular-nums">
              {"$" + d?.price.toFixed(2)} ({up ? "+" : ""}
              {d?.change.toFixed(1)}%)
            </span>
          </div>
          <ToastClose />
        </ToastContent>
      </Toast>
    )
  })
}

export default function PriceAlertDataToast() {
  return (
    <ToastProvider toastManager={notify}>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            notify.add({ data: { symbol: "Designali Pro", price: 49, change: 12 } })
          }
        >
          Rise alert
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            notify.add({ data: { symbol: "Icons Bundle", price: 19, change: -30 } })
          }
        >
          Drop alert
        </Button>
      </div>
      <ToastPortal>
        <ToastViewport>
          <PriceToasts />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}
