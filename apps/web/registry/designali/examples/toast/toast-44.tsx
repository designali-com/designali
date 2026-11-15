"use client"

import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

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
                ? "bg-emerald-500/15 text-emerald-600"
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
            notify.add({ data: { symbol: "NOVA", price: 184.2, change: 4.3 } })
          }
        >
          Rise alert
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            notify.add({ data: { symbol: "KITE", price: 22.75, change: -6.1 } })
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
