"use client"

import { Button } from "@workspace/ui/components/button"
import {
  Toast,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  createToastManager,
  useToastManager,
} from "@workspace/ui/components/toast"
import { cn } from "@workspace/ui/lib/utils"

const notify = createToastManager()

const accents: Record<string, string> = {
  success: "border-s-emerald-500",
  warning: "border-s-amber-500",
  error: "border-s-destructive",
}

function AccentToasts() {
  const { toasts } = useToastManager()
  return toasts.map((t) => (
    <Toast
      key={t.id}
      toast={t}
      className={cn("border-s-4", accents[t.type ?? ""] ?? "border-s-primary")}
    >
      <ToastContent>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <ToastTitle />
          <ToastDescription />
        </div>
        <ToastClose />
      </ToastContent>
    </Toast>
  ))
}

export default function AccentBorderToasts() {
  return (
    <ToastProvider toastManager={notify}>
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            notify.add({
              type: "success",
              title: "Backup complete",
              description: "Snapshot 2025-10-21 stored.",
            })
          }
        >
          Success
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            notify.add({
              type: "warning",
              title: "Quota at 90%",
              description: "Consider upgrading storage.",
            })
          }
        >
          Warning
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            notify.add({
              type: "error",
              title: "Webhook failed",
              description: "Endpoint returned 502.",
            })
          }
        >
          Error
        </Button>
      </div>
      <ToastPortal>
        <ToastViewport>
          <AccentToasts />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}
