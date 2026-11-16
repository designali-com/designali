"use client"

import {
  Code as CodeIcon,
  Link as LinkIcon,
  Mail as MailIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

const channels = [
  { label: "Copy link", icon: LinkIcon, message: "Link copied to clipboard" },
  { label: "Email", icon: MailIcon, message: "Email draft opened" },
  { label: "Embed", icon: CodeIcon, message: "Embed code copied" },
]

export default function ShareLinkToast() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <p className="text-sm font-medium">Share &quot;Spring lookbook&quot;</p>
        <div className="grid grid-cols-3 gap-2">
          {channels.map((c) => (
            <Button
              key={c.label}
              variant="outline"
              className="h-auto flex-col gap-1.5 py-3 text-xs"
              onClick={() =>
                notify.add({
                  type: "success",
                  description: c.message,
                  timeout: 2500,
                })
              }
            >
              <c.icon />
              {c.label}
            </Button>
          ))}
        </div>
      </div>
    </Toaster>
  )
}
