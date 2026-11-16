"use client"

import {
  ArrowUp as ArrowUpIcon,
  Info as InfoIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Toast,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastViewport,
  createToastManager,
  useToastManager,
} from "@workspace/ui/components/toast"

const notify = createToastManager()

function TopToasts() {
  const { toasts } = useToastManager()
  return toasts.map((t) => (
    <Toast
      key={t.id}
      toast={t}
      className="top-0 bottom-auto origin-top data-starting-style:[transform:translateY(-150%)]"
    >
      <ToastContent>
        <InfoIcon className="size-4 shrink-0" />
        <ToastDescription className="flex-1 text-foreground" />
        <ToastClose />
      </ToastContent>
    </Toast>
  ))
}

export default function TopCenterToastViewport() {
  return (
    <ToastProvider toastManager={notify}>
      <Button
        variant="outline"
        onClick={() =>
          notify.add({ description: "A new version of Designali is available." })
        }
      >
        <ArrowUpIcon data-icon="inline-start" />
        Show at top
      </Button>
      <ToastPortal>
        <ToastViewport className="top-4 bottom-auto sm:start-1/2 sm:end-auto sm:-translate-x-1/2">
          <TopToasts />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}
