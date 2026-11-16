"use client"

import * as React from "react"
import {
  Star as StarIcon,
} from "@designali/icons"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"

const labels = ["Terrible", "Poor", "Okay", "Good", "Excellent"]

export default function StarRatingTooltips() {
  const [rating, setRating] = React.useState(4)

  return (
    <TooltipProvider>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm font-medium">
          Rate your Designali experience
        </span>
        <div className="flex">
          {labels.map((label, i) => (
            <Tooltip key={label}>
              <TooltipTrigger
                closeOnClick={false}
                onClick={() => setRating(i + 1)}
                render={
                  <button type="button" aria-label={label} className="p-0.5" />
                }
              >
                <StarIcon
                  className={cn(
                    "size-6",
                    i < rating
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  )}
                />
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
        <span className="text-xs text-muted-foreground">
          {labels[rating - 1]}
        </span>
      </div>
    </TooltipProvider>
  )
}
