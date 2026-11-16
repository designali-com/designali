"use client"

import * as React from "react"
import {
  MessageCircle as MessageCircleIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
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

const notify = createToastManager()

const messages = [
  {
    from: "Ali Imam",
    text: "Can you review the new Designali landing page before 3pm?",
  },
  { from: "Studio Developer", text: "Pushed the fix for the blocks preview bug." },
  { from: "Studio Designer", text: "New icon set is ready for review." },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
}

function MessageToasts() {
  const { toasts } = useToastManager()
  return toasts.map((t) => (
    <Toast key={t.id} toast={t}>
      <ToastContent className="items-start">
        <Avatar size="sm">
          <AvatarFallback>{initials(String(t.title ?? ""))}</AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <ToastTitle />
          <ToastDescription className="line-clamp-2" />
        </div>
        <ToastClose />
      </ToastContent>
    </Toast>
  ))
}

export default function ChatMessageToast() {
  const index = React.useRef(0)

  return (
    <ToastProvider toastManager={notify}>
      <Button
        variant="outline"
        onClick={() => {
          const m = messages[index.current % messages.length]!
          index.current += 1
          notify.add({ title: m.from, description: m.text })
        }}
      >
        <MessageCircleIcon data-icon="inline-start" />
        Receive message
      </Button>
      <ToastPortal>
        <ToastViewport>
          <MessageToasts />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}
