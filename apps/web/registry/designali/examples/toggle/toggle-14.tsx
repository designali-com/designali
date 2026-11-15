"use client"

import * as React from "react"
import { BellOffIcon, BellRingIcon } from "lucide-react"

import { Toggle } from "@workspace/ui/components/toggle"

export default function ThreadSubscribeToggle() {
  const [subscribed, setSubscribed] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium">
            Migrate billing to usage-based pricing
          </p>
          <p className="text-xs text-muted-foreground">
            RFC-0142 - 23 comments
          </p>
        </div>
        <Toggle
          variant="outline"
          size="sm"
          pressed={subscribed}
          onPressedChange={setSubscribed}
          aria-label="Subscribe to thread"
        >
          {subscribed ? <BellRingIcon /> : <BellOffIcon />}
          {subscribed ? "Subscribed" : "Subscribe"}
        </Toggle>
      </div>
      <p className="text-xs text-muted-foreground">
        {subscribed
          ? "You will be notified about new replies."
          : "You will only be notified when mentioned."}
      </p>
    </div>
  )
}
