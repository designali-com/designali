"use client"

import * as React from "react"
import { HeartIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"
import { cn } from "@workspace/ui/lib/utils"

const notify = createToastManager()

export default function DeduplicatedToast() {
  const [likes, setLikes] = React.useState(0)

  function like() {
    const next = likes + 1
    setLikes(next)
    notify.add({
      id: "likes",
      title: "Liked",
      description:
        "You liked this post " + next + (next === 1 ? " time" : " times") + ".",
      timeout: 2000,
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <p className="text-sm">
          &quot;Shipping the new editor today. Thanks to everyone who tested
          it!&quot;
        </p>
        <Button
          variant="outline"
          size="sm"
          className="self-start"
          onClick={like}
        >
          <HeartIcon
            data-icon="inline-start"
            className={cn(likes > 0 && "fill-current text-rose-500")}
          />
          {likes}
        </Button>
      </div>
    </Toaster>
  )
}
