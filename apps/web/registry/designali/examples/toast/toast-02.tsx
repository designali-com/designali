"use client"

import { Button } from "@workspace/ui/components/button"
import { toast } from "@workspace/ui/components/toast"

export function ToastTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => toast.add({ description: "Designali design review has been scheduled." })}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "success",
            description: "Designali design review has been scheduled.",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "info",
            description: "Bring the latest Figma file to the review.",
          })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "warning",
            description: "The review cannot start before studio hours (8:00 AM).",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: "error",
            description: "The design review could not be scheduled.",
            priority: "high",
          })
        }
      >
        Error
      </Button>
    </div>
  )
}